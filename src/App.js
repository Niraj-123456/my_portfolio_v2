import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<MyWork />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
