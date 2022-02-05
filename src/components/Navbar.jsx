import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav-container">
      <a className="logo" href="#">
        Niraj Lama
      </a>
      <input type="checkbox" className="nav-toggle" id="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label" id="nav-toggle">
        <span></span>
      </label>
      <div className="main-links">
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
            <button>
              <NavLink className="link-item" to="/contact">
                Contact Me
              </NavLink>
            </button>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <a className="icon-link">
          <i className="fab fa-facebook"></i>
        </a>

        <a className="icon-link">
          <i className="fab fa-instagram"></i>
        </a>

        <a className="icon-link">
          <i className="fab fa-twitter"></i>
        </a>

        <a className="icon-link">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
