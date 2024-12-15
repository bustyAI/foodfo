import React from "react";
import prisma from "@/lib/prisma";

const user = await prisma.user.findFirst({
  include: {
    pantry: {
      include: {
        pantryItems: true,
      },
    },
  },
});

const Page = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Pantry Management</h1>

      {user ? (
        <div>
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">User Information</h2>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Pantry Information</h2>
            <div className="space-y-2">
              <p>
                <strong>Pantry Name:</strong> {user.pantry?.name}
              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Food Items</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="border-b">
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Category</th>
                    <th className="px-4 py-2 text-left">Expiration Date</th>
                    <th className="px-4 py-2 text-left">Price</th>
                    <th className="px-4 py-2 text-left">Quantity</th>
                    <th className="px-4 py-2 text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {user.pantry?.pantryItems.map((item: any, index: number) => (
                    <tr key={index} className="border-b hover:bg-gray-100">
                      <td className="px-4 py-2">{item.name}</td>
                      <td className="px-4 py-2 capitalize">{item.category}</td>
                      <td className="px-4 py-2">
                        {new Date(item.expDate).toLocaleDateString()}
                      </td>
                      <td className="px-4 py-2">${item.price.toFixed(2)}</td>
                      <td className="px-4 py-2">{item.quantity}</td>
                      <td className="px-4 py-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-6">
          <p className="text-lg text-gray-600">
            No user data available. Please create a user and pantry.
          </p>
        </div>
      )}
    </div>
  );
};

export default Page;
