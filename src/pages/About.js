import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-content fade-in">
        <p>
          Hi! I’m Fayima Rahuman, a passionate Web Developer learning React, 
          Flask, and API development. I love creating modern, responsive, 
          and user-friendly websites and applications.
        </p>
        <p>
          I am constantly learning new technologies to improve my skills 
          and deliver professional projects.
        </p>

        <div className="about-images">
          <img src="/images/about1.jpg" alt="About 1" />
          <img src="/images/about2.jpg" alt="About 2" />
          <img src="/images/about3.jpg" alt="About 3" />
        </div>
      </div>
    </section>
  );
}

export default About;
