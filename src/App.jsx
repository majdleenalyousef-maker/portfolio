import { Routes, Route } from "react-router-dom";
import Header from "./component/1-header/Header";
import Footer from "./component/5-footer/Footer";
import Home from "./pages/Home";
import About from "./pages/1-about/About";
import Projects from "./component/3-main/Main";
import Contact from "./component/4-contact/Contact";
import ProjectDetails from "./pages/projects/ProjectDetails";
import { useEffect, useState } from "react";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="up" className="container">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>

      <Footer />

      <a
        href="#up"
        style={{
          opacity: showScroll ? 1 : 0,
          pointerEvents: showScroll ? "auto" : "none",
          transition: "opacity 0.4s ease-in-out",
        }}
        aria-label="Scroll to top"
      >
        <button className="scroll2Top icon-keyboard_arrow_up"></button>
      </a>
    </div>
  );
}

export default App;
