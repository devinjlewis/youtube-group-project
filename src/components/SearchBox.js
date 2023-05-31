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
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchBox;
