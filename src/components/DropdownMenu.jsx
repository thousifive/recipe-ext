import React, { useEffect, useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import './DropdownMenu.css'

const DropdownMenu = ({recipes, setSelectedDish}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [recData, setRecData] = useState([...recipes]);
  const [dropdownState, setDropdownState] = useState(recipes[0].name)

  useEffect(() => {
    setRecData(recipes.filter(rec => rec.name !== dropdownState));
    setSelectedDish(recipes.find(rec => rec.name === dropdownState));
  }, [dropdownState])

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    setDropdownState(e.target.innerText)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? 'open' : ''}`}>
      <button className="dropdown-toggle" onClick={toggleMenu}>
        {dropdownState || "Toggle Menu"} <MdOutlineArrowDropDown />
      </button>
      <ul className="dropdown-menu">
        {recData?.map(rec => <li onClick={handleClick}>{rec.name}</li>)}
      </ul>
    </div>
  );
};

export default DropdownMenu;
