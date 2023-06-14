import React from "react";
import { ReactComponent as TwitterLogo } from "./../assets/twitter.svg";
import { ReactComponent as TelegramLogo } from "./../assets/telegram.svg";
import { ReactComponent as MediumLogo } from "./../assets/medium.svg";
import { ReactComponent as ExternalLogo } from "./../assets/external.svg";
import { ReactComponent as DishLogo } from "./../assets/paella 1.svg";
import "./RecipeCard.css";

const difficultyLevels = ["Easy", "Medium", "Hard"];

const RecipeCard = React.memo(({ recipe }) => {
  
  if (!recipe) {
    return (
      <section className="recipe-container">
        <div className="no-dish">
          <div className="title-no-dish">
            <DishLogo />
            <h3>Recipe Book</h3>
          </div>
          <h4>Selected No Dish</h4>
          <p>Please select one of the dish from above search bar to view</p>
        </div>
      </section>
    );
  }

  const {
    id,
    name,
    description,
    difficulty,
    protein,
    produce,
    spice,
    cookingOil,
    volume,
    serves,
    authenticity,
    stock,
  } = recipe;

  return (
    <section className="recipe-container">
      <div className="title-container">
        <h2 className="title">{id}: {name}</h2>
        <div className="sharing-icons">
          <TwitterLogo />
          <TelegramLogo />
          <MediumLogo />
          <ExternalLogo />
        </div>
      </div>
      <div className="summary">
        <div className="diff-container">
          <DishLogo />
          <p className="difficulty">
            Difficulty: {difficultyLevels[difficulty]}
          </p>
        </div>
        <p>{description}</p>
        <button className="view-button">View Full Recipe</button>
      </div>
      <div className="details">
        <div className="ingredient">
          <p className="ingredients-label">Seafood</p>
          <p className="ingredient-value">{protein}</p>
        </div>
        <div className="ingredient">
          <p className="ingredients-label">Produce</p>
          <p className="ingredient-value produce">{produce}</p>
        </div>
        <div className="ingredient">
          <p className="ingredients-label">Spices</p>
          <p className="ingredient-value gradient">{spice}</p>
        </div>
        <div className="ingredient">
          <p className="ingredients-label">Olive Oil</p>
          <p className="ingredient-value gradient">{cookingOil}</p>
        </div>
        <div className="ingredient">
          <p className="ingredients-label">Volume/Weight</p>
          <p className="ingredient-value">{volume}</p>
        </div>
        <div className="ingredient">
          <p className="ingredients-label">Serves</p>
          <p className="ingredient-value">{serves}</p>
        </div>
        <div className="ingredient">
          <p className="ingredients-label">Authenticity</p>
          <p className="ingredient-value gradient">{authenticity}</p>
        </div>
        <div className="ingredient">
          <p className="ingredients-label">Stock</p>
          <p className="ingredient-value gradient">{stock}</p>
        </div>
      </div>
    </section>
  );
});

export default RecipeCard;
