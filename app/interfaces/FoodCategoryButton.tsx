export interface FoodCategoryButtonProps {
  selectedCategory: string | null;
  cat: string;
  onClick: (cat: string) => void;
}