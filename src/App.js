import React, { useState } from "react";
import logo from "./assets/images/logo.svg";
import "./App.css";
import { Outlet, Link } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰ {/* Hamburger icon */}
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <ul className="nav">
            <li>
              <Link to={``} className="custom-link" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to={`contact_us`}
                className="custom-link"
                onClick={toggleMenu}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to={`privacy_policy`}
                className="custom-link"
                onClick={toggleMenu}
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to={`how_to`} className="custom-link" onClick={toggleMenu}>
                How to
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </div>
  );
}

export default App;
