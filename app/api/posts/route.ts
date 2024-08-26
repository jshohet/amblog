import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { Post } from "@/app/types/PostType";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

//get all posts by user
export async function GET(res: NextResponse<Post>) {
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
export async function POST(req: NextRequest, res: NextResponse<Post>) {
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

