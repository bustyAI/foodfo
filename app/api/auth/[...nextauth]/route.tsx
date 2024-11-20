// app/api/auth/[...nextauth]/route.tsx

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Define the NextAuth configuration
const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: "/login", // Specify the custom login page URL
  },
};

// Define GET and POST methods for the API route
export async function GET(request: Request) {
  return NextAuth(authOptions); // Passing authOptions to NextAuth
}

export async function POST(request: Request) {
  return NextAuth(authOptions); // Passing authOptions to NextAuth
}
