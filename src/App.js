// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // ✅ Import Footer

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Testimonials from "./pages/Testimonials";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Navbar at the top */}
      <Navbar />

      {/* Page content */}
      <main style={{ minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </Router>
  );
}

export default App;
