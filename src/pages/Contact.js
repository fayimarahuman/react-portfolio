import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        I’d love to connect with you! Here are my contact details.
      </p>

      <div className="contact-container">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p><strong>Address:</strong> Kampala, Uganda</p>
          <p><strong>Phone:</strong> +256 700 000000 / +256 770 000000</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:fayima.rahuman@example.com">fayima.rahuman@example.com</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
