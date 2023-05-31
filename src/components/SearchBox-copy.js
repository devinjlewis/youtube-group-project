import React from "react";

function SearchBox({ value, onChange, onSearch }) {
    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            onSearch();
        }
    };

    return (
        <div className="container search">
            <div className="row gx-0">
                <div className="col-9">
                    <input
                        type="text"
                        value={value}
                        onChange={onChange}
                        onKeyPress={handleKeyPress}
                        placeholder="Enter search keyword"
                        className="form-control"
                    />
                </div>
                <div className="col-3">
                    <button
                        onClick={onSearch}
                        className="btn btn-outline-danger s50"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchBox;
