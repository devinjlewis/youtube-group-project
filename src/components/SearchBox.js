import React, { useState } from "react";

function SearchBox({ value, onChange, onSearch }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-box">
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        placeholder="Enter search keyword"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBox;
