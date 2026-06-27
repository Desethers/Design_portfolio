import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { projects } from "./projects.js";
import { SITE } from "./site.js";
import ProjectPage, { VitreenReelsPage, VitreenStackFlow } from "./ProjectPage.jsx";
import HangingTechnicalDrawing from "./HangingTechnicalDrawing.jsx";
import HangingBookingPreview from "./HangingBookingPreview.jsx";
import SalesAgentPreview from "./SalesAgentPreview.jsx";
import SalesAgentFlowMock from "./SalesAgentFlowMock.jsx";
import SalesAgentContextDiptych from "./SalesAgentContextDiptych.jsx";
import GmailSidePanelMock from "./GmailSidePanelMock.jsx";
import GmailDemoPage from "./GmailDemoPage.jsx";
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
        <span className="vitreen-card-cta">↗</span>
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
        <span className="vitreen-card-cta">↗</span>
      </span>
    </Link>
  );
}

const GADO_WORKS = [
  { artist: "SACHA ELRON", title: "Evening field, 2023", price: "10 000 €", img: "/vitreen/painting-05.jpg" },
  { artist: "SACHA ELRON", title: "Amber Nocturne, 2025", price: "14 000 €", img: "/vitreen/painting-05.jpg" },
  { artist: "SACHA ELRON", title: "Sage Interval, 2022", price: "6 500 €", img: "/vitreen/painting-05.jpg" },
];

