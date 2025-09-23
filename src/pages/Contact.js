import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I’m happy to connect with you. Here are my contact details:
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <p><strong>Location:</strong> Kampala, Uganda</p>
          <p><strong>Phone:</strong> +256 753670268 / +256 777150997</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:fayima.rahuman@example.com">
              fayima.rahuman@example.com
            </a>
          </p>
          <p>
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/256753670268?text=Hello%20Fayima,%20I%20am%20interested%20in%20your%20work."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              Send me a message on WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
