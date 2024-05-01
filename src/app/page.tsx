import Navbar from "@/components/Navbar";
import Tabs from "@/components/UI/Tabs";

export default async function Home() {
  return (
    <main>
      <Navbar/>
      <div className="pl-[128px] pt-[34px]">
        <p className="font-bold text-xl">Your Notes</p>
        <div className="mt-[20px]">
          <Tabs />
        </div>
      </div>
    </main>
  );
}
