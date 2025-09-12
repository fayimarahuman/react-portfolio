import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Testimonials from "./pages/Testimonials";
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact"; // ✅ Import Contact page
import "./styles/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/experience">Experience</Link></li>
              <li><Link to="/testimonials">Testimonials</Link></li>
              <li><Link to="/achievements">Achievements</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li> {/* ✅ Added Contact link */}
            </ul>
            <button onClick={toggleDarkMode}>
              {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
            </button>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} /> {/* ✅ Added Contact route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
