import React from "react";
import "../styles/Achievements.css";

function Achievements() {
  const achievements = [
    {
      title: "React Developer Certificate",
      description: "Completed an advanced React course and built professional projects.",
      image: "/images/certificate1.jpg",
      link: "#",
    },
    {
      title: "Web Design Award",
      description: "Received recognition for creative web design skills in a competition.",
      image: "/images/certificate2.jpg",
      link: "#",
    },
    {
      title: "Fullstack Development Certificate",
      description: "Completed fullstack web development training using React and Flask.",
      image: "/images/certificate3.jpg",
      link: "#",
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <h2>Achievements & Certifications</h2>
      <div className="achievements-container">
        {achievements.map((achieve, index) => (
          <div className="achievement-card fade-in" key={index}>
            <img src={achieve.image} alt={achieve.title} />
            <h3>{achieve.title}</h3>
            <p>{achieve.description}</p>
            <a href={achieve.link} className="btn-secondary">
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
