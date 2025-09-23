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
            Hi! I’m Fayima Rahuman, a computer scientist with a passion for building 
            modern and efficient digital solutions. I specialize in web and app development, 
            UI/UX design, and graphic design, combining technical knowledge with creativity 
            to create responsive, intuitive, and visually appealing projects.
          </p>

          <p>
            Throughout my diploma in Computer Science, I have gained experience with 
            technologies like React, Flask, JavaScript, HTML, CSS, SQL, and Python, 
            building full-stack applications that are both functional and user-friendly. 
            I also design interfaces and prototypes using Figma to ensure professional 
            and intuitive user experiences.
          </p>

          <p>
            I enjoy solving problems through technology, continuously learning new tools, 
            and applying my skills to deliver high-quality projects. My approach is 
            collaborative, detail-oriented, and focused on creating solutions that 
            make a real impact.
          </p>

          <p>
            My goal is to become a versatile software engineer and creative graphics designer, 
            combining logic and design to develop applications and digital experiences 
            that are both powerful and aesthetically engaging.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
