"use client";
import React from "react";

// Auth
import { useUser } from "@auth0/nextjs-auth0/client";
// Components
import { FoodCard, Loading } from "../components";

// Dummy Data
import { foods } from "@/utils/data";

function Pantry() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  if (user) {
    return (
      <div className="flex flex-col">
        <div className=" text-center bg-orange-300 p-2 font-bold">
          {user && <h1>{user.name}'s Pantry</h1>}
        </div>
        <div className=" bg-orange-300 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foods.map((food) => (
            <FoodCard
              key={food.name}
              name={food.name}
              expDate={food.expDate}
              category={food.category}
            />
          ))}
        </div>
      </div>
    );
  }
  return <Loading />;
}

export default Pantry;
