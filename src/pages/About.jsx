import ReactMarkdown from "react-markdown";
import aboutMd from "../content/about.md?raw";
import portrait from "../assets/about-portrait.png";

export default function About() {
  return (
    <div className="page">
      <section className="section split fade-in">
        <div>
          <p className="eyebrow">About Roland Antwi</p>
          <h1>Building platforms that match real-world workflows.</h1>
          <p className="lead">
            I focus on resilient system design, balancing engineering discipline with product
            empathy.
          </p>
        </div>
        <div className="media-card">
          <img className="portrait float" src={portrait} alt="Roland Antwi portrait" />
        </div>
      </section>

      <section className="section markdown fade-in">
        <ReactMarkdown>{aboutMd}</ReactMarkdown>
      </section>
    </div>
  );
}
