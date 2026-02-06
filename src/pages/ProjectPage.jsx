import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { projects } from "../data/projects.js";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return (
      <div className="page">
        <section className="section">
          <h1>Project not found</h1>
          <p className="lead">The project you requested does not exist yet.</p>
          <Link className="btn primary" to="/">
            Back to home
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="section project-hero fade-in">
        <div>
          <p className="eyebrow">{project.label}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.summary}</p>
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
          <div className="hero-actions">
            <Link className="btn primary" to="/contact">
              Start a project
            </Link>
            <Link className="btn ghost" to="/">
              Back to home
            </Link>
          </div>
        </div>
        <div className="media-card">
          <img className="float" src={project.image} alt={project.title} />
        </div>
      </section>

      <section className="section markdown fade-in">
        <ReactMarkdown>{project.markdown}</ReactMarkdown>
      </section>
    </div>
  );
}
