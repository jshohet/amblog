import { DeleteObjectCommand, S3Client } from "@aws-sdk/client-s3";
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

//delete post by ID
export async function DELETE(req: NextRequest) {
  const url = Number(new URL(req.url).pathname.split("/").pop());
  const prisma = getPrisma();
  const post = await prisma.post.findUnique({
    where: {
      id: url,
    },
    select: {
      images: true,
    },
  });

  if (!post) {
    return NextResponse.json({ error: "Post not found" }, { status: 404 });
  }

  const bucket = getEnv("R2_BUCKET");
  const publicUrl = getEnv("R2_PUBLIC_URL").replace(/\/$/, "");
  const client = createR2Client();

  await Promise.all(
    (post.images ?? []).map(async (imageUrl) => {
      if (!imageUrl.startsWith(publicUrl)) {
        return;
      }

      const key = imageUrl.slice(publicUrl.length + 1);
      if (!key) {
        return;
      }

      await client.send(
        new DeleteObjectCommand({
          Bucket: bucket,
          Key: key,
        })
      );
    })
  );

  await prisma.post.delete({
    where: {
      id: url,
    },
  });

  return NextResponse.json({});
}

// Action to update or edit
export const PUT = async (req: NextRequest) => {
  const { title, text, id, mood, tags, images } = await req.json();
  const prisma = getPrisma();

  const post = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      text,
      mood,
      tags,
      images,
    },
  });

  return NextResponse.json({
    post,
  });
};
