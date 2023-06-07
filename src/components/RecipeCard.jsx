import React from "react";
import { ReactComponent as TwitterLogo } from "./../assets/twitter.svg";
import { ReactComponent as TelegramLogo } from "./../assets/telegram.svg";
import { ReactComponent as MediumLogo } from "./../assets/medium.svg";
import { ReactComponent as ExternalLogo } from "./../assets/external.svg";
import { ReactComponent as DishLogo } from "./../assets/paella 1.svg";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="recipe-container">
      <div className="title-container">
        <div className="title">{recipe.name}</div>
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
          <p className="difficulty">Difficulty: {recipe.difficulty}</p>
        </div>
        <p>{recipe.shortSummary}</p>
        <button className="view-button">View Full Recipe</button>
      </div>
      <div className="details">
        <div className="ingredient">
          <p className="ingredients-label">Seafood</p>
          <p className="ingredient-value">{recipe.seafood}</p>
        </div>
        <div className="ingredient">
            <p className="ingredients-label">Produce</p>
            <p className="ingredient-value produce">{recipe.produce}</p>
          </div>
          <div className="ingredient">
            <p className="ingredients-label">Spices</p>
            <p className="ingredient-value gradient">{recipe.spices}</p>
          </div>
          <div className="ingredient">
            <p className="ingredients-label">Olive Oil</p>
            <p className="ingredient-value gradient">{recipe.oliveOil}</p>
          </div>
          <div className="ingredient">
            <p className="ingredients-label">Volume/Weight</p>
            <p className="ingredient-value">{recipe.volume}</p>
          </div>
          <div className="ingredient">
            <p className="ingredients-label">Serves</p>
            <p className="ingredient-value">{recipe.serves}</p>
          </div>
          <div className="ingredient">
            <p className="ingredients-label">Authenticity</p>
            <p className="ingredient-value gradient">{recipe.authenticity}</p>
          </div>
          <div className="ingredient">
            <p className="ingredients-label">Stock</p>
            <p className="ingredient-value gradient">{recipe.stock}</p>
          </div>
      </div>
    </div>
  );
};

export default RecipeCard;
