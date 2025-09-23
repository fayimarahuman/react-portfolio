import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Card 1: Web & Figma */}
        <div className="project-card">
          <div className="project-info">
            <h3>Web Development & Figma Designs</h3>
            <p>
              I have been learning and creating modern web projects using React, 
              HTML, CSS, and Flask for backend APIs. Alongside web development, 
              I design UI/UX layouts and prototypes using Figma to make interfaces 
              intuitive and visually appealing.
            </p>
            <div className="project-links">
              <button className="project-link" onClick={() => window.open("https://www.figma.com/proto/Y8NzQWw0wF7QYMxbfTD3E8/figma-website?node-id=392-78&t=dticux3DnwL0w8Ze-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=263%3A190", "_blank")}>
                Figma Designs
              </button>
              <button className="project-link" onClick={() => window.open("https://carolineways.com/", "_blank")}>
                Web Projects
              </button>
            </div>
          </div>
        </div>

        {/* Card 2: Graphics */}
        <div className="project-card">
          <div className="project-info">
            <h3>Graphics Work</h3>
            <p>
              I create creative graphics, banners, logos, and digital artwork. 
              My goal is to combine visual aesthetics with creativity to deliver 
              professional and eye-catching designs.
            </p>
           <button 
            className="project-link" 
            onClick={() => window.open("/graphics_portfolio.pdf", "_blank")}
            >
            Graphics Portfolio
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
