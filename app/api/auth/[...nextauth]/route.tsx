import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Directly export the NextAuth handler with the configuration
export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login",
  },
});
