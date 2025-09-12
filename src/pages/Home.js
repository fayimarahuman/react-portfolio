import React, { useState, useEffect } from "react";
import "../styles/Home.css";

const heroImages = [
  "/images/diffuser1.jpg",
  "/images/diffuser3.jpg",
  "/images/nine.jpg",
];

function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [text, setText] = useState("");

  // Hero Image Slider
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(imageInterval);
  }, []);

  // Typing Animation
  useEffect(() => {
    const words = ["Web Developer", "React Enthusiast", "UI/UX Lover"];
    let index = 0;
    const typingInterval = setInterval(() => {
      setText(words[currentWord].substring(0, index + 1));
      index++;
      if (index === words[currentWord].length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentWord((prev) => (prev + 1) % words.length);
        }, 1500);
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, [currentWord]);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
      id="home"
    >
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Hello, I’m Fayima Rahuman</h1>
          <h2>
            I am a <span className="typing">{text}</span>
          </h2>
          <div className="hero-buttons">
            <a href="/resume.pdf" download className="btn-primary">
              Download CV
            </a>
            <a href="/about" className="btn-secondary">
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
