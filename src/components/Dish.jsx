import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import RecipeCard from "./RecipeCard";
import "./Dish.css";

const recList = [
  {
    name: "Spanish Pella",
    difficulty: "Medium",
    seafood: "Jumbo Shrimp",
    produce: "Onion / Tomatoes",
    spices: "Bay Leaf / Saffron",
    oliveOil: "Spanish Olive Oil",
    volume: "700g",
    serves: 4,
    authenticity: "Unverified",
    stock: "Chicken",
    shortSummary:
      "Spanish paella is a traditional rice dish that originated in the Valencia region of Spain. It was originally made with ingredients such as saffron, rabbit, and snails, which were common in the area.",
  },
  {
    name: "Biryani",
    difficulty: "Medium",
    seafood: "None",
    produce: "Onion / Tomatoes",
    spices: "Bay Leaf / Saffron",
    oliveOil: "NA",
    volume: "1Kg",
    serves: 4,
    authenticity: "Unverified",
    stock: "Chicken",
    shortSummary:
      "Biryani is a traditional rice dish that originated in the Indian region. It was originally made with ingredients such as saffron, meat, and spices, which were common in the area.",
  },
  {
    name: "Omurice",
    difficulty: "Easy",
    seafood: "NA",
    produce: "Onion / Tomatoes",
    spices: "Cinnamon",
    oliveOil: "Oil",
    volume: "200g",
    serves: 1,
    authenticity: "Unverified",
    stock: "Chicken",
    shortSummary:
      "Omurice is a japanese traditional rice dish that originated in the kyoto region of Japan. It was originally made with ingredients such as Egg, rice, and chicken.",
  },
];

const Dish = () => {
  const [selectedDish, setSelectedDish] = useState(recList[0]);

  return (
    <div className="container">
      <DropdownMenu recipes={recList} setSelectedDish={setSelectedDish} />
      <RecipeCard recipe={selectedDish} />
    </div>
  );
};

export default Dish;
