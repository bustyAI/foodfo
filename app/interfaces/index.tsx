import type { Pantry, Food } from "@prisma/client";

export interface PantryWithItems extends Pantry {
  pantryItems: Food[];
}
