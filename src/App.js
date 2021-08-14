import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Featured />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
