import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

//delete post by ID
export async function DELETE(req: NextRequest) {
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
