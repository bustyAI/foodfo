import Image from "next/image";
import React from "react";

interface foodProps {
  name: string;
  expDate: string;
  category: string;
}

const FoodCard = ({ name, expDate, category }: foodProps) => {
  return (
    <div className="bg-white border rounded-lg p-4 shadow-md m-4">
      <Image src={"/avocado.png"} height={100} width={100} alt="food-picture" />
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">Category: {category}</p>
      <p className="text-gray-400">Expiration Date: {expDate}</p>
    </div>
  );
};

export default FoodCard;
