import React from "react";
import "../styles/Projects.css";

function Projects() {
  const projectList = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and CSS.",
      image: "/images/project1.jpg",
      link: "#",
    },
    {
      title: "E-commerce App",
      description: "A responsive e-commerce app using React and Flask.",
      image: "/images/project2.jpg",
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "A blogging platform with CRUD functionality.",
      image: "/images/project3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="btn-secondary">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
