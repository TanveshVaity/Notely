"use client";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";

const AddNote = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("Personal");
  const [textCount, setTextCount] = useState<number>(0);
  const [textarea, setTextarea] = useState<string>("");
  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const MAX_CHARACTER_COUNT = 200; 

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (newText.length <= MAX_CHARACTER_COUNT) { 
      setTextarea(newText);
      setTextCount(newText.length); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="h-[400px] w-[500px] p-4 rounded-2xl border flex flex-col justify-between">
        <div className="flex flex-col justify-between pt-3">
          <div>
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-900 opacity-85 font-bold">Add Note</span>
              <IoMdClose className="text-gray-600" />
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex flex-col">
                <label htmlFor="title">Title</label>
                <input
                  className="w-[200px] h-[35px] mt-2 border rounded px-2 bg-gray-100 outline-none"
                  type="text"
                  placeholder="Add title"
                  name="title"
                  id="title"
                />
              </div>
              <div className="relative flex flex-col w-[200px]">
                <p>Category</p>
                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="bg-gray-100 px-4 py-1 mt-2 w-full flex items-center justify-between rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300s active:text-white"
                >
                  {selectedCategory}
                  {!isOpen ? <FaCaretDown /> : <FaCaretUp />}
                </button>
                {isOpen && (
                  <div className="bg-gray-300 absolute top-[5rem] rounded-lg left-0 w-full z-10 pt-2 pb-2">
                    <p className="cursor-pointer px-2 py-2 leading-6 hover:bg-gray-400" onClick={()=>handleCategoryChange("Psersonal")}>
                      Personal
                    </p>
                    <p className="cursor-pointer px-2 py-2 leading-6 hover:bg-gray-400" onClick={()=>handleCategoryChange("Home")}>
                      Home
                    </p>
                    <p className="cursor-pointer px-2 py-2 leading-6 hover:bg-gray-400" onClick={()=>handleCategoryChange("Buisness")}>
                      Business
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex-grow">
            <div className="pt-4">
              <div className="flex justify-between mb-2">
                <label htmlFor="description" className="block">
                  Description (optional)
                </label>
                <span>{textCount}/200</span>
              </div>
              <textarea
                className="w-full resize-none bg-gray-100 rounded outline-none :placeholder pt-2 pl-2"
                id="description"
                name="description"
                placeholder="Add description"
                rows={5}
                onChange={handleTextAreaChange}
                value={textarea}
              />
            </div>
            <div className="flex justify-end gap-3 pt-3">
              <button className="text-gray-500">Cancel</button>
              <button className="flex gap-1 text-white items-center justify-center bg-[#42A5F5] hover:bg-[#2196F8] active: rounded-full h-[40px] w-[80px]">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNote;
