import React from "react";
import "./SearchResult.css";

const SearchResult = ({ suggestion, setSelectedDish, setSearchTerm }) => {
  const handleClick = () => {
    if (suggestion.name !== "No Results") {
      setSelectedDish(suggestion);
      setSearchTerm("");
    }
  };

  return (
    <div className="search-result" onClick={handleClick}>
      {suggestion.name}
    </div>
  );
};

export default SearchResult;
