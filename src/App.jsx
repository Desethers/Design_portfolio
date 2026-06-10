import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { projects } from "./projects.js";
import { SITE } from "./site.js";
import ProjectPage from "./ProjectPage.jsx";
import HangingTechnicalDrawing from "./HangingTechnicalDrawing.jsx";

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

const VITREEN_SIDEBAR_ITEMS = [
  { icon: "▦", label: "Overview" },
  { icon: "▤", label: "Artworks", active: true },
  { icon: "◔", label: "Artists" },
  { icon: "⛁", label: "Exhibitions" },
  { icon: "▭", label: "Inquiries" },
  { icon: "✉", label: "Sales drafts", badge: "2" },
  { icon: "▢", label: "Private Selection" },
  { icon: "◉", label: "Collectors" },
  { icon: "⚙", label: "Tools" },
];

const VITREEN_ARTWORKS = [
  { title: "Evening Field", year: "2023", price: "8 000 €", color: "#1B2A4A" },
  { title: "Dawn Study No. 7", year: "2024", price: "6 000 €", color: "#C8D2EE" },
  { title: "Untitled (Horizon)", year: "2024", price: "8 000 €", color: "#E8D34A" },
  { title: "Sun Dog", year: "2024", price: "12 000 €", color: "#7A1F18" },
  { title: "Studio Notebook", year: "2022", price: "4 500 €", color: "#3E4A60" },
  { title: "Solstice", year: "2024", price: "14 000 €", color: "#D4A574" },
  { title: "Rivière", year: "2023", price: "9 200 €", color: "#2D5043" },
  { title: "Northern Light", year: "2022", price: "11 500 €", color: "#4A6B7A" },
];

