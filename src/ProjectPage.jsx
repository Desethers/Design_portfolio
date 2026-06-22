import React, { useEffect, useRef, useState } from "react";
import { useParams, Link, Navigate, useNavigate } from "react-router-dom";
import { projects } from "./projects.js";
import HangingTechnicalDrawing from "./HangingTechnicalDrawing.jsx";
import {
  VitreenSiteV21,
  VitreenSiteAdoption,
  GalleryOsDashboard,
  GalleryOsArtworkDetail,
} from "./VitreenSite.jsx";

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

const VITREEN_METRICS = [
  { value: "46", label: "Itérations de design & code" },
  { value: "8 600", label: "Lignes de code écrites" },
  { value: "8", label: "Sessions de travail sur 3,5 mois" },
  { value: "16", label: "Écrans & modules conçus" },
  { value: "~4M", label: "Tokens IA consommés (estimation)" },
];

/* ─── Vitreen — ligne de métriques entre intro et premier module ──────── */
function VitreenMetricsRow() {
  return (
    <section className="vitreen-metrics" aria-label="Chiffres clés du projet">
      {VITREEN_METRICS.map((metric) => (
        <div className="vitreen-metric" key={metric.label}>
          <span className="vitreen-metric-value">{metric.value}</span>
          <span className="vitreen-metric-label">{metric.label}</span>
        </div>
      ))}
    </section>
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
            }${
              screen.type === "vitreen-positioning"
                ? " vitreen-module-media--positioning"
                : ""
            }${
              screen.type === "vitreen-reels" ? " vitreen-module-media--reels" : ""
            }${
              screen.type === "vitreen-analytics" ? " vitreen-module-media--analytics" : ""
            }`}
          >
            {screen.type === "vitreen-products" ? (
              <VitreenProductsMenu />
            ) : screen.type === "vitreen-interviews" ? (
              <VitreenInterviewInsights items={screen.items} />
            ) : screen.type === "vitreen-stack" ? (
              <VitreenStackFlow items={screen.items} />
            ) : screen.type === "vitreen-positioning" ? (
              <VitreenPositioningComparison />
            ) : screen.type === "vitreen-reels" ? (
              <VitreenReels items={screen.items} />
            ) : screen.type === "vitreen-analytics" ? (
              <VitreenAnalyticsPending />
            ) : (
              <img src={screen.media} alt={screen.title} />
            )}
          </figure>
        </section>
      ))}
    </article>
  );
}

function VitreenReels({ items }) {
  return (
    <div className="vitreen-reels" aria-label="Reels Instagram Vitreen">
      {items.map((item, index) => (
        <article className="vitreen-reel-card" key={item.id}>
          <video
            src={`/vitreen/reels/${item.id}.mp4`}
            aria-label={`Reel Instagram Vitreen ${index + 1}`}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          />
        </article>
      ))}
    </div>
  );
}

function VitreenBrowserBar({ label }) {
  return (
    <div className="vitreen-browser-bar">
      <div className="vitreen-browser-controls" aria-hidden="true">
        <span>×</span>
        <span>−</span>
        <span>+</span>
      </div>
      <span>{label}</span>
    </div>
  );
}

function VitreenPositioningWindow({ className, label, children }) {
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  return (
    <article
      className={`vitreen-browser-window ${className}`}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        setCursor({
          x: event.clientX - bounds.left,
          y: event.clientY - bounds.top,
        });
      }}
    >
      {children}
      <span
        className="vitreen-version-label"
        style={{ left: cursor.x, top: cursor.y }}
      >
        {label}
      </span>
    </article>
  );
}

function VitreenPositioningComparison() {
  return (
    <div className="vitreen-positioning-comparison">
      <VitreenPositioningWindow
        className="vitreen-browser-window--legacy"
        label="Version main"
      >
        <VitreenBrowserBar label="Gallery OS — Tools" />
        <div className="vitreen-positioning-tools">
          <div className="vitreen-positioning-tools-scale">
            <VitreenToolsMock />
          </div>
        </div>
      </VitreenPositioningWindow>

      <VitreenPositioningWindow
        className="vitreen-browser-window--v21"
        label="Version V2.1"
      >
        <VitreenBrowserBar label="Vitreen — V2.1" />
        <div className="vitreen-positioning-v21">
          <div className="vitreen-positioning-v21-scale">
            <VitreenSiteAdoption />
          </div>
        </div>
      </VitreenPositioningWindow>
    </div>
  );
}

const VITREEN_TOOLS_SECTIONS = [
  {
    title: "Add-ins",
    subtitle: "The Gallery OS sidebar, right inside your inbox",
    cards: [
      {
        id: "whatsapp",
        wordmark: "/vitreen/tools/Digital_Inline_Black_RGB_2026.svg",
        wordmarkAlt: "WhatsApp",
        meta: "Selection · Cloud API · 857143",
      },
      {
        id: "gmail",
        icon: "/vitreen/tools/Gmail_Icon_Official.svg",
        name: "Gmail",
        nameStyle: { letterSpacing: "-0.02em" },
        meta: "Sidebar · Workspace add-on · 2-minute install",
      },
      {
        id: "outlook",
        icon: "/vitreen/tools/Outlook_Icon_Official.svg",
        name: "Outlook",
        nameStyle: { letterSpacing: "-0.01em" },
        meta: "Sidebar · Coming soon",
        pill: "Coming soon",
      },
      {
        id: "excel",
        icon: "/vitreen/tools/Excel-logo-png-large-size.png",
        name: "Excel",
        meta: "Export · .xlsx",
      },
    ],
  },
  {
    title: "AI agents",
    subtitle: "Assistants that draft for you and let you approve",
    cards: [
      {
        id: "sales-agent",
        glyph: "bot",
        name: "Sales Agent",
        meta: "Drafts a reply for every incoming inquiry",
      },
    ],
  },
];

const VITREEN_TOOLS_NAV = [
  { label: "Overview", glyph: "grid" },
  { label: "Artworks", glyph: "image" },
  { label: "Artists", glyph: "users" },
  { label: "Exhibitions", glyph: "calendar" },
  { label: "Inquiries", glyph: "chat" },
  { label: "Sales drafts", glyph: "mail", badge: "2" },
  { label: "Private Selection", glyph: "folder" },
  { label: "Collectors", glyph: "id" },
  { label: "Tools", glyph: "wrench", active: true },
];

function VitreenToolsGlyph({ name }) {
  const common = {
    width: 13,
    height: 13,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };
  switch (name) {
    case "grid":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      );
    case "image":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="M21 15l-5-5L5 21" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 11.5a8.38 8.38 0 0 1-9 8.4 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-4.1A8.38 8.38 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-10 6L2 7" />
        </svg>
      );
    case "folder":
      return (
        <svg {...common}>
          <path d="M4 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 3h7a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z" />
        </svg>
      );
    case "id":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="9" cy="10" r="2" />
          <path d="M15 9h3M15 13h3M6 16c.5-1.5 1.7-2 3-2s2.5.5 3 2" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...common}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18v3h3l6.4-6.4a4 4 0 0 0 5.3-5.4l-2.7 2.7-2.6-.6-.6-2.6z" />
        </svg>
      );
    case "bot":
      return (
        <svg {...common}>
          <rect x="4" y="8" width="16" height="11" rx="2.5" />
          <path d="M12 4v4M9 13h.01M15 13h.01" />
          <path d="M8 19v1M16 19v1" />
        </svg>
      );
    default:
      return null;
  }
}

function VitreenToolsCard({ card }) {
  return (
    <article className="vitreen-tools-card">
      <div className="vitreen-tools-card-body">
        <h3 className="vitreen-tools-card-name">
          {card.wordmark ? (
            <img
              className="vitreen-tools-wordmark"
              src={card.wordmark}
              alt={card.wordmarkAlt}
            />
          ) : (
            <>
              {card.icon ? (
                <img className="vitreen-tools-icon" src={card.icon} alt="" aria-hidden="true" />
              ) : (
                <span className="vitreen-tools-glyph-icon">
                  <VitreenToolsGlyph name={card.glyph} />
                </span>
              )}
              <span style={card.nameStyle}>{card.name}</span>
            </>
          )}
        </h3>
        <div className="vitreen-tools-card-meta">
          <span>{card.meta}</span>
          {card.pill && <em className="vitreen-tools-pill">{card.pill}</em>}
        </div>
      </div>
      <span className="vitreen-tools-arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      </span>
    </article>
  );
}

function VitreenToolsMock() {
  return (
    <div className="vitreen-tools-app">
      <aside className="vitreen-tools-sidebar">
        <div className="vitreen-tools-brand">
          <span className="vitreen-tools-brand-mark" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round">
              <path d="M12 3 3 8l9 5 9-5-9-5z" />
              <path d="M3 12l9 5 9-5M3 16l9 5 9-5" />
            </svg>
          </span>
          <strong>Gallery OS</strong>
        </div>
        <nav className="vitreen-tools-nav">
          {VITREEN_TOOLS_NAV.map((item) => (
            <span
              key={item.label}
              className={`vitreen-tools-nav-item${item.active ? " is-active" : ""}`}
            >
              <VitreenToolsGlyph name={item.glyph} />
              <span>{item.label}</span>
              {item.badge && <em className="vitreen-tools-nav-badge">{item.badge}</em>}
            </span>
          ))}
        </nav>
        <div className="vitreen-tools-sidebar-foot">
          <span>Powered by V…</span>
          <span>Déconnexion</span>
        </div>
      </aside>

      <main className="vitreen-tools-main">
        <header className="vitreen-tools-head">
          <h1>Tools</h1>
          <p>Your extensions and integrations — the infrastructure that lives outside the dashboard.</p>
        </header>

        {VITREEN_TOOLS_SECTIONS.map((section) => (
          <section className="vitreen-tools-section" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.subtitle}</p>
            <div className="vitreen-tools-grid">
              {section.cards.map((card) => (
                <VitreenToolsCard card={card} key={card.id} />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}

const VITREEN_ANALYTICS_KPIS = [
  { label: "Galeries déployées", value: "—", hint: "Mesure à venir" },
  { label: "Délai moyen d'installation", value: "—", hint: "Mesure à venir" },
  { label: "Galeries actives à 30 jours", value: "—", hint: "Mesure à venir" },
  { label: "MRR", value: "—", hint: "Mesure à venir" },
];

function VitreenAnalyticsPending() {
  const [range, setRange] = useState("30 j");
  // Bars volontairement plates / placeholder — le dashboard est prêt,
  // il attend les premières données réelles.
  const bars = [38, 22, 30, 18, 26, 14, 20, 12, 24, 16, 28, 19];

  return (
    <div className="vitreen-analytics" role="img" aria-label="Tableau de bord analytics en attente de données">
      <div className="vitreen-analytics-head">
        <div>
          <h4>Insights</h4>
          <span>Déploiement &amp; revenus</span>
        </div>
        <div className="vitreen-analytics-range" role="group" aria-label="Période des données">
          {["30 j", "90 j", "Tout"].map((option) => (
            <button
              type="button"
              className={range === option ? "is-active" : ""}
              aria-pressed={range === option}
              onClick={() => setRange(option)}
              key={option}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="vitreen-analytics-kpis">
        {VITREEN_ANALYTICS_KPIS.map((kpi) => (
          <div className="vitreen-analytics-kpi" key={kpi.label}>
            <span className="vitreen-analytics-kpi-label">{kpi.label}</span>
            <strong className="vitreen-analytics-kpi-value">{kpi.value}</strong>
            <span className="vitreen-analytics-kpi-hint">{kpi.hint}</span>
          </div>
        ))}
      </div>

      <div className="vitreen-analytics-chart">
        <div className="vitreen-analytics-bars" aria-hidden="true">
          {bars.map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="vitreen-analytics-empty" aria-hidden="true">
          <span className="vitreen-analytics-empty-dot" />
          <p>En attente de données</p>
          <small>Le suivi des déploiements est la prochaine étape</small>
        </div>
      </div>
    </div>
  );
}

const VITREEN_NEXT_STEPS = [
  {
    num: "01",
    title: "Développer les add-ins",
    text: "Étendre l'add-in Gmail (puis Outlook) : insérer œuvres, sélections et viewing rooms sans jamais quitter la messagerie.",
  },
  {
    num: "02",
    title: "Connecter plus d'outils",
    text: "WhatsApp Business, Stripe, calendriers, stockage — chaque canal déjà utilisé devient un point d'entrée vers Gallery OS.",
  },
  {
    num: "03",
    title: "Piloter depuis le mobile",
    text: "Un companion mobile : valider une vente, envoyer une sélection, répondre à une inquiry — directement depuis le téléphone.",
  },
];

function VitreenWhatsNext() {
  return (
    <section className="vitreen-next" aria-label="What's next — prochaines étapes">
      <div className="vitreen-module-copy">
        <div>
          <span>What's next</span>
          <h3>Étendre la couche de distribution</h3>
        </div>
        <p>
          Brancher progressivement chaque outil de la galerie, jusqu'à ce que le galeriste
          pilote tout son opérationnel — inventaire, viewing rooms, inquiries, ventes —
          uniquement depuis son téléphone.
        </p>
      </div>

      <div className="vitreen-next-cards">
        {VITREEN_NEXT_STEPS.map((step) => (
          <article className="vitreen-next-card" key={step.num}>
            <p className="vitreen-next-card-text">{step.text}</p>
            <span className="vitreen-next-card-label">{step.title}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function VitreenInterviewInsights({ items }) {
  return (
    <div className="vitreen-interviews">
      {items.slice(0, 2).map((item) => (
        <article className="vitreen-interview-card" key={item.label}>
          <blockquote>« {item.quote} »</blockquote>
          <p>
            {item.label}
            {item.date && <span className="vitreen-interview-date">{item.date}</span>}
          </p>
        </article>
      ))}
    </div>
  );
}

const GOSC_FANS = [
  "M444 192 C492 192 508 96 548 96",
  "M444 192 C494 192 510 176 548 176",
  "M444 192 C494 192 510 256 548 256",
  "M444 192 C492 192 508 336 548 336",
];

const GoscIconColumns = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="1" width="6" height="14" rx="1.5" fill="currentColor" fillOpacity=".18"/>
    <rect x="9" y="1" width="6" height="14" rx="1.5"/>
  </svg>
);
const GoscIconGrid = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="1" width="6" height="6" rx="1.5"/>
    <rect x="9" y="1" width="6" height="6" rx="1.5"/>
    <rect x="1" y="9" width="6" height="6" rx="1.5"/>
    <rect x="9" y="9" width="6" height="6" rx="1.5"/>
  </svg>
);
const GoscIconGlobe = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="8" cy="8" r="7"/>
    <path d="M1 8h14"/>
    <path d="M8 1c-2.5 2-4 4.5-4 7s1.5 5 4 7M8 1c2.5 2 4 4.5 4 7s-1.5 5-4 7"/>
  </svg>
);
const GoscIconMail = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="3" width="14" height="10" rx="2"/>
    <path d="m1 5.5 7 5 7-5"/>
  </svg>
);
const GoscIconArchive = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="1" width="14" height="3.5" rx="1"/>
    <path d="M2 4.5V13a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V4.5"/>
    <path d="M6.5 8h3"/>
  </svg>
);

const GOSC_SURFACES = [
  { top: 70, Icon: GoscIconColumns, title: "Sélections privées", sub: "pour un collectionneur" },
  { top: 150, Icon: GoscIconGrid, title: "Viewing room", sub: "lien privé · PDF partageable" },
  { top: 230, Icon: GoscIconGlobe, title: "Inquiries", sub: "réponse + œuvres liées" },
  { top: 310, Icon: GoscIconMail, title: "Gmail", sub: "insérer l'œuvre dans un email" },
];

function VitreenCirculationCanvas() {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return undefined;
    const fit = () => {
      const width = wrap.clientWidth;
      if (!width) return;
      stage.style.transform = `scale(${width / 800})`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className="gosc-wrap"
      ref={wrapRef}
      role="img"
      aria-label="Schéma stratégie produit : la fiche œuvre est la source de vérité ; ses données alimentent les sélections privées, les viewing rooms, les inquiries et les emails (Gmail), sans remplacer l'archive existante."
    >
      <svg className="gosc-ratio" width="800" height="390" aria-hidden="true" />
      <div className="gosc-stage" ref={stageRef} aria-hidden="true">
        <svg width="800" height="390" className="gosc-lines">
          <path className="gosc-ln gosc-ln--faded" style={{ animationDelay: "0.55s" }} d="M205 152 C226 152 234 192 256 192" />
          {GOSC_FANS.map((d, i) => (
            <path key={d} className="gosc-ln gosc-ln--accent" style={{ animationDelay: `${0.9 + i * 0.12}s` }} d={d} />
          ))}
        </svg>

        <div className="gosc-card gosc-card--archive" style={{ left: 24, top: 132, width: 181, animationDelay: "0.05s" }}>
          <div className="gosc-label">Archive existante</div>
          <div className="gosc-row" style={{ marginBottom: 10 }}>
            <span className="gosc-th gosc-th--neutral"><GoscIconArchive /></span>
            <div>
              <div className="gosc-name">5 980 œuvres</div>
              <div className="gosc-sub">Artlogic · Excel</div>
            </div>
          </div>
          <span className="gosc-chip">conservée, pas remplacée</span>
        </div>

        <div className="gosc-card gosc-fiche" style={{ left: 256, top: 60, width: 188, animationDelay: "0.2s" }}>
          <div className="gosc-artwork-mini">
            <div className="gosc-artwork-mini-img">
              <img src="/vitreen/painting-05.jpg" alt="Evening field" />
            </div>
            <div className="gosc-artwork-mini-body">
              <div className="gosc-artwork-mini-artist">Sacha Elron</div>
              <div className="gosc-artwork-mini-title"><strong>Evening field</strong>, 2023</div>
              <div className="gosc-artwork-mini-footer">
                <span>8 000 €</span>
                <span className="gosc-artwork-mini-badge">Available</span>
              </div>
            </div>
          </div>
          <div className="gosc-fiche-chips">
            <span className="gosc-chip-xs">Prix</span>
            <span className="gosc-chip-xs">Statut</span>
            <span className="gosc-chip-xs">Docs</span>
            <span className="gosc-chip-xs">Provenance</span>
          </div>
        </div>


        {GOSC_SURFACES.map((s, i) => (
          <div
            key={s.title}
            className="gosc-card gosc-card--surface"
            style={{ left: 548, top: s.top, width: 230, animationDelay: `${0.5 + i * 0.12}s` }}
          >
            <div className="gosc-row">
              <span className="gosc-th gosc-th--accent"><s.Icon /></span>
              <div>
                <div className="gosc-name">{s.title}</div>
                <div className="gosc-sub">{s.sub}</div>
              </div>
            </div>
          </div>
        ))}

        {GOSC_FANS.map((d, i) => (
          <span
            key={d}
            className="gosc-pulse"
            style={{ offsetPath: `path('${d}')`, animationDelay: `${1.5 + i * 0.4}s` }}
          />
        ))}
      </div>
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

const VITREEN_SOLUTION_LINKS = [
  {
    title: "Galleries",
    description: "Artworks, exhibitions and inquiries.",
  },
  {
    title: "Advisors & Dealers",
    description: "Private selections and client follow-up.",
  },
  {
    title: "Artists",
    description: "Archive, series and presentation.",
  },
  {
    title: "Collectors",
    description: "Acquisitions and documents.",
  },
  {
    title: "Artist Estates",
    description: "Corpus, provenance and stewardship.",
  },
];

const GOS_DECK_STEP_X = 52;
const GOS_DECK_STEP_Y = 42;
const GOS_DECK_BAR = 34;
const GOS_DECK_ASPECT = 1704 / 2128;

function GosMockupDeck({ mockups }) {
  const n = mockups.length;
  const [active, setActive] = useState(n - 1);
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const measure = () => {
      const winW = el.clientWidth - GOS_DECK_STEP_X * (n - 1);
      const winH = GOS_DECK_BAR + winW * GOS_DECK_ASPECT;
      setHeight(winH + GOS_DECK_STEP_Y * (n - 1));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [n]);

  return (
    <div
      className="gos-deck"
      ref={ref}
      style={{ height: height ? `${height}px` : undefined }}
    >
      {mockups.map((m, i) => {
        const isActive = i === active;
        return (
          <article
            key={m.title}
            className={`gos-deck-win${isActive ? " is-active" : ""}`}
            style={{
              left: `${i * GOS_DECK_STEP_X}px`,
              top: `${i * GOS_DECK_STEP_Y}px`,
              width: `calc(100% - ${GOS_DECK_STEP_X * (n - 1)}px)`,
              zIndex: isActive ? n + 1 : i + 1,
            }}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            tabIndex={0}
          >
            <div className="gos-win-bar" aria-hidden="true">
              <span className="gos-win-dot" />
              <span className="gos-win-dot" />
              <span className="gos-win-dot" />
              <span className="gos-win-title">{m.title}</span>
            </div>
            <div className="gos-win-body">
              <img src={m.media} alt={m.title} loading="lazy" />
            </div>
          </article>
        );
      })}
    </div>
  );
}

function VitreenProductsMenu() {
  const [activeMenu, setActiveMenu] = useState("products");
  const items =
    activeMenu === "products" ? VITREEN_PRODUCT_LINKS : VITREEN_SOLUTION_LINKS;

  return (
    <div className="vitreen-products-menu">
      <div className="vitreen-products-tabs" role="tablist" aria-label="Vitreen navigation">
        {["products", "solutions"].map((menu) => (
          <button
            type="button"
            role="tab"
            aria-selected={activeMenu === menu}
            className={activeMenu === menu ? "is-active" : ""}
            onClick={() => setActiveMenu(menu)}
            key={menu}
          >
            {menu === "products" ? "Products" : "Solutions"}
          </button>
        ))}
      </div>
      <div
        className={`vitreen-products-list${
          activeMenu === "solutions" ? " is-solutions" : ""
        }`}
        role="tabpanel"
      >
        {activeMenu === "solutions" && (
          <span className="vitreen-products-section-label">By role</span>
        )}
        {items.map((item) => (
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
                className={`vitreen-modal-screen${screen.preserveRatio ? " vitreen-modal-screen--natural" : ""}${screen.type === "vitreen-v21" ? " vitreen-modal-screen--mockup" : ""}${screen.type === "vitreen-products" ? " vitreen-modal-screen--products" : ""}${screen.zoom ? " vitreen-modal-screen--zoom" : ""}`}
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
                <dd>Vitreen — Gallery OS</dd>
              </div>
              <div>
                <dt>Secteur</dt>
                <dd>Art contemporain · Galeries</dd>
              </div>
              <div>
                <dt>Période</dt>
                <dd>Avril 2026 — Aujourd'hui</dd>
              </div>
              <div>
                <dt>Rôle</dt>
                <dd>Product Design &amp; Founder (solo)</dd>
              </div>
              <div>
                <dt>Statut</dt>
                <dd>Prototype en validation</dd>
              </div>
            </dl>
            <div className="vitreen-editorial-main">
              <p className="vitreen-editorial-intro">
                Comment faire circuler les œuvres entre les outils d'une galerie sans lui
                imposer une nouvelle manière de travailler ?
              </p>
              <div className="vitreen-editorial-body">
                <p>
                  <strong>Vitreen est un Digital Sales Partner pour galeries d'art.</strong>{" "}
                  Deux couches, une marque : <em>vitreen.art</em> porte la promesse,{" "}
                  <em>Gallery OS</em> est l'atelier opérationnel — inventaire, inquiries,
                  sélections privées et Viewing Room Studio.
                </p>
                <p>
                  Les galeries ont les œuvres, mais pas le pipeline pour les faire circuler.
                  Chaque envoi collectionneur repart de zéro — export Excel, PDF, lien
                  WhatsApp : les outils existants stockent l'archive, ils ne la distribuent pas.
                </p>
                <p>
                  D'un studio de création de sites, le projet a pivoté vers une infrastructure
                  de vente — une couche qui se branche sur les habitudes existantes. Conçu en
                  solo et entièrement vibe-codé avec Claude Code.
                </p>
              </div>
            </div>
          </section>
          <VitreenMetricsRow />
          <VitreenProductModules project={project} />
          <VitreenWhatsNext />
        </div>
      </div>
    </div>
  );
}

function renderUseCaseText(text) {
  return text.split("\n\n").map((block, index) => {
    const lines = block.split("\n").filter(Boolean);
    const isList = lines.every((line) => line.trim().startsWith("- "));

    if (isList) {
      return (
        <ul key={index}>
          {lines.map((line) => (
            <li key={line}>{line.trim().replace(/^- /, "")}</li>
          ))}
        </ul>
      );
    }

    return <p key={index}>{block}</p>;
  });
}

function HangingUseCaseModal({ project, liveUrl, onClose }) {
  const useCase = project.caseStudy?.useCase;
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

  if (!useCase) return null;

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
              <h1 className="vitreen-header-title">{useCase.header.title}</h1>
              <p className="vitreen-header-subtitle">{useCase.header.subtitle}</p>
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
                className={`vitreen-modal-screen${screen.preserveRatio ? " vitreen-modal-screen--natural" : ""}${screen.landscape ? " vitreen-modal-screen--wide" : ""}${screen.hangingFrame ? " vitreen-modal-screen--hanging-frame" : ""}`}
                key={screen.src ?? screen.title}
              >
                {/\.(mp4|mov|webm)$/i.test(screen.src) ? (
                  <video
                    src={screen.src}
                    aria-label={screen.title ?? `${project.title} — aperçu`}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                ) : (
                  <img src={screen.src} alt={screen.title ?? `${project.title} — aperçu`} />
                )}
              </figure>
            ))}
          </div>
          <section className="vitreen-editorial" aria-label="Présentation du projet">
            <dl className="vitreen-editorial-meta">
              {useCase.meta.map((row) => (
                <div key={row.term}>
                  <dt>{row.term}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <div className="vitreen-editorial-main">
              <p className="vitreen-editorial-intro">{useCase.intro}</p>
              <div className="vitreen-editorial-body">
                {useCase.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>
          {useCase.metrics?.length > 0 && (
            <section className="vitreen-metrics" aria-label="Chiffres clés du projet">
              {useCase.metrics.map((metric) => (
                <div className="vitreen-metric" key={metric.label}>
                  <span className="vitreen-metric-value">{metric.value}</span>
                  <span className="vitreen-metric-label">{metric.label}</span>
                </div>
              ))}
            </section>
          )}
          <article className="vitreen-modules">
            {useCase.modules.map((module) => (
              <section className="vitreen-module" key={module.title}>
                <div className="vitreen-module-copy">
                  <div>
                    <span>{module.tag}</span>
                    <h3>{module.title}</h3>
                  </div>
                  <div className="vitreen-module-text">{renderUseCaseText(module.text)}</div>
                </div>
                {module.media ? (
                  <figure className="vitreen-module-media">
                    <img src={module.media} alt={module.title} />
                  </figure>
                ) : module.type === "vitreen-stack" ? (
                  <div className="vitreen-module-media vitreen-module-media--stack">
                    <VitreenStackFlow items={module.items} />
                  </div>
                ) : module.type === "diptych" ? (
                  <div className="gos-diptych">
                    {module.images.map((img) => (
                      <figure className="gos-diptych-frame" key={img.src}>
                        <img src={img.src} alt={img.alt} loading="lazy" />
                      </figure>
                    ))}
                  </div>
                ) : module.type === "mockup-grid" ? (
                  <GosMockupDeck mockups={module.mockups} />
                ) : module.type === "vitreen-canvas" ? (
                  <div className="vitreen-module-media vitreen-module-media--canvas">
                    <VitreenCirculationCanvas />
                  </div>
                ) : module.type === "image-pair" ? (
                  <div className="gos-pair-block">
                    {(module.flows ?? [{ ...module.mediaIntro, images: module.images }]).map((flow) => (
                      <div className="gos-pair-section" key={flow.label}>
                        {flow.label && (
                          <div className="gos-pair-intro">
                            <span className="gos-pair-intro-label">{flow.label}</span>
                            <p className="gos-pair-intro-text">{flow.text}</p>
                          </div>
                        )}
                        <div className="gos-pair">
                          {flow.images.map((img) => (
                            <figure
                              className={`gos-pair-frame${img.noBar ? " gos-pair-frame--no-bar" : ""}`}
                              key={img.src ?? img.component}
                            >
                              {!img.noBar && (
                                <div className="gos-mockup-bar" aria-hidden="true">
                                  <span />
                                  <span />
                                  <span />
                                </div>
                              )}
                              {img.component === "artwork-detail" ? (
                                <GalleryOsArtworkDetail />
                              ) : /\.(mp4|mov|webm)$/i.test(img.src) ? (
                                <video src={img.src} autoPlay loop muted playsInline style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined} />
                              ) : (
                                <img src={img.src} alt={img.alt} loading="lazy" />
                              )}
                            </figure>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : module.cards ? (
                  <div className="vitreen-next-cards hanging-module-cards">
                    {module.cards.map((card) => (
                      <article className="vitreen-next-card" key={card.title}>
                        <p className="vitreen-next-card-text">{card.text}</p>
                        <span className="vitreen-next-card-label">{card.title}</span>
                      </article>
                    ))}
                  </div>
                ) : null}
              </section>
            ))}
          </article>
          {useCase.next && (
            <section className="vitreen-next" aria-label="What's next — prochaines étapes">
              <div className="vitreen-module-copy">
                <div>
                  <span>What's next</span>
                  <h3>{useCase.next.title}</h3>
                </div>
                <p>{useCase.next.text}</p>
              </div>
              <div className="vitreen-next-cards">
                {useCase.next.cards.map((card) => (
                  <article className="vitreen-next-card" key={card.title}>
                    <p className="vitreen-next-card-text">{card.text}</p>
                    <span className="vitreen-next-card-label">{card.title}</span>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

const PROJECT_LIVE_URLS = {
  vitreen: "https://vitreen.art",
  hanging: "https://hanging.fr",
  "gallery-os": "https://gallery-os-ten.vercel.app",
};

const PROJECT_USE_CASE_INTROS = {
  vitreen: {
    meta: [
      { term: "Livrable", value: "Vitreen — Gallery OS" },
      { term: "Secteur", value: "Art contemporain · Galeries" },
      { term: "Période", value: "Avril 2026 — Aujourd'hui" },
      { term: "Rôle", value: "Product Design & Founder (solo)" },
      { term: "Statut", value: "Prototype en validation" },
    ],
    question:
      "Comment faire circuler les œuvres entre les outils d'une galerie sans lui imposer une nouvelle manière de travailler ?",
    text:
      "Vitreen est un Digital Sales Partner pour galeries d'art. Deux couches, une marque : vitreen.art porte la promesse, Gallery OS est l'atelier opérationnel — inventaire, inquiries, sélections privées et Viewing Room Studio.",
  },
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

  if (project.slug === "gallery-os") {
    return (
      <div className="gos-window">
        <GalleryOsDashboard className="gos-glass" />
      </div>
    );
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
  const useCaseIntro =
    project.slug === "hanging" || project.slug === "gallery-os"
      ? {
          meta: project.caseStudy?.useCase?.meta,
          question: project.caseStudy?.useCase?.intro,
          text: project.caseStudy?.useCase?.body?.[0],
        }
      : PROJECT_USE_CASE_INTROS[project.slug];

  const handleMouseMove = (e) => {
    const overInteractive = e.target.closest(
      ".vitreen-window, .vitreen-usecase-card, .vitreen-window-actions, .vitreen-window-link, .vitreen-intro-preview, .vitreen-modal, .vitreen-header"
    );
    setCursor({ x: e.clientX, y: e.clientY, visible: !overInteractive });
  };

  const handleBackgroundClick = (e) => {
    if (useCaseOpen) return;
    if (e.target.closest(".vitreen-window, .vitreen-usecase-card, .vitreen-window-actions, .vitreen-window-link, .vitreen-intro-preview, .vitreen-modal, .vitreen-header")) {
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
          {liveUrl && (
            <a
              href={liveUrl}
              className="vitreen-round-btn vitreen-window-link"
              aria-label={`Voir ${liveUrl}`}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          )}
        </div>
        {showUseCase && useCaseIntro && (
          <section
            className="vitreen-intro-preview vitreen-editorial"
            aria-label="Aperçu du projet"
          >
            {useCaseIntro.meta?.length > 0 && (
              <dl className="vitreen-editorial-meta">
                {useCaseIntro.meta.map((row) => (
                  <div key={row.term}>
                    <dt>{row.term}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="vitreen-editorial-main">
              <p className="vitreen-editorial-intro">{useCaseIntro.question}</p>
              {useCaseIntro.text && (
                <div className="vitreen-editorial-body">
                  <p className="vitreen-intro-preview-text">
                    {useCaseIntro.text.replace(/\s*\.?$/, "")}…
                  </p>
                </div>
              )}
              <button
                type="button"
                className="vitreen-pill-btn vitreen-intro-preview-btn"
                onClick={() => setUseCaseOpen(true)}
              >
                Full use case
                <svg
                  className="vitreen-pill-expand"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M10 14 4 20M4 20h4M4 20v-4M14 10l6-6M20 4h-4M20 4v4" />
                </svg>
              </button>
            </div>
          </section>
        )}
      </div>
      {showUseCase && useCaseOpen && (
        project.slug === "hanging" || project.slug === "gallery-os" ? (
          <HangingUseCaseModal
            project={project}
            liveUrl={liveUrl}
            onClose={() => setUseCaseOpen(false)}
          />
        ) : (
          <VitreenUseCaseModal
            project={project}
            liveUrl={liveUrl}
            onClose={() => setUseCaseOpen(false)}
          />
        )
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

/* ─── Page reels — derrière la card vidéo de la home ──────────────────── */
export function VitreenReelsPage() {
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === "vitreen");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return <Navigate to="/" replace />;

  const reelsScreen = project.caseStudy?.product?.screens?.find(
    (screen) => screen.type === "vitreen-reels"
  );
  const leadId = "DYEWo3elU9-";
  // Toutes les vidéos de reels disponibles dans public/vitreen/reels/
  const availableReelIds = [
    "DYEWo3elU9-",
    "DX1pScFMc9E",
    "DX6A9E6txtp",
    "DYOlEZDD_WX",
    "DYR0tVrmrxT",
    "DYlwavGCuLg",
    "DZO8kHvkxt7",
  ];
  const reels = reelsScreen?.items?.length
    ? reelsScreen.items
    : availableReelIds.map((id) => ({ id }));
  const orderedReels = [
    ...reels.filter((reel) => reel.id === leadId),
    ...reels.filter((reel) => reel.id !== leadId),
  ];
  const intro = {
    meta: [
      { term: "Canal", value: "Instagram · @vitreen.art" },
      { term: "Format", value: "Reels — talking-heads & interviews" },
      { term: "Objectif", value: "Communauté & positionnement" },
      { term: "Outils", value: "Buffer · CapCut" },
      { term: "Statut", value: "Diffusion en cours" },
    ],
    question: reelsScreen?.title,
    text: reelsScreen?.text,
  };

  return (
    <main className="reels-page">
      <div className="reels-page-inner">
        <header className="reels-page-header">
          <button
            type="button"
            className="vitreen-round-btn reels-page-close"
            onClick={() => navigate("/")}
            aria-label="Fermer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6 18 18M18 6 6 18" />
            </svg>
          </button>
        </header>

        <div className="reels-page-carousel" aria-label="Reels Instagram Vitreen">
          {orderedReels.map((item, index) => (
            <article className="vitreen-reel-card" key={item.id}>
              <video
                src={`/vitreen/reels/${item.id}.mp4`}
                aria-label={`Reel Instagram Vitreen ${index + 1}`}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            </article>
          ))}
        </div>

        {intro && (
          <section
            className="vitreen-intro-preview vitreen-editorial reels-page-intro"
            aria-label="Aperçu du projet"
          >
            {intro.meta?.length > 0 && (
              <dl className="vitreen-editorial-meta">
                {intro.meta.map((row) => (
                  <div key={row.term}>
                    <dt>{row.term}</dt>
                    <dd>{row.value}</dd>
                  </div>
                ))}
              </dl>
            )}
            <div className="vitreen-editorial-main">
              <p className="vitreen-editorial-intro">{intro.question}</p>
              {intro.text && (
                <div className="vitreen-editorial-body">
                  <p className="vitreen-intro-preview-text">{intro.text}</p>
                </div>
              )}
            </div>
          </section>
        )}
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

  if (slug === "gallery-os") {
    return <ShowcaseProjectPage project={project} showUseCase />;
  }

  return <ShowcaseProjectPage project={project} />;
}
