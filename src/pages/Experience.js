import React from "react";
import "../styles/Experience.css";

function Experience() {
  const experiences = [
    {
      role: "AI-Powered Dental Clinic Management & No-Show Prediction System",
      company: "Final Year Software Project",
      period: "2025 - 2026",
      description:
        "Designed and developed an intelligent healthcare management system combining machine learning, analytics dashboards, database management, and automation. Built a no-show prediction model using Scikit-learn and developed a complete clinic management platform using Python, Streamlit, PostgreSQL, and data analytics."
    },
    {
      role: "Full Stack Developer",
      company: "Caroline Ways Ltd - Client Project",
      period: "2026",
      description:
        "Developed a full-stack product display website for a lighting accessories business. Built a responsive React frontend, integrated Flask backend services through REST APIs, connected database functionality, and delivered a complete digital solution based on client requirements."
    },
    {
      role: "Freelance Developer & Digital Solutions Builder",
      company: "Self-employed",
      period: "2023 - Present",
      description:
        "Developed web applications, portfolio websites, UI designs, and digital solutions while continuously improving skills in frontend development, backend systems, databases, and AI-assisted software development workflows."
    },
    {
      role: "Cashier",
      company: "Local Restaurant",
      period: "2022 - 2023",
      description:
        "Managed daily customer transactions, maintained accurate records, provided customer support, and developed communication, responsibility, and problem-solving skills in a professional environment."
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