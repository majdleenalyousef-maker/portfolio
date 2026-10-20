export const skills = [
  ["Core Frontend", ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "HTML5", "CSS3", "SCSS"]],
  ["UI Development", ["Responsive Design", "Reusable Components", "Bootstrap", "Material UI", "jQuery", "AJAX"]],
  ["APIs & Tools", ["RESTful APIs", "JSON", "Git", "GitHub", "GitLab", "Vite", "SQL", "Oracle"]],
  ["Design & Practices", ["UI/UX Design", "Wireframing", "Prototyping", "Cross-Browser Compatibility", "OOP", "Problem Solving"]],
];
const services = [
  ["01", "Frontend Development", "Fast, accessible interfaces built with React, Next.js and TypeScript."],
  ["02", "UI/UX Design", "Wireframes and prototypes shaped around real user needs."],
  ["03", "Responsive Websites", "Pixel-accurate layouts that work on every screen and browser."],
];
const experience = [
  ["2022 – 2024", "Frontend Developer", "Globe Technology Providers"],
  ["2020 – 2022", "Freelance Frontend Developer", "Remote"],
  ["2019 – 2020", "Freelance UI/UX Designer", "Remote"],
];
const education = [
  ["2022 – 2024", "Master of Electronic Business Administration", "Arab Academy for E-Business"],
  ["2015 – 2020", "Bachelor's in Information Engineering", "Tishreen University"],
];
const Timeline = ({ items }) => (
  <ul className="timeline">
    {items.map(([when, what, where]) => (
      <li key={what}><small>{when}</small><b>{what}</b><span>{where}</span></li>
    ))}
  </ul>
);
export function Skills() {
  return (
    <section className="block" id="skills">
      <h2 className="block-title">Technical Skills</h2>
      <div className="skill-grid">
        {skills.map(([t, list]) => (
          <div className="skill-card" key={t}>
            <h3>{t}</h3>
            <div className="chips">{list.map((s) => <span key={s}>{s}</span>)}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
export function Services() {
  return (
    <section className="block">
      <h2 className="block-title">What I Do</h2>
      <div className="service-grid">
        {services.map(([n, t, d]) => (
          <div className="service-card" key={n}><em>{n}</em><h3>{t}</h3><p>{d}</p></div>
        ))}
      </div>
    </section>
  );
}
export function Journey() {
  return (
    <section className="block">
      <div className="journey">
        <div><h2 className="block-title">Experience</h2><Timeline items={experience} /></div>
        <div><h2 className="block-title">Education</h2><Timeline items={education} /></div>
      </div>
    </section>
  );
}
