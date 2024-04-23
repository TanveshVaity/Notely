"use client";
import React, { useState } from "react";
import { FiEyeOff, FiEye } from "react-icons/fi";
import { MdOutlineMail } from "react-icons/md";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const signupSchema = z
  .object({
    email: z
      .string({ required_error: "Email is required" })
      .min(1, { message: "Email is required" })
      .trim()
      .email({ message: "Invalid email" }),
    password: z
      .string({ required_error: "Password is required" })
      .min(1, { message: "Password is required" })
      .trim()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirmPassword: z.string(),
  });

type FormData = z.infer<typeof signupSchema>;

const Login: React.FC = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async () => {
    try {
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/");
      setUser({
        email: "",
        password: "",
      });
    } catch (error: any) {
      console.log("Signup failed", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex gap-5 flex-col">
        <p className="text-center text-3xl font-bold">Login</p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="relative mb-4">
            <MdOutlineMail className="absolute top-3.5 left-3 text-gray-400 text-xl" />
            <input
              {...register("email")}
              type="text"
              placeholder="Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="pl-10 block h-12 w-80 rounded border border-gray-400"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
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
              {...register("password")}
              type={showPassword ? "password" : "text"}
              placeholder="Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="pl-10 block h-12 w-80 rounded border border-gray-400"
            />
            {errors.password && (
              <span className="text-red-500">{errors.password.message}</span>
            )}
          </div>

          <button className="block mx-auto h-12 w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded">
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
