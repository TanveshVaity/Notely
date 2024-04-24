import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: {label: "Email", type: "text"},
                password: {label: "Password", type: "password", },
            },

            async authorize(credentials: any) : Promise<any> {
                try {
                    if(!credentials.email || !credentials.password){
                        return null;
                    }
                    const user = await prisma.users.findUnique({
                        where: {email: credentials?.email},
                    })
                    if(!user){
                        throw new Error("No user found!!");
                    }

                    const matchPassword = await bcrypt.compare(credentials.password, user.password);
                    if(matchPassword){
                        return user;
                    }
                    else{
                        throw new Error("Incorrect passowrd");
                    }
                } catch (err:any) {
                    throw new Error(err);
                }
            },
        })
    ],

    pages: {
        signIn: "/login"
    },

    adapter: PrismaAdapter(prisma),

    secret: process.env.NEXTAUTH_SECRET,

    

    callbacks: {
        async jwt({token, user}){
            if(user){
                return{
                    ...token,
                    id: user.id,
                }
            }
            return token
        },
        async session({session,token}){
            return{
                ...session,
                user :{
                    ...session.user,
                    id: token.id,
                }
            }
        }
    }
}
