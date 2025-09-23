import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import "./Navbar.css";

function Navbar() {
  const { darkMode, setDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <div className="logo-circle">👑</div>
        <span className="logo-text">Queen Fayima</span>
      </div>

      {/* Hamburger menu */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation links */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
        <li><Link to="/experience" onClick={() => setIsOpen(false)}>Experience</Link></li>
        <li><Link to="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link></li>
        <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>

        {/* Theme toggle */}
        <li>
          <button className="theme-btn" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </li>

        {/* CV Download */}
        <li>
          <a href="/fayima-rahuman-cv.pdf" download className="resume-btn">
            Download CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
