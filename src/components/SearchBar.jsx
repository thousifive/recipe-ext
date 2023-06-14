import React, { useEffect, useState, useCallback, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
import { debounceFn } from "../utils";
import { getRecipes, getRecipeById } from "../services";
import "./SearchBar.css";

const SearchBar = ({ setSelectedDish, searchById }) => {
  const refEle = useRef(null);

  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    document.addEventListener("click", handlleClickOutside, true)
  },[])

  // eslint-disable-next-line
  const debouncedGetRecipes = useCallback(debounceFn(loadRecipes, 300), []);

  useEffect(() => {
    if (searchTerm) {
      debouncedGetRecipes(searchTerm);
    } else {
      setRecipes([]);
    }
  }, [debouncedGetRecipes, searchTerm]);

  const handlleClickOutside = (e) => {
    if(!refEle.current?.contains(e.target)) setResults(false);
  }

  async function loadRecipes(searchText) {
    try {
      const allRecipes = await getRecipes();
      if (allRecipes) {
        const filteredRecipes =
          allRecipes.filter((rec, id) => {
            if (rec.name.toLowerCase().includes(searchText.toLowerCase())) {
              rec.id = id;
              return rec;
            }
          }) ?? [];
        setRecipes(filteredRecipes);
        setResults(true);
      } else {
        setRecipes([]);
        setResults(false);
      }
    } catch (e) {
      alert(e);
      console.error(e);
    }
  }

  const handleSearch = async () => {
    const recipe = await getRecipeById(id);
    if (recipe) {
      recipe.id = id;
      setSelectedDish(recipe);
      setId('');
      setSearchTerm('');
    } else setId('');
  };

  return (
    <div className="search-container">
      <div className="search-bar">
        <FaSearch id="search-icon " />
        {!searchById ? (
          <input
            type="text"
            placeholder="Search cousine..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        ) : (
          <div className="search-by-id">
            <input
              type="number"
              placeholder="Enter Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <button className="search-button" disabled={id<0 || id===""} onClick={handleSearch}>
              Search
            </button>
          </div>
        )}
      </div>
      {!searchById && searchTerm && results && (
        <div className="search-results" ref={refEle}>
          {recipes.length > 0 ? (
            recipes.map((sug, id) => (
              <SearchResult
                key={sug.id}
                suggestion={sug}
                setSelectedDish={setSelectedDish}
                setSearchTerm={setSearchTerm}
                setResults={setResults}
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
