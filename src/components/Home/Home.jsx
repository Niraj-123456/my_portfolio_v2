import React from "react";
import Hero from "../Hero/Hero";
import Featured from "../Featured/Featured";
import Skills from "../Skills/Skills";
import Project from "../Project/Project";
import "./home.css";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Skills />
      <Project />
    </>
  );
}

export default Home;
