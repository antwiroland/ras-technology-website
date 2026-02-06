import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <div className="page">
      <section className="section">
        <div className="section-head">
          <h2>Projects</h2>
          <p>
            A collection of platforms built for transparency, governance, and
            growth across Ghana and similar markets.
          </p>
        </div>
        <div className="cards">
          {projects.map((project) => (
            <article className="card project-card" key={project.slug}>
              <img src={project.image} alt={project.title} />
              <div className="project-meta">
                <span>{project.label}</span>
                <span>2025 - 2026</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="chip-row">
                {project.highlights.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <div className="stack">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
              <Link className="text-link" to={`/projects/${project.slug}`}>
                View project details →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
