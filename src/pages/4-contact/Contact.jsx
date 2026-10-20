import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message!");
    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="contact-section">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
