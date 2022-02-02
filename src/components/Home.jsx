import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";
import Skills from "./Skills";
import Projects from "./Projects";

function Home() {
  return (
    <div className="homeWrapper">
      <Hero />
      <Featured />
      <Skills />
      <Projects />
    </div>
  );
}

export default Home;
