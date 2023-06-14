import React, { useEffect } from "react";
import { getTotalRecipes } from "../services";
import "./ToolBar.css"

const ToolBar = ({count, setCount, setOpenModal}) => {
  // const [count, setCount] = useState(undefined);

  const setTotalCount = async() => {
    const total = await getTotalRecipes();
    setCount(total);
  }

  const handleClick = () => {
    setOpenModal(true);
  }

  useEffect(() => {
    setTotalCount();
  });

  return (
    <div className="toolbar-container">
      {count && <div><span className="total-recipes">Total Recipes: </span>{count}</div>}
      <button className="add-recipe" onClick={handleClick}>+ Add</button>
    </div>
  );
};

export default ToolBar;
