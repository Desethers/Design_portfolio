import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { projects } from "./projects.js";
import { SITE } from "./site.js";
import ProjectPage from "./ProjectPage.jsx";
import HangingTechnicalDrawing from "./HangingTechnicalDrawing.jsx";
import { VitreenSiteV21 } from "./VitreenSite.jsx";

const BENTO_SIZE = {
  vitreen: "xl",
  hanging: "lg",
  "design-system": "sm",
  "app-sante": "sm",
};

const BENTO_ORDER = ["vitreen", "hanging", "design-system", "app-sante"];
const bentoProjects = [...projects].sort(
  (a, b) => BENTO_ORDER.indexOf(a.slug) - BENTO_ORDER.indexOf(b.slug),
);

function BentoCover({ project }) {
  const src = project.cover ?? project.video;
  if (!src) return null;

  if (/\.(mp4|mov|webm)$/i.test(src)) {
    return <video src={src} muted playsInline autoPlay loop />;
  }

  return <img src={src} alt="" />;
}

function VitreenInteractiveCard({ project }) {
  return (
    <Link to={`/projet/${project.slug}`} className="bento-card bento-card--xl vitreen-demo">
      <div className="vitreen-embed">
        <div className="vitreen-hero-html">
          <div className="vitreen-hero-scale">
            <VitreenSiteV21 />
          </div>
        </div>
      </div>
      <span className="vitreen-card-caption">
        <span>
          <strong>Vitreen</strong>
          <small>Product design · SaaS B2B · {project.year}</small>
        </span>
        <span className="vitreen-card-cta">Voir le projet ↗</span>
      </span>
    </Link>
  );
}

function VitreenGlyph({ className }) {
  return (
    <svg className={className} viewBox="0 0 26 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1.5" width="12" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="4.6" cy="5.6" r="1.3" fill="currentColor" />
      <path d="M3 12 6.2 8.6l2.3 2 1.8-2.3 1.7 2.6" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="3.2" width="9" height="2.6" rx="1.3" fill="currentColor" />
      <rect x="16" y="8.6" width="9" height="2.6" rx="1.3" fill="currentColor" />
    </svg>
  );
}

