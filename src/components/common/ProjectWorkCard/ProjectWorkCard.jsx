import React from "react";
import "./projectworkcard.css";

import Button from "../Button/Button";

function ProjectWorkCard({ project }) {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="card__container">
      <img src={project.image} alt={project.name} className="card__media" />

      <div className="card__overlay">
        <div className="card__content">
          <h1 className="card__title">{project.name}</h1>
          <p className="card__description">{project.description}</p>
          <div className="card__button">
            <Button
              label="View"
              style={{ color: "var(--color-pink)" }}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectWorkCard;
