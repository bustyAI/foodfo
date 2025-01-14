"use client";
import React, { useState } from "react";

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
} from "../components";

// Hooks
import usePantry from "../hooks/usePantry";

// Current Date
const currentDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
}).format(new Date());

function Pantry() {
  // State
  const { user, isLoading } = useUser();

  // Hooks
  const { pantry, pantryItems, error } = usePantry();

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
        {pantry && (
          <main className="container mx-auto mt-4">
            <h1 className="text-4xl font-bold text-center mb-6 text-black">
              Pantry
            </h1>
          </main>
        )}
        <div className="container mx-auto p-6">
          <FoodCard pantryItems={pantryItems} />
          <div className="mt-10">
            <NoFood />
            <CameraCampture />
          </div>
        </div>
      </div>
    );
  }
  return <UnauthorizedUser />;
}

export default Pantry;