function GalleryOsGmailCard({ project }) {
  return (
    <Link to={`/projet/${project.slug}`} className="bento-card bento-card--sm gmck-demo">
      <div className="gmck-embed">
        <div className="gmck-scale">
          {/* Fond inbox Gmail */}
          <div className="gmck-inbox">
            <div className="gmck-inbox-top">
              <span className="gmck-tab">Promotions <em className="is-green">2 new</em></span>
              <span className="gmck-tab">Social <em className="is-blue">1 new</em></span>
              <span className="gmck-tab">Updates <em className="is-orange">3 new</em></span>
              <span className="gmck-count">1–50 of 2,148 &nbsp;‹&nbsp;›</span>
            </div>
            {[92, 70, 84, 60, 78, 66].map((w, i) => (
              <div key={i} className="gmck-inbox-row">
                <i />
                <b style={{ width: `${w}%` }} />
              </div>
            ))}
          </div>

          {/* Rail d'icônes Google */}
          <div className="gmck-rail">
            <span className="gmck-rail-cal">31</span>
            <span className="gmck-rail-keep" />
            <span className="gmck-rail-tasks">✓</span>
            <span className="gmck-rail-contact" />
            <i className="gmck-rail-sep" />
            <span className="gmck-rail-vitreen">
              <VitreenGlyph className="gmck-glyph" />
            </span>
            <span className="gmck-rail-plus">+</span>
          </div>

          {/* Brouillon New Message */}
          <div className="gmck-compose">
            <div className="gmck-compose-bar">
              <strong>New Message</strong>
              <span>–&ensp;↗&ensp;×</span>
            </div>
            <div className="gmck-compose-to">
              <span className="is-muted">À</span>
              <span className="gmck-chip">
                <b>E</b>
                Eve Bertrand
              </span>
            </div>
            <div className="gmck-compose-subject">Disponibilité — Sacha Elron</div>
            <div className="gmck-compose-body" />
            <div className="gmck-compose-footer">
              <span className="gmck-send">Send</span>
              <span className="gmck-tools">
                <i className="gmck-tool-aa">Aa</i>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 12.5 12.4 21a5.3 5.3 0 0 1-7.5-7.5l8.6-8.5a3.5 3.5 0 0 1 5 5l-8.7 8.5a1.8 1.8 0 0 1-2.5-2.5l8-7.9" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8.5 14.5a4.5 4.5 0 0 0 7 0" />
                  <circle cx="9" cy="9.5" r="0.6" fill="currentColor" />
                  <circle cx="15" cy="9.5" r="0.6" fill="currentColor" />
                </svg>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="16" rx="2" />
                  <path d="M3 16.5 9 11l4 3.5 3-2.5 5 4.5" />
                </svg>
                <span className="gmck-tool-vitreen">
                  <VitreenGlyph className="gmck-glyph" />
                </span>
                <i className="gmck-tool-dots">⋮</i>
              </span>
              <svg className="gmck-trash" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 7h16M10 4h4M7 7l1 13h8l1-13M10 11v6M14 11v6" />
              </svg>
            </div>
          </div>

          {/* Panneau latéral Vitreen */}
          <div className="gmck-panel">
            <div className="gmck-win-bar">
              <strong>Vitreen</strong>
              <span>⋮&ensp;×</span>
            </div>
            <div className="gmck-panel-app">
              <VitreenGlyph className="gmck-glyph is-blue" />
              <span>
                <strong>Vitreen</strong>
                <small>Aperçu de votre galerie</small>
              </span>
            </div>
            <div className="gmck-panel-status">
              <i>✓</i>
              <span>
                <strong>Connecté</strong>
                <small>2 œuvres · gallery-os-ten.vercel.app</small>
              </span>
            </div>
            <div className="gmck-panel-row">
              <small>Demandes en attente</small>
              <p>Pas de nouvelle demande.</p>
            </div>
            <div className="gmck-panel-row">
              <small>Inventaire</small>
              <p>
                <b className="is-green">2</b> disponibles · <b className="is-orange">0</b> réservées
              </p>
              <p className="is-muted">0 vendues</p>
            </div>
            <p className="gmck-panel-help">
              Pour insérer une œuvre dans un mail&nbsp;: ouvre un brouillon (✎ <b>Composer</b>) et
              clique l'icône Vitreen dans la barre du brouillon.
            </p>
            <div className="gmck-panel-footer">
              <span className="gmck-btn-ghost">Paramètres</span>
              <span className="gmck-btn-blue">Ouvrir gallery-OS</span>
            </div>
          </div>

          {/* Fenêtre Insérer une œuvre */}
          <div className="gmck-dialog">
            <div className="gmck-win-bar">
              <strong>Vitreen</strong>
              <span>⋮&ensp;×</span>
            </div>
            <div className="gmck-dialog-body">
              <strong>Insérer une œuvre</strong>
              <small>Recherche dans Vitreen</small>
              <div className="gmck-input">
                <span className="gmck-typed">Evening</span>
                <i className="gmck-caret" />
              </div>
              <small className="gmck-hint">Titre ou nom d'artiste · appuie sur Chercher</small>
              <span className="gmck-btn-blue gmck-search-btn">Chercher</span>
              <div className="gmck-result">
                <small>1 résultat</small>
                <div className="gmck-result-item">
                  <img src="/vitreen/painting-05.jpg" alt="" />
                  <span>
                    <small>SUN DOG</small>
                    <em>Evening field, 2023</em>
                    <span className="gmck-result-price">
                      8 000 € · <b>AVAILABLE</b>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Curseur animé + impulsions de clic */}
          <span className="gmck-pulse gmck-pulse-1" />
          <span className="gmck-pulse gmck-pulse-2" />
          <span className="gmck-pulse gmck-pulse-3" />
          <svg className="gmck-cursor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M5 2.5v16.2l4.4-3.6 2.6 6 2.7-1.2-2.6-5.9 6.4-.6z"
              fill="#111110"
              stroke="#fff"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <span className="vitreen-card-caption">
        <span>
          <strong>Gallery OS</strong>
          <small>Extension Gmail · Vitreen</small>
        </span>
        <span className="vitreen-card-cta">Voir le projet ↗</span>
      </span>
    </Link>
  );
}

function HangingInteractiveCard({ project }) {
  return (
    <article className="bento-card bento-card--lg hanging-demo">
      <HangingTechnicalDrawing />
      <Link to={`/projet/${project.slug}`} className="hanging-card-caption">
        <span>
          <strong>Hanging</strong>
          <small>Product design · Service · {project.year}</small>
        </span>
        <span className="hanging-card-cta">Voir le projet ↗</span>
      </Link>
    </article>
  );
}

