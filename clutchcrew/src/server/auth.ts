// src/server/auth.ts
import { betterAuth } from "better-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./db";

export const { handlers, auth, signIn, signOut } = betterAuth({
  adapter: PrismaAdapter(prisma),
  socialProviders: [
    discord: { 
        clientId: process.env.DISCORD_CLIENT_ID as string, 
        clientSecret: process.env.DISCORD_CLIENT_SECRET as string, 
    }, 
  ],
  callbacks: {
    // Customize auth callbacks as needed
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
});
