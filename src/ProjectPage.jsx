import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "./projects.js";

/* ─── Process tab content ────────────────────────────────────────────── */
function ProcessView({ p }) {
  const pr = p.process;
  return (
    <div className="process-view">

      {/* 01 — Contexte */}
      <div className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">01</span>
          <span className="pv-label">Contexte</span>
        </div>
        <div className="pv-section-body">
          <p className="pv-text">{pr.brief}</p>
          <div className="pv-brief-chips">
            <div className="pv-chip">
              <span className="pv-chip-label">Rôle</span>
              <span className="pv-chip-value">{pr.role}</span>
            </div>
            <div className="pv-chip">
              <span className="pv-chip-label">Durée</span>
              <span className="pv-chip-value">{pr.duration}</span>
            </div>
            <div className="pv-chip">
              <span className="pv-chip-label">Outils</span>
              <span className="pv-chip-value">{pr.tools.join(" · ")}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="pv-divider" />

      {/* 02 — Problème */}
      <div className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">02</span>
          <span className="pv-label">Problème</span>
        </div>
        <div className="pv-section-body">
          <blockquote className="pv-statement">"{pr.problem.statement}"</blockquote>
          <div className="pv-problem-grid">
            <div className="pv-problem-card">
              <span className="pv-problem-type">Point de vue utilisateur</span>
              <p className="pv-text">{pr.problem.user}</p>
            </div>
            <div className="pv-problem-card">
              <span className="pv-problem-type">Point de vue business</span>
              <p className="pv-text">{pr.problem.business}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pv-divider" />

      {/* 03 — Recherche */}
      <div className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">03</span>
          <span className="pv-label">Recherche</span>
        </div>
        <div className="pv-section-body">
          {pr.research.intro && (
            <p className="pv-text" style={{ whiteSpace: "pre-line" }}>{pr.research.intro}</p>
          )}
          {pr.research.methods?.length > 0 && (
            <div className="pv-methods">
              {pr.research.methods.map((m, i) => (
                <span key={i} className="pv-method-tag">{m}</span>
              ))}
            </div>
          )}
          {pr.research.insights.length > 0 && (
            <div className="pv-insights">
              {pr.research.insights.map((ins, i) => (
                <div key={i} className="pv-insight-card">
                  <span className="pv-insight-label">💡 {ins.label}</span>
                  <p className="pv-text">{ins.detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pv-divider" />

      {/* 04 — Wireframes */}
      <div className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">04</span>
          <span className="pv-label">Wireframes</span>
        </div>
        <div className="pv-section-body">
          {Array.isArray(pr.wireframes) ? (
            <div className="pv-wireframe-cards">
              {pr.wireframes.map((wf, i) => (
                <div key={i} className="pv-wireframe-card">
                  <div className="pv-wireframe-card-header">
                    <span className="pv-wireframe-card-title">{wf.title}</span>
                    <a href={wf.src} target="_blank" rel="noopener noreferrer" className="pv-wireframe-expand">
                      Plein écran ↗
                    </a>
                  </div>
                  {wf.type === "image" ? (
                    <img src={wf.src} alt={wf.title} className="pv-wireframe-frame pv-wireframe-img" />
                  ) : (
                    <iframe src={wf.src} className="pv-wireframe-frame" title={wf.title} scrolling="no" />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="pv-wireframe-placeholder">Wireframes à venir</div>
          )}
        </div>
      </div>

      <div className="pv-divider" />

      {/* 05 — Exécution */}
      <div className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">05</span>
          <span className="pv-label">Exécution</span>
        </div>
        <div className="pv-section-body">
          {(pr.execution ?? pr.ideation) && <p className="pv-text">{pr.execution ?? pr.ideation}</p>}
          {pr.stack && (
            <div className="stack-grid">
              {pr.stack.map((item, i) => (
                <div key={i} className="stack-card">
                  <span className="stack-tool">{item.tool}</span>
                  <p className="stack-desc">{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pv-divider" />

      {/* 06 — Tests & Prochaines étapes */}
      <div className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">06</span>
          <span className="pv-label">Tests & Prochaines étapes</span>
        </div>
        <div className="pv-section-body">
          <p className="pv-text">{pr.testing.method}</p>
          {pr.testing.results.length > 0 && (
            <div className="pv-results">
              {pr.testing.results.map((r, i) => (
                <div key={i} className="pv-result-row">
                  <span className="pv-result-metric">{r.metric}</span>
                  <div className="pv-result-values">
                    {r.before !== "—" && <span className="pv-result-before">{r.before}</span>}
                    <span className="pv-result-arrow">→</span>
                    <span className="pv-result-after">{r.after}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
          {pr.testing.quote && (
            <blockquote className="pv-quote">{pr.testing.quote}</blockquote>
          )}
          {pr.iterations?.length > 0 && (
            <div className="pv-iterations">
              <span className="pv-iterations-title">Itérations suite aux tests</span>
              <ul className="pv-iterations-list">
                {pr.iterations.map((it, i) => <li key={i}>{it}</li>)}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="pv-divider" />

      {/* 07 — Impact */}
      <div className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">07</span>
          <span className="pv-label">Impact</span>
        </div>
        <div className="pv-section-body">
          {typeof pr.impact === "string" ? (
            <p className="pv-text">{pr.impact}</p>
          ) : (
            <div className="pv-impact-grid">
              {pr.impact.map((item, i) => (
                <div key={i} className="pv-impact-card">
                  <span className="pv-impact-value">{item.value}</span>
                  <span className="pv-impact-label">{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="pv-divider" />

      {/* 08 — Rétrospective */}
      <div className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">08</span>
          <span className="pv-label">Rétrospective</span>
        </div>
        <div className="pv-section-body">
          <p className="pv-text">{pr.retrospective}</p>
        </div>
      </div>

    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [tab, setTab] = useState("prototype");

  useEffect(() => {
    window.scrollTo(0, 0);
    setTab("prototype");
  }, [slug]);

  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

  return (
    <main className="project-page">
      <div className="project-page-hero">
        <Link to="/" className="back-link">← Retour</Link>
        <div className="project-page-meta">
          <span className="project-page-num">{String(project.id).padStart(2, "0")}</span>
          <span className="project-page-type">{project.type} · {project.year}</span>
        </div>
        <h1 className="project-page-title">{project.title}</h1>
        <div className="project-page-tags">
          {project.tags.map((t) => <span key={t} className="card-tag">{t}</span>)}
        </div>
        <div className="tab-switcher">
          <button
            className={`tab-btn${tab === "prototype" ? " tab-btn--active" : ""}`}
            onClick={() => setTab("prototype")}
          >
            Prototype
          </button>
          <button
            className={`tab-btn${tab === "process" ? " tab-btn--active" : ""}`}
            onClick={() => setTab("process")}
          >
            Process
          </button>
        </div>
      </div>

      {tab === "prototype" && (
        <div className="project-page-visual">
          {project.video && (
            <video
              className="project-prototype-video"
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
            />
          )}
        </div>
      )}
      {tab === "process" && <ProcessView p={project} />}

      <nav className="project-nav">
        {prev ? (
          <Link to={`/projet/${prev.slug}`} className="project-nav-link project-nav-prev">
            <span className="project-nav-dir">← Précédent</span>
            <span className="project-nav-name">{prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link to={`/projet/${next.slug}`} className="project-nav-link project-nav-next">
            <span className="project-nav-dir">Suivant →</span>
            <span className="project-nav-name">{next.title}</span>
          </Link>
        ) : <div />}
      </nav>
    </main>
  );
}
