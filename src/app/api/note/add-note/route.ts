import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest){
    try{
        const {title, category, description} = await req.json();

        const newNote  = await prisma.note.create({
            data: {
                title,
                content :description,
                category: {
                    create: { name: category },
                },
            }
        });
        return NextResponse.json({newNote, message: "User created successfully" });
    }catch(error){
        return NextResponse.json({error : "Failed to add the note"}, {status: 500});
    }
}