function BentoCard({ project }) {
  if (project.slug === "vitreen") {
    return <VitreenInteractiveCard project={project} />;
  }

  if (project.slug === "hanging") {
    return <HangingInteractiveCard project={project} />;
  }

  if (project.slug === "app-sante") {
    return <GalleryOsGmailCard project={project} />;
  }

  const size = BENTO_SIZE[project.slug] ?? "sm";
  const hasMedia = !!(project.cover ?? project.video);

  return (
    <Link
      to={`/projet/${project.slug}`}
      className={`bento-card bento-card--${size}${hasMedia ? " bento-card--media" : " bento-card--text"}`}
    >
      {hasMedia && (
        <div className="bento-card-media">
          <BentoCover project={project} />
        </div>
      )}
      <div className="bento-card-content">
        <h2 className="bento-card-title">{project.title}</h2>
        <p className="bento-card-meta">
          {project.type} · {project.year}
        </p>
      </div>
    </Link>
  );
}

/* ─── Portfolio V2 — projets rattachés aux stacks ─── */

const STACKS = [
  { id: "claude-code", name: "Claude Code", projects: ["vitreen"] },
  { id: "codex", name: "Codex", projects: ["hanging"] },
  { id: "jitter", name: "Jitter", projects: ["design-system"] },
  { id: "sanity", name: "Sanity", projects: ["app-sante"] },
  { id: "supabase", name: "Supabase", projects: ["vitreen"] },
  { id: "figma", name: "Figma", projects: ["hanging"] },
  { id: "vercel", name: "Vercel", projects: ["app-sante"] },
];

function StackIcon({ id }) {
  const iconAssets = {
    "claude-code": {
      src: "/icones/claudecode-text.svg",
      className: "stack-tile--asset stack-tile--claude",
    },
    codex: {
      src: "/icones/codex.webp",
      className: "stack-tile--asset stack-tile--codex",
    },
    cursor: {
      src: "/icones/cursor.svg",
      className: "stack-tile--asset stack-tile--cursor",
    },
    jitter: {
      src: "/icones/icon jittr.png",
      className: "stack-tile--asset",
    },
    sanity: {
      src: "/icones/id1OvBeURQ_1781124483536.png",
      className: "stack-tile--asset",
    },
    supabase: {
      src: "/icones/supabase-logo-icon.svg",
      className: "stack-tile--asset stack-tile--supabase",
    },
    vercel: {
      src: "/icones/vercel.svg",
      className: "stack-tile--asset stack-tile--vercel",
    },
  };
  const asset = iconAssets[id];

  if (asset) {
    return (
      <span className={`stack-tile ${asset.className}`}>
        <img src={asset.src} alt="" aria-hidden="true" />
      </span>
    );
  }

  switch (id) {
    case "claude-code":
      return (
        <span className="stack-tile" style={{ background: "#D97757" }}>
          <svg viewBox="0 0 54 54">
            <g stroke="#fff" strokeWidth="4.5" strokeLinecap="round">
              <path d="M27 11v32M11 27h32M15.7 15.7l22.6 22.6M38.3 15.7 15.7 38.3" />
            </g>
          </svg>
        </span>
      );
    case "codex":
      return (
        <span className="stack-tile" style={{ background: "#0d0d0d" }}>
          <svg viewBox="0 0 54 54">
            <path d="m15 19 9 8-9 8" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <path d="M28 37h12" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </span>
      );
    case "jitter":
      return (
        <span className="stack-tile" style={{ background: "#111110" }}>
          <svg viewBox="0 0 54 54">
            <g stroke="#fff" strokeLinecap="round" fill="none">
              <path d="M33 13c0 14-2 24-10 28" strokeWidth="5" />
              <path d="M22 18h16" strokeWidth="4.5" />
            </g>
          </svg>
        </span>
      );
    case "sanity":
      return (
        <span className="stack-tile" style={{ background: "#F03E2F" }}>
          <svg viewBox="0 0 54 54">
            <text x="27" y="37" textAnchor="middle" fill="#fff" fontSize="28" fontWeight="700" fontFamily="Georgia, serif">
              S
            </text>
          </svg>
        </span>
      );
    case "supabase":
      return (
        <span className="stack-tile" style={{ background: "#1c1c1c" }}>
          <svg viewBox="0 0 54 54">
            <path d="M30 8 13 30h11l-2 16 17-22H28z" fill="#3ECF8E" />
          </svg>
        </span>
      );
    case "figma":
      return (
        <span className="stack-tile stack-tile--light">
          <svg viewBox="0 0 54 54">
            <path d="M21 11h6v10h-6a5 5 0 0 1 0-10z" fill="#F24E1E" />
            <path d="M27 11h6a5 5 0 0 1 0 10h-6z" fill="#FF7262" />
            <path d="M21 22h6v10h-6a5 5 0 0 1 0-10z" fill="#A259FF" />
            <circle cx="32" cy="27" r="5" fill="#1ABCFE" />
            <path d="M21 33h6v5a5 5 0 1 1-6-5z" fill="#0ACF83" />
          </svg>
        </span>
      );
    case "vercel":
      return (
        <span className="stack-tile stack-tile--light">
          <svg viewBox="0 0 54 54">
            <path d="M27 15l14 24H13z" fill="#111110" />
          </svg>
        </span>
      );
    default:
      return <span className="stack-tile" />;
  }
}

