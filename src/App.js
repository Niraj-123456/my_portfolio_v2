import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import { projectData } from "./data";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<MyWork data={projectData} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
