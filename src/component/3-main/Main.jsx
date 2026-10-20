import { useMemo, useState } from "react";
import "./main.css";
import { Link } from "react-router-dom";
import { myProject } from "../../data";

const filters = [
  { key: "all", label: "All" },
  { key: "front-end", label: "Front-End" },
  { key: "uiux", label: "UI/UX" },
  { key: "react", label: "React" },
  { key: "typescript", label: "TypeScript" },
  { key: "javascript", label: "JavaScript" },
];

export default function Main({ isHome = false }) {
  const [currentActive, setCurrentActive] = useState("all");

  const filteredProjects = useMemo(() => {
    if (currentActive === "all") return myProject;
    return myProject.filter((item) => item.categore.includes(currentActive));
  }, [currentActive]);

  return (
    <main id="work" className="projects-wrapper">
      <div className="projects-heading">
        <span className="eyebrow">Selected Work</span>
        <h2>Projects that blend clean design with practical front-end execution.</h2>
        <p>
          Here are some of the projects I worked on across front-end development and UI/UX design. More front-end projects can be added easily later.
        </p>
      </div>

      <section className="filters-section flex left-section">
        {filters.map((filter) => (
          <button
            key={filter.key}
            onClick={() => setCurrentActive(filter.key)}
            className={currentActive === filter.key ? "active" : ""}
          >
            {filter.label}
          </button>
        ))}
      </section>

      <section className="right-section flex">
        {filteredProjects.map((item) => (
          <article key={item.id} className="card">
            <img src={item.imgPath} alt={item.projectTitle} />

            <div className="box">
              <div>
                <div className="project-tags">
                  {item.tags?.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <h3 className="title">{item.projectTitle}</h3>
                <p className="sub-title">{item.description}</p>
              </div>

              <div className="icons">
                <Link className="link" to={`/project/${item.id}`}>
                  View Details <span className="icon-arrow-right"></span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>

    
    </main>
  );
}
