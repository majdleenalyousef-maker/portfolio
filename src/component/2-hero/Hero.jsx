import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <span className="hero-badge">UI/UX Designer & Front-End Developer</span>
        <h1 className="title">I design thoughtful digital experiences and build them into responsive interfaces.</h1>
        <p className="sub-title">
          I combine visual clarity, user-centered thinking, and front-end development to create polished web experiences that feel intuitive and look elegant across screens.
        </p>

        <div className="hero-actions flex">
          <a className="primary-btn" href="#work">View My Work</a>
          <a className="secondary-btn" href="#contact">Contact Me</a>
        </div>

        <div className="hero-highlights">
          <div className="highlight-card">
            <strong>Design + Code</strong>
            <span>Bridging UI/UX thinking with front-end execution.</span>
          </div>
          <div className="highlight-card">
            <strong>Responsive First</strong>
            <span>Clean experiences for desktop, tablet, and mobile.</span>
          </div>
          <div className="highlight-card">
            <strong>Portfolio Ready</strong>
            <span>Focused on polished visuals, structure, and usability.</span>
          </div>
        </div>

        <div className="all-icons flex">
          <a href="https://facebook.com/majdleen.alyousef" target="_blank" rel="noopener noreferrer" className="icon icon-facebook" aria-label="Facebook"></a>
          <a href="https://instagram.com/jojo_lyousef" target="_blank" rel="noopener noreferrer" className="icon icon-instagram" aria-label="Instagram"></a>
          <a href="https://github.com/majdleenalyousef-maker" target="_blank" rel="noopener noreferrer" className="icon icon-github" aria-label="GitHub"></a>
          <a href="https://linkedin.com/in/majdleen-yousef" target="_blank" rel="noopener noreferrer" className="icon icon-linkedin" aria-label="LinkedIn"></a>
          <a href="mailto:majdleenalyousef@gmail.com" className="icon icon-envelope" aria-label="Email"></a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-card">
          <img src="/profile-portfolio.png" className="avatar" alt="Majdleen Alyousef" />
          <div className="floating-chip chip-1">React</div>
          <div className="floating-chip chip-2">UI/UX</div>
          <div className="floating-chip chip-3">Responsive Web</div>
        </div>
      </div>
    </section>
  );
}