function GmailAddinMock() {
  return (
    <div className="gmck-embed gado-embed">
      <div className="gmck-scale gado-scene">
        {/* Compose Gmail — arrière-plan */}
        <div className="gado-compose">
          <div className="gado-compose-bar">
            <span>Spring selection 2026</span>
            <em>−&ensp;⤢&ensp;×</em>
          </div>
          <div className="gado-compose-fields">
            <div className="gado-field"><span className="gado-field-label">À</span>collectionneur@exemple.com</div>
            <div className="gado-field gado-field--subj">Spring selection 2026</div>
          </div>
          <div className="gado-compose-body">
            <p className="gado-body-p">Bonjour,</p>
            <p className="gado-body-p gado-body-p--muted">Dans le cadre de l'exposition actuelle, je souhaitais vous présenter une pièce qui me semble incontournable pour votre collection.</p>
          </div>
          <div className="gado-compose-foot">
            <span className="gado-send-btn">Send</span>
            <span className="gado-tools">A<i>a</i></span>
          </div>
        </div>

        {/* Gallery OS — dialogue d'insertion */}
        <div className="gado-dialog">
          <div className="gado-dialog-bar">
            <span>Gallery OS</span>
            <span className="gado-dialog-acts">⋮&ensp;×</span>
          </div>
          <div className="gado-dialog-body">
            <strong className="gado-dialog-title">Insérer une œuvre</strong>
            <span className="gado-dialog-sub">Recherche dans Gallery OS</span>
            <div className="gado-sep" />
            <div className="gado-input"><span>elron</span></div>
            <span className="gado-hint">Titre ou nom d'artiste · appuie sur Chercher</span>
            <div className="gado-btns">
              <span className="gado-btn-blue">Chercher</span>
              <span className="gado-btn-ghost">Vue liste</span>
            </div>
            <div className="gado-sep" />
            <span className="gado-count">3 résultats</span>
            <div className="gado-results">
              {GADO_WORKS.slice(0, 2).map((w) => (
                <div className="gado-row" key={w.title}>
                  <img className="gado-thumb" src={w.img} alt="" />
                  <span className="gado-meta">
                    <small>{w.artist}</small>
                    <em>{w.title}</em>
                    <span>{w.price}&nbsp;·&nbsp;<b>AVAILABLE</b></span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const RFR_WORKS = [
  { artist: "SACHA ELRON", title: "Evening field, 2023", price: "8 000 €", swatch: "#27325e", sel: true },
  { artist: "SACHA ELRON", title: "Amber Nocturne, 2025", price: "14 000 €", swatch: "#222a4d" },
  { artist: "SACHA ELRON", title: "Sage Interval, 2022", price: "6 500 €", swatch: "#b4582f" },
];

const GmailLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 48 36" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M3.4 33.6h7.2V16.2L0 8.2v22c0 2 1.5 3.4 3.4 3.4Z" fill="#4285f4" />
    <path d="M37.4 33.6h7.2c1.9 0 3.4-1.5 3.4-3.4v-22l-10.6 8Z" fill="#34a853" />
    <path d="M37.4 5.8v10.4L48 8.2V4.4c0-3.5-4-5.5-6.8-3.4Z" fill="#fbbc04" />
    <path d="M10.6 16.2V5.8L24 15.8l13.4-10v10.4L24 26.2Z" fill="#ea4335" />
    <path d="M0 4.4v3.8l10.6 8V5.8L6.8 1C4 -1.1 0 .9 0 4.4Z" fill="#c5221f" />
  </svg>
);

function ReframingMock() {
  return (
    <div className="rfr">
      <figure className="rfr-state rfr-state--before">
        <figcaption className="rfr-state-head">
          <span className="rfr-state-label">Avant</span>
          <span className="rfr-state-desc">Deux mondes séparés</span>
        </figcaption>
        <div className="rfr-stage rfr-stage--quinx">
          {/* Gallery OS — derrière, en haut à gauche */}
          <div className="rfr-app rfr-app--browser">
            <div className="rfr-chrome">
              <i className="rfr-dots" aria-hidden="true" />
              <span className="rfr-url">gallery-os</span>
            </div>
            <div className="rfr-shot rfr-shot--fiche">
              <img src="/vitreen/gallery-os-fiche-oeuvre-crop.png" alt="" loading="lazy" />
            </div>
          </div>

          {/* Gmail — devant, en bas à droite */}
          <div className="rfr-app rfr-app--gmail">
            <div className="rfr-gbar">
              <GmailLogo className="rfr-glogo" />
              <span>Nouveau message</span>
            </div>
            <div className="rfr-compose">
              <span className="rfr-field">À&nbsp;&nbsp;collectionneur@…</span>
              <span className="rfr-field rfr-field--subj">Spring selection 2026</span>
              <span className="rfr-line" />
              <span className="rfr-line" />
              <span className="rfr-line is-short" />
              <span className="rfr-send">Envoyer</span>
            </div>
          </div>
        </div>
      </figure>

      <figure className="rfr-state rfr-state--after">
        <figcaption className="rfr-state-head">
          <span className="rfr-state-label">Après</span>
          <span className="rfr-state-desc">Une seule surface</span>
        </figcaption>
        <div className="rfr-stage rfr-stage--solo">
          <div className="rfr-app rfr-app--gmail rfr-app--unified">
            <div className="rfr-gbar">
              <GmailLogo className="rfr-glogo" />
              <span>Spring selection 2026</span>
            </div>
            <div className="rfr-unified">
              {/* le brouillon */}
              <div className="rfr-compose">
                <span className="rfr-field">À&nbsp;&nbsp;collectionneur@…</span>
                <span className="rfr-line" />
                <span className="rfr-line is-short" />
                <div className="rfr-artcard">
                  <img src="/vitreen/painting-05.jpg" alt="" loading="lazy" />
                  <span className="rfr-artmeta">
                    <strong>Sacha Elron</strong>
                    <em>Evening field, 2023</em>
                    <b>8 000 € · AVAILABLE</b>
                  </span>
                </div>
              </div>
              {/* le side panel Vitreen, branché sur Gallery OS */}
              <aside className="rfr-panel">
                <div className="rfr-panel-head">
                  <VitreenGlyph className="rfr-glyph" />
                  <span>Gallery OS</span>
                  <i className="rfr-conn">Connecté</i>
                </div>
                <span className="rfr-search">Rechercher une œuvre…</span>
                <div className="rfr-results">
                  {RFR_WORKS.map((w) => (
                    <div className={`rfr-result${w.sel ? " is-sel" : ""}`} key={w.title}>
                      <span className="rfr-thumb" style={{ background: w.swatch }} />
                      <span className="rfr-result-id">
                        <small>{w.artist}</small>
                        <em>{w.title}</em>
                      </span>
                      <span className="rfr-price">{w.price}</span>
                    </div>
                  ))}
                </div>
                <span className="rfr-insert">Insérer</span>
              </aside>
            </div>
          </div>
        </div>
      </figure>
    </div>
  );
}

function GmailAddinPreview() {
  return (
    <div
      className="gmail-addin-preview"
      aria-label="Enregistrement du side panel Gallery OS dans Gmail"
    >
      <video
        src="/Gallery%20OS/Side_panel_Gmail.mp4"
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}

function GmailSidePanelPreview() {
  return (
    <div
      className="gmail-addin-preview gmail-sidepanel-preview"
      aria-label="Démonstration du side panel Gmail Vitreen"
    >
      <GmailSidePanelMock />
    </div>
  );
}

function GalleryOsGmailCard() {
  return (
    <Link to="/gmail-addin" className="bento-card bento-card--sm gmck-demo">
      <GmailAddinMock />
      <span className="vitreen-card-caption">
        <span>
          <strong>Artwork search in Gmail</strong>
          <small>Gmail add-on · Gallery OS</small>
        </span>
        <span className="vitreen-card-cta">↗</span>
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
        <span className="hanging-card-cta">↗</span>
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
    return <GalleryOsGmailCard />;
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
          {project.type}{project.year ? ` · ${project.year}` : ""}
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
      src: "/icones/sanity.png",
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
    gmail: {
      src: "/icones/icon-gmail-96.png",
      className: "stack-tile--asset stack-tile--gmail",
    },
    groq: {
      src: "/icones/groq.png",
      className: "stack-tile--asset stack-tile--groq",
    },
    whatsapp: {
      src: "/icones/whatsapp.svg",
      className: "stack-tile--asset stack-tile--whatsapp",
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
          <strong>Content strategy</strong>
          <small>Instagram · Vitreen</small>
        </span>
        <span className="vitreen-card-cta">↗</span>
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
    { stack: STACKS[1], landscape: true, customContent: "hanging" },
  ];

  const secondarySlots = [
    {
      stack: { ...STACKS[1], id: "cursor", name: "Cursor" },
      customContent: "sales-agent",
    },
    { stack: STACKS[0], customContent: "vitreen-reel" },
    { stack: STACKS[2], customContent: "design-system" },
    { stack: STACKS[4], customContent: "hanging-booking" },
    { stack: STACKS[3], customContent: "gmail-addin" },
  ];

  const renderSlot = ({ stack, projectSlug, customContent, landscape, mediaOverride }) => {
    if (customContent === "sales-agent") {
      return (
        <Link
          key={stack.id}
          to="/sales-agent"
          className="stack-card-slot stack-card-slot--sales-agent"
        >
          <StackCardBadge stack={stack} />
          <StackCardBadge
            stack={{ id: "groq", name: "Groq" }}
            className="stack-card-badge--secondary"
          />
          <SalesAgentMock />
          <span className="vitreen-card-caption">
            <span>
              <strong>Sales Agent</strong>
              <small>Cursor · Vitreen</small>
            </span>
            <span className="vitreen-card-cta">↗</span>
          </span>
        </Link>
      );
    }

    if (customContent === "hanging-booking") {
      return (
        <div key={stack.id} className="stack-card-slot stack-card-slot--booking">
          <StackCardBadge stack={{ id: "codex", name: "Codex" }} />
          <StackCardBadge stack={stack} className="stack-card-badge--secondary" />
          <StackCardBadge
            stack={{ id: "stripe", name: "Stripe" }}
            className="stack-card-badge--tertiary"
          />
          <Link to="/booking" className="hanging-booking-link">
            <HangingBookingPreview />
            <span className="vitreen-card-caption">
              <span>
                <strong>Booking flow</strong>
                <small>Hanging</small>
              </span>
              <span className="vitreen-card-cta">↗</span>
            </span>
          </Link>
        </div>
      );
    }

    if (customContent === "design-system") {
      const project = bentoProjects.find((p) => p.slug === "design-system");
      if (!project) return null;
      return (
        <div key={stack.id} className={`stack-card-slot stack-card-slot--design-system`}>
          <StackCardBadge stack={stack} />
          <StackCardBadge
            stack={{ id: "whatsapp", name: "WhatsApp" }}
            className="stack-card-badge--secondary"
          />
          <BentoCard project={project} />
          <span className="vitreen-card-cta stack-slot-arrow" aria-hidden="true">↗</span>
        </div>
      );
    }

    if (customContent === "hanging") {
      const project = bentoProjects.find((p) => p.slug === "hanging");
      if (!project) return null;
      return (
        <div key={stack.id} className="stack-card-slot stack-card-slot--landscape stack-card-slot--hanging">
          <StackCardBadge stack={stack} />
          <StackCardBadge stack={{ id: "supabase", name: "Supabase" }} className="stack-card-badge--secondary" />
          <StackCardBadge stack={{ id: "stripe", name: "Stripe" }} className="stack-card-badge--tertiary" />
          <BentoCard project={project} />
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
          <StackCardBadge stack={{ id: "claude-code", name: "Claude Code" }} />
          <StackCardBadge stack={{ id: "sanity", name: "Sanity" }} className="stack-card-badge--secondary" />
          <StackCardBadge stack={{ id: "whatsapp", name: "WhatsApp" }} className="stack-card-badge--tertiary" />
          <StackCardBadge stack={{ id: "gmail", name: "Gmail" }} className="stack-card-badge--quaternary" />
          <StackCardBadge stack={{ id: "groq", name: "Groq" }} className="stack-card-badge--quinary" />
          <StackCardBadge stack={{ id: "cursor", name: "Cursor" }} className="stack-card-badge--senary" />
          <GalleryOsCard project={galleryProject} />
        </div>
      );
    }

    if (customContent === "gmail-addin") {
      return (
        <div key="gmail-addin" className="stack-card-slot stack-card-slot--app-sante">
          <StackCardBadge stack={{ id: "claude-code", name: "Claude Code" }} />
          <StackCardBadge
            stack={{ id: "gmail", name: "Gmail" }}
            className="stack-card-badge--secondary"
          />
          <GalleryOsGmailCard />
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
        }${projectSlug ? " stack-card-slot--desktop-preview" : ""} stack-card-slot--${project.slug}`}
      >
        <StackCardBadge stack={stack} />
        {projectSlug === "vitreen" && stack.id === "claude-code" && (
          <>
            <StackCardBadge
              stack={{ id: "figma", name: "Figma" }}
              className="stack-card-badge--secondary"
            />
            <StackCardBadge
              stack={{ id: "sanity", name: "Sanity" }}
              className="stack-card-badge--tertiary"
            />
          </>
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
            Product Designer
          </a>
        </p>
        <div className="home-hero-bio">
          <p>
            Issu du monde de l&apos;art contemporain, je conçois des outils et des
            systèmes à partir de problèmes opérationnels réels.
          </p>
          <p>
            J&apos;explore comment le design, la technologie et l&apos;intelligence
            artificielle peuvent rendre les outils plus simples et plus utiles.
            Cette approche guide aujourd&apos;hui{" "}
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

      <section className="stack-cards stack-cards--primary" aria-label="Projets récents">
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

function FeatureCaseStudyModal({ hero, caseStudy, intro, liveUrl, onClose }) {
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
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="vitreen-modal-panel" onClick={(e) => e.stopPropagation()}>
        <div className="vitreen-modal-scroll">
          <header className="vitreen-header">
            <div className="vitreen-header-id">
              <h1 className="vitreen-header-title">{caseStudy.header.title}</h1>
              <p className="vitreen-header-subtitle">{caseStudy.header.subtitle}</p>
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

          <div className="vitreen-modal-screens" aria-label="Aperçu du produit">
            <div
              className={
                caseStudy.header.title === "Gmail side panel"
                  ? "feature-modal-hero feature-modal-hero--gmail-duo"
                  : "feature-modal-hero"
              }
            >
              {hero}
              {caseStudy.header.title === "Gmail side panel" && (
                <div className="gmail-modal-phone-card" aria-label="Aperçu mobile iPhone">
                  <img
                    src="/Gallery%20OS/Frame%20iphone16.png"
                    alt="Aperçu mobile du side panel Gmail sur iPhone"
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>

          <section className="vitreen-editorial" aria-label="Présentation de la feature">
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
                {caseStudy.body.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </section>

          {caseStudy.metrics?.length > 0 && (
            <section
              className="vitreen-metrics vitreen-metrics--feature"
              aria-label="Métriques de la feature"
            >
              {caseStudy.metrics.map((metric) => (
                <article className="vitreen-metric" key={metric.label}>
                  <span className="vitreen-metric-value">{metric.value}</span>
                  <span className="vitreen-metric-label">{metric.label}</span>
                </article>
              ))}
            </section>
          )}

          <article className="vitreen-modules">
            {caseStudy.modules.map((module) => (
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
                {module.mock}
              </section>
            ))}
          </article>

          {caseStudy.impact?.length > 0 && (
            <section
              className="vitreen-impact"
              aria-label="Impact — bénéfices mesurables"
            >
              <div className="vitreen-impact-head">
                <span>Impact</span>
              </div>
              <div className="vitreen-impact-scroll">
                <div className="vitreen-impact-cards">
                  {caseStudy.impact.map((item) => (
                    <article className="vitreen-impact-card" key={item.label}>
                      <span className="vitreen-impact-value">{item.value}</span>
                      <div className="vitreen-impact-foot">
                        <span className="vitreen-impact-label">{item.label}</span>
                        <p className="vitreen-impact-text">{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {caseStudy.next && (
            <section
              className="vitreen-next"
              aria-label="What's next — prochaines étapes"
            >
              <div className="vitreen-module-copy">
                <div>
                  <span>What's next</span>
                  <h3>{caseStudy.next.title}</h3>
                </div>
                <p>{caseStudy.next.text}</p>
              </div>
              <div className="vitreen-next-cards">
                {caseStudy.next.cards.map((card) => (
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

function FeaturePage({ hero, heroClassName = "", intro, caseStudy, liveUrl, cursorClose = false }) {
  const navigate = useNavigate();
  const [caseOpen, setCaseOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleMouseMove = (e) => {
    if (!cursorClose || caseOpen) return;
    const overContent = e.target.closest(".reels-page-inner");
    setCursor({ x: e.clientX, y: e.clientY, visible: !overContent });
  };

  const handleBackgroundClick = (e) => {
    if (!cursorClose) return;
    if (caseOpen) return;
    if (e.target.closest(".reels-page-inner")) return;
    navigate("/");
  };

  return (
    <main
      className="reels-page feature-page"
      onMouseMove={cursorClose ? handleMouseMove : undefined}
      onMouseLeave={cursorClose ? () => setCursor((c) => ({ ...c, visible: false })) : undefined}
      onClick={cursorClose ? handleBackgroundClick : undefined}
      style={cursor.visible ? { cursor: "none" } : undefined}
    >
      <div className="reels-page-inner">
        {!cursorClose && (
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
        )}

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
              <p className="vitreen-intro-preview-text">
                {caseStudy ? `${intro.text.replace(/\s*\.?$/, "")}…` : intro.text}
              </p>
            </div>
            {caseStudy ? (
              <button
                type="button"
                className="vitreen-pill-btn vitreen-intro-preview-btn"
                onClick={() => setCaseOpen(true)}
              >
                Full case study
                <svg
                  className="vitreen-pill-expand"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M10 14 4 20M4 20h4M4 20v-4M14 10l6-6M20 4h-4M20 4v4" />
                </svg>
              </button>
            ) : (
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
            )}
          </div>
        </section>
      </div>

      {caseStudy && caseOpen && (
        <FeatureCaseStudyModal
          hero={hero}
          caseStudy={caseStudy}
          intro={intro}
          liveUrl={liveUrl}
          onClose={() => setCaseOpen(false)}
        />
      )}
      {cursorClose && !caseOpen && (
        <div
          className={`vitreen-cursor-close${cursor.visible ? " is-visible" : ""}`}
          style={{ left: cursor.x, top: cursor.y }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 6 18 18M18 6 6 18" />
          </svg>
        </div>
      )}
    </main>
  );
}

function SalesAgentPage() {
  return (
    <FeaturePage
      cursorClose={true}
      heroClassName="feature-hero--sales"
      hero={<SalesAgentHeroVideo />}
      liveUrl="https://gallery-os-ten.vercel.app"
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
          "Comment réduire le temps de préparation d'une réponse sans automatiser la relation collectionneur ?",
        text: "Le Sales Agent assiste le travail commercial en préparant des brouillons contextualisés à partir de l'inventaire, des échanges passés et des œuvres disponibles. La décision et l'envoi restent entièrement entre les mains de la galerie.",
      }}
      caseStudy={{
        header: {
          title: "Sales Agent",
          subtitle: "Assistant de vente IA — Gallery OS / Vitreen",
        },
        body: [
          "Le Sales Agent prépare un brouillon pour chaque demande collectionneur — œuvres disponibles proposées, contexte rappelé, réponse prête à relire.",
          "La galerie relit, ajuste et envoie : l'agent accélère la préparation commerciale sans décider, ni envoyer, à sa place.",
        ],
        metrics: [
          { value: "186", label: "Prompt iterations" },
          { value: "41", label: "Development sessions" },
          { value: "34", label: "Design revisions" },
          { value: "62k", label: "AI tokens consumed" },
          { value: "7 days", label: "From idea to working product" },
        ],
        modules: [
          {
            tag: "Contexte",
            title: "Répondre sans perdre la relation",
            text: "Chaque demande collectionneur nécessite de retrouver les bonnes informations avant de pouvoir répondre.\n\nL'objectif n'est pas d'automatiser la relation, mais de réduire le temps de préparation tout en laissant la galerie maître de chaque échange.",
            mock: <SalesAgentContextDiptych />,
          },
          {
            tag: "Stack & workflow",
            title: "De l'email au brouillon",
            text: "Chaque outil intervient à une étape précise du flux : réception, lecture du contexte, génération, validation. Rien n'est envoyé sans décision humaine.",
            mock: (
              <div className="vitreen-module-media vitreen-module-media--stack">
                <VitreenStackFlow items={[
                  { name: "Gmail", role: "Déclencheur", icon: "/icones/gmail.svg" },
                  { name: "Claude", role: "Génération", icon: "/icones/claudecode-text.svg" },
                  { name: "Groq", role: "Inférence", icon: "/icones/groq-text.svg" },
                  { name: "Cursor", role: "Développement", icon: "/icones/cursor.svg" },
                ]} />
              </div>
            ),
          },
          {
            tag: "Décisions produit",
            title: "Préparer, jamais envoyer",
            text: "- L'agent prépare un brouillon, mais n'envoie jamais.\n- Chaque message passe par une validation de la galerie.\n- La feature assiste la préparation commerciale sans remplacer le jugement humain.\n- La communication collectionneur conserve le ton et la discrétion de la galerie.",
            mock: (
              <SalesAgentModuleVideo
                src="/Gallery%20OS/sales_agent_decision_produit.mp4"
                label="Aperçu vidéo des décisions produit du Sales Agent"
              />
            ),
          },
          {
            tag: "Design d'expérience",
            title: "Une boucle de validation courte",
            text: "Chaque demande est qualifiée, enrichie avec les informations disponibles dans Gallery OS, puis transformée en brouillon prêt à relire. La galerie ajuste si nécessaire et conserve la décision d'envoi.",
            mock: <SalesAgentFlowMock />,
          },
          {
            tag: "Product insight",
            title: "Faire circuler les données vers la conversation",
            text: "Plutôt que de demander à la galerie de rechercher l'information dans plusieurs outils, le Sales Agent rassemble le contexte nécessaire autour de chaque demande collectionneur afin de maintenir la conversation sans interruption.",
          },
        ],
      }}
    />
  );
}

function SalesAgentModuleVideo({ src, label }) {
  return (
    <div className="sales-agent-module-video">
      <video
        src={src}
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        aria-label={label}
      />
    </div>
  );
}

function SalesAgentHeroVideo() {
  return (
    <div className="sales-agent-hero-video">
      <video
        src="/Gallery%20OS/sales_agent1.mov"
        muted
        playsInline
        autoPlay
        loop
        preload="metadata"
        aria-label="Aperçu vidéo du Sales Agent"
      />
    </div>
  );
}

function GmailAddinPage() {
  return (
    <FeaturePage
      heroClassName="feature-hero--gmail"
      hero={<GmailAddinPreview />}
      cursorClose={true}
      liveUrl="https://gallery-os-ten.vercel.app"
      intro={{
        meta: [
          { term: "Produit", value: "Gallery OS · Vitreen" },
          { term: "Type", value: "Gmail side panel · Google Workspace" },
          { term: "Surface", value: "Sidebar Gmail" },
          { term: "Source", value: "Inventaire Gallery OS — live" },
          { term: "Statut", value: "Prototype connecté" },
        ],
        question:
          "Comment faire passer une œuvre de l'inventaire à l'email en un clic ?",
        text: "Cette intégration Gmail transforme l'inventaire Gallery OS en source unique de publication. Une œuvre sélectionnée dans la base est injectée directement dans l'email avec ses informations à jour, sans duplication ni ressaisie intermédiaire.",
      }}
      caseStudy={{
        header: {
          title: "Gmail side panel",
          subtitle: "Side panel Gmail — Gallery OS / Vitreen",
        },
        body: [
          "Le side panel Vitreen s'installe dans la sidebar Gmail (Google Workspace Add-on) et se connecte à Gallery OS.",
          "Depuis n'importe quel brouillon, la galerie cherche une œuvre dans son inventaire et l'insère dans l'email — titre, visuel, année, prix et disponibilité lus en direct.",
        ],
        metrics: [
          { value: "28", label: "Prompt iterations" },
          { value: "10", label: "Development sessions" },
          { value: "16", label: "Design revisions" },
          { value: "13 days", label: "Concept to prototype" },
        ],
        modules: [
          {
            tag: "Reframing",
            title: "Ne pas déplacer la galerie — déplacer les données",
            text: "Les données vivent dans Gallery OS, les conversations dans Gmail. La friction ne vient pas de la recherche d'une œuvre mais du passage constant entre les deux.\n\nL'objectif est devenu simple : amener l'inventaire directement dans l'espace de travail de la galerie.",
            mock: <ReframingMock />,
          },
          {
            tag: "Stack & workflow",
            title: "Du brouillon au prototype connecté",
            text: "Une boucle courte : prototyper le comportement dans l'éditeur, connecter l'inventaire Gallery OS en direct, déployer et tester dans Gmail en quelques minutes.",
            mock: (
              <div className="vitreen-module-media vitreen-module-media--stack">
                <VitreenStackFlow items={[
                  { name: "Claude Code", role: "Développement", icon: "/icones/claudecode-text.svg" },
                  { name: "Gmail API", role: "Intégration", icon: "/icones/gmail.svg" },
                  { name: "Gallery OS", role: "Inventaire live", icon: "/vitreen/gallery-os-gmail.png" },
                  { name: "Vercel", role: "Déploiement", icon: "/icones/vercel.svg" },
                ]} />
              </div>
            ),
          },
          {
            tag: "Architecture produit",
            title: "Un choix d'intégration",
            text: "Deux implémentations ont été développées : Chrome Extension et Gmail Add-on. Le choix s'est porté sur l'add-on Gmail, plus simple à déployer et à maintenir pour les galeries.\n\nUne même API, deux surfaces.",
            mock: (
              <div className="gsp-mock-pair">
                <div className="gsp-mock-pair-card gsp-mock-pair-card--video gsp-mock-pair-card--zoom">
                  <video
                    src="/Gallery%20OS/demo%20chrome%20extension.mp4"
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="metadata"
                    className="gsp-mock-pair-video"
                  />
                </div>
                <div className="gsp-mock-pair-card gsp-mock-pair-card--video">
                  <video
                    src="/Gallery%20OS/demo%20side%20panel%20gmail.mp4"
                    muted
                    playsInline
                    autoPlay
                    loop
                    preload="metadata"
                    className="gsp-mock-pair-video"
                  />
                </div>
              </div>
            ),
          },
          {
            tag: "Expérience produit",
            title: "Chercher, sélectionner, insérer",
            text: "L'inventaire devient accessible sans quitter Gmail. Une œuvre est recherchée, sélectionnée puis insérée dans l'email à partir des données de Gallery OS.",
            mock: (
              <div className="gmail-mobile-grid gmail-mobile-grid--single">
                <figure className="gmail-mobile-card gmail-mobile-card--single">
                  <img
                    src="/Gallery%20OS/Iphone_mackbook_mockup.png"
                    alt="Gallery OS side panel Gmail — iPhone et MacBook"
                    loading="lazy"
                  />
                </figure>
              </div>
            ),
          },
        ],
        next: {
          title: "De l'insertion à la conversation complète",
          text: "Étendre le side panel pour qu'il accompagne toute la relation collectionneur depuis Gmail, branché sur l'inventaire et les échanges passés.",
          cards: [
            {
              title: "Sélections privées",
              text: "Insérer non plus une œuvre mais une sélection entière, composée pour un collectionneur depuis Gallery OS.",
            },
            {
              title: "Suivi des envois",
              text: "Savoir quelles œuvres ont été partagées avec qui, directement dans la fiche collectionneur.",
            },
            {
              title: "Lien avec le Sales Agent",
              text: "Proposer les œuvres à insérer à partir du brouillon déjà préparé par le Sales Agent.",
            },
          ],
        },
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
    ["/reels", "/sales-agent", "/booking", "/gmail-addin", "/gmail-demo"].includes(pathname);

  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reels" element={<VitreenReelsPage />} />
        <Route path="/sales-agent" element={<SalesAgentPage />} />
        <Route path="/gmail-addin" element={<GmailAddinPage />} />
        <Route path="/gmail-demo" element={<GmailDemoPage />} />
        <Route path="/booking" element={<HangingBookingPage />} />
        <Route path="/projet/:slug" element={<ProjectPage />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}
