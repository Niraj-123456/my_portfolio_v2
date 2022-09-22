import React from "react";
import "./featured.css";

import Button from "../common/Button/Button";

function Featured() {
  return (
    <div className="featured-container">
      <div className="featured-content">
        <h1>Featured Project</h1>
        <h2>Social Media App (My Version Of Facebook)</h2>
        <p>
          It is a basic blog app built with React Js and Firebase with features
          like adding, editing and deleting blogs by the user. Users can
          register and log in to the system. Authentication has been implemented
          using the firebase default auth.
        </p>
        <img
          src="images/social_media_app_screenshot.JPG"
          alt="featured-project"
        />
        <div className="featured-buttons">
          <Button
            label="View Project"
            style={{
              background: "var(--color-purple-3)",
              color: "white",
            }}
          />
          <Button
            label="View Source Code"
            style={{
              background: "var(--color-purple-3)",
              color: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Featured;
