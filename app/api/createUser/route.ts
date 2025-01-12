// app/api/createUser/route.ts
import prisma from "@/lib/prisma";

//Auth
import auth0 from "@/utils/auth0";

import { NextResponse } from "next/server";

export async function POST() {
  const session = await auth0.getSession();

  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

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

  return NextResponse.json({ message: "Yes we are in db" });
}
