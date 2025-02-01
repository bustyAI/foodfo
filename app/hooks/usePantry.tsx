import { useState, useEffect } from "react";

// Prisma Types
import { Food } from "@prisma/client";

// Interfaces
import type { PantryWithItems } from "../interfaces/PantryWithItems";

const usePantry = () => {
  const [pantry, setPantry] = useState<PantryWithItems | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/getPantry");
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.error || "Unexpected error occurred");
        }

        const data = await res.json();
        setPantry(data);
        setError(null);
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "An unexpected error occurred"
        );
      }
    };
    fetchData();
  }, []);

  return { pantry, error, setPantry };
};

export default usePantry;