function VitreenInteractiveCard({ project }) {
  return (
    <Link to={`/projet/${project.slug}`} className="bento-card bento-card--xl vitreen-demo">
      <div className="vitreen-embed">
        <div className="vitreen-hero-html">
          <div className="vitreen-hero-scale">
            <div className="vitreen-nav">
              <span className="vitreen-nav-logo">Vitreen</span>
              <span className="vitreen-nav-links">
                {["Produits", "Solutions", "Déploiement", "Blog", "À propos"].map((label) => (
                  <span key={label}>{label}</span>
                ))}
              </span>
              <span className="vitreen-nav-cta">Discuter de votre setup</span>
            </div>
            <div className="vitreen-hero-copy">
              <h3>Your gallery, wherever you already work.</h3>
              <p>
                Connect existing systems or build a custom operating structure for artworks,
                exhibitions, private selections and collector communication.
              </p>
              <div className="vitreen-hero-actions">
                <span className="vitreen-btn vitreen-btn--dark">Discuter de votre setup</span>
                <span className="vitreen-btn">Voir les outils</span>
              </div>
            </div>

            {/* Scène du hero V2.1 — photo de fond + Gallery OS glass + fenêtres flottantes */}
            <div className="vitreen-stage">
              <img
                className="vitreen-stage-bg"
                src="/vitreen/colin-deland.jpeg"
                alt=""
              />

              {/* Dashboard Gallery OS — verre dépoli */}
              <div className="vitreen-glass">
                <aside className="vitreen-glass-sidebar">
                  <div className="vitreen-glass-brand">
                    <span className="vitreen-glass-logo">▤</span>
                    Gallery OS
                  </div>
                  {VITREEN_SIDEBAR_ITEMS.map((item) => (
                    <span
                      key={item.label}
                      className={`vitreen-glass-nav${item.active ? " is-active" : ""}`}
                    >
                      <i>{item.icon}</i>
                      <span>{item.label}</span>
                      {item.badge && <em>{item.badge}</em>}
                    </span>
                  ))}
                  <div className="vitreen-glass-powered">Powered by Vitreen</div>
                </aside>
                <div className="vitreen-glass-main">
                  <div className="vitreen-glass-head">
                    <div>
                      <strong>Œuvres</strong>
                      <small>12 au total · 12 disponibles · 0 vendue</small>
                    </div>
                    <span className="vitreen-glass-add">+ Ajouter</span>
                  </div>
                  <div className="vitreen-glass-search">
                    <span>⌕</span>
                    <span className="vitreen-glass-search-hint">
                      Rechercher titre, artiste, année, médium…
                    </span>
                    <kbd>⌘K</kbd>
                  </div>
                  <div className="vitreen-glass-pills">
                    {["Disponibles", "Réservées", "Vendues", "Consignées", "En prêt"].map((p) => (
                      <span key={p}>{p}</span>
                    ))}
                    <span className="is-dark">Sacha Elron</span>
                  </div>
                  <div className="vitreen-glass-thead">
                    <span>Titre</span>
                    <span>Artiste</span>
                    <span>Année</span>
                    <span className="is-right">Prix</span>
                    <span>Statut</span>
                  </div>
                  {VITREEN_ARTWORKS.map((row) => (
                    <div key={row.title} className="vitreen-glass-row">
                      <span className="vitreen-glass-row-title">
                        <i>
                          <b style={{ background: row.color }} />
                        </i>
                        {row.title}
                      </span>
                      <span className="is-muted">Sacha Elron</span>
                      <span className="is-muted">{row.year}</span>
                      <span className="is-right">{row.price}</span>
                      <span>
                        <em>Available</em>
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Fenêtre Gmail — New Message */}
              <div className="vitreen-gmail">
                <div className="vitreen-gmail-bar">
                  <strong>New Message</strong>
                  <span>_ ↗ ×</span>
                </div>
                <div className="vitreen-gmail-to">
                  <span className="is-muted">À</span>
                  <span className="vitreen-gmail-chip">
                    <b>E</b>
                    Eve Bertrand
                  </span>
                </div>
                <div className="vitreen-gmail-subject">
                  Disponibilité — Sacha Elron, « Evening Field »
                </div>
                <div className="vitreen-gmail-body">
                  <img src="/vitreen/painting-05.jpg" alt="Evening field, 2023" />
                  <div className="vitreen-gmail-meta">
                    <div>
                      <p>Sun Dog</p>
                      <p className="is-title">Evening field, 2023</p>
                      <p className="is-muted">Acrylic on canvas</p>
                      <p className="is-muted">120 × 120 cm</p>
                      <p className="is-price">8 000 €</p>
                    </div>
                    <span className="vitreen-gmail-inquire">Inquire</span>
                  </div>
                </div>
                <div className="vitreen-gmail-footer">
                  <span className="vitreen-gmail-send">Send</span>
                  <span className="vitreen-gmail-v">V</span>
                </div>
              </div>

              {/* Panneau de recherche Vitreen */}
              <div className="vitreen-inserter">
                <div className="vitreen-inserter-head">
                  <span>VITREEN</span>
                  <i>×</i>
                </div>
                <div className="vitreen-inserter-search">evening</div>
                <div className="vitreen-inserter-pills">
                  {["Tout", "Disponibles", "Réservées", "Vendues", "NFS"].map((tag, i) => (
                    <span key={tag} className={i === 0 ? "is-dark" : ""}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="vitreen-inserter-result">
                  <i className="vitreen-inserter-check">✓</i>
                  <span className="vitreen-inserter-thumb">
                    <img src="/vitreen/painting-05.jpg" alt="" />
                  </span>
                  <span className="vitreen-inserter-info">
                    <small>SUN DOG</small>
                    <strong>Evening field, 2023</strong>
                    <span>8 000 €</span>
                  </span>
                  <em>Available</em>
                </div>
                <div className="vitreen-inserter-footer">
                  <span>1 œuvre sélectionnée</span>
                  <span className="vitreen-inserter-actions">
                    <i>↺</i>
                    <b>Insérer</b>
                  </span>
                </div>
              </div>
            </div>
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

function Home() {
  return (
    <main className="main main--home">
      <header id="about" className="home-hero">
        <h1 className="home-hero-title">Raphaël Rossi</h1>
        <p className="home-hero-subtitle">Designer produit</p>
        <div className="home-hero-bio">
          <p>Mon travail consiste à transformer des opérations complexes en expériences simples.</p>
          <p>
            Issu du monde de l'art contemporain, j'utilise le design et la technologie pour
            concevoir des outils adaptés aux usages réels des artistes, des galeries et des
            institutions. Cette démarche guide aujourd'hui le développement de projets comme
            Vitreen et Hanging.
          </p>
        </div>
      </header>

      <section id="projects" className="bento" aria-label="Projets">
        {bentoProjects.map((p) => (
          <BentoCard key={p.id} project={p} />
        ))}
        <BentoEmpty />
        <BentoContact />
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
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projet/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
