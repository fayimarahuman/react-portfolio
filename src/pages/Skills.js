import React from "react";
import "../styles/Skills.css";

function Skills() {

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React.js",
        "JavaScript ES6+",
        "HTML5",
        "CSS3",
        "Bootstrap",
        "Responsive Design"
      ]
    },

    {
      title: "Backend Development",
      skills: [
        "Python",
        "Flask",
        "Flask RESTful APIs",
        "REST API Development",
        "Application Logic"
      ]
    },

    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "MySQL",
        "SQL Queries",
        "Database Design",
        "Data Management"
      ]
    },

    {
      title: "Machine Learning & Data Science",
      skills: [
        "Scikit-learn",
        "Pandas",
        "Data Cleaning",
        "Feature Engineering",
        "Predictive Modeling",
        "Data Visualization"
      ]
    },

    {
      title: "AI-Assisted Development",
      skills: [
        "ChatGPT",
        "Claude AI",
        "Google Gemini",
        "GitHub Copilot",
        "Cursor AI",
        "Prompt Engineering"
      ]
    },

    {
      title: "Design & Development Tools",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Streamlit",
        "Figma",
        "Canva"
      ]
    }
  ];


  return (
    <section className="skills" id="skills">

      <h2>Skills</h2>

      <div className="skills-container">

        {skillCategories.map((category, index) => (

          <div 
            className="skill-category fade-in" 
            key={index}
          >

            <h3>
              {category.title}
            </h3>


            <ul className="skills-list">

              {category.skills.map((skill, skillIndex) => (

                <li 
                  key={skillIndex} 
                  className="skill-item"
                >
                  {skill}
                </li>

              ))}

            </ul>


          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;