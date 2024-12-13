import React from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const page = async () => {
  // const users = [
  //   {
  //     name: "Alice",
  //     email: "alice@example.com",
  //     pantry: {
  //       name: "Alice's Pantry",
  //       total: 100.5,
  //       pantryItems: [
  //         { name: "Apples", category: "Fruits", expDate: "2024-12-31", price: 3.5 },
  //         { name: "Bread", category: "Grains", expDate: "2024-12-15", price: 2.0 },
  //       ],
  //     },
  //   },
  //   {
  //     name: "Bob",
  //     email: "bob@example.com",
  //     pantry: {
  //       name: "Bob's Pantry",
  //       total: 80.2,
  //       pantryItems: [
  //         { name: "Milk", category: "Dairy", expDate: "2024-12-20", price: 2.5 },
  //         { name: "Eggs", category: "Dairy", expDate: "2024-12-18", price: 1.8 },
  //       ],
  //     },
  //   },
  //   {
  //     name: "Charlie",
  //     email: "charlie@example.com",
  //     pantry: {
  //       name: "Charlie's Pantry",
  //       total: 60.7,
  //       pantryItems: [
  //         { name: "Bananas", category: "Fruits", expDate: "2024-12-10", price: 1.2 },
  //         { name: "Rice", category: "Grains", expDate: "2025-01-15", price: 3.0 },
  //       ],
  //     },
  //   },
  //   {
  //     name: "Diana",
  //     email: "diana@example.com",
  //     pantry: {
  //       name: "Diana's Pantry",
  //       total: 95.3,
  //       pantryItems: [
  //         { name: "Chicken", category: "Meat", expDate: "2024-12-12", price: 5.5 },
  //         { name: "Yogurt", category: "Dairy", expDate: "2024-12-15", price: 2.3 },
  //       ],
  //     },
  //   },
  //   {
  //     name: "Eve",
  //     email: "eve@example.com",
  //     pantry: {
  //       name: "Eve's Pantry",
  //       total: 70.0,
  //       pantryItems: [
  //         { name: "Carrots", category: "Vegetables", expDate: "2024-12-25", price: 1.5 },
  //         { name: "Potatoes", category: "Vegetables", expDate: "2025-01-05", price: 0.8 },
  //       ],
  //     },
  //   },
  // ];

  // // Create users with their pantries and food items
  // for (const user of users) {
  //   await prisma.user.create({
  //     data: {
  //       name: user.name,
  //       email: user.email,
  //       pantry: {
  //         create: {
  //           name: user.pantry.name,
  //           total: user.pantry.total,
  //           pantryItems: {
  //             create: user.pantry.pantryItems,
  //           },
  //         },
  //       },
  //     },
  //   });
  // }
  const users = await prisma.user.findMany({
    include: {
      pantry: {
        include: {
          pantryItems: true
        }
      }
    }
  })

  return <div className="min-h-screen bg-gray-100 py-8 px-4">
  <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
    Users and Their Pantries
  </h1>
  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {users.map((user) => (
      <div
        key={user.id}
        className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
      >
        <h2 className="text-xl font-semibold text-gray-800">
          {user.name}
        </h2>
        <p className="text-gray-600 text-sm">{user.email}</p>
        {user.pantry ? (
          <div className="mt-4">
            <h3 className="text-lg font-medium text-gray-700">
              Pantry: {user.pantry.name}
            </h3>
            <p className="text-sm text-gray-500">
              Total: ${user.pantry.total?.toFixed(2)}
            </p>
            <ul className="mt-2 space-y-2">
              {user.pantry.pantryItems.map((item: any) => (
                <li
                  key={item.id}
                  className="flex justify-between bg-gray-50 p-2 rounded-lg shadow-sm"
                >
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      Category: {item.category || "N/A"}
                    </p>
                    <p className="text-xs text-gray-500">
                      Exp Date: {item.expDate || "N/A"}
                    </p>
                  </div>
                  <p className="text-sm text-gray-700">${item.price}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="mt-4 text-sm text-gray-500">No pantry available.</p>
        )}
      </div>
    ))}
  </div>
</div>
};

export default page;
