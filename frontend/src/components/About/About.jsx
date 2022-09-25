import React from "react";
import "./about.css";

import MyGoogleMap from "../GoogleMap/GoogleMap";

function About() {
  return (
    <div className="about-container">
      <div className="about-wrapper">
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            corrupti expedita fuga quis explicabo minus at pariatur ex deleniti.
            Similique, impedit. Ipsum, labore officia laborum rem consequatur
            iusto esse nam! Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. <br />
            <br />
            Odio corrupti expedita fuga quis explicabo minus at pariatur ex
            deleniti. Similique, impedit. Ipsum, labore officia laborum rem
            consequatur iusto esse nam! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. <br /> <br />
            Odio corrupti expedita fuga quis explicabo minus at pariatur ex
            deleniti. Similique, impedit. Ipsum, labore officia laborum rem
            consequatur iusto esse nam!
          </p>
          <div className="social-links">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-github"></i>
          </div>
        </div>
        <div className="about-img">
          <img src="images/about_me.png" alt="About_Me_Img" />
        </div>
      </div>
      <div className="google__maps">
        <h1>Google Map</h1>
        <MyGoogleMap />
      </div>
    </div>
  );
}

export default About;
