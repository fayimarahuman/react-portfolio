// src/pages/Home.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const [text, setText] = useState("");
  const navigate = useNavigate(); // ✅ React Router navigation

  // Typing animation
  useEffect(() => {
    const words = [
      "Computer Scientist",
      "Web & App Developer",
      "UI/UX Designer",
      "Graphics Enthusiast",
    ];
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(words[currentWord].substring(0, index + 1));
      index++;
      if (index === words[currentWord].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWord((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 120);
    return () => clearInterval(typingInterval);
  }, [currentWord]);

  return (
    <section className="homepage" id="home">
      {/* Intro Section */}
      <div className="intro">
        <h1>
          Hello, I’m <span className="highlight">Fayima Rahuman</span>
        </h1>
        <h2>
          I am a <span className="typing">{text}</span>
        </h2>
        <p className="tagline">
          I design and develop modern, responsive, and user-focused digital
          solutions that bring ideas to life.
        </p>
      </div>

      {/* Media Section */}
      <div className="media-section">
        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source
              src={process.env.PUBLIC_URL + "/projectvideo.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="images-container">
          <img
            src={process.env.PUBLIC_URL + "/images/projectimage1.jpg"}
            alt="Project 1"
          />
          <img
            src={process.env.PUBLIC_URL + "/images/projectimage2.jpg"}
            alt="Project 2"
          />
        </div>
      </div>

      {/* Call-to-Action Buttons */}
      <div className="hero-buttons">
        <a
          href={process.env.PUBLIC_URL + "/fayima rahuman CV[1].pdf"}
          download
          className="btn btn-primary"
        >
          Download CV
        </a>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/about")}
        >
          About Me
        </button>
      </div>
    </section>
  );
}

export default Home;
