import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <p className="contact-intro">
        I'm open to software development opportunities, internships, freelance
        projects, collaborations, and discussions about innovative technology
        solutions. Feel free to reach out—I’d be happy to connect!
      </p>

      <div className="contact-container">
        <div className="contact-info">

          <p>
            <strong>Location:</strong> Kampala, Uganda
          </p>

          <p>
            <strong>Phone:</strong> +256 777150997 / +256 742221194
          </p>

          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:fayimarahuman2002@gmail.com">
              fayimarahuman2002@gmail.com
            </a>
          </p>

          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/256753670268?text=Hello%20Fayima,%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              Chat with me on WhatsApp
            </a>
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/fayimarahuman"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/fayimarahuman
            </a>
          </p>

          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>

        </div>
      </div>
    </section>
  );
}

export default Contact;