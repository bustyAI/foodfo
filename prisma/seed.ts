import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Helper functions to generate expiration dates
const pastDate = (daysAgo: number): Date => {
  return new Date(new Date().setDate(new Date().getDate() - daysAgo));
};

const futureDate = (daysAhead: number): Date => {
  return new Date(new Date().setDate(new Date().getDate() + daysAhead));
};

async function main() {
  await prisma.user.create({
    data: {
      id: "google-oauth2|106992489073321534816",
      name: "John Doe",
      email: "johndoe@example.com",
      pantry: {
        create: {
          name: "John's Pantry",
          total: 100.0,
          pantryItems: {
            create: [
              {
                name: "Apples",
                price: 2.99,
                quantity: 10,
                category: "fruits",
                expDate: pastDate(10),
                expired: true,
              } as Prisma.FoodCreateWithoutPantryInput,
              {
                name: "Milk",
                price: 1.49,
                quantity: 5,
                category: "dairy",
                expDate: pastDate(5),
                expired: true,
              } as Prisma.FoodCreateWithoutPantryInput,
              {
                name: "Carrots",
                price: 1.99,
                quantity: 7,
                category: "vegetables",
                expDate: futureDate(10),
                expired: false,
              } as Prisma.FoodCreateWithoutPantryInput,
              {
                name: "Chicken",
                price: 5.99,
                quantity: 1,
                category: "meat",
                expDate: futureDate(14),
                expired: false,
              } as Prisma.FoodCreateWithoutPantryInput,
              {
                name: "Butter",
                price: 2.79,
                quantity: 3,
                category: "dairy",
                expDate: futureDate(20),
                expired: false,
              } as Prisma.FoodCreateWithoutPantryInput,
            ],
          },
        },
      },
    },
  });

  console.log("Seeding completed!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
