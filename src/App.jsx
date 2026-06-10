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
            <div className="vitreen-stage-scale">
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
