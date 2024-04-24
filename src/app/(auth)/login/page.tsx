"use client";
import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import { useRouter } from "next/navigation"; 

const Login: React.FC = () => {

  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(true); 

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-5 flex-col">
        <p className="text-center text-3xl font-bold">Login</p>
        <form onSubmit={onSubmit}>
          <div className="relative mb-4">
            <MdOutlineMail className="absolute top-3.5 left-3 text-gray-400 text-xl" />
            <input
              type="text"
              placeholder="Email"
              name="email" 
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
              name="password" 
              className="pl-10 block h-12 w-80 rounded border border-gray-400"
            />
          </div>
          <button
            type="submit"
            className="block mx-auto h-12 w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400">
          Don't Have An Account ?{" "}
          <Link href="/signup" className="text-blue-500 font-bold">
            Sign Up
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
