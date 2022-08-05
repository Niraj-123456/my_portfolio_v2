import React from "react";
import Hero from "../Hero/Hero";
import Featured from "../Featured/Featured";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import "./home.css";

function Home() {
  return (
    <main className="home-wrapper">
      <Hero />
      <Featured />
      <Skills />
      <Projects />
    </main>
  );
}

export default Home;
