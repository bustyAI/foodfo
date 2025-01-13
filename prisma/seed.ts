import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // User 1
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
              { name: "Apples", price: 2.99, quantity: 10, category: "fruits" },
              { name: "Milk", price: 1.49, quantity: 5, category: "dairy" },
            ],
          },
        },
      },
    },
  });

  // User 2
  await prisma.user.create({
    data: {
      id: "google-oauth2|106992489073321534817",
      name: "Jane Smith",
      email: "janesmith@example.com",
      pantry: {
        create: {
          name: "Jane's Pantry",
          total: 50.0,
          pantryItems: {
            create: [
              {
                name: "Carrots",
                price: 1.99,
                quantity: 7,
                category: "vegetables",
              },
              { name: "Eggs", price: 3.99, quantity: 12, category: "dairy" },
            ],
          },
        },
      },
    },
  });

  // User 3
  await prisma.user.create({
    data: {
      id: "google-oauth2|106992489073321534818",
      name: "Alex Johnson",
      email: "alexjohnson@example.com",
      pantry: {
        create: {
          name: "Alex's Pantry",
          total: 200.0,
          pantryItems: {
            create: [
              {
                name: "Bananas",
                price: 1.29,
                quantity: 15,
                category: "fruits",
              },
              { name: "Cheese", price: 4.5, quantity: 3, category: "dairy" },
            ],
          },
        },
      },
    },
  });

  // User 4
  await prisma.user.create({
    data: {
      id: "google-oauth2|106992489073321534819",
      name: "Emily Davis",
      email: "emilydavis@example.com",
      pantry: {
        create: {
          name: "Emily's Pantry",
          total: 75.0,
          pantryItems: {
            create: [
              {
                name: "Oranges",
                price: 2.49,
                quantity: 10,
                category: "fruits",
              },
              { name: "Yogurt", price: 3.19, quantity: 6, category: "dairy" },
            ],
          },
        },
      },
    },
  });

  // User 5
  await prisma.user.create({
    data: {
      id: "google-oauth2|106992489073321534820",
      name: "Mark Brown",
      email: "markbrown@example.com",
      pantry: {
        create: {
          name: "Mark's Pantry",
          total: 120.0,
          pantryItems: {
            create: [
              {
                name: "Spinach",
                price: 2.79,
                quantity: 8,
                category: "vegetables",
              },
              { name: "Butter", price: 2.99, quantity: 4, category: "dairy" },
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
