import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>

      <div className="about-container fade-in">

        {/* Left: Profile Image */}
        <div className="about-image">
          <img
            src={process.env.PUBLIC_URL + "/fayimaimage2.jpg"}
            alt="Fayima Rahuman"
          />
        </div>

        {/* Right: Text */}
        <div className="about-content">

          <p>
            Hi, I’m Fayima Rahuman, an AI-assisted Full Stack Developer
            passionate about building intelligent, practical, and user-focused
            software solutions.
          </p>

          <p>
            I specialize in developing modern web applications, backend
            systems, REST APIs, database-driven platforms, and machine learning
            solutions. My experience includes working with React, JavaScript,
            Python, Flask, PostgreSQL, MySQL, and data science tools such as
            Scikit-learn and Pandas.
          </p>

          <p>
            I have designed and developed real-world applications including an
            AI-powered Dental Clinic Management and No-Show Prediction System,
            which combines machine learning, analytics dashboards, database
            management, and automation to support better decision-making.
          </p>

          <p>
            I use artificial intelligence tools as development partners to
            improve productivity, explore technologies faster, debug challenges,
            and build better solutions while maintaining strong software
            engineering principles.
          </p>

          <p>
            I enjoy transforming ideas into working products, solving complex
            problems through technology, and continuously exploring emerging
            technologies to create impactful digital solutions for businesses
            and communities.
          </p>

        </div>

      </div>
    </section>
  );
}

export default About;