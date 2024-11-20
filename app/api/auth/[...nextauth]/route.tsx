import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Directly export the handler for this route
export const handler = NextAuth({
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

// Add support for both GET and POST requests to this route
export { handler as GET, handler as POST };
