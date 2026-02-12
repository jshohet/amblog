import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { NextRequest, NextResponse } from "next/server";
import { Post } from "@/app/types/PostType";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

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

//get all posts by user
export async function GET(_request: NextRequest) {
  const prisma = getPrisma();
  const token = await getServerSession(authOptions);
  if (!token) {
    return NextResponse.json([], { status: 403 });
  }

  if (token) {
    const postsByUser = await prisma.post.findMany({
      where: {
        author: { email: token?.user?.email },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(postsByUser, { status: 200 });
  }
}

//create new post for session user
export async function POST(req: NextRequest) {
  const prisma = getPrisma();
  const { authorEmail, title, text, mood, tags } = await req.json();

  const newPost: Post = await prisma.post.create({
    data: {
      authorEmail: authorEmail,
      title: title,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      text: text,
      mood: mood,
      tags: tags,
    },
  });
  return NextResponse.json({ newPost });
}
