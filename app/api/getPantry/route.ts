// /app/api/getPantry
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// auth0
import auth0 from "@/utils/auth0";

// Protecting API route from unauthenticated users
export async function GET(req: NextRequest) {
  try {
    const res = new NextResponse();
    const session = await auth0.getSession(req, res);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const { user } = session;
    const userPantry = await prisma.pantry.findUnique({
      where: {
        userId: user.sub,
      },
      include: {
        pantryItems: true,
      },
    });

    if (!userPantry) {
      return NextResponse.json({ error: "No Pantry found" }, { status: 404 });
    }

    return NextResponse.json(userPantry);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
