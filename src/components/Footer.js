import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Fayima Rahuman. All rights reserved.</p>
        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
