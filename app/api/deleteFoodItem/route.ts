import prisma from "@/lib/prisma";

// Auth
import auth0 from "@/utils/auth0";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  try {
    const session = await auth0.getSession();

    if (!session || !session.user) {
      return NextResponse.json(
        { error: "User not Authenticated" },
        { status: 401 }
      );
    }
    const { user } = session;

    // Grab the Pantry
    const pantry = await prisma.pantry.findUnique({
      where: {
        // Place holder
        userId: "google-oauth2|106992489073321534817",
      },
      include: {
        pantryItems: true,
      },
    });

    if (!pantry) {
      return NextResponse.json(
        {
          error: `Not pantry found for user ${user.name}`,
        },
        { status: 404 }
      );
    }

    const { foodId } = await req.json();

    if (!foodId) {
      return NextResponse.json(
        { error: "No foodId provided" },
        { status: 400 }
      );
    }

    const deletedItem = await prisma.food.delete({
      where: {
        // Place holder
        id: foodId,
        pantryId: pantry.id,
      },
      select: {
        name: true,
      },
    });

    return NextResponse.json({ foodItem: deletedItem }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Food item could not be deleted please try again" },
      { status: 500 }
    );
  }
}
