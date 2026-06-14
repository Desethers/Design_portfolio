import React from "react";

export const VITREEN_SIDEBAR_ITEMS = [
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

export const VITREEN_ARTWORKS = [
  { title: "Evening Field", year: "2023", price: "8 000 €", color: "#1B2A4A" },
  { title: "Dawn Study No. 7", year: "2024", price: "6 000 €", color: "#C8D2EE" },
  { title: "Untitled (Horizon)", year: "2024", price: "8 000 €", color: "#E8D34A" },
  { title: "Sun Dog", year: "2024", price: "12 000 €", color: "#7A1F18" },
  { title: "Studio Notebook", year: "2022", price: "4 500 €", color: "#3E4A60" },
  { title: "Solstice", year: "2024", price: "14 000 €", color: "#D4A574" },
  { title: "River", year: "2023", price: "9 200 €", color: "#2D5043" },
  { title: "Northern Light", year: "2022", price: "11 500 €", color: "#4A6B7A" },
];

export function VitreenSiteV21() {
  return (
    <>
      <div className="vitreen-nav">
        <span className="vitreen-nav-logo">Vitreen</span>
        <span className="vitreen-nav-links">
          {["Products", "Solutions", "Deployment", "Blog", "About"].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </span>
        <span className="vitreen-nav-cta">Discuss your setup</span>
      </div>
      <div className="vitreen-hero-copy">
        <h3>Your gallery, wherever you already work.</h3>
        <p>
          Connect existing systems or build a custom operating structure for artworks,
          exhibitions, private selections and collector communication.
        </p>
        <div className="vitreen-hero-actions">
          <span className="vitreen-btn vitreen-btn--dark">Discuss your setup</span>
          <span className="vitreen-btn">View tools</span>
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
                <strong>Artworks</strong>
                <small>12 total · 12 available · 0 sold</small>
              </div>
              <span className="vitreen-glass-add">+ Add</span>
            </div>
            <div className="vitreen-glass-search">
              <span>⌕</span>
              <span className="vitreen-glass-search-hint">
                Search title, artist, year, medium…
              </span>
              <kbd>⌘K</kbd>
            </div>
            <div className="vitreen-glass-pills">
              {["Available", "Reserved", "Sold", "Consigned", "On loan"].map((p) => (
                <span key={p}>{p}</span>
              ))}
              <span className="is-dark">Sacha Elron</span>
            </div>
            <div className="vitreen-glass-thead">
              <span>Title</span>
              <span>Artist</span>
              <span>Year</span>
              <span className="is-right">Price</span>
              <span>Status</span>
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
            <span className="is-muted">To</span>
            <span className="vitreen-gmail-chip">
              <b>E</b>
              Eve Bertrand
            </span>
          </div>
          <div className="vitreen-gmail-subject">
            Availability — Sacha Elron, “Evening Field”
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
            {["All", "Available", "Reserved", "Sold", "NFS"].map((tag, i) => (
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
            <span>1 artwork selected</span>
            <span className="vitreen-inserter-actions">
              <i>↺</i>
              <b>Insert</b>
            </span>
          </div>
        </div>
      </div>

      <section className="vitreen-page-section vitreen-page-section--intro">
        <span className="vitreen-page-kicker">Gallery operations</span>
        <h4>One system for the work your gallery already does.</h4>
        <p>
          Keep artworks, exhibitions, collectors and daily communication
          connected without changing the tools your team relies on.
        </p>
        <div className="vitreen-page-features">
          {[
            ["Artworks", "A clear inventory shared across every workflow."],
            ["Collectors", "Context that stays attached to each conversation."],
            ["Exhibitions", "Selections and availability always up to date."],
          ].map(([title, text]) => (
            <article key={title}>
              <span>↗</span>
              <strong>{title}</strong>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="vitreen-page-section vitreen-page-section--tools">
        <div>
          <span className="vitreen-page-kicker">Connected tools</span>
          <h4>Vitreen works where your team works.</h4>
        </div>
        <div className="vitreen-page-tool-grid">
          {["Gmail", "Google Drive", "Notion", "Calendar"].map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </section>
    </>
  );
}

export function VitreenSiteAdoption() {
  const workflowSteps = [
    {
      title: "Audit",
      body: "We review how artworks and information already move across the gallery.",
    },
    {
      title: "Connect & build",
      body: "Vitreen connects artwork files, selections and collector communication into one flow.",
    },
    {
      title: "Deploy",
      body: "Operational infrastructure installed around your existing gallery environment.",
    },
  ];
  const workflowTools = [
    ["Excel", "/vitreen/stepper-excel.svg"],
    ["WhatsApp", "/icones/whatsapp.svg"],
    ["Outlook", "/vitreen/Microsoft_Office_Outlook_Logo.svg"],
    ["PDF", "/vitreen/stepper-pdf.svg"],
    ["Word", "/vitreen/stepper-word.svg"],
    ["Notion", "/vitreen/stepper-notion.svg"],
  ];

  return (
    <>
      <div className="vitreen-nav">
        <span className="vitreen-nav-logo">Vitreen</span>
        <span className="vitreen-nav-links">
          {["Products", "Solutions", "Deployment", "Blog", "About"].map((label) => (
            <span key={label}>{label}</span>
          ))}
        </span>
        <span className="vitreen-nav-cta">Discuss your setup</span>
      </div>

      <section className="vitreen-adoption">
        <div className="vitreen-adoption-head">
          <h4>Starting from your existing gallery</h4>
          <p>We adapt Vitreen to the way your team works.</p>
        </div>
        <ol className="vitreen-adoption-steps">
          {workflowSteps.map((step, index) => (
            <li className={`vitreen-adoption-step vitreen-adoption-step--${index + 1}`} key={step.title}>
              <div className="vitreen-adoption-track" aria-hidden="true">
                <span className="vitreen-adoption-step-num">{index + 1}</span>
                <span className="vitreen-adoption-line" />
              </div>
              <h5>{step.title}</h5>
              {index === 0 && (
                <>
                  <div className="vitreen-adoption-pills">
                    <span className="is-active">
                      <i className="vitreen-pill-icon vitreen-pill-icon--file" />
                      Inventory
                    </span>
                    <span>
                      <i className="vitreen-pill-icon vitreen-pill-icon--document" />
                      CSV
                    </span>
                    <span>
                      <i className="vitreen-pill-icon vitreen-pill-icon--folder" />
                      Folders
                    </span>
                    <span>
                      <i className="vitreen-pill-icon vitreen-pill-icon--library" />
                      Artwork library
                    </span>
                  </div>
                  <div className="vitreen-adoption-notes">
                    <span>
                      <i className="vitreen-note-icon vitreen-note-icon--check">✓</i>
                      No migration required
                    </span>
                    <span>
                      <i className="vitreen-note-icon vitreen-note-icon--shield">◇</i>
                      Your data stays confidential
                    </span>
                  </div>
                </>
              )}
              {index === 1 && (
                <div className="vitreen-adoption-tools">
                  {workflowTools.map(([tool, icon]) => (
                    <span key={tool}>
                      <img src={icon} alt="" />
                      <small>{tool}</small>
                    </span>
                  ))}
                </div>
              )}
              {index === 2 && (
                <div className="vitreen-adoption-notifications">
                  <span>
                    <i className="is-green" />
                    New inquiry · James Collector
                    <small>2h</small>
                    <img src="/vitreen/google-gmail-svgrepo-com.svg" alt="" />
                  </span>
                  <span>
                    <i className="is-blue" />
                    PDF viewed · Untitled (2023)
                    <small>1h</small>
                    <img src="/vitreen/Microsoft_Office_Outlook_Logo.svg" alt="" />
                  </span>
                  <span>
                    <i className="is-yellow" />
                    Follow-up scheduled · Mon
                    <small>—</small>
                    <img src="/icones/whatsapp.svg" alt="" />
                  </span>
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="vitreen-page-section vitreen-adoption-tools-section">
        <h4>Turn artwork data into collector-facing tools.</h4>
        <p>One artwork source feeds pages, private selections and inquiries.</p>
        <div className="vitreen-adoption-cards">
          <article>
            <strong>Artwork Management</strong>
            <p>Manage artwork information and supporting documents from one place.</p>
            <div className="vitreen-adoption-card-preview vitreen-adoption-preview--artwork">
              <div className="vitreen-adoption-artwork-head">
                <span>Title</span>
                <span>Year</span>
                <span>Price</span>
              </div>
              {VITREEN_ARTWORKS.slice(0, 3).map((row) => (
                <div key={row.title} className="vitreen-adoption-artwork-row">
                  <span className="vitreen-adoption-artwork-swatch" style={{ background: row.color }} />
                  <span className="vitreen-adoption-artwork-title">{row.title}</span>
                  <span className="vitreen-adoption-artwork-year">{row.year}</span>
                  <span className="vitreen-adoption-artwork-price">{row.price}</span>
                </div>
              ))}
            </div>
          </article>
          <article>
            <strong>Private Sharing</strong>
            <p>Send a viewing room as a polished email, with an Inquire button on every work.</p>
            <div className="vitreen-adoption-card-preview vitreen-adoption-preview--mail">
              <div className="vitreen-adoption-mail-head">
                <img src="/vitreen/google-gmail-svgrepo-com.svg" alt="" />
                <div>
                  <strong>Galerie</strong>
                  <span>to Jean Dupond</span>
                </div>
                <time>10:24</time>
              </div>
              <div className="vitreen-adoption-mail-subject">
                <strong>Exhibition Selection</strong>
                <a>View online</a>
              </div>
              <p className="vitreen-adoption-mail-line">Work from the show</p>
              <div className="vitreen-adoption-mail-image" />
              <p className="vitreen-adoption-mail-text">
                For Jean Dupond — following the exhibition, here is a selection of remaining
                works.
              </p>
            </div>
          </article>
          <article>
            <strong>Collector Selections</strong>
            <p>Add works to a selection right from the conversation and share it as a ready-made PDF.</p>
            <div className="vitreen-adoption-card-preview vitreen-adoption-preview--chat">
              <div className="vitreen-adoption-chat-head">
                <span className="vitreen-adoption-chat-avatar">V</span>
                <div>
                  <strong>Vitreen · Sélection</strong>
                  <span>WhatsApp</span>
                </div>
              </div>
              <div className="vitreen-adoption-chat-thumb">
                <img src="/vitreen/painting-05.jpg" alt="" />
                <div>
                  <strong>Evening Field</strong>
                  <span>8 000 €</span>
                </div>
              </div>
              <span className="vitreen-adoption-chat-button">Inquire</span>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
