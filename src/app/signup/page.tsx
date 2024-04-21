"use client";
import { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);

    return (
        <div className="flex justify-center items-center h-screen">
            <div className=" flex gap-5 flex-col">
                <p className="text-cente justify-startr text-3xl font-bold">Sign Up</p>
                <form>
                <div className="relative mb-4">
                    <MdOutlineMail className="absolute top-3.5 left-3 text-gray-400 text-xl" />
                    <input
                        type="text"
                        placeholder="Email"
                        className="pl-10 block h-12 w-80 rounded border border-gray-400"
                    />
                </div>
                <div className="relative mb-4">
                    {showPassword ? (
                    <FiEyeOff
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-3.5 left-3 text-gray-400 text-xl cursor-pointer"
                    />
                    ) : (
                    <FiEye
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute top-3.5 left-3 text-gray-400 text-xl cursor-pointer"
                    />
                    )}
                    <input
                        type={showPassword ? "password" : "text"}
                        placeholder="Password"
                        className="pl-10 block h-12 w-80 rounded border border-gray-400"
                    />
                </div>
                <div className="relative mb-6">
                    {showConfirmPassword ? (
                    <FiEyeOff
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute top-3.5 left-3 text-gray-400 text-xl cursor-pointer"
                    />
                    ) : (
                    <FiEye
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute top-3.5 left-3 text-gray-400 text-xl cursor-pointer"
                    />
                    )}
                    <input
                        type={showConfirmPassword ? "password" : "text"}
                        placeholder="Confirm Password"
                        className="pl-10 block h-12 w-80 rounded border border-gray-400"
                    />
                </div>
                <button className="block mx-auto h-12 w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded">
                    Sign Up
                </button>
                </form>
                <p className="text-gray-400">Already Have An Account ? <Link href="/login" className="text-blue-500 font-bold">Login</Link> </p>
            </div>
        </div>
    );
    };

export default Signup;
