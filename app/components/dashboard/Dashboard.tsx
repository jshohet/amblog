
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import React, { useState } from "react";

//most recent post for user - edit button, delete button, timestamp, title, images, moodlet
//create new post button
//archive display
  const prisma = new PrismaClient();


const Dashboard = async() => {
  const session = await getServerSession(authOptions);


//   const postsByUser = await prisma.post.findMany({
//     where:{
//         authorId: 
//     }
//   })

  return <div></div>;
};

export default Dashboard;
