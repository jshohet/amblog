import React from 'react'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const Welcome = async () => {
     const session: any = await getServerSession(authOptions);
     const firstName = session.user.name.split(" ")[0];

  return (
    <div className="">
        <h2 className='text-2xl mt-20 mb-10 text-five font-bold'>Welcome back, {firstName}!</h2>
    </div>
  )
}

export default Welcome