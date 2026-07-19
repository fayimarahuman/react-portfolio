import React, { useState, useEffect } from "react";
import "../styles/Testimonials.css";

function Testimonials() {

  const highlights = [
    {
      title: "Full-Stack Application Development",
      text: "Experienced in building complete software solutions using React, JavaScript, Python, Flask, REST APIs, and databases."
    },

    {
      title: "AI & Machine Learning Solutions",
      text: "Developed an AI-powered dental analytics and no-show prediction system using machine learning and data-driven approaches."
    },

    {
      title: "Problem Solving Through Technology",
      text: "Passionate about transforming ideas into practical digital solutions that solve real-world challenges."
    },

    {
      title: "Continuous Learning & Innovation",
      text: "Actively explores emerging technologies and uses AI-assisted workflows to improve development productivity."
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

    <section className="testimonials" id="testimonials">

      <h2>Professional Highlights</h2>


      <div className="testimonial-card fade-in">

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


export default Testimonials;