import React from "react";

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
            <a className="link-item" href="#">
              My Work
            </a>
          </li>
          <li>
            <a className="link-item" href="#">
              About Me
            </a>
          </li>
          <li>
            <a className="link-item" href="#">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <div className="social-links">
        <a className="icon-link">
          <img src="images/facebook-circular-logo.png" alt="Facebook" />
        </a>

        <a className="icon-link">
          <img src="images/instagram.svg" alt="Instagram" />
        </a>

        <a className="icon-link">
          <img src="images/twitter.png" alt="Twitter" />
        </a>

        <a className="icon-link">
          <img src="images/github.svg" alt="Github" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
