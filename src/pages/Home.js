// src/pages/Home.js

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const [currentWord, setCurrentWord] = useState(0);
  const [text, setText] = useState("");
  const navigate = useNavigate();

  // Typing animation
  useEffect(() => {
    const words = [
      "AI-Assisted Full Stack Developer",
      "Machine Learning Enthusiast",
      "Software Solution Builder",
      "Problem Solver & Innovator",
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

    }, 100);

    return () => clearInterval(typingInterval);

  }, [currentWord]);


  return (
    <section className="homepage" id="home">

      {/* Intro Section */}
      <div className="intro">

        <h1>
          Hello, I’m{" "}
          <span className="highlight">
            Fayima Rahuman
          </span>
        </h1>


        <h2>
          I am an{" "}
          <span className="typing">
            {text}
          </span>
        </h2>


        <p className="tagline">
          I build intelligent digital solutions by combining full-stack
          development, machine learning, and AI-assisted workflows to solve
          real-world problems.
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
            alt="Software Project"
          />


          <img
            src={process.env.PUBLIC_URL + "/images/projectimage2.jpg"}
            alt="Development Project"
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