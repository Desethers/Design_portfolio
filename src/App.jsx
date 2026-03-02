import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { projects } from "./projects.js";
import ProjectPage from "./ProjectPage.jsx";

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">Raphaël Rossi</Link>
        <nav className="nav">
          <a href="/#projects">Projets</a>
          <a href="/#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function ProjectCard({ project }) {
  return (
    <Link to={`/projet/${project.slug}`} className="card">
      <div className="card-label">{String(project.id).padStart(2, "0")}</div>
      <h3 className="card-title">{project.title}</h3>
      <p className="card-meta">{project.type} · {project.year}</p>
      <p className="card-desc">{project.desc}</p>
      <div className="card-tags">
        {project.tags.map((t) => <span key={t} className="card-tag">{t}</span>)}
      </div>
      <span className="card-link">Voir l'étude de cas →</span>
    </Link>
  );
}

function Home() {
  return (
    <main className="main">
      <section className="intro">
        <h1 className="intro-title">Designer produit</h1>
        <p className="intro-text">Portfolio — projets personnels, approche produit.</p>
      </section>

      <section id="projects" className="projects">
        <h2 className="projects-title">Projets</h2>
        <div className="cards-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <p className="contact-text">Disponible pour un stage ou premier poste.</p>
        <a href="mailto:ton.email@exemple.com" className="contact-email">ton.email@exemple.com</a>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} Raphaël Rossi</span>
    </footer>
  );
}

export default function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
