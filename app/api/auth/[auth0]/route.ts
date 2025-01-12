// Auth0
import auth0 from "@/utils/auth0";
import { Session } from "@auth0/nextjs-auth0";

import { NextRequest } from "next/server";

// Prisma
import prisma from "@/lib/prisma";

const afterCallback = async (req: NextRequest, session: Session) => {
  const { user } = session;

  const existingUser = await prisma.user.findUnique({
    where: { id: user.sub },
  });

  if (!existingUser) {
    await prisma.user.create({
      data: {
        id: user.sub,
        email: user.email,
        name: user.name,
      },
    });
  }
  console.log("Database entry added");
  return session;
};

export const GET = auth0.handleAuth({
  login: auth0.handleLogin({
    returnTo: "/pantry",
  }),

  callback: auth0.handleCallback({ afterCallback: afterCallback }),
});
