"use client";
import Navbar from "@/components/Navbar";
import Tabs from "@/components/UI/Tabs";
import Backdrop from "@/components/UI/Backdrop";
import { useState } from "react";
import AddNote from "@/components/AddNote";

export default function Home() {
  const [isAddNoteVisible, setIsAddNoteVisible] = useState(false);

  const toggleAddNote = () => {
    setIsAddNoteVisible(!isAddNoteVisible);
  };

  return (
    <main>
      <Navbar toggleAddNote={toggleAddNote} />
      <Backdrop isOpen={isAddNoteVisible} onClose={toggleAddNote}>
        <AddNote  onClose={toggleAddNote}/>
      </Backdrop>
      <div className="pl-[128px] pt-[34px]">
        <p className="font-bold text-xl">Your Notes</p>
        <div className="mt-[20px]">
          <Tabs />
        </div>
      </div>
    </main>
  );
}
