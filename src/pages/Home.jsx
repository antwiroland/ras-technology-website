import { Link } from "react-router-dom";
import { projects } from "../data/projects.js";
import portrait from "../assets/about-portrait.png";
import logo from "../assets/logo.png";

export default function Home() {
  return (
    <div className="page">
      <section className="hero fade-in">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="logo-row">
              <img className="logo" src={logo} alt="RAS Technologies logo" />
              <div>
                <p className="eyebrow">Roland Antwi - Founder & CEO</p>
                <h1>Building resilient systems for real-world operations.</h1>
              </div>
            </div>
            <p className="lead">
              I design and ship scalable digital platforms tailored for emerging markets, focused
              on reliability, offline-first workflows, and long-term maintainability.
            </p>
            <div className="hero-actions">
              <Link className="btn primary" to="/projects/digisell">
                View Flagship Work
              </Link>
              <Link className="btn ghost" to="/about">
                About Roland
              </Link>
            </div>
            <div className="stat-grid">
              <div className="stat">
                <h3>4+</h3>
                <p>End-to-end platforms</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Core modules per system</p>
              </div>
              <div className="stat">
                <h3>100%</h3>
                <p>Focus on auditability</p>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <img className="portrait float" src={portrait} alt="Roland Antwi portrait" />
            <div className="hero-panel">
              <h3>Product-minded engineering</h3>
              <p>
                Translating complex user stories into structured platforms that scale across teams,
                branches, and low-connectivity environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Selected Work</h2>
          <p>
            Platforms built for transparency, governance, and growth across Ghana and similar
            markets.
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
