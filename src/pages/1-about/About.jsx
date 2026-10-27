
import "./about.css";
import { skills } from "../../component/Sections";

const strengths = [
  "Turning design ideas into real interfaces with clean front-end structure.",
  "Building polished responsive layouts that remain clear and usable.",
  "Balancing aesthetics, usability, and implementation details in one workflow.",
];

const certifications = [
  {
    id: 1,
    title: "Project Management Professional",
    issuer: "OUSOS – Training & Human Resource Development",
    type: "Professional Training",
    year: "2025",
    hours: "45 Training Hours",
    date: "Aug – Sep 2025",
  },
];

export default function About() {
  return (
    <section className="about-section">

      {/* Profile Image */}
      <div className="about-left">
        <img
          src="/profile-portfolio.png"
          alt="Majdleen Alyousef Profile"
          className="about-image"
        />
      </div>

      {/* About Content */}
      <div className="about-right">

        <span className="eyebrow">About Me</span>

        <h1>Hi, I&apos;m Majdleen Alyousef.</h1>

        <p className="intro">
          I&apos;m a UI/UX designer and front-end developer
          who enjoys crafting elegant interfaces and
          turning them into responsive, user-friendly
          digital products.
        </p>

        <p className="details">
          My work sits between design and development.
          I like creating layouts that are visually clear,
          easy to use, and practical to build. Whether
          I&apos;m working on a dashboard, landing page,
          or app interface, I focus on structure, clarity,
          and thoughtful details.
        </p>

        {/* Strengths */}
        <div className="about-block">
          <h3>What I Bring</h3>

          <div className="strength-list">
            {strengths.map((item) => (
              <div key={item} className="strength-card">
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
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

        {/* Certifications */}
        <div className="about-block certifications-section">

          <div className="certifications-header">
            <span className="certifications-icon" aria-hidden="true">
              ✦
            </span>

            <h3>Certifications & Professional Development</h3>
          </div>

          <div className="certifications-list">
            {certifications.map((certificate) => (
              <article
                className="certificate-card"
                key={certificate.id}
              >
                <div className="certificate-top">
                  <span className="certificate-type">
                    {certificate.type}
                  </span>

                  <span className="certificate-year">
                    {certificate.year}
                  </span>
                </div>

                <h4 className="certificate-title">
                  {certificate.title}
                </h4>

                <p className="certificate-issuer">
                  {certificate.issuer}
                </p>

                <div className="certificate-details">
                  <span>{certificate.hours}</span>
                  <span>{certificate.date}</span>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
