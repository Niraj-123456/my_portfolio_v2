import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
// import NotFound from "./components/NotFound/NotFound";
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
          <Route index path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
