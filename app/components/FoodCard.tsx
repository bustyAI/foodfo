"use client";
import { Food } from "@prisma/client";
import React, { useState } from "react";

interface FoodProps {
  pantryItems: Food[];
  onDelete: (foodId: number) => void;
  onEdit: (foodId: number, newDate: Date) => void;
}

const FoodCard = ({ pantryItems, onDelete, onEdit }: FoodProps) => {
  const [editingItemId, setEditingItemId] = useState<number | null>(null);
  const [newExpDate, setNewExpDate] = useState<string>("");

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewExpDate(e.target.value);
  };

  const saveNewDate = (foodId: number) => {
    if (!newExpDate) return;

    const dateToSave = new Date(newExpDate);
    onEdit(foodId, dateToSave);
    setEditingItemId(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pantryItems.map((item) => (
        <div
          key={item.id}
          className={`relative shadow-lg rounded-lg transition-all duration-300 ${
            item.expired
              ? "border-red-500 border-2 bg-gray-100 opacity-75 grayscale"
              : "bg-orange-50"
          }`}
        >
          {item.expired && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-md">
              Expired
            </span>
          )}

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
                <div className="text-sm text-black">
                  {editingItemId === item.id ? (
                    <div className="flex items-center">
                      <input
                        type="date"
                        value={newExpDate}
                        onChange={handleDateChange}
                        className="rounded-lg border p-2"
                      />
                      <button
                        onClick={() => saveNewDate(item.id)}
                        className="ml-2 bg-orange-300 text-black p-2 rounded-lg"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        setEditingItemId(item.id);
                        setNewExpDate(
                          item.expDate
                            ? new Date(item.expDate).toISOString().split("T")[0]
                            : ""
                        );
                      }}
                      className="rounded-lg bg-orange-300 p-2"
                    >
                      Expires:{" "}
                      {item.expDate
                        ? new Date(item.expDate).toLocaleDateString()
                        : "No Expiry"}
                    </button>
                  )}
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
