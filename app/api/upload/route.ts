import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const getEnv = (name: string) => {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
};

const createR2Client = () => {
  const accountId = getEnv("R2_ACCOUNT_ID");
  const accessKeyId = getEnv("R2_ACCESS_KEY_ID");
  const secretAccessKey = getEnv("R2_SECRET_ACCESS_KEY");

  return new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });
};

export async function POST(req: Request) {
  const formData = await req.formData();
  const files = formData.getAll("files");

  if (files.length === 0) {
    return NextResponse.json({ urls: [] });
  }

  const bucket = getEnv("R2_BUCKET");
  const publicUrl = getEnv("R2_PUBLIC_URL");
  const client = createR2Client();

  const uploads = await Promise.all(
    files.map(async (file) => {
      if (!(file instanceof File)) return null;

      const arrayBuffer = await file.arrayBuffer();
      const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
      const key = `uploads/${Date.now()}-${randomUUID()}-${safeName}`;

      await client.send(
        new PutObjectCommand({
          Bucket: bucket,
          Key: key,
          Body: Buffer.from(arrayBuffer),
          ContentType: file.type || "application/octet-stream",
        }),
      );

      return `${publicUrl.replace(/\/$/, "")}/${key}`;
    }),
  );

  const urls = uploads.filter((url): url is string => Boolean(url));
  return NextResponse.json({ urls });
}
