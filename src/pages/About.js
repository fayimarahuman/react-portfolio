import React from "react";
import "../styles/About.css";

function About() {
  return (
    <section className="about" id="about">
      <h2>About Me</h2>
      <div className="about-container fade-in">
        {/* Left: Profile Image */}
        <div className="about-image">
          <img src="/fayimaimage2.jpg" alt="Fayima Rahuman" />
        </div>

        {/* Right: Text */}
        <div className="about-content">
          <p>
            Hi! I’m Fayima Rahuman, a passionate and dedicated Web Developer. 
            Since starting my diploma in Computer Science, I have been diving deep 
            into modern web technologies like React for frontend development, 
            Flask for backend APIs, and building full-stack projects that are 
            responsive, dynamic, and user-friendly.
          </p>

          <p>
            I enjoy turning ideas into real-world applications and continuously 
            improving my coding skills. My journey has included working with 
            JavaScript, HTML, CSS, SQL, Python, and frameworks that help me 
            create efficient and professional projects. I take pride in clean, 
            maintainable code and learning best practices along the way.
          </p>

          <p>
            Beyond coding, I am curious, highly motivated, and enjoy solving 
            problems with technology. I thrive in collaborative environments, 
            love exploring new tools, and am always seeking opportunities to 
            build impactful solutions that make a difference.
          </p>

          <p>
            My dream is to become a versatile software engineer and a creative 
            graphic designer. I aim to combine technical expertise with design 
            skills to create applications that are not only functional but also 
            visually appealing.
          </p>

          <p>
            Whether it’s building websites, APIs, interactive interfaces, or 
            designing graphics, I am committed to growth, excellence, and 
            delivering professional projects that showcase both creativity and 
            technical proficiency.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
