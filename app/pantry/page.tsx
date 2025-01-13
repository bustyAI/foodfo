"use client";
import React, { useState, useEffect } from "react";

// Auth
import { useUser } from "@auth0/nextjs-auth0/client";

// Prisma Types
import type { Pantry } from "@prisma/client";

// Components
import {
  FoodCard,
  Loading,
  UnauthorizedUser,
  NoFood,
  CameraCampture,
} from "../components";

const currentDate = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  day: "numeric",
  month: "long",
}).format(new Date());

function Pantry() {
  // State
  const { user, isLoading } = useUser();
  const [pantry, setPantry] = useState<Pantry | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getPantry");
        const data = await res.json();
        setPantry(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  console.log(pantry);
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
        <main className="container mx-auto p-6">
          <div>
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
