import React from "react";
import "./hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Front-end Developer (React js / Next js)</h1>
          <p>
            Hi, I'm Niraj Lama. I'm passionate about web development. Currently,
            I'm working as a front end developer (React js) at
            ChooseMyBasket.com.
          </p>
          <div className="contact-button">
            <button>Contact Me</button>
            <button>Hire Me!</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="images/avatar_2.png"
            alt="avatar"
            width="100%"
            height="400px"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
