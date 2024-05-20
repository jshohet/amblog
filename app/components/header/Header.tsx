import React from "react";
import { LoginButton, LogoutButton } from "./auth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Header = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className="flex gap-2 w-full justify-end py-4 px-2 bg-[#5f2b4f] text-white/70 shadow-lg">
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
  );
};

export default Header;
