import "./about.css";
import { skills } from "../../component/Sections";


const strengths = [
  "Turning design ideas into real interfaces with clean front-end structure.",
  "Building polished responsive layouts that remain clear and usable.",
  "Balancing aesthetics, usability, and implementation details in one workflow.",
];

export default function About() {
  return (
    <section className="about-section">
      <div className="about-left">
        <img src="/profile-portfolio.png" alt="Majdleen Alyousef Profile" className="about-image" />
      </div>

      <div className="about-right">
        <span className="eyebrow">About Me</span>
        <h1>Hi, I&apos;m Majdleen Alyousef.</h1>
        <p className="intro">
          I&apos;m a UI/UX designer and front-end developer who enjoys crafting elegant interfaces and turning them into responsive, user-friendly digital products.
        </p>
        <p className="details">
          My work sits between design and development. I like creating layouts that are visually clear, easy to use, and practical to build. Whether I&apos;m working on a dashboard, landing page, or app interface, I focus on structure, clarity, and thoughtful details.
        </p>

        <div className="about-block">
          <h3>What I Bring</h3>
          <div className="strength-list">
            {strengths.map((item) => (
              <div key={item} className="strength-card">{item}</div>
            ))}
          </div>
        </div>

        <div className="about-block">
          <h3>Skills</h3>
          <div className="skills-groups">
            {skills.map(([title, list]) => (
              <div key={title}>
                <h4>{title}</h4>
                <ul className="skills-list">
                  {list.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
