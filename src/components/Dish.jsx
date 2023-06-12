import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import "./Dish.css";

const Dish = () => {
  const [selectedDish, setSelectedDish] = useState();

  return (
    <div className="container">
      <SearchBar setSelectedDish={setSelectedDish} />
      <RecipeCard recipe={selectedDish} />
    </div>
  );
};

export default Dish;
