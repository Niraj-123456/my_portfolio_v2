import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <nav className="nav-container">
      <div className="nav-content">
        <a className="logo" href="/">
          Niraj Lama
        </a>
        <input type="checkbox" className="nav-toggle" id="nav-toggle" />
        <label
          htmlFor="nav-toggle"
          className="nav-toggle-label"
          id="nav-toggle"
        >
          <span></span>
        </label>

        <ul className="nav-links">
          <li>
            <NavLink className="link-item" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="link-item" to="/portfolio">
              My Work
            </NavLink>
          </li>
          <li>
            <NavLink className="link-item" to="/aboutme">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
