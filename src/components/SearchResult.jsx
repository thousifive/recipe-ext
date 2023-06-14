import React from "react";
import "./SearchResult.css";

const SearchResult = ({ suggestion, setSelectedDish, setSearchTerm, setResults }) => {

  const handleClick = () => {
    if (suggestion.name !== "No Results") {
      setSelectedDish(suggestion);
      setSearchTerm("");
      setResults(false);
    }
  };

  return (
    <div className="search-result" onClick={handleClick}>
      {suggestion.name}
    </div>
  );
};

export default SearchResult;
