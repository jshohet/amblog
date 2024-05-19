// "use client";

// import { getServerSession } from "next-auth";
// import { useSession } from "next-auth/react";
// import { authOptions } from "../api/auth/[...nextauth]/route";
// import { NextResponse } from "next/server";

export default async function Dashboard() {
  //client side route protection
  //   const { status } = useSession({
  //     required: true,
  //     onUnauthenticated() {
  //       console.log("not logged in");
  //     },
  //   });
  //   if (status === "loading") {
  //     return "loading or unauthenticated";
  //   }

  //server side route protection
  //   const session = await getServerSession(authOptions);

  //   if (!session) {
  //     return new NextResponse(JSON.stringify({ error: "unauthorized" }), {
  //       status: 401,
  //     });
  //   }

  return <div>super secret page</div>;
}
