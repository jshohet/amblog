import {
  DeleteObjectsCommand,
  ListObjectsV2Command,
  S3Client,
} from "@aws-sdk/client-s3";
import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/prisma";

export const runtime = "nodejs";

const getEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
};

const createR2Client = () => {
  const rawAccountId = getEnv("R2_ACCOUNT_ID");
  const accountId = rawAccountId.includes("=")
    ? rawAccountId.split("=").pop() ?? rawAccountId
    : rawAccountId;
  const accessKeyId = getEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = getEnv("R2_SECRET_ACCESS_KEY");

  return new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });
};

const getKeepKeys = async () => {
  const prisma = getPrisma();
  const publicUrl = getEnv("R2_PUBLIC_URL").replace(/\/$/, "");
  const posts = await prisma.post.findMany({
    select: {
      images: true,
    },
  });

  const keys = new Set<string>();
  posts.forEach((post) => {
    post.images?.forEach((imageUrl) => {
      if (!imageUrl.startsWith(publicUrl)) {
        return;
      }
      const key = imageUrl.slice(publicUrl.length + 1);
      if (key) {
        keys.add(key);
      }
    });
  });

  return { keys, publicUrl };
};

export async function GET(_req: NextRequest) {
  const bucket = getEnv("R2_BUCKET");
  const client = createR2Client();
  const { keys: keepKeys } = await getKeepKeys();

  const keysToDelete: string[] = [];
  let continuationToken: string | undefined;

  do {
    const response = await client.send(
      new ListObjectsV2Command({
        Bucket: bucket,
        Prefix: "uploads/",
        ContinuationToken: continuationToken,
      })
    );

    response.Contents?.forEach((object) => {
      const key = object.Key;
      if (!key) {
        return;
      }
      if (!keepKeys.has(key)) {
        keysToDelete.push(key);
      }
    });

    continuationToken = response.IsTruncated
      ? response.NextContinuationToken
      : undefined;
  } while (continuationToken);

  for (let i = 0; i < keysToDelete.length; i += 1000) {
    const chunk = keysToDelete.slice(i, i + 1000);
    await client.send(
      new DeleteObjectsCommand({
        Bucket: bucket,
        Delete: {
          Objects: chunk.map((key) => ({ Key: key })),
        },
      })
    );
  }

  return NextResponse.json({ deleted: keysToDelete.length });
}
