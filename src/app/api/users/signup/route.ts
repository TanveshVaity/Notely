import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { hash } from "bcrypt";
import { z , ZodError, ZodType} from "zod";

type FormData = {
  email: string,
  password: string
}

const userSchema : ZodType<FormData> = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .trim()
    .min(6, { message: "Password must be at least 6 characters" })
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {email, password } = userSchema.parse(body);

    const existingUserByEmail = await prisma.users.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json({
        user: null,
        message: "User with this email already exist",
      });
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.users.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ newUser, message: "User created successfully" });
  } catch (error) {
    if (error instanceof ZodError) {
      const errorMessages = error.issues.map((issue) => issue.message);
      return NextResponse.json({ error: errorMessages });
    }
    return NextResponse.json({ error: "Internal server error" });
  }
}
