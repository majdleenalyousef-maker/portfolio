import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mbgdvgea");

  return (
    <section id="contact" className="contact-us">
      <div className="contact-copy">
        <span className="eyebrow">Contact</span>
        <h2 className="title">Let&apos;s build something clean, useful, and visually strong.</h2>
        <p className="sub-title">
          If you&apos;d like to collaborate, discuss a project, or ask about my work, send me a message and I&apos;ll get back to you as soon as possible.
        </p>

        <div className="contact-cards">
          <div className="info-card">
            <span>Email</span>
            <strong>majdleenalyousef@gmail.com</strong>
          </div>
          <div className="info-card">
            <span>Focus</span>
            <strong>UI/UX Design · Front-End Development</strong>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <label htmlFor="email">Email Address</label>
          <input required type="email" id="email" name="email" placeholder="your@email.com" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="field-group">
          <label htmlFor="message">Your message</label>
          <textarea required name="message" id="message" placeholder="Tell me about your project..." />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" disabled={state.submitting} className="submit">
          {state.submitting ? "Sending..." : "Send Message"}
        </button>

        {state.succeeded && <p className="success-message">Your message has been sent successfully.</p>}
      </form>
    </section>
  );
}
