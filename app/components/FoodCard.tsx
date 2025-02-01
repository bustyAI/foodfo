import { Food } from "@prisma/client";
import React from "react";

interface FoodProps {
  pantryItems: Food[];
  onDelete: (foodId: number) => void;
}

const FoodCard = ({ pantryItems, onDelete }: FoodProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pantryItems.map((item) => (
        <div key={item.id} className="bg-orange-50 shadow-lg rounded-lg">
          <div className="p-4">
            <h2 className="text-2xl font-semibold text-black">{item.name}</h2>
            <p className="text-sm text-gray-600 mt-2">
              {item.category || "Uncategorized"}
            </p>
            <p className="text-lg font-medium text-orange-500 mt-4">
              ${item.price.toFixed(2)}
            </p>
            <div className="flex justify-between items-center mt-4">
              <div className="text-gray-600">
                <span className="font-medium">Quantity: </span>
                {item.quantity}
              </div>
              {item.expDate && (
                <div className="text-sm text-gray-500">
                  Expires: {new Date(item.expDate).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>
          <div className="bg-[#FFCC99] p-6 rounded-b-lg text-center">
            <button
              onClick={() => onDelete(item.id)}
              className="bg-red-400 rounded-md p-2"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCard;
