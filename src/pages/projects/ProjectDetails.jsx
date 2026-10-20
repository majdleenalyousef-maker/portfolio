import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { myProject } from "../../data";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = myProject.find((item) => item.id === id);
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!project) return <h2>Project not found</h2>;

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : project.gallery.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev < project.gallery.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="project-details">
      <Link to="/projects" className="back-arrow">← Back to Projects</Link>

      <div className="details-header">
        <div>
          <div className="details-tags">
            {project.tags?.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <h1>{project.projectTitle}</h1>
          <p>{project.description}</p>
        </div>
        <img className="cover-image" src={project.imgPath} alt={project.projectTitle} />
      </div>

      {project.videoPath && (
        <div className="video-container">
          <video controls width="100%">
            <source src={project.videoPath} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {project.highlights?.length > 0 && (
        <section className="project-highlights">
          <h2>Project Highlights</h2>
          <ul>
            {project.highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="project-gallery-section">
        <h2>Project Screenshots</h2>
        <p>Explore the interface design and page sections below.</p>
        <div className="gallery">
          {project.gallery.map((img, index) => (
            <figure key={index} className="gallery-item">
              <button
                type="button"
                onClick={() => setSelectedIndex(index)}
                aria-label={`View ${project.galleryLabels?.[index] || `screenshot ${index + 1}`}`}
              >
                <img src={img} alt={project.galleryLabels?.[index] || `Screenshot ${index + 1}`} loading="lazy" />
              </button>
              <figcaption>{project.galleryLabels?.[index] || `Screenshot ${index + 1}`}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {selectedIndex !== null && (
        <div className="modal" onClick={() => setSelectedIndex(null)}>
          <button className="close-button" onClick={(e) => { e.stopPropagation(); setSelectedIndex(null); }}>×</button>
          <button className="arrow left" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>←</button>
          <img
            src={project.gallery[selectedIndex]}
            alt={project.galleryLabels?.[selectedIndex] || "Large view"}
            className="modal-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="arrow right" onClick={(e) => { e.stopPropagation(); handleNext(); }}>→</button>
        </div>
      )}
    </div>
  );
}
