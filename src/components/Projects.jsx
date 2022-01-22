import React from "react";

function Projects() {
  return (
    <div className="projects">
      <div className="heading">More of my projects</div>
      <div className="project-section">
        <div className="project-one">
          <h1>My first javascript app</h1>
          <p>
            Sunt id eiusmod mollit dolor fugiat deserunt. Anim aute officia
            minim qui et velit ullamco reprehenderit duis velit ullamco. Aliqua
            dolore in nostrud consectetur ex proident nostrud sit id
            consectetur.
          </p>
          <img src="images/javascript_screenshot.png" alt="javascript-app" />
        </div>
        <div className="project-two">
          <h1>Disney Plus Clone</h1>
          <p>
            Sunt id eiusmod mollit dolor fugiat deserunt. Anim aute officia
            minim qui et velit ullamco reprehenderit duis velit ullamco. Aliqua
            dolore in nostrud consectetur ex proident nostrud sit id
            consectetur.
          </p>
          <img
            src="images/disney_plus_clone_screenshot.png"
            alt="disney-plus-clone"
          />
        </div>
      </div>

      <div className="view-more">View More...</div>
    </div>
  );
}

export default Projects;
