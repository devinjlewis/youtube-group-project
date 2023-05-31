import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import VideoPage from "./components/VideoPage";
import Modal from "./components/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleModalClose = () => {
    setIsErrorModalOpen(false);
  };

  const handleSearchError = (error) => {
    setErrorMessage(error);
    setIsErrorModalOpen(true);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="title">YouTube Clone</h1>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-content h-100">
          <Routes>
            <Route
              path="/"
              element={<Home onSearchError={handleSearchError} />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/video/:videoId" element={<VideoPage />} />
          </Routes>
        </main>
      </div>
      {isErrorModalOpen && (
        <Modal errorMessage={errorMessage} onClose={handleModalClose} />
      )}
    </Router>
  );
}

export default App;
