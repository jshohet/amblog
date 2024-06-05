import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { Post } from "@/app/types/PostType";
const prisma = new PrismaClient();

export async function GET(
  req: NextApiRequest,
  res: NextResponse<Post>
) {
    const postsByUser = await prisma.post.findMany({
      where: {
        authorId: "ksa",
      },
      orderBy:{
        createdAt: 'desc'
      }
    });
    return NextResponse.json(postsByUser, {status: 200})
}
