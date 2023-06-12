import React, { useEffect, useState, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
import { debounceFn } from "../utils";
import "./SearchBar.css";

const API_URL =
  "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/yumazoo/recipes";

const SearchBar = ({ setSelectedDish }) => {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const debouncedGetRecipes = useCallback(debounceFn(getRecipes, 300), []);

  useEffect(() => {
    if (searchTerm) {
      debouncedGetRecipes(searchTerm);
    } else {
      setRecipes([]);
    }
  }, [debouncedGetRecipes, searchTerm]);

  async function getRecipes(searchText) {
    try {
      const response = await fetch(API_URL);
      const { message } = await response.json();
      const filteredRecipes = message?.filter((rec) =>
        rec.name.toLowerCase().includes(searchText.toLowerCase())
      ) ?? [];
      setRecipes(filteredRecipes);
    } catch (e) {
      alert(e);
      console.error(e);
    }
  }

  return (
    <div className="search-container">
      <div className="search-bar">
        <FaSearch id="search-icon " />
        <input
          type="text"
          placeholder="Search cousine..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {searchTerm && (
        <div className="search-results">
          {recipes.length > 0 ? (
            recipes.map((sug, id) => (
              <SearchResult
                key={id}
                suggestion={sug}
                setSelectedDish={setSelectedDish}
                setSearchTerm={setSearchTerm}
              />
            ))
          ) : (
            <SearchResult suggestion={{ name: "No Results" }} />
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
