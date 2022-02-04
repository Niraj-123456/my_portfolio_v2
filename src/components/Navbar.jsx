import React from "react";
import { Link } from "react-router-dom";

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
          <li className="active">
            <a className="link-item" href="#">
              Home
            </a>
          </li>
          <li>
            <Link className="link-item" to="portfolio">
              My Work
            </Link>
          </li>
          <li>
            <a className="link-item" href="#">
              About Me
            </a>
          </li>
          <li>
            <button>
              <Link className="link-item" to="contact">
                Contact Me
              </Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <a className="icon-link">
          <i className="fab fa-facebook"></i>
        </a>

        <a className="icon-link">
          <i class="fab fa-instagram"></i>
        </a>

        <a className="icon-link">
          <i class="fab fa-twitter"></i>
        </a>

        <a className="icon-link">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
