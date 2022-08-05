import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

import Button from "../common/Button";

function Projects() {
  return (
    <div className="projects-container">
      <h1>More of my projects</h1>
      <div className="projects-content">
        <div className="projects">
          <h1>My first javascript app</h1>
          <p>
            Sunt id eiusmod mollit dolor fugiat deserunt. Anim aute officia
            minim qui et velit ullamco reprehenderit duis velit ullamco. Aliqua
            dolore in nostrud consectetur ex proident nostrud sit id
            consectetur.
          </p>
          <img src="images/javascript_pj.png" alt="javascript-app" />
          <div className="button-container">
            <Button
              label="View Project"
              style={{
                background: "var(--color-purple-3)",
                color: "white",
                fontSize: "1rem",
              }}
            />
          </div>
        </div>
        <div className="projects">
          <h1>Disney Plus Clone</h1>
          <p>
            Sunt id eiusmod mollit dolor fugiat deserunt. Anim aute officia
            minim qui et velit ullamco reprehenderit duis velit ullamco. Aliqua
            dolore in nostrud consectetur ex proident nostrud sit id
            consectetur.
          </p>
          <img src="images/disney_plus_clone.png" alt="disney-plus-clone" />
          <div className="button-container">
            <Button
              label="View Project"
              style={{
                background: "var(--color-purple-3)",
                color: "white",
                fontSize: "1rem",
              }}
            />
          </div>
        </div>

        <div className="view-more">
          <Link to="portfolio">View More...</Link>
        </div>
      </div>
    </div>
  );
}

export default Projects;
