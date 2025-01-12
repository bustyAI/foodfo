"use client";
import React from "react";

// Auth
import { useUser } from "@auth0/nextjs-auth0/client";

// Components
import {
  FoodCard,
  Loading,
  UnauthorizedUser,
  NoFood,
  CameraCampture,
} from "../components";

// Dummy Data
import foods from "@/utils/data";

const currentDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
}).format(new Date());

function Pantry() {
  const { user, isLoading } = useUser();

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
              <h2>{user.sub}</h2>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {foods &&
            foods.map((food) => (
              <FoodCard
                key={food.name}
                name={food.name}
                expDate={food.expDate}
                category={food.category}
              />
            ))}

          {foods.length === 0 && (
            <div>
              <NoFood />
              <CameraCampture />
            </div>
          )}
        </div>
      </div>
    );
  }
  return <UnauthorizedUser />;
}

export default Pantry;
