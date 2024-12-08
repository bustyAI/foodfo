// food.ts

// Define a TypeScript interface for Food objects
export interface Food {
  name: string;
  expDate: string; // Expiration date in format YYYY-MM-DD
  category: string; // Category like Fruit, Vegetable, Dairy, Meat, etc.
  quantity: number; // The quantity you have in stock
  unit: string; // Unit of measurement, e.g., 'kg', 'lbs', 'pieces'
  isFrozen: boolean; // Whether the food is stored in the freezer
  isOpened: boolean; // Whether the food package has been opened
  caloriesPerUnit?: number; // Optional: Calories per unit, e.g., per 100g or per piece
}

// Example food objects
export const foods: Food[] = [
  // {
  //   name: "Apple",
  //   expDate: "2024-12-01",
  //   category: "Fruit",
  //   quantity: 10,
  //   unit: "pieces",
  //   isFrozen: false,
  //   isOpened: false,
  // },
  // {
  //   name: "Milk",
  //   expDate: "2024-11-30",
  //   category: "Dairy",
  //   quantity: 2,
  //   unit: "liters",
  //   isFrozen: false,
  //   isOpened: true,
  // },
  // {
  //   name: "Chicken Breast",
  //   expDate: "2024-12-05",
  //   category: "Meat",
  //   quantity: 1,
  //   unit: "kg",
  //   isFrozen: true,
  //   isOpened: false,
  // },
  // {
  //   name: "Bread",
  //   expDate: "2024-11-28",
  //   category: "Bakery",
  //   quantity: 1,
  //   unit: "loaf",
  //   isFrozen: false,
  //   isOpened: true,
  // },
  // {
  //   name: "Frozen Peas",
  //   expDate: "2025-02-15",
  //   category: "Vegetable",
  //   quantity: 500,
  //   unit: "grams",
  //   isFrozen: true,
  //   isOpened: false,
  // },
  // {
  //   name: "Cheddar Cheese",
  //   expDate: "2024-12-12",
  //   category: "Dairy",
  //   quantity: 250,
  //   unit: "grams",
  //   isFrozen: false,
  //   isOpened: false,
  // },
  // {
  //   name: "Banana",
  //   expDate: "2024-11-27",
  //   category: "Fruit",
  //   quantity: 6,
  //   unit: "pieces",
  //   isFrozen: false,
  //   isOpened: false,
  // },
  // {
  //   name: "Olive Oil",
  //   expDate: "2026-05-20",
  //   category: "Condiment",
  //   quantity: 1,
  //   unit: "liter",
  //   isFrozen: false,
  //   isOpened: true,
  // },
  // {
  //   name: "Ground Beef",
  //   expDate: "2024-12-02",
  //   category: "Meat",
  //   quantity: 500,
  //   unit: "grams",
  //   isFrozen: true,
  //   isOpened: false,
  //   caloriesPerUnit: 250, // Calories per 100g
  // },
  // {
  //   name: "Yogurt",
  //   expDate: "2024-11-29",
  //   category: "Dairy",
  //   quantity: 4,
  //   unit: "pieces",
  //   isFrozen: false,
  //   isOpened: false,
  // },
];
