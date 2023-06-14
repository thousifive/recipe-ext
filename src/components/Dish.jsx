import React, { useState } from "react";
import RecipeCard from "./RecipeCard";
import SearchBar from "./SearchBar";
import ToolBar from "./ToolBar";
import Modal from "./Modal";
import "./Dish.css";

const Dish = () => {
  const [selectedDish, setSelectedDish] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [searchById, setSearchById] = useState(false);
  const [count, setCount] = useState(undefined);

  return (
    <div className="container">
      <SearchBar setSelectedDish={setSelectedDish} searchById={searchById} />
      <div className="search-id">
        <label for="searchById">Search By Id</label>
        <input
          type="checkbox"
          id="searchById"
          name="searchById"
          value={searchById}
          onChange={() => setSearchById(!searchById)}
        ></input>
      </div>
      <ToolBar count={count} setCount={setCount} setOpenModal={setOpenModal} />
      <RecipeCard recipe={selectedDish} />
      {openModal && <Modal count={count} setOpenModal={setOpenModal} setSelectedDish={setSelectedDish}/>}
    </div>
  );
};

export default Dish;
