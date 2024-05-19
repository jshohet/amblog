"use client";

import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  return (
    <button
      onClick={() => signIn()}
      className="border-2 border-black rounded-lg p-1 hover:bg-slate-500">
      Sign In
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="border-2 border-white/70 rounded-lg p-1 hover:bg-slate-500 hover:text-black/80 hover:border-black/80">
      Sign Out
    </button>
  );
};
