import React, { useState, useEffect } from "react";
import "../styles/ProfessionalHighlights.css";

function ProfessionalHighlights() {

  const highlights = [
    {
      title: "Full-Stack Application Development",
      text: "Experienced in designing and building complete software solutions using React, JavaScript, Python, Flask, REST APIs, and relational databases."
    },

    {
      title: "AI & Machine Learning Solutions",
      text: "Developed an AI-powered Dental Clinic Management and No-Show Prediction System using machine learning, analytics, and data-driven approaches."
    },

    {
      title: "Problem Solving Through Technology",
      text: "Passionate about transforming ideas into practical digital solutions that address real-world challenges through software engineering."
    },

    {
      title: "AI-Assisted Development & Innovation",
      text: "Uses AI tools as development partners for research, debugging, prototyping, learning new technologies, and improving software development workflows."
    },

    {
      title: "Client-Focused Digital Solutions",
      text: "Delivered practical solutions for businesses, including responsive websites and full-stack applications tailored to user and business requirements."
    }
  ];


  const [current, setCurrent] = useState(0);


  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) => (prev + 1) % highlights.length);

    }, 5000);


    return () => clearInterval(interval);

  }, [highlights.length]);



  return (

    <section 
      className="professional-highlights" 
      id="highlights"
    >

      <h2>
        Professional Highlights
      </h2>


      <div className="highlight-card fade-in">

        <h3>
          {highlights[current].title}
        </h3>


        <p>
          {highlights[current].text}
        </p>


      </div>


    </section>

  );
}


export default ProfessionalHighlights;