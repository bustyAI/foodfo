import React from 'react'
import { FoodCategoryButtonProps } from '../interfaces/FoodCategoryButton'

const FoodCategoryButton = ({selectedCategory, cat, onClick} : FoodCategoryButtonProps) => {
  return (
    <button
    onClick={() => onClick(cat)}
    className={`${selectedCategory === cat ? "bg-orange-400" : " bg-orange-400/50"} p-2 w-min rounded-lg`}
  >
    <div className='flex flex-row'>
    <h1 className={`${selectedCategory === cat ? "font-bold" : ""}`}>{cat}</h1>
    </div>

  </button>
  )
}

export default FoodCategoryButton