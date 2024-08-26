import { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { Post } from "@/app/types/PostType";
import { getServerSession } from "next-auth";

const prisma = new PrismaClient();

//delete post by ID
export async function DELETE(req: NextRequest) {
  const url = Number(new URL(req.url).pathname.split("/").pop());
  await prisma.post.delete({
    where:{
      id: url
    }
  })

  return NextResponse.json({});
}

// Action to update or edit
export const PUT = async (req: NextRequest) => {
  const { title, text, id, mood, tags, author } = await req.json();

  const post = await prisma.post.update({
    where: {
      id: Number(id),
    },
    data: {
      title,
      text,
      mood,
      tags,
    },
  });

  return NextResponse.json({
    post,
  });
};
