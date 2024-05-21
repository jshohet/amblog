
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Post } from "@/app/types/PostType";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import React, { useState } from "react";

//most recent post for user - edit button, delete button, timestamp, title, images, moodlet
//create new post button
//archive display
  const prisma = new PrismaClient();


const Dashboard = async() => {
  const session:any = await getServerSession(authOptions);

  const postsByUser: Post[] = await prisma.post.findMany({
    where:{
        authorId: "ksa"
    }
  })

  return <div>   
    {postsByUser && postsByUser?.map((post: Post, i:any) =>
      <div key={i}>{post.title} {JSON.stringify(post.text)}</div>
    )}
    </div>;
};

export default Dashboard;
