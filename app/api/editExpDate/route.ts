import prisma from "@/lib/prisma";
import auth0 from "@/utils/auth0";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest) {
  const res = new NextResponse();
  try {
    const session = await auth0.getSession(req, res);

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
      );
    }

    const { foodId, expDate } = await req.json();

    if (!foodId || !expDate) {
      return NextResponse.json(
        { error: "No food id or expiration date provided" },
        { status: 404 }
      );
    }

    const { user } = session;
    const pantry = await prisma.pantry.findUnique({
      where: {
        // Placeholder
        userId: "google-oauth2|106992489073321534817",
      },
      include: {
        pantryItems: true,
      },
    });

    if (!pantry) {
      return NextResponse.json({ error: "No pantry found" }, { status: 404 });
    }

    const updatedFoodItem = await prisma.food.update({
      where: {
        id: foodId,
        pantryId: pantry.id,
      },
      data: {
        expDate: expDate,
      },
    });

    return NextResponse.json({ foodItem: updatedFoodItem }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Expiration date could not be updated please try again" },
      { status: 500 }
    );
  }
}
