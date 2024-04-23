import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "Credentials",
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password", },
            },

            async authorize(credentials: any) : Promise<any> {
                try {
                    // const user = await prisma.user.findUnique({
                    //     where: {email: credentials.identifier.email},
                    // })
                    // if(!user){
                    //     throw new Error("No user found!!");
                    // }

                    // const matchPassword = await bcrypt.compare(credentials.password, user.password);
                    // if(matchPassword){
                    //     return user;
                    // }
                    // else{
                    //     throw new Error("Incorrect passowrd");
                    // }

                    const user = {id: "10", email: "tanvesh10@gamil.com", password: "tanvesh10"}
                    return user;
                } catch (err:any) {
                    throw new Error(err);
                }
            },
        })
    ],

    // pages: {
    //     signIn: "/login"
    // },

    adapter: PrismaAdapter(prisma),

    secret: process.env.NEXTAUTH_SECRET,

    

    // callbacks:{
    //     async jwt({token, user}){
    //         if(user){
    //             token.id = user.id?.toString();
    //         }
    //         return token;
    //     },

    //     async session({session, token}){
    //         if(session.user){
    //             session.user.id = token.id
    //         }
    //         return session;
    //     }
    // }
}
