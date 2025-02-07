"use client";
import React, { useEffect, useState } from "react";

// Auth
import { useUser } from "@auth0/nextjs-auth0/client";

// Prisma Types
import type { Pantry, Food } from "@prisma/client";

// API funcs
import { deleteFoodItem, updateFoodItem } from "@/utils/api";

// Components
import {
  FoodCard,
  Loading,
  UnauthorizedUser,
  NoFood,
  CameraCampture,
  CategorySearch,
} from "../components";

// Hooks
import usePantry from "../hooks/usePantry";

// Current Date
import currentDate from "@/utils/date";

function Pantry() {
  // Hooks
  const { user, isLoading } = useUser();
  const { pantry, setPantry, error, setError } = usePantry();

  // State
  const [filteredFood, setFilteredFood] = useState<Food[]>([]);

  useEffect(() => {
    if (pantry) {
      setFilteredFood(pantry.pantryItems);
    }
  }, [pantry]);

  const handleCategorySelect = (category: string | null) => {
    if (category) {
      setFilteredFood(
        pantry?.pantryItems.filter((item) => item.category === category) || []
      );
    } else {
      setFilteredFood(pantry?.pantryItems || []);
    }
  };

  const handleDeleteFoodItem = async (foodId: number) => {
    try {
      const deletedFoodItem = await deleteFoodItem(foodId);
      console.log(deletedFoodItem.name);

      if (pantry) {
        const updatedPantry = {
          ...pantry,
          pantryItems: pantry.pantryItems.filter((item) => item.id !== foodId),
        };

        setPantry(updatedPantry);
        setFilteredFood(updatedPantry.pantryItems);
      }
    } catch (error) {
      console.log(error);
      setError("Unable to delete food item");
    }
  };

  const handleUpdateFoodItem = async (foodId: number, newExpDate: Date) => {
    try {
      const updatedFoodItem = await updateFoodItem(
        foodId,
        newExpDate.toISOString()
      );

      if (pantry) {
        const updatedPantry = {
          ...pantry,
          pantryItems: pantry.pantryItems.map((item) =>
            item.id === foodId ? updatedFoodItem : item
          ),
        };

        setPantry(updatedPantry);
        setFilteredFood(updatedPantry.pantryItems);
      }
    } catch (error) {
      console.log("Error updating food item");
      setError("Unable to update expiration date");
    }
  };

  const refreshPantry = async () => {
    try {
      const res = await fetch("/api/getPantry"); // Ensure this API returns the latest pantry items
      if (res.ok) {
        const updatedPantry = await res.json();
        setPantry(updatedPantry);
        setFilteredFood(updatedPantry.pantryItems);
      }
    } catch (error) {
      console.error("Error refreshing pantry:", error);
      setError("Unable to refresh pantry");
    }
  };

  if (isLoading) return <Loading />;
  if (!user) return <UnauthorizedUser />;

  return (
    <div className="flex flex-col">
      <div className="text-left p-2">
        <h1 className="text-lg font-semibold">{user.name}'s Pantry</h1>
        <div className="flex flex-row text-black/50 font-semibold">
          {currentDate}
        </div>
      </div>

      {error && <div className="mx-auto mt-4 font-semibold">{error}</div>}
      {pantry && <CategorySearch onCategorySelect={handleCategorySelect} />}

      <main className="container mx-auto p-6">
        <FoodCard
          pantryItems={filteredFood}
          onDelete={handleDeleteFoodItem}
          onEdit={handleUpdateFoodItem}
        />
        <div className="mt-10">
          <NoFood />
          <CameraCampture refreshPantry={refreshPantry} />
        </div>
      </main>
    </div>
  );
}
export default Pantry;
