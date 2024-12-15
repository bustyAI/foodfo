// app/api/createUser/route.ts
import prisma from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { user } = data;

    const createdUser = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
      },
    });

    const pantry = await prisma.pantry.create({
      data: {
        name: user.pantry.name,
        userId: createdUser.id,
        pantryItems: {
          create: user.pantry.pantryItems.map((food: any) => ({
            name: food.name,
            category: food.category,
            expDate: new Date(food.expDate).toISOString(),
            price: food.price,
            quantity: food.quantity,
          })),
        },
      },
    });

    return new Response(JSON.stringify({ user: createdUser, pantry }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    // Type assertion to ensure 'error' is an instance of Error
    if (error instanceof Error) {
      return new Response(
        JSON.stringify({
          error: "Error creating user and pantry",
          details: error.message,
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    } else {
      // Fallback if the error is not an instance of Error
      return new Response(
        JSON.stringify({
          error: "Unknown error occurred",
          details: "An unknown error occurred while creating user and pantry.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
}