function BentoContact() {
  return (
    <a href={`mailto:${SITE.email}`} className="bento-card bento-card--contact">
      <div className="bento-card-content">
        <span className="bento-card-num">→</span>
        <h2 className="bento-card-title">Contact</h2>
        <p className="bento-card-meta">Stage ou premier poste</p>
        <p className="bento-card-email">{SITE.email}</p>
      </div>
    </a>
  );
}

function BentoEmpty() {
  return <div className="bento-card bento-card--sm bento-card--empty" aria-hidden="true" />;
}

function SalesAgentCard() {
  return (
    <article className="sales-agent-preview">
      <div className="sales-agent-inner">
        <div className="sales-agent-content">
          <div className="sales-agent-heading">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 8V4H8" />
              <rect width="16" height="12" x="4" y="8" rx="2" />
              <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
            </svg>
            <h2>Sales Agent</h2>
          </div>
          <p>Brouillon IA pour chaque réponse client entrante</p>
        </div>
        <span className="sales-agent-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M7 7h10v10M7 17 17 7" />
          </svg>
        </span>
      </div>
    </article>
  );
}

function StackCardBadge({ stack }) {
  return (
    <span className="stack-card-badge" aria-label={stack.name}>
      <StackIcon id={stack.id} />
    </span>
  );
}

function Home() {
  const cardsTrackRef = useRef(null);
  const projectOf = (s) => bentoProjects.find((p) => p.slug === s.projects[0]);

  const slots = [
    { stack: STACKS[0], projectSlug: "vitreen", landscape: true },
    {
      stack: { ...STACKS[1], id: "cursor", name: "Cursor" },
      customContent: "sales-agent",
    },
    { stack: STACKS[2] },
    { stack: STACKS[1], landscape: true },
    { stack: STACKS[3] },
    { stack: STACKS[4] },
  ];

  return (
    <main className="main main--stack">
      <header id="about" className="home-hero">
        <h1 className="home-hero-title">Raphaël Rossi</h1>
        <p className="home-hero-subtitle">
          Product Designer · Cultural Technology · Digital Products
        </p>
        <div className="home-hero-bio">
          <p>
            Je conçois des outils et des interfaces qui simplifient des opérations
            complexes et les transforment en expériences claires et efficaces.
          </p>
          <p>
            Mon travail s&apos;appuie sur le design, la technologie et l&apos;intelligence
            artificielle, avec une attention particulière portée aux usages réels. Cette
            approche guide aujourd&apos;hui des projets comme{" "}
            <a href="https://vitreen.art" target="_blank" rel="noopener noreferrer">
              Vitreen
            </a>{" "}
            et{" "}
            <a href="https://hanging.fr" target="_blank" rel="noopener noreferrer">
              Hanging
            </a>
            .
          </p>
        </div>
      </header>

      <h2 className="stack-section-title">Projets récents</h2>

      <section
        className="stack-cards"
        aria-label="Projets"
        ref={cardsTrackRef}
      >
        {slots.map(({ stack, projectSlug, customContent, landscape }) => {
          if (customContent === "sales-agent") {
            return (
              <div
                key={stack.id}
                className="stack-card-slot stack-card-slot--sales-agent"
              >
                <StackCardBadge stack={stack} />
                <SalesAgentCard />
              </div>
            );
          }

          const project = projectSlug
            ? bentoProjects.find((item) => item.slug === projectSlug)
            : projectOf(stack);
          if (!project) return null;
          return (
            <div
              key={stack.id}
              className={`stack-card-slot${
                landscape ? " stack-card-slot--landscape" : ""
              }${projectSlug ? " stack-card-slot--desktop-preview" : ""}`}
            >
              <StackCardBadge stack={stack} />
              <BentoCard project={project} />
            </div>
          );
        })}
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Raphaël Rossi</span>
        <nav className="footer-nav" aria-label="Liens">
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={SITE.cv} target="_blank" rel="noopener noreferrer">
            CV
          </a>
          <a href={`mailto:${SITE.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const hideFooter = pathname.startsWith("/projet/");

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:slug" element={<ProjectPage />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}
