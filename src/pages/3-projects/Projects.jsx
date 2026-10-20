import React from "react";
import "./projects.css";

const projectsData = [
  {
    id: 1,
    title: "Digital Transformation System",
    description:
      "Developed a digital transformation system for the HR department, enhancing administrative efficiency and workflow automation.",
    imageUrl: "../../../public/images/hr.png",
    link: "https://github.com/yourusername/hr-digital-transformation", // استبدليه إذا كان لديك رابط حقيقي
  },
  {
    id: 2,
    title: "ERP System",
    description:
      "Enterprise Resource Planning system implemented for financial institutions like the Syrian Commercial Bank.",
    imageUrl: "../../../public/images/hr.png",
    link: "https://github.com/yourusername/erp-system", // استبدليه إذا كان لديك رابط حقيقي
  },
  {
    id: 3,
    title: "Image Processing Tool",
    description:
      "Tool for processing and analyzing digital images, developed using JavaScript and integrated with backend services.",
    imageUrl: "../../../public/images/hr.png",
    link: "https://github.com/yourusername/image-processing", // استبدليه إذا كان لديك رابط حقيقي
  },
  {
    id: 4,
    title: "Faculty Website",
    description:
      "Website developed for the Faculty of Informatics Engineering to showcase academic resources and updates.",
    imageUrl: "../../../public/images/hr.png",
    link: "https://github.com/yourusername/faculty-website", // استبدليه إذا كان لديك رابط حقيقي
  },
];

export default function Projects() {
  return (
    <section className="projects-section">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projectsData.map(({ id, title, description, imageUrl, link }) => (
          <div key={id} className="project-card">
            <img src={imageUrl} alt={title} className="project-image" />
            <div className="project-content">
              <h2>{title}</h2>
              <p>{description}</p>
              <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Images
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
