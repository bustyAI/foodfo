import React from "react";
import Image from "next/image";

//Auth
import auth0 from "@/utils/auth0";

// Components
import { Button } from "../components";
import { FoodCard } from "../components";

// Dummy Data
import { foods } from "@/utils/data";

interface User {
  name?: string;
  email?: string;
  picture?: string;
}

async function Pantry() {
  // Get the session object and destructure user from it
  const session = await auth0.getSession();
  const user: User | undefined = session?.user; // Handle possible undefined/null session

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
}

export default Pantry;
