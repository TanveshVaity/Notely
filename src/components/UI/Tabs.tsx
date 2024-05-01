"use client";
import { Fragment, useState } from "react";

const Tabs = () => {
  const [activeTabs, setActiveTabs] = useState<String>("all");

  const handleChangeTabs = (tab: String) => {
    setActiveTabs(tab);
  };

  return (
    <Fragment>
        <div>
        <button
            className={`text-base px-6 py-2 ${
                activeTabs === "all"
                ? "border-b-blue-400 border-b-[3px] text-blue-400"
                : "border-b-gray-400 border-b-[3px] text-gray-400"
            }`}
            onClick={() => {
                handleChangeTabs("all");
            }}
        >
            ALL
        </button>
        <button
            className={`text-base px-6 py-2 ${
                activeTabs === "personal"
                ? " border-b-blue-400 border-b-[3px] text-blue-400"
                : "border-b-gray-400 border-b-[3px] text-gray-400"
            }`}
            onClick={() => {
                handleChangeTabs("personal");
            }}
        >
            PERSONAL
        </button>
        <button
            className={`text-base px-6 py-2 ${
                activeTabs === "home"
                ? " border-b-blue-400 border-b-[3px] text-blue-400"
                : "border-b-gray-400 border-b-[3px] text-gray-400"
            }`}
            onClick={() => {
                handleChangeTabs("home");
            }}
        >
            HOME
        </button>
        <button
            className={`text-base px-6 py-2 ${
                activeTabs === "buisness"
                ? " border-b-blue-400 border-b-[3px] text-blue-400"
                : "border-b-gray-400 border-b-[3px] text-gray-400"
            }`}
            onClick={() => {
                handleChangeTabs("buisness");
            }}
        >
            BUISNESS
        </button>
      </div>
    </Fragment>
  );
};

export default Tabs;
