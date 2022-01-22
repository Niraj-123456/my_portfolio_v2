import React from "react";

function Navbar() {
  return (
    <nav className="nav-container">
      <a className="logo" href="#">
        Niraj Lama
      </a>
      <p className="hamburger"></p>
      <div className="main-links">
        <ul className="nav-links">
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
        <ul className="nav-links">
          <li>
            <a className="link-item">
              <img src="images/facebook-circular-logo.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a className="link-item">
              <img src="images/instagram.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a className="link-item">
              <img src="images/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a className="link-item">
              <img src="images/github.svg" alt="Github" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
