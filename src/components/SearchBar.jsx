import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import SearchResult from "./SearchResult";
import "./SearchBar.css";

const SearchBar = ({ recipes, setSelectedDish }) => {
  const [suggestions, setSuggestions] = useState(recipes);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSuggestions(recipes.filter(rec => rec.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }, [searchTerm])


  return (
    <div className="search-container">
      <div className="search-bar">
        <FaSearch id="search-icon " />
        <input type="text" placeholder="Search cousine..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      {searchTerm && (<div className="search-results">
        {suggestions.length > 0 ? suggestions.map(sug => <SearchResult suggestion={sug} setSelectedDish={setSelectedDish} setSearchTerm={setSearchTerm}/>): <SearchResult suggestion={{name: "No Results"}} />}
      </div>)}
    </div>
  );
};

export default SearchBar;
