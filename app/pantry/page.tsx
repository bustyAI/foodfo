"use client";
import React, { useEffect, useState } from "react";

// Auth
import { useUser } from "@auth0/nextjs-auth0/client";

// Prisma Types
import type { Pantry, Food } from "@prisma/client";

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
  // auth0
  const { user, isLoading } = useUser();

  // Hooks
  const { pantry, pantryItems, error } = usePantry();

  // State
  const [filteredFood, setFilteredFood] = useState<Food[]>([]);

  const handleCategorySelect = (category: string | null) => {
    if (category) {
      const filtered = pantryItems.filter((item) => item.category === category);
      setFilteredFood(filtered);
    } else {
      setFilteredFood(pantryItems);
    }
  };

  // Set filtered food items here to populate foodCard component
  // Since we are passing the filtered items to foodCard not pantry items
  useEffect(() => {
    setFilteredFood(pantryItems);
  }, [pantryItems]);

  if (isLoading) {
    return <Loading />;
  }

  if (user) {
    return (
      <div className="flex flex-col">
        <div className="text-left p-2">
          {user && (
            <div className="flex flex-col">
              <h1 className="text-lg font-semibold">{user.name}'s Pantry</h1>
              <div className="flex flex-row text-black/50 font-semibold">
                {currentDate}
              </div>
            </div>
          )}
        </div>
        {error && (
          <div className="mx-auto mt-4 font-semibold">
            <h1>{error}</h1>
          </div>
        )}
        {pantry && <CategorySearch onCategorySelect={handleCategorySelect} />}
        <main className="container mx-auto p-6">
          <FoodCard pantryItems={filteredFood} />
          <div className="mt-10">
            <NoFood />
            <CameraCampture />
          </div>
        </main>
      </div>
    );
  }
  return <UnauthorizedUser />;
}

export default Pantry;
