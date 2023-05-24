import React from "react";

function SearchBox({ value, onChange, onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBox;
