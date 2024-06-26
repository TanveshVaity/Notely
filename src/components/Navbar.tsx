"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
    toggleAddNote: () => void;
}


const Navbar: React.FC <NavbarProps> = ({toggleAddNote}) => {
    return (
        <Fragment>
            <div className="flex items-center justify-around h-[80px] bg-[#f6f4f4] shadow-md">
                <div className=" font-bold text-[#1e4f78] text-3xl">노틀리</div>
                <div className="flex gap-3">
                    <div className="pl-[24px] flex items-center gap-3 border border-[#42A5F5] rounded-lg h-[48px] bg-[#EEEEEE]">
                    <Image
                        src="/icons/Search.svg"
                        alt="search icon"
                        priority
                        height={20}
                        width={20}
                    />
                    <input
                        className="bg-transparent w-[700px] outline-none placeholder-[#212121] opacity-80 font-bold"
                        placeholder="Search"
                    />
                    </div>
                    <div>
                    <button onClick={toggleAddNote} className="flex gap-1 text-white items-center justify-center bg-[#42A5F5] hover:bg-[#2196F8] active: rounded-full h-[48px] w-[90px]">
                        <Image
                            src="/icons/Add.svg"
                            alt="add icon"
                            priority
                            height={18}
                            width={18}
                        />
                        Add
                    </button>
                    </div>
                </div>
                <div className="flex gap-3">
                    <div className="flex gap-4">
                        <Link href="/login">    
                            <button className="text-white items-center justify-center bg-[#1e4f78] rounded-full h-[48px] w-[90px]">
                                Login
                            </button>
                        </Link>
                        <Link href="/signup">
                            <button className="items-center justify-center border-[#1e4f78] text-[#1e4f78] border-2 hover:bg-[#1e4f78] hover:text-white active:bg-[#1e4f78] active:text-white rounded-full bg-slate-200 h-[48px] w-[90px]">
                                Sign up
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Navbar;
