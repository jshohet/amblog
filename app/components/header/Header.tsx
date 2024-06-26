import React from "react";
import { LoginButton, LogoutButton } from "./auth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import HomeButton from "./HomeButton";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex justify-center items-center py-4 px-2 w-full bg-[#5f2b4f] text-white/70 shadow-lg">
      <div className="w-full">
        <HomeButton />
      </div>
      <div className="flex w-full gap-2 justify-end ">
        {session?.user && (
          <div className="flex items-center">
            <img
              src={session.user.image ? session.user.image : ""}
              alt="profile pic"
              width={40}
              height={40}
              referrerPolicy="no-referrer"
            />
            <p className="ml-2 text-xl">{session.user.name}</p>
          </div>
        )}        
        {!session && <LoginButton />}
        {session && <LogoutButton />}
      </div>
    </div>
  );
};

export default Header;
