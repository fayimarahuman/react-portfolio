import React, { useState, useEffect } from "react";
import "../styles/Testimonials.css";

function Testimonials() {
  const testimonials = [
    {
      name: "Emma Johnson",
      role: "Project Manager",
      text: "Fayima is an amazing web developer! She delivered our project on time with exceptional quality.",
      image: "/images/testimonial1.jpg",
    },
    {
      name: "Ritah Namono",
      role: "Client",
      text: "Working with Fayima was a pleasure. She is detail-oriented and highly professional.",
      image: "/images/testimonial2.jpg",
    },
    {
      name: "John Doe",
      role: "Team Lead",
      text: "Her coding skills and creativity are top-notch. I highly recommend Fayima for any web project.",
      image: "/images/testimonial3.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials" id="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-card fade-in">
        <img
          src={testimonials[current].image}
          alt={testimonials[current].name}
        />
        <p>"{testimonials[current].text}"</p>
        <h3>{testimonials[current].name}</h3>
        <span>{testimonials[current].role}</span>
      </div>
    </section>
  );
}

export default Testimonials;
