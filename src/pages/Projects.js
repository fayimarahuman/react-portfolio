import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        {/* Project 1: Dental AI System */}
        <div className="project-card">
          <div className="project-info">

            <h3>
              AI-Powered Dental Clinic Management & No-Show Prediction System
            </h3>

            <p>
              An intelligent healthcare management system developed to improve
              dental clinic operations through analytics, automation, and
              machine learning. The system includes appointment management,
              patient records, inventory tracking, dashboards, and an AI model
              that predicts appointment no-shows.
            </p>

            <p>
              <strong>Technologies:</strong> Python, Streamlit, Scikit-learn,
              Pandas, PostgreSQL, Machine Learning, Data Visualization
            </p>

            <div className="project-links">

              <button
                className="project-link"
                onClick={() =>
                  window.open(
                    "https://github.com/fayimarahuman/shallom-dental-clinic",
                    "_blank"
                  )
                }
              >
                GitHub
              </button>

              <button
                className="project-link"
                onClick={() =>
                  window.open(
                    "https://shallom-dental-clinic-yoj8kzapfk4c5vsurtnq5z.streamlit.app/",
                    "_blank"
                  )
                }
              >
                Live Demo
              </button>

            </div>

          </div>
        </div>


        {/* Project 2: Caroline Ways Website */}
        <div className="project-card">
          <div className="project-info">

            <h3>
              Caroline Ways Ltd Product Display Website
            </h3>

            <p>
              A full-stack business website developed for a lighting accessories
              company. The platform provides a responsive product display
              experience with frontend, backend, API integration, and database
              functionality.
            </p>

            <p>
              <strong>Technologies:</strong> React.js, JavaScript, Flask,
              REST APIs, MySQL, HTML5, CSS3, Bootstrap
            </p>

            <div className="project-links">

              <button
                className="project-link"
                onClick={() =>
                  window.open(
                    "https://www.carolineways.com/",
                    "_blank"
                  )
                }
              >
                Live Website
              </button>

              <button
                className="project-link"
                onClick={() =>
                  window.open(
                    "https://github.com/fayimarahuman/Recess-website-projects",
                    "_blank"
                  )
                }
              >
                GitHub
              </button>

            </div>

          </div>
        </div>


        {/* Project 3: UI/UX & Graphics */}
        <div className="project-card">
          <div className="project-info">

            <h3>
              UI/UX Design & Creative Graphics
            </h3>

            <p>
              Designed user interfaces, prototypes, banners, logos, and digital
              artwork by combining creativity with design principles. Focused on
              creating visually appealing and user-friendly digital experiences.
            </p>

            <div className="project-links">

              <button
                className="project-link"
                onClick={() =>
                  window.open(
                    process.env.PUBLIC_URL + "/graphics_portfolio.pdf",
                    "_blank"
                  )
                }
              >
                Graphics Portfolio
              </button>

              <button
                className="project-link"
                onClick={() =>
                  window.open(
                    "https://www.figma.com/",
                    "_blank"
                  )
                }
              >
                Figma Work
              </button>

            </div>

          </div>
        </div>


      </div>
    </section>
  );
}

export default Projects;