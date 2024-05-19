import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <h1 className="text-5xl">
        GremnlimnlaskjjdlaADER - requested by AMBROSINE THE CARING herself
      </h1>
    </main>
  );
}
