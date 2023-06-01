import React from "react";

function SearchBox({ value, onChange, onSearch }) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <>
      <div className="container search">
        <div className="row gx-0">
          <div className="col-9">
            <div className="searchcontainer">
              <input
                type="text"
                value={value}
                onChange={onChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter search keyword"
                className="search-input"
              />
            </div>
          </div>
          <div className="col-3">
            <button onClick={onSearch} className="buttontest">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="2em"
                width="2em"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "lightgray" }}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBox;
