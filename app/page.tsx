import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import WelcomePage from "./components/welcomepage/WelcomePage";
import Dashboard from "./components/dashboard/Dashboard";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>      
      {session ? <Dashboard /> : <WelcomePage />}
    </main>
  );
}
