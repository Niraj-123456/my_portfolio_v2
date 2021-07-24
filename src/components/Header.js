import React from "react";

function Header() {
  return (
    <div class="header">
      <nav class="nav-container">
        <a class="logo" href="#">
          Niraj Lama
        </a>
        <div class="main-links">
          <ul class="nav-links">
            <li>
              <a class="link-item" href="#">
                My Work
              </a>
            </li>
            <li>
              <a class="link-item" href="#">
                About Me
              </a>
            </li>
            <li>
              <a class="link-item" href="#">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div class="social-links">
          <ul class="nav-links">
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
    </div>
  );
}

export default Header;
