import React from "react";
import Buttons from "./common/buttons";

function Featured() {
  return (
    <div className="featured">
      <div className="featured-wrapper">
        <h1>Featured Project</h1>
        <h2>Social Media App (My Version Of Facebook)</h2>
        <p>
          loNon adipisicing culpa dolore pariatur esse mollit amet aute ea
          consequat. Deserunt adipisicing Lorem ea adipisicing officia eu minim
          ipsum laboris sit deserunt proident ipsum. Irure magna cillum
          consectetur do excepteur id quis id. Et elit cupidatat nostrud qui
          minim sunt in. Qui officia enim laborum sint nulla.
        </p>
        <img
          src="images/social_media_app_screenshot.jpg"
          alt="featured-project"
        />
        <Buttons />
      </div>
    </div>
  );
}

export default Featured;
