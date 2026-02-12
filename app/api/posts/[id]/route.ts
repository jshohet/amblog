import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextRequest, NextResponse } from "next/server";

let prisma: PrismaClient | null = null;

const getPrisma = () => {
  if (prisma) {
    return prisma;
  }

  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not set");
  }

  prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString }),
  });

  return prisma;
};

//delete post by ID
export async function DELETE(req: NextRequest) {
  const prisma = getPrisma();
  const url = Number(new URL(req.url).pathname.split("/").pop());
  await prisma.post.delete({
    where: {
      id: url,
    },
  });

  return NextResponse.json({});
}

// Action to update or edit
export const PUT = async (req: NextRequest) => {
  const prisma = getPrisma();
  const { title, text, id, mood, tags, images } = await req.json();

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
