import { useState, useEffect } from "react";

// Prisma Types
import { Food } from "@prisma/client";

// Interfaces
import type { PantryWithItems } from "../interfaces";

const usePantry = () => {
  const [pantry, setPantry] = useState<PantryWithItems | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pantryItems, setPantryItems] = useState<Food[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getPantry");
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "Unexpted error occured");
        }

        const data = await res.json();
        setPantry(data);
        setPantryItems(data.pantryItems);
        setError(null);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occured");
        }
      }
    };
    fetchData();
  }, []);
  return { pantry, pantryItems, error };
};

export default usePantry;
