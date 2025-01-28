"use client";
import React, { useState } from "react";

import foodCategories from "@/utils/data";
import FoodCategoryButton from "./FoodCategoryButton";

const CategorySearch = ({
  onCategorySelect,
}: {
  onCategorySelect: (category: string | null) => void;
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const toggleSelected = (cat: string) => {
    const newCategory = selectedCategory === cat ? null : cat;
    setSelectedCategory(newCategory);
    onCategorySelect(newCategory);
  };

  return (
    <div className="flex justify-center flex-row flex-wrap gap-6 m-2">
      {foodCategories.map((cat) => (
        <FoodCategoryButton
          key={cat}
          selectedCategory={selectedCategory}
          cat={cat}
          onClick={() => toggleSelected(cat)}
        />
      ))}
    </div>
  );
};

export default CategorySearch;
