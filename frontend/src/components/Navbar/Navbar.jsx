import React, { useState } from "react";
import "./navbar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showMainLinks, setShowMainLinks] = useState(false);

  const handleShowMainLinks = () => {
    setShowMainLinks(!showMainLinks);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <a className="logo" href="/">
          Niraj Lama
        </a>
        <FontAwesomeIcon
          icon={faBars}
          className="toggle-icon"
          onClick={handleShowMainLinks}
        />

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

        <ul
          className="responsive-nav-links"
          style={showMainLinks ? { display: "block" } : { display: "none" }}
        >
          <li>
            <NavLink to="/" onClick={() => setShowMainLinks(false)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={() => setShowMainLinks(false)}>
              My Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/aboutme" onClick={() => setShowMainLinks(false)}>
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setShowMainLinks(false)}>
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
