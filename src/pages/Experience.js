import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Diploma in Computer Science",
      company: "Women's Institute of Technology & Innovation",
      period: "2023 - Present",
      description: "Learning web development, Python, Flask, APIs, React, Data Science, and graphics design. Completed multiple projects to build practical skills."
    },
    {
      role: "Cashier",
      company: "Local Restaurant",
      period: "2022 - 2023",
      description: "Handled cash transactions, managed customer service, and gained professional workplace experience."
    },
    {
      role: "Freelance Projects",
      company: "Self-employed",
      period: "2023 - Present",
      description: "Built small web applications, portfolio websites, and graphics designs for practice and skill development."
    }
  ];

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item fade-in" key={index}>
            <div className="timeline-content">
              <h3>{exp.role}</h3>
              <h4>{exp.company}</h4>
              <span className="timeline-period">{exp.period}</span>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
