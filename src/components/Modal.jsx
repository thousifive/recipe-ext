import React, { useState } from "react";
import { addRecipe } from "../services";
import "./Modal.css";

const initialState = {
  name: "",
  description: "",
  difficulty: "",
  origin: "",
  protein: "",
  produce: "",
  spice: "",
  cookingOil: "",
  volume: "",
  serves: "",
  authenticity: "",
  stock: "",
};

const Modal = ({ count, setOpenModal, setSelectedDish }) => {
  const [recipe, setRecipe] = useState(initialState);

  const handleSave = async() => {
    const {
      name,
      description,
      difficulty,
      origin,
      protein,
      produce,
      spice,
      cookingOil,
      volume,
      serves,
      authenticity,
      stock,
    } = recipe;

    if (
      !name ||
      !description ||
      !difficulty ||
      !origin ||
      !protein ||
      !produce ||
      !spice ||
      !cookingOil ||
      !volume ||
      !serves ||
      !authenticity ||
      !stock
    ) {
      alert("Please add all required details");
      return;
    }

    if (origin.length > 2) {
      alert("Origin can't be more than 2 letters");
      return;
    }

    if (Number(difficulty) > 2 || Number(difficulty) < 0) {
      alert("Difficulty can't be more than 2 & less than 0");
      return;
    }

    const done = await addRecipe(recipe);
    if (done) {
      recipe.id = count+1
      setSelectedDish(recipe);
      setOpenModal(false);
      setRecipe(initialState);
    }
  };

  const handleCancel = () => {
    setOpenModal(false);
    setRecipe(initialState);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="form-title">
          <p>Add Recipe</p>
        </div>
        <div>
          <form className="form-add">
            <div className="name-desc">
              <input
                id="form-name"
                type="text"
                placeholder="Name"
                value={recipe.name}
                name="name"
                onChange={handleInputChange}
              />
              <input
                type="number"
                max={2}
                min={0}
                value={recipe.difficulty}
                placeholder="Difficulty in number"
                name="difficulty"
                onWheel={(e) => e.target.blur()}
                onChange={handleInputChange}
              />
              <textarea
                id="desc"
                rows={3}
                cols={38}
                value={recipe.description}
                placeholder="Description"
                name="description"
                onChange={handleInputChange}
              />
            </div>
            <div className="ingredients">
              <input
                type="text"
                maxLength={2}
                value={recipe.origin}
                placeholder="Origin"
                name="origin"
                onChange={handleInputChange}
              />
              <input
                type="text"
                value={recipe.protein}
                placeholder="SeaFood"
                name="protein"
                onChange={handleInputChange}
              />
              <input
                type="text"
                value={recipe.produce}
                placeholder="Produce"
                name="produce"
                onChange={handleInputChange}
              />
              <input
                type="text"
                value={recipe.spice}
                placeholder="Spices"
                name="spice"
                onChange={handleInputChange}
              />
              <input
                type="text"
                value={recipe.cookingOil}
                placeholder="Olive Oil"
                name="cookingOil"
                onChange={handleInputChange}
              />
              <input
                type="number"
                value={recipe.volume}
                placeholder="Volume/Weight"
                name="volume"
                onWheel={(e) => e.target.blur()}
                onChange={handleInputChange}
              />
              <input
                type="number"
                value={recipe.serves}
                placeholder="Serves"
                name="serves"
                onWheel={(e) => e.target.blur()}
                onChange={handleInputChange}
              />
              <input
                type="text"
                value={recipe.authenticity}
                placeholder="Authenticity"
                name="authenticity"
                onChange={handleInputChange}
              />
              <input
                type="text"
                value={recipe.stock}
                placeholder="Stock"
                name="stock"
                onChange={handleInputChange}
              />
            </div>
          </form>
        </div>
        <div className="buttons">
          <button className="save-button" onClick={handleSave}>
            Save
          </button>
          <button className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
