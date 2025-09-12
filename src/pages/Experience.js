import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      role: "Frontend Developer Intern",
      company: "Tech Solutions Ltd",
      period: "Jan 2024 - Jun 2024",
      description: "Worked on creating responsive websites using React and CSS."
    },
    {
      role: "Web Developer Trainee",
      company: "Creative Labs",
      period: "Jul 2023 - Dec 2023",
      description: "Built interactive UI components and implemented API integrations."
    },
    {
      role: "Freelance Web Designer",
      company: "Self-employed",
      period: "Mar 2023 - Jun 2023",
      description: "Designed and developed personal portfolio websites for clients."
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
