import React, { useEffect, useRef, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { projects } from "./projects.js";
import { SITE } from "./site.js";
import ProjectPage, { VitreenReelsPage } from "./ProjectPage.jsx";
import HangingTechnicalDrawing from "./HangingTechnicalDrawing.jsx";
import HangingBookingPreview from "./HangingBookingPreview.jsx";
import SalesAgentPreview from "./SalesAgentPreview.jsx";
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

function GalleryOsCard({ project }) {
  return (
    <Link
      to={`/projet/${project.slug}`}
      className="bento-card bento-card--media gos-demo"
    >
      <div className="gos-embed">
        <img
          className="gos-shot"
          src="/vitreen/gallery-os-artworks-home.png"
          alt="Gallery OS — inventaire Artworks"
          loading="lazy"
        />
      </div>
      <span className="vitreen-card-caption">
        <span>
          <strong>Gallery OS</strong>
          <small>Inventaire &amp; inquiries · Vitreen</small>
        </span>
        <span className="vitreen-card-cta">Voir le projet ↗</span>
      </span>
    </Link>
  );
}

function GalleryOsGmailCard({ project }) {
  return (
    <Link to={`/projet/${project.slug}`} className="bento-card bento-card--sm gmck-demo">
      <div className="gmck-embed">
        <div className="gmck-scale">
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

          {/* Un seul clic sur l'icône Vitreen du rail latéral */}
          <span className="gmck-pulse gmck-pulse-vitreen" />
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
    <Link to={`/projet/${project.slug}`} className="bento-card bento-card--lg hanging-demo">
      <HangingTechnicalDrawing />
      <span className="hanging-card-caption">
        <span>
          <strong>Hanging</strong>
          <small>Product design · Service · {project.year}</small>
        </span>
        <span className="hanging-card-cta">Voir le projet ↗</span>
      </span>
    </Link>
  );
}

function BentoCard({ project, mediaOverride }) {
  if (!mediaOverride && project.slug === "vitreen") {
    return <VitreenInteractiveCard project={project} />;
  }

  if (!mediaOverride && project.slug === "hanging") {
    return <HangingInteractiveCard project={project} />;
  }

  if (!mediaOverride && project.slug === "app-sante") {
    return <GalleryOsGmailCard project={project} />;
  }

  const size = BENTO_SIZE[project.slug] ?? "sm";
  const displayProject = mediaOverride
    ? { ...project, cover: mediaOverride, video: undefined }
    : project;
  const hasMedia = !!(displayProject.cover ?? displayProject.video);

  return (
    <Link
      to={`/projet/${project.slug}`}
      className={`bento-card bento-card--${size}${hasMedia ? " bento-card--media" : " bento-card--text"}`}
    >
      {hasMedia && (
        <div className={`bento-card-media${mediaOverride ? " bento-card-media--reduced" : ""}`}>
          <BentoCover project={displayProject} />
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
      src: "/icones/codex-color.svg",
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
    stripe: {
      src: "/icones/stripe.svg",
      className: "stack-tile--asset",
    },
    buffer: {
      src: "/icones/buffer-icon-size_64.png",
      className: "stack-tile--asset stack-tile--buffer",
    },
    capcut: {
      src: "/icones/capcut.png",
      className: "stack-tile--asset stack-tile--capcut",
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

function VitreenReelCard({ reelId }) {
  return (
    <Link to="/reels" className="bento-card bento-card--media vitreen-reel-demo">
      <div className="bento-card-media">
        <video
          src={`/vitreen/reels/${reelId}.mp4`}
          muted
          playsInline
          autoPlay
          loop
          preload="metadata"
        />
      </div>
      <span className="vitreen-card-caption">
        <span>
          <strong>Vitreen</strong>
          <small>Content & Positioning · Instagram</small>
        </span>
        <span className="vitreen-card-cta">Voir les reels ↗</span>
      </span>
    </Link>
  );
}

function SalesAgentMock() {
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

function SalesAgentCard() {
  return (
    <Link to="/sales-agent" className="sales-agent-link">
      <SalesAgentMock />
    </Link>
  );
}

function StackCardBadge({ stack, className = "" }) {
  return (
    <span className={`stack-card-badge${className ? ` ${className}` : ""}`} aria-label={stack.name}>
      <StackIcon id={stack.id} />
    </span>
  );
}

function Home() {
  const projectOf = (s) => bentoProjects.find((p) => p.slug === s.projects[0]);

  const primarySlots = [
    { stack: STACKS[0], projectSlug: "vitreen", landscape: true },
    { stack: STACKS[4], customContent: "gallery-os" },
    { stack: STACKS[1], landscape: true },
  ];

  const secondarySlots = [
    {
      stack: { ...STACKS[1], id: "cursor", name: "Cursor" },
      customContent: "sales-agent",
    },
    { stack: STACKS[0], customContent: "vitreen-reel" },
    { stack: STACKS[2] },
    { stack: STACKS[4], customContent: "hanging-booking" },
    { stack: STACKS[3] },
  ];

  const renderSlot = ({ stack, projectSlug, customContent, landscape, mediaOverride }) => {
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

    if (customContent === "hanging-booking") {
      return (
        <div key={stack.id} className="stack-card-slot stack-card-slot--booking">
          <StackCardBadge stack={stack} />
          <StackCardBadge
            stack={{ id: "figma", name: "Figma" }}
            className="stack-card-badge--secondary"
          />
          <StackCardBadge
            stack={{ id: "stripe", name: "Stripe" }}
            className="stack-card-badge--tertiary"
          />
          <Link to="/booking" className="hanging-booking-link">
            <HangingBookingPreview />
          </Link>
        </div>
      );
    }

    if (customContent === "gallery-os") {
      const galleryProject = projects.find((p) => p.slug === "gallery-os");
      if (!galleryProject) return null;
      return (
        <div
          key="gallery-os"
          className="stack-card-slot stack-card-slot--landscape stack-card-slot--gallery-os"
        >
          <StackCardBadge stack={stack} />
          <GalleryOsCard project={galleryProject} />
        </div>
      );
    }

    if (customContent === "vitreen-reel") {
      return (
        <div key="vitreen-reel" className="stack-card-slot stack-card-slot--reel">
          <StackCardBadge stack={{ id: "buffer", name: "Buffer" }} />
          <StackCardBadge
            stack={{ id: "capcut", name: "CapCut" }}
            className="stack-card-badge--secondary"
          />
          <VitreenReelCard reelId="DYEWo3elU9-" />
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
        {projectSlug === "vitreen" && stack.id === "claude-code" && (
          <StackCardBadge
            stack={{ id: "figma", name: "Figma" }}
            className="stack-card-badge--secondary"
          />
        )}
        <BentoCard project={project} mediaOverride={mediaOverride} />
      </div>
    );
  };

  return (
    <main className="main main--stack">
      <header id="about" className="home-hero">
        <h1 className="home-hero-title">Raphaël Rossi</h1>
        <p className="home-hero-subtitle">
          <a
            href="https://cal.com/rr-designer/15min?overlayCalendar=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            Product Designer &amp; Founder
          </a>
        </p>
        <div className="home-hero-bio">
          <p>
            Issu du monde de l&apos;art contemporain, je conçois des outils et des
            systèmes à partir de problèmes opérationnels réels.
          </p>
          <p>
            Mon travail explore la manière dont le design, la technologie et
            l&apos;intelligence artificielle peuvent améliorer les workflows et la
            circulation de l&apos;information. Cette démarche guide aujourd&apos;hui des
            projets comme{" "}
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

      <section className="stack-cards" aria-label="Projets récents">
        {primarySlots.map(renderSlot)}
      </section>

      <h2 className="stack-section-title">Explorations &amp; features</h2>

      <section className="stack-cards" aria-label="Explorations et features">
        {secondarySlots.map(renderSlot)}
      </section>
    </main>
  );
}

/* ─── Pages feature — derrière les cards sans page projet dédiée ───────── */
function renderFeatureText(text) {
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

function FeaturePage({ hero, heroClassName = "", intro, modules, next }) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="reels-page feature-page">
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

        <div className={`feature-hero${heroClassName ? ` ${heroClassName}` : ""}`}>
          {hero}
        </div>

        <section
          className="vitreen-intro-preview vitreen-editorial reels-page-intro"
          aria-label="Aperçu de la feature"
        >
          <dl className="vitreen-editorial-meta">
            {intro.meta.map((row) => (
              <div key={row.term}>
                <dt>{row.term}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
          </dl>
          <div className="vitreen-editorial-main">
            <p className="vitreen-editorial-intro">{intro.question}</p>
            <div className="vitreen-editorial-body">
              <p className="vitreen-intro-preview-text">{intro.text}</p>
            </div>
            <Link
              to={intro.buttonHref}
              className="vitreen-pill-btn vitreen-intro-preview-btn"
            >
              {intro.buttonLabel}
              <svg
                className="vitreen-pill-expand"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M10 14 4 20M4 20h4M4 20v-4M14 10l6-6M20 4h-4M20 4v4" />
              </svg>
            </Link>
          </div>
        </section>

        {modules?.length > 0 && (
          <article className="vitreen-modules">
            {modules.map((module) => (
              <section className="vitreen-module" key={module.title}>
                <div className="vitreen-module-copy">
                  <div>
                    <span>{module.tag}</span>
                    <h3>{module.title}</h3>
                  </div>
                  <div className="vitreen-module-text">
                    {renderFeatureText(module.text)}
                  </div>
                </div>
              </section>
            ))}
          </article>
        )}

        {next && (
          <section
            className="vitreen-next"
            aria-label="What's next — prochaines étapes"
          >
            <div className="vitreen-module-copy">
              <div>
                <span>What's next</span>
                <h3>{next.title}</h3>
              </div>
              <p>{next.text}</p>
            </div>
            <div className="vitreen-next-cards">
              {next.cards.map((card) => (
                <article className="vitreen-next-card" key={card.title}>
                  <p className="vitreen-next-card-text">{card.text}</p>
                  <span className="vitreen-next-card-label">{card.title}</span>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}

function SalesAgentPage() {
  return (
    <FeaturePage
      heroClassName="feature-hero--sales"
      hero={<SalesAgentPreview />}
      intro={{
        meta: [
          { term: "Produit", value: "Gallery OS · Vitreen" },
          { term: "Type", value: "Assistant de vente IA" },
          { term: "Modèle", value: "Claude Sonnet 4.5 · tool loop" },
          { term: "Entrée", value: "Reply sidebar / webhook email" },
          { term: "Sortie", value: "Brouillon typé à valider" },
          { term: "Statut", value: "Prototype en validation" },
        ],
        question:
          "Comment répondre à chaque demande collectionneur sans repartir d'une page blanche ?",
        text: "Le Sales Agent prépare un brouillon de réponse pour chaque inquiry entrante — œuvres disponibles déjà insérées, contexte collectionneur rappelé. La galerie relit, ajuste, envoie : l'IA accélère sans décider à sa place.",
        buttonHref: "/projet/gallery-os",
        buttonLabel: "Voir Gallery OS",
      }}
      modules={[
        {
          tag: "Problème",
          title: "Chaque inquiry repart d'une page blanche",
          text: "Une demande collectionneur arrive par email : un budget, un format, une intention. Pour y répondre, la galerie rouvre l'inventaire, vérifie les disponibilités, recompose les fiches œuvres et rédige — à chaque fois.\n\nLe goulot n'est pas la décision de vente, c'est le temps passé à rassembler les bonnes informations avant même de pouvoir répondre.",
        },
        {
          tag: "Déclenchement",
          title: "Filtrer avant de rédiger",
          text: "L'agent se déclenche sur une réponse depuis la sidebar Gmail ou un webhook email entrant — mais pas sur tout. Un filtre d'intention écarte les messages sans enjeu commercial (« merci », « bien reçu ») et ne traite que les demandes réelles : prix, disponibilité, dimensions, visite.\n\nUn même message ne génère qu'un seul brouillon : la création est idempotente, rien ne se duplique si l'agent est rappelé.",
        },
        {
          tag: "Fonctionnement",
          title: "Interroger les vraies données, jamais inventer",
          text: "Avant d'écrire, l'agent appelle des outils branchés sur Gallery OS — il ne devine ni un prix, ni une disponibilité, ni une œuvre.\n\n- Contact : recherche le collectionneur dans le CRM, avec son historique d'achats et ses dernières inquiries.\n- Œuvre : récupère les métadonnées réelles de la pièce concernée (prix, statut, dimensions).\n- Alternatives : si la pièce est vendue ou hors budget, propose des œuvres similaires disponibles.\n- Galerie : reprend le ton, la signature et la langue par défaut de la galerie.\n\nLe brouillon final est structuré et typé : destinataire, sujet, corps, langue, priorité, relance suggérée, raisonnement et œuvres mentionnées.",
        },
        {
          tag: "Garde-fous",
          title: "Accélérer sans décider à la place",
          text: "Le comportement est cadré par des règles strictes, pas laissé à l'improvisation du modèle.\n\n- Multilingue : la réponse épouse la langue du collectionneur (fr, en, de, es, it, zh).\n- VIP : ton plus personnel quand le contact est identifié comme tel.\n- Œuvre vendue : jamais un « désolé, vendu » sec — deux ou trois alternatives à la place.\n- Prix sur demande : pas de chiffre inventé, une proposition d'échange (appel, visite).\n- Aucun engagement sur la livraison, la garantie ou l'exclusivité.\n\nEt surtout : jamais d'autopilot. Le brouillon reste en attente — il n'est envoyé qu'après validation humaine.",
        },
      ]}
      next={{
        title: "Du brouillon à la boucle complète",
        text: "Étendre le Sales Agent au-delà du premier message, jusqu'à un suivi des conversations collectionneurs branché sur l'inventaire.",
        cards: [
          {
            title: "Relances programmées",
            text: "Activer la relance suggérée par l'agent quand une inquiry reste sans réponse, avec les œuvres encore disponibles.",
          },
          {
            title: "Multi-canal",
            text: "Préparer les réponses là où les collectionneurs écrivent — Gmail aujourd'hui, WhatsApp ensuite.",
          },
          {
            title: "Mesurer l'usage",
            text: "Suivre brouillons acceptés, édités ou écartés pour affiner les règles et le ton de l'agent.",
          },
        ],
      }}
    />
  );
}

function HangingBookingPage() {
  return (
    <FeaturePage
      heroClassName="feature-hero--booking"
      hero={<HangingBookingPreview />}
      intro={{
        meta: [
          { term: "Produit", value: "Hanging — hanging.fr" },
          { term: "Type", value: "Booking flow" },
          { term: "Forfaits", value: "180 € → 650 €" },
          { term: "Paiement", value: "Stripe · en ligne" },
          { term: "Statut", value: "En production" },
        ],
        question:
          "Comment réserver un accrochage — créneau, infos, paiement — sans jamais quitter Hanging ?",
        text: "Le flow custom rapatrie le choix du forfait, le calendrier, le formulaire et le paiement Stripe sur hanging.fr — avec un récapitulatif live en sidebar. Fini la rupture Calendly juste avant de payer.",
        buttonHref: "/projet/hanging",
        buttonLabel: "Voir Hanging",
      }}
    />
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>Raphaël Rossi {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
}

export default function App() {
  const { pathname } = useLocation();
  const hideFooter =
    pathname.startsWith("/projet/") ||
    ["/reels", "/sales-agent", "/booking"].includes(pathname);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reels" element={<VitreenReelsPage />} />
        <Route path="/sales-agent" element={<SalesAgentPage />} />
        <Route path="/booking" element={<HangingBookingPage />} />
        <Route path="/projet/:slug" element={<ProjectPage />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}
