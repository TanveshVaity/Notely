import Navbar from "@/components/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/options";

export default async function Home() {
  const session  = await getServerSession(authOptions);
  return (
    <main>
      <Navbar />
      Notely
      {JSON.stringify(session)}
    </main>
  );
}
