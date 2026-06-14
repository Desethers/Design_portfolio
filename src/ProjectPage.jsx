import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { projects } from "./projects.js";
import HangingTechnicalDrawing from "./HangingTechnicalDrawing.jsx";
import { VitreenSiteV21 } from "./VitreenSite.jsx";

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
function buildCaseStudySections(content) {
  const { problem, objectifs, gtm, business, product, decisions, ai, learnings } = content;
  return [
      // 01 — Le problème
      <div key="problem" id="problem" className="pv-section">
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
      ,

      // 02 — Objectifs
      <div key="objectifs" id="objectifs" className="pv-section">
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
      ,

      // 03 — Stratégie de lancement
      <div key="gtm" id="gtm" className="pv-section">
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
      ,

      // 04 — Modèle business
      <div key="business" id="business" className="pv-section">
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
      ,

      // 05 — Le produit
      <div key="product" id="product" className="pv-section">
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
      ,

      // 06 — Décisions de design
      <div key="decisions" id="decisions" className="pv-section">
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
      ,

      // 07 — L'IA comme outil
      <div key="ai" id="ai" className="pv-section">
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
      ,

      // 08 — Bilan
      <div key="learnings" id="learnings" className="pv-section">
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
  ];
}

function CaseStudyView({ content }) {
  const sections = buildCaseStudySections(content);
  return (
    <div className="process-view">
      {sections.map((section, i) => (
        <React.Fragment key={i}>
          {section}
          {i < sections.length - 1 && <div className="pv-divider" />}
        </React.Fragment>
      ))}
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

/* ─── Vitreen — modules produit inspirés de la modale Augments ───────── */
function VitreenProductModules({ project }) {
  const { product } = project.caseStudy;

  return (
    <article className="vitreen-modules">
      {product.screens.map((screen) => (
        <section className="vitreen-module" key={screen.title}>
          <div className="vitreen-module-copy">
            <div>
              <span>{screen.tag}</span>
              <h3>{screen.title}</h3>
            </div>
            <p>{screen.text}</p>
          </div>
          <figure
            className={`vitreen-module-media${
              screen.type === "vitreen-products" ? " vitreen-module-media--products" : ""
            }${
              screen.type === "vitreen-interviews" ? " vitreen-module-media--interviews" : ""
            }${
              screen.type === "vitreen-stack" ? " vitreen-module-media--stack" : ""
            }`}
          >
            {screen.type === "vitreen-products" ? (
              <VitreenProductsMenu />
            ) : screen.type === "vitreen-interviews" ? (
              <VitreenInterviewInsights items={screen.items} />
            ) : screen.type === "vitreen-stack" ? (
              <VitreenStackFlow items={screen.items} />
            ) : (
              <img src={screen.media} alt={screen.title} />
            )}
          </figure>
        </section>
      ))}
    </article>
  );
}

function VitreenInterviewInsights({ items }) {
  return (
    <div className="vitreen-interviews">
      {items.map((item) => (
        <article className="vitreen-interview-card" key={item.label}>
          <blockquote>« {item.quote} »</blockquote>
          <p>{item.label}</p>
        </article>
      ))}
    </div>
  );
}

function VitreenStackFlow({ items }) {
  return (
    <div className="vitreen-stack-flow">
      {items.map((item, index) => (
        <React.Fragment key={item.name}>
          <article className="vitreen-stack-step">
            <div className="vitreen-stack-icon">
              {item.icon ? <img src={item.icon} alt="" /> : <span>{item.name.slice(0, 2)}</span>}
            </div>
            <strong>{item.name}</strong>
            <small>{item.role}</small>
          </article>
          {index < items.length - 1 && <span className="vitreen-stack-arrow">→</span>}
        </React.Fragment>
      ))}
    </div>
  );
}

const VITREEN_PRODUCT_LINKS = [
  {
    title: "Artworks Management",
    description:
      "Organise artworks, artists, exhibitions and documents in one structured archive.",
  },
  {
    title: "Public & Private Publishing",
    description:
      "Create website pages, viewing rooms, collector PDFs and private selections.",
  },
  {
    title: "Collector Relationships",
    description:
      "Keep inquiries, conversations and follow-ups connected to each artwork.",
  },
  {
    title: "Gallery Assistants",
    description:
      "Support publishing, sales preparation and day-to-day gallery operations.",
  },
];

function VitreenProductsMenu() {
  return (
    <div className="vitreen-products-menu">
      <span className="vitreen-products-label">Products</span>
      <div className="vitreen-products-list">
        {VITREEN_PRODUCT_LINKS.map((item) => (
          <div className="vitreen-products-item" key={item.title}>
            <strong>{item.title}</strong>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Vitreen — modale plein écran (texte + cartes use case) ──────────── */
function VitreenUseCaseModal({ project, liveUrl, onClose }) {
  const showcaseScreens = project.process?.wireframes?.length
    ? project.process.wireframes
    : [{ title: project.title, src: project.screenshot }];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div
      className="vitreen-modal"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        e.stopPropagation();
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="vitreen-modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="vitreen-modal-scroll">
          <header className="vitreen-header">
            <div className="vitreen-header-id">
              <h1 className="vitreen-header-title">Vitreen</h1>
              <p className="vitreen-header-subtitle">Infrastructure pour galerie d'art</p>
            </div>
            <div className="vitreen-header-actions">
              {liveUrl && (
                <a
                  href={liveUrl}
                  className="vitreen-round-btn"
                  aria-label={`Voir ${liveUrl}`}
                >
                  <svg viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </a>
              )}
              <button
                type="button"
                className="vitreen-round-btn vitreen-modal-close"
                onClick={onClose}
                aria-label="Fermer"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6 18 18M18 6 6 18" />
                </svg>
              </button>
            </div>
          </header>
          <div className="vitreen-modal-screens" aria-label="Aperçus du produit">
            {showcaseScreens.map((screen) => (
              <figure
                className={`vitreen-modal-screen${screen.preserveRatio ? " vitreen-modal-screen--natural" : ""}${screen.type === "vitreen-v21" ? " vitreen-modal-screen--mockup" : ""}${screen.type === "vitreen-products" ? " vitreen-modal-screen--products" : ""}`}
                key={screen.src ?? screen.title}
              >
                {screen.type === "vitreen-v21" ? (
                  <div className="vitreen-hero-html">
                    <div className="vitreen-hero-scale">
                      <VitreenSiteV21 />
                    </div>
                  </div>
                ) : screen.type === "vitreen-products" ? (
                  <VitreenProductsMenu />
                ) : (
                  <img src={screen.src} alt={screen.title ?? `${project.title} — aperçu`} />
                )}
              </figure>
            ))}
          </div>
          <section className="vitreen-editorial" aria-label="Présentation du projet">
            <dl className="vitreen-editorial-meta">
              <div>
                <dt>Livrable</dt>
                <dd>Écosystème produit</dd>
              </div>
              <div>
                <dt>Contexte</dt>
                <dd>Projet personnel · Galeries d’art contemporain</dd>
              </div>
              <div>
                <dt>Disciplines</dt>
                <dd>Product Design · UX Research · Front-end</dd>
              </div>
            </dl>
            <div className="vitreen-editorial-main">
              <p className="vitreen-editorial-intro">
                Comment faire circuler les œuvres entre les outils d'une galerie sans lui
                imposer une nouvelle manière de travailler ?
              </p>
            </div>
          </section>
          <VitreenProductModules project={project} />
        </div>
      </div>
    </div>
  );
}

const PROJECT_LIVE_URLS = {
  vitreen: "https://vitreen.art",
  hanging: "https://hanging.fr",
};

/* Largeur de viewport d'un iPhone réel (iPhone 14/15/16 : 393 px logiques).
   Le site embarqué n'est jamais rendu plus étroit : si le cadre est plus
   petit, on rend à 393 px puis on réduit en échelle pour tenir dedans. */
const EMBED_MIN_WIDTH = 393;
const EMBED_DESKTOP_WIDTH = 1280;

/* Largeur de la scrollbar système : 0 en overlay (iOS/macOS), ~15 px en
   classique (Windows). L'iframe utilise le même moteur, donc on élargit
   l'iframe d'exactement cette valeur et on clippe le surplus : la scrollbar
   du site embarqué disparaît sans jamais rogner son contenu. */
let cachedScrollbarWidth = null;
function getScrollbarWidth() {
  if (cachedScrollbarWidth !== null) return cachedScrollbarWidth;
  const probe = document.createElement("div");
  probe.style.cssText =
    "position:absolute;top:-9999px;width:100px;height:100px;overflow:scroll";
  document.body.appendChild(probe);
  cachedScrollbarWidth = probe.offsetWidth - probe.clientWidth;
  probe.remove();
  return cachedScrollbarWidth;
}

function ProjectWindowContent({ project, siteReady, onSiteLoad }) {
  const liveUrl = PROJECT_LIVE_URLS[project.slug];
  const frameBoxRef = useRef(null);
  const [embedScale, setEmbedScale] = useState(1);
  const [embedWidth, setEmbedWidth] = useState(EMBED_MIN_WIDTH);
  const scrollbarWidth = liveUrl ? getScrollbarWidth() : 0;

  useEffect(() => {
    const el = frameBoxRef.current;
    if (!liveUrl || !el) return undefined;
    const mobileQuery = window.matchMedia("(max-width: 620px)");
    const update = () => {
      const w = el.clientWidth;
      const targetWidth =
        project.slug === "vitreen" && mobileQuery.matches
          ? EMBED_DESKTOP_WIDTH
          : EMBED_MIN_WIDTH;
      setEmbedWidth(targetWidth);
      setEmbedScale(w > 0 && w < targetWidth ? w / targetWidth : 1);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    mobileQuery.addEventListener("change", update);
    return () => {
      ro.disconnect();
      mobileQuery.removeEventListener("change", update);
    };
  }, [liveUrl, project.slug]);

  if (project.slug === "hanging") {
    return <HangingTechnicalDrawing />;
  }

  if (liveUrl) {
    return (
      <>
        <div ref={frameBoxRef} className="vitreen-window-frame">
          <iframe
            src={liveUrl}
            title={`${project.title} — site live`}
            loading="eager"
            onLoad={onSiteLoad}
            style={
              embedScale < 1
                ? {
                    width: `${embedWidth + scrollbarWidth}px`,
                    height: `${100 / embedScale}%`,
                    transform: `scale(${embedScale})`,
                    transformOrigin: "top left",
                  }
                : scrollbarWidth > 0
                  ? { width: `calc(100% + ${scrollbarWidth}px)` }
                  : undefined
            }
          />
        </div>
        <div
          className={`vitreen-site-loader${siteReady ? " is-hidden" : ""}`}
          aria-hidden={siteReady}
        >
          <span>{project.slug === "vitreen" ? "Vitreen" : "Hanging"}</span>
          <i />
        </div>
      </>
    );
  }

  const media = project.cover ?? project.video;
  if (media) {
    return /\.(mp4|mov|webm)$/i.test(media) ? (
      <video
        className="project-showcase-media"
        src={media}
        autoPlay
        loop
        muted
        playsInline
      />
    ) : (
      <img className="project-showcase-media" src={media} alt={project.title} />
    );
  }

  return (
    <div className="project-showcase-placeholder">
      <span>{project.type}</span>
      <h1>{project.title}</h1>
      <p>{project.desc}</p>
      <div>
        {project.tags.map((tag) => (
          <em key={tag}>{tag}</em>
        ))}
      </div>
    </div>
  );
}

/* ─── Fenêtre projet + panneau use case optionnel ─────────────────────── */
function ShowcaseProjectPage({ project, showUseCase = false }) {
  const [useCaseOpen, setUseCaseOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [siteReady, setSiteReady] = useState(false);
  const navigate = useNavigate();
  const liveUrl = PROJECT_LIVE_URLS[project.slug];
  const isPortraitProject = project.slug === "design-system";

  const handleMouseMove = (e) => {
    const overInteractive = e.target.closest(
      ".vitreen-window, .vitreen-usecase-card, .vitreen-window-actions, .vitreen-modal, .vitreen-header"
    );
    setCursor({ x: e.clientX, y: e.clientY, visible: !overInteractive });
  };

  const handleBackgroundClick = (e) => {
    if (useCaseOpen) return;
    if (e.target.closest(".vitreen-window, .vitreen-usecase-card, .vitreen-window-actions, .vitreen-modal, .vitreen-header")) {
      return;
    }
    navigate("/");
  };

  return (
    <main
      className="project-page project-page--vitreen"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setCursor((c) => ({ ...c, visible: false }))}
      onClick={handleBackgroundClick}
    >
      <div className="vitreen-content">
        <div
          className={`vitreen-showcase${
            isPortraitProject ? " vitreen-showcase--portrait" : ""
          }`}
        >
          <div className="vitreen-window">
            <ProjectWindowContent
              project={project}
              siteReady={siteReady}
              onSiteLoad={() => setSiteReady(true)}
            />
          </div>
        </div>
        {(showUseCase || liveUrl) && (
          <div className="vitreen-window-actions">
            {showUseCase && (
              <button
                type="button"
                className="vitreen-pill-btn"
                onClick={() => setUseCaseOpen(true)}
              >
                Use case
                <svg
                  className="vitreen-pill-expand"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M10 14 4 20M4 20h4M4 20v-4M14 10l6-6M20 4h-4M20 4v4" />
                </svg>
              </button>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                className="vitreen-round-btn"
                aria-label={`Voir ${liveUrl}`}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>
      {showUseCase && useCaseOpen && (
        <VitreenUseCaseModal
          project={project}
          liveUrl={liveUrl}
          onClose={() => setUseCaseOpen(false)}
        />
      )}
      <div
        className={`vitreen-cursor-close${cursor.visible ? " is-visible" : ""}`}
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6 18 18M18 6 6 18" />
        </svg>
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

  if (slug === "vitreen") {
    return <ShowcaseProjectPage project={project} showUseCase />;
  }

  if (slug === "hanging") {
    return <ShowcaseProjectPage project={project} showUseCase />;
  }

  return <ShowcaseProjectPage project={project} />;
}
