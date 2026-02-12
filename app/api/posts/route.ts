import { NextRequest, NextResponse } from "next/server";
import { Post } from "@/app/types/PostType";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getPrisma } from "@/lib/prisma";

//get all posts by user
export async function GET(_request: NextRequest) {
  const token = await getServerSession(authOptions);
  if (!token) {
    return NextResponse.json([], { status: 403 });
  }

  if (token) {
    const prisma = getPrisma();
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
  const token = await getServerSession(authOptions);
  if (!token?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const prisma = getPrisma();
    const { title, text, mood, tags, images } = await req.json();
    await prisma.user.upsert({
      where: {
        email: token.user.email,
      },
      update: {},
      create: {
        email: token.user.email,
        name: token.user.name ?? null,
        externalID: token.user.email,
      },
    });

    const newPost: Post = await prisma.post.create({
      data: {
        authorEmail: token.user.email,
        title: title,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        text: text,
        mood: mood,
        tags: tags,
        images: images ?? [],
      },
    });

    return NextResponse.json({ newPost });
  } catch (error) {
    console.error("POST /api/posts failed", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 },
    );
  }
}
