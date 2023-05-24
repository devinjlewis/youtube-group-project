// Header.js
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
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
  );
}

export default Header;
