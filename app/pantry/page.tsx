import React from "react";

// Auth
import auth0 from "@/utils/auth0";

// Components
import { FoodCard } from "../components";

// Dummy Data
import { foods } from "@/utils/data";

const Pantry = async () => {
  return (
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
  );
};

export default auth0.withPageAuthRequired(Pantry, { returnTo: "/pantry" });
