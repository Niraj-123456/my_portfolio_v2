import React from "react";
import { Link } from "react-router-dom";
import "./project.css";

import Button from "../common/Button/Button";

function Project() {
  return (
    <div className="project-container">
      <h1>More of my projects</h1>
      <div className="project-content">
        <div className="project">
          <h1>My first javascript app</h1>
          <p>
            Sunt id eiusmod mollit dolor fugiat deserunt. Anim aute officia
            minim qui et velit ullamco reprehenderit duis velit ullamco. Aliqua
            dolore in nostrud consectetur ex proident nostrud sit id
            consectetur.
          </p>
          <img src="images/javascript_pj.png" alt="javascript-app" />

          <Button
            label="View Project"
            style={{
              background: "var(--color-purple-3)",
              color: "white",
              marginTop: "50px",
            }}
          />
        </div>
        <div className="project">
          <h1>Disney Plus Clone</h1>
          <p>
            Sunt id eiusmod mollit dolor fugiat deserunt. Anim aute officia
            minim qui et velit ullamco reprehenderit duis velit ullamco. Aliqua
            dolore in nostrud consectetur ex proident nostrud sit id
            consectetur.
          </p>
          <img src="images/disney_plus_clone.png" alt="disney-plus-clone" />

          <Button
            label="View Project"
            style={{
              background: "var(--color-purple-3)",
              color: "white",
              marginTop: "50px",
            }}
          />
        </div>

        <div className="view-more">
          <Link to="portfolio">View More...</Link>
        </div>
      </div>
    </div>
  );
}

export default Project;
