import React from "react";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1>Begineer Front-end Developer (React Js)</h1>
        <p>
          Hi, I'm Niraj Lama. I'm passionate about front-end development.
          Currently, Working as a digital marketer but looking internship in
          React Js to start a career as React Js developer.
        </p>
        <div className="contact-button">
          <button>Contact Me</button>
          <button>Hire Me!</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="images/avatar_2.png" alt="avatar" />
      </div>
    </div>
  );
}

export default Hero;
