import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import Contact from "./pages/Contact.jsx";
import logo from "./assets/logo.png";
import "./App.css";

function Layout({ children }) {
  return (
    <div className="app">
      <header className="header">
        <div className="container nav">
          <NavLink className="brand" to="/">
            <img className="brand-logo" src={logo} alt="RAS Technologies logo" />
            <span>RAS Technologies</span>
          </NavLink>
          <nav className="nav-links">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>
      <main className="container">{children}</main>
      <footer className="footer">
        <div className="container">
          RAS Technologies - Built with React, Vite, and intentional design.
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
