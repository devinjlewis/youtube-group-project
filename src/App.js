import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import VideoPage from "./components/VideoPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <h1 className="title">
            <Link to="/" className="title-link">
              YouTube Clone
            </Link>
          </h1>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="main-content h-100">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/video/:videoId" element={<VideoPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
