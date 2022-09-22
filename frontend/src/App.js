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
    <Router basename="/my_portfolio_v2">
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/portfolio" element={<MyWork data={projectData} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
