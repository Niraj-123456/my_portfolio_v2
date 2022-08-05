import React from "react";
import "./projectworkcard.css";

import Button from "../Button";

function ProjectWorkCard({ project }) {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="card-container">
      <div className="card-media">
        <img src={project.image} alt={project.name} />
      </div>
      <div className="card-content">
        <h1 className="card-title">{project.name}</h1>
        <p className="card-description">{project.description}</p>
      </div>
      <div className="card-button">
        <Button
          label="View"
          style={{ color: "var(--color-pink)" }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default ProjectWorkCard;
