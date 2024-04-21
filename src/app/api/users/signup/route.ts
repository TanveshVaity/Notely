import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hash } from 'bcrypt';

export async function POST(req : Request) {
    try {
        const body = await req.json()
        const {username, email, password} = body;

        const existingUserByEmail = await prisma.users.findUnique({
            where : {email : email}
        });
        if(existingUserByEmail){
            return NextResponse.json({user: null, message: "User with this email already exist"});
        }

        
        const hashedPassword = await hash(password, 10);
        const newUser = await prisma.users.create({
            data:{
                email,
                password : hashedPassword,
            },
        });

        return NextResponse.json({newUser, message: "User created successfully"});
        
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal server error" });
    }
}
