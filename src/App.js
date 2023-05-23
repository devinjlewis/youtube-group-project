import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
    const [searchInput, setSearchInput] = useState("");
    const [isEmptySearch, setIsEmptySearch] = useState(false);

    const handleSearch = () => {
        if (searchInput.trim() === "") {
            setIsEmptySearch(true);
        } else {
            setIsEmptySearch(false);
        }
    };

    useEffect(() => {
        setIsEmptySearch(searchInput.trim() === "");
    }, [searchInput]);

    return (
        <div className="app">
            <header className="header">
                <h1 className="title">YouTube Clone</h1>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main className="main-content">
                <div className="search-container">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                    {isEmptySearch && (
                        <p className="search-message">
                            No search yet! Please submit a search above.
                        </p>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
