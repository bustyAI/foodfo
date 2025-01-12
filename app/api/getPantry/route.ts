// /app/api/getPantry
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// auth0
import auth0 from "@/utils/auth0";

// Protecting API route from unauthenticated users
export const GET = auth0.withApiAuthRequired(async function getPantry(
  req: NextRequest
) {
  const res = new NextResponse();
  const session = await auth0.getSession(req, res);

  if (!session || !session.user) {
    return NextResponse.json({ error: "User not Authenticated" });
  }

  const { user } = session;

  const pantry = await prisma.pantry.findUnique({
    where: {
      userId: user.sub,
    },
    include: {
      pantryItems: true,
    },
  });

  if (!pantry) {
    return NextResponse.json({ error: "Pantry not Found" });
  }

  return NextResponse.json({ pantry: pantry });
});
