import React, { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "./projects.js";

function TldrBox({ tldr }) {
  if (!tldr) return null;
  return (
    <aside className="case-tldr" aria-label="Résumé">
      <span className="case-tldr-label">En bref</span>
      <p className="case-tldr-headline">{tldr.headline}</p>
      {tldr.bullets?.length > 0 && (
        <ul className="case-tldr-list">
          {tldr.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </aside>
  );
}

/* ─── Case study view (Hanging / Vitreen) ─────────────────────────────── */
function CaseStudyView({ content }) {
  const { problem, objectifs, gtm, business, product, decisions, ai, learnings } = content;
  return (
    <div className="process-view">

      {/* 01 — Le problème */}
      <div id="problem" className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">01</span>
          <span className="pv-label">Le problème</span>
        </div>
        <div className="pv-section-body">
          {problem.intro && <p className="pv-text">{problem.intro}</p>}
          <blockquote className="pv-statement">"{problem.citation}"</blockquote>
          <div className="pv-methods">
            <span className="pv-method-tag">{problem.sousCitation}</span>
          </div>
          {problem.visual && (
            <figure className="pv-problem-visual">
              {problem.visual.type === "video" || /\.(mp4|mov|webm)$/i.test(problem.visual.src) ? (
                <video
                  src={problem.visual.src}
                  className="pv-problem-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={problem.visual.src}
                  alt={problem.visual.alt ?? ""}
                  className="pv-problem-image"
                />
              )}
              {problem.visual.caption && (
                <figcaption className="pv-problem-caption">{problem.visual.caption}</figcaption>
              )}
            </figure>
          )}
          <div className="pv-problem-grid">
            {problem.cards.map((card, i) => (
              <div key={i} className="pv-problem-card">
                <span className="pv-problem-domain">{card.domain}</span>
                <span className="pv-problem-title">{card.title}</span>
                <p className="pv-text">{card.question}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pv-divider" />

      {/* 02 — Objectifs */}
      <div id="objectifs" className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">02</span>
          <span className="pv-label">Objectifs</span>
        </div>
        <div className="pv-section-body">
          {objectifs.intro && <p className="pv-text">{objectifs.intro}</p>}
          <div className="pv-problem-grid">
            {objectifs.items.map((item, i) => (
              <div key={i} className="pv-problem-card">
                <span className="pv-problem-title">{item.title}</span>
                <p className="pv-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pv-divider" />

      {/* 03 — Stratégie de lancement */}
      <div id="gtm" className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">03</span>
          <span className="pv-label">Stratégie de lancement</span>
        </div>
        <div className="pv-section-body">
          <div className="pv-methods">
            <span className="pv-method-tag">{gtm.sousCitation}</span>
          </div>
          <div className="pv-problem-grid">
            {gtm.cards.map((card, i) => (
              <div key={i} className="pv-problem-card">
                <span className="pv-problem-type">{card.tag}</span>
                <span className="pv-problem-title">{card.title}</span>
                <p className="pv-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pv-divider" />

      {/* 04 — Modèle business */}
      <div id="business" className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">04</span>
          <span className="pv-label">Modèle business</span>
        </div>
        <div className="pv-section-body">
          <div className="pv-problem-grid">
            <div className="pv-problem-card">
              <span className="pv-problem-type">B2C</span>
              <span className="pv-problem-title">{business.b2c.title}</span>
              <p className="pv-text">{business.b2c.text}</p>
            </div>
            <div className="pv-problem-card">
              <span className="pv-problem-type">B2B</span>
              <span className="pv-problem-title">{business.b2b.title}</span>
              <p className="pv-text">{business.b2b.text}</p>
            </div>
          </div>
          <blockquote className="pv-quote">{business.citation}</blockquote>
        </div>
      </div>
      <div className="pv-divider" />

      {/* 05 — Le produit */}
      <div id="product" className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">05</span>
          <span className="pv-label">Le produit</span>
        </div>
        <div className="pv-section-body">
          {product.processAnnotation && (
            <div className="pv-insight-card">
              <span className="pv-insight-label">{product.processAnnotation}</span>
              <p className="pv-text">{product.processCaption}</p>
            </div>
          )}
          {product.screens ? (
            <div className="pv-wireframe-cards">
              {product.screens.map((screen, i) => (
                <div key={i} className="pv-wireframe-card">
                  <div className="pv-wireframe-card-header">
                    <span className="pv-wireframe-card-title">{screen.title}</span>
                    <span className="pv-problem-type">{screen.tag}</span>
                  </div>
                  {screen.text && <p className="pv-text">{screen.text}</p>}
                  {screen.media && (
                    /\.(mp4|mov|webm)$/i.test(screen.media) ? (
                      <video
                        src={screen.media}
                        className="pv-wireframe-frame pv-wireframe-img"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={screen.media}
                        alt={screen.title}
                        className="pv-wireframe-frame pv-wireframe-img"
                      />
                    )
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="pv-problem-grid">
              <div className="pv-problem-card">
                <span className="pv-problem-type">Consultation</span>
                <p className="pv-text">{product.consultationCaption}</p>
              </div>
              <div className="pv-problem-card">
                <span className="pv-problem-type">Réservation</span>
                <span className="pv-problem-title">{product.bookingAnnotation}</span>
                <p className="pv-text">{product.bookingCaption}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="pv-divider" />

      {/* 06 — Décisions de design */}
      <div id="decisions" className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">06</span>
          <span className="pv-label">Décisions de design</span>
        </div>
        <div className="pv-section-body">
          <div className="pv-problem-grid">
            {decisions.map((d, i) => (
              <div key={i} className="pv-problem-card">
                <span className="pv-problem-num">{d.num}</span>
                <span className="pv-problem-title">{d.title}</span>
                <p className="pv-text">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pv-divider" />

      {/* 07 — L'IA comme outil */}
      <div id="ai" className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">07</span>
          <span className="pv-label">L'IA comme outil</span>
        </div>
        <div className="pv-section-body">
          <div className="pv-results">
            {ai.steps.map((step, i) => (
              <div key={i} className="pv-result-row">
                <span className="pv-result-metric">{step.num} — {step.label}</span>
              </div>
            ))}
          </div>
          <div className="stack-grid">
            {ai.tools.map((t, i) => (
              <div key={i} className="stack-card">
                <span className="stack-tool">{t.name}</span>
                <p className="stack-desc">{t.usage}</p>
                <p className="pv-quote">"{t.example}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pv-divider" />

      {/* 08 — Bilan */}
      <div id="learnings" className="pv-section">
        <div className="pv-section-meta">
          <span className="pv-num">08</span>
          <span className="pv-label">Bilan</span>
        </div>
        <div className="pv-section-body">
          <div className="pv-insights">
            <div className="pv-insight-card">
              <span className="pv-insight-label">✓ Ce qui a marché</span>
              <p className="pv-text">{learnings.worked}</p>
            </div>
            <div className="pv-insight-card">
              <span className="pv-insight-label">↺ Ce que je referais</span>
              <p className="pv-text">{learnings.wouldRedo}</p>
            </div>
            <div className="pv-insight-card">
              <span className="pv-insight-label">→ La suite</span>
              <p className="pv-text">{learnings.next}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

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
          {!pr.problem.cards && (
            <>
              <blockquote className="pv-statement">"{pr.problem.statement}"</blockquote>
              {pr.problem.visual && (
                <figure className="pv-problem-visual">
                  <img
                    src={pr.problem.visual.src}
                    alt={pr.problem.visual.alt}
                    className="pv-problem-image"
                  />
                  {pr.problem.visual.caption && (
                    <figcaption className="pv-problem-caption">
                      {pr.problem.visual.caption}
                    </figcaption>
                  )}
                </figure>
              )}
            </>
          )}
          <div className="pv-problem-grid">
            {pr.problem.cards ? (
              pr.problem.cards.map((card, i) => (
                <div key={i} className="pv-problem-card">
                  <span className="pv-problem-domain">{card.domain}</span>
                  <span className="pv-problem-num">{card.num}</span>
                  <span className="pv-problem-title">{card.title}</span>
                  <p className="pv-text">{card.question}</p>
                </div>
              ))
            ) : (
              <>
                <div className="pv-problem-card">
                  <span className="pv-problem-type">Point de vue utilisateur</span>
                  <p className="pv-text">{pr.problem.user}</p>
                </div>
                <div className="pv-problem-card">
                  <span className="pv-problem-type">Point de vue business</span>
                  <p className="pv-text">{pr.problem.business}</p>
                </div>
              </>
            )}
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

/* ─── Vitreen — fenêtre V2.1 + panneau étude de cas ───────────────────── */
function VitreenProjectPage() {
  return (
    <main className="project-page project-page--vitreen">
      <div className="vitreen-showcase">
        <div className="vitreen-window">
          <iframe
            src="https://vitreen.art"
            title="Vitreen — site live"
            loading="lazy"
          />
        </div>
      </div>
      <div className="vitreen-window-actions">
        <span className="vitreen-pill-btn">Use case</span>
        <a
          href="https://vitreen.art"
          target="_blank"
          rel="noopener noreferrer"
          className="vitreen-round-btn"
          aria-label="Voir vitreen.art"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 17 17 7M9 7h8v8" />
          </svg>
        </a>
      </div>
    </main>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────── */
export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (slug === "onboarding-app") {
    return <Navigate to="/projet/hanging" replace />;
  }

  if (!project) return <Navigate to="/" replace />;

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

  const hero = project.caseStudy?.hero;
  const tldr = project.caseStudy?.tldr;

  if (slug === "vitreen") {
    return <VitreenProjectPage />;
  }

  const studyContent = project.caseStudy ? (
    <CaseStudyView content={project.caseStudy} />
  ) : (
    <ProcessView p={project} />
  );

  return (
    <main className="project-page">
      <div className="project-page-hero">
        <Link to="/" className="back-link">← Retour</Link>
        <div className="project-page-meta">
          <span className="project-page-type">
            {hero ? project.year : `${project.type} · ${project.year}`}
          </span>
        </div>
        <h1 className="project-page-title">{hero ? hero.title : project.title}</h1>
        <div className="project-page-tags">
          {(hero ? hero.tags : project.tags).map((t) => (
            <span key={t} className="card-tag">{t}</span>
          ))}
        </div>
        {(hero ? hero.subtitle : project.description) && (
          <p className="project-page-description">
            {hero ? hero.subtitle : project.description}
          </p>
        )}
        {hero?.stats && <p className="project-page-stats">{hero.stats}</p>}
      </div>

      {project.video && (
        <div className="project-page-visual">
          <video
            className="project-prototype-video"
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      )}

      <div className="project-page-study">
        <TldrBox tldr={tldr} />
        {studyContent}
      </div>

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
