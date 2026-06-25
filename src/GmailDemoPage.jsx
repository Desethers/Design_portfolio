import React, { useEffect, useState } from "react";

/* ───────────────────────────────────────────────────────────────────────
   Gallery OS × Gmail — démo produit interactive (375px)
   Flow en 4 étapes :
   0. draft    → Gmail inbox + brouillon en bas, bouton Gallery OS visible
   1. panel    → Panel slide-up, résultats pré-chargés, bouton Insérer
   2. inserting→ Bouton vert « Inséré ✓ » 1.5 s, panel se ferme
   3. done     → Gmail révélé, fiche œuvre dans le brouillon
   Tap écran en état done → retour à 0.
   ─────────────────────────────────────────────────────────────────────── */

const API_URL = "https://gallery-os-ten.vercel.app/api/sidebar/search?q=elron";

const FALLBACK = [
  { id: "ef", artist: "Sacha Elron", title: "Evening field", year: "2023", priceLabel: "10 000 €", status: "available", swatch: "#27325e" },
  { id: "an", artist: "Sacha Elron", title: "Amber Nocturne", year: "2025", priceLabel: "14 000 €", status: "available", swatch: "#222a4d" },
  { id: "si", artist: "Sacha Elron", title: "Sage Interval", year: "2022", priceLabel: "6 500 €", status: "available", swatch: "#b4582f" },
  { id: "cf", artist: "Sacha Elron", title: "Crimson Field", year: "2024", priceLabel: "9 500 €", status: "available", swatch: "#2f5e43" },
  { id: "ds", artist: "Sacha Elron", title: "Dawn Study No. 7", year: "2023", priceLabel: "6 000 €", status: "available", swatch: "#b8c2ec" },
  { id: "uh", artist: "Sacha Elron", title: "Untitled (Horizon)", year: "2024", priceLabel: "8 000 €", status: "available", swatch: "#e9c93a" },
];

function normalize(raw) {
  const list = Array.isArray(raw) ? raw : raw?.results ?? raw?.artworks ?? raw?.data ?? raw?.items ?? [];
  if (!Array.isArray(list) || !list.length) return null;
  return list.map((it, i) => {
    const year = it.year ?? it.date ?? String(it.title ?? "").match(/\b(19|20)\d{2}\b/)?.[0] ?? "";
    const title = String(it.title ?? it.name ?? "Sans titre").replace(/,?\s*(19|20)\d{2}\s*$/, "");
    return {
      id: String(it.id ?? it._id ?? it.slug ?? i),
      artist: it.artist ?? it.artistName ?? "",
      title, year: String(year),
      priceLabel: it.priceLabel ?? it.price_label ?? (typeof it.price === "number" ? `${it.price.toLocaleString("fr-FR")} €` : it.price ?? ""),
      status: String(it.status ?? "available").toLowerCase(),
      image: it.image ?? it.imageUrl ?? it.thumbnail ?? null,
      swatch: FALLBACK[i % FALLBACK.length].swatch,
    };
  });
}

function GalleryOsIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 26 16" aria-hidden="true" fill="currentColor">
      <rect x="1" y="1.5" width="12" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="4.6" cy="5.6" r="1.3" />
      <path d="M3 12 6.2 8.6l2.3 2 1.8-2.3 1.7 2.6" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="16" y="3.2" width="9" height="2.6" rx="1.3" />
      <rect x="16" y="8.6" width="9" height="2.6" rx="1.3" />
    </svg>
  );
}

function GmailM() {
  return (
    <svg width="20" height="16" viewBox="0 0 48 36" aria-hidden="true">
      <path d="M3.4 33.6h7.2V16.2L0 8.2v22c0 2 1.5 3.4 3.4 3.4Z" fill="#4285f4" />
      <path d="M37.4 33.6h7.2c1.9 0 3.4-1.5 3.4-3.4v-22l-10.6 8Z" fill="#34a853" />
      <path d="M37.4 5.8v10.4L48 8.2V4.4c0-3.5-4-5.5-6.8-3.4Z" fill="#fbbc04" />
      <path d="M10.6 16.2V5.8L24 15.8l13.4-10v10.4L24 26.2Z" fill="#ea4335" />
      <path d="M0 4.4v3.8l10.6 8V5.8L6.8 1C4 -1.1 0 .9 0 4.4Z" fill="#c5221f" />
    </svg>
  );
}

function Swatch({ work }) {
  if (work.image) {
    return (
      <div className="gd-wall gd-wall--photo">
        <img src={work.image} alt="" loading="lazy" />
      </div>
    );
  }
  return <div className="gd-wall" style={{ "--canvas": work.swatch }} aria-hidden="true" />;
}

// ─── États de la démo ─────────────────────────────────────────────────
// draft | panel | inserting | done
export default function GmailDemoPage() {
  const [step, setStep] = useState("draft");
  const [works, setWorks] = useState(FALLBACK);
  const [chosen, setChosen] = useState(FALLBACK[0]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await fetch(API_URL, { credentials: "include" });
        if (!r.ok) throw new Error();
        const data = normalize(await r.json());
        if (alive && data?.length) { setWorks(data); setChosen(data[0]); }
      } catch { /* silently use fallback */ }
    })();
    return () => { alive = false; };
  }, []);

  function openPanel() { setStep("panel"); }

  function handleInsert(work) {
    setChosen(work);
    setStep("inserting");
    setTimeout(() => setStep("done"), 1500);
  }

  function reset() {
    if (step !== "done") return;
    setStep("draft");
    setChosen(works[0]);
  }

  const panelOpen = step === "panel" || step === "inserting";
  const blurred = panelOpen;
  const showCard = step === "done";

  return (
    <div className="gd-root" onClick={step === "done" ? reset : undefined} role="application">

      {/* ── Fond Gmail ─────────────────────────────────────────────── */}
      <div className={`gd-bg${blurred ? " is-blurred" : ""}`}>

        <header className="gd-gmail-bar">
          <span className="gd-gmail-burger" aria-hidden="true"><i /><i /><i /></span>
          <span className="gd-gmail-search">
            <GmailM />
            <span>raaphaelrossi@gmail.com</span>
          </span>
          <span className="gd-gmail-avatar">R</span>
        </header>

        <div className="gd-inbox" aria-hidden="true">
          {[
            { from: "Studio Lambert", subj: "Re : Disponibilités printemps", t: "10:24" },
            { from: "Claire Vasseur", subj: "Visite atelier — confirmation", t: "9:02" },
            { from: "Art Basel", subj: "Your VIP preview access", t: "Hier" },
            { from: "Maxime Royer", subj: "Facture #2026-018", t: "Hier" },
          ].map((m) => (
            <div className="gd-inbox-row" key={m.from}>
              <span className="gd-inbox-dot" />
              <span className="gd-inbox-txt">
                <strong>{m.from}</strong>
                <small>{m.subj}</small>
              </span>
              <span className="gd-inbox-time">{m.t}</span>
            </div>
          ))}
        </div>

        {/* Brouillon — compose mobile Gmail fidèle */}
        <div className="gd-compose">
          {/* Barre d'actions */}
          <div className="gd-compose-topbar">
            <button className="gd-compose-close" type="button" aria-label="Fermer">✕</button>
            <div className="gd-compose-actions">
              {/* Attachment */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
              {/* Send */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              <button
                type="button"
                className="gd-gos-chip"
                onClick={(e) => { e.stopPropagation(); openPanel(); }}
                aria-label="Insérer une oeuvre Gallery OS"
              >
                <GalleryOsIcon />
              </button>
              {/* More */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
            </div>
          </div>
          {/* Champs */}
          <div className="gd-compose-field">collectionneur@elron-galerie.com</div>
          <div className="gd-compose-field gd-compose-field--de">
            <span className="gd-de-label">De</span>
            <span>raaphaelrossi@gmail.com</span>
          </div>
          <div className="gd-compose-field gd-compose-field--subj">Spring Selection 2026</div>
          {/* Corps */}
          <div className="gd-compose-body">
            <p>Bonjour,</p>
            <p>Dans le cadre de l'exposition actuelle, je souhaitais vous présenter une pièce qui me semble incontournable pour votre collection.</p>

            {showCard && (
              <div className="gd-draft-inline">
                <img
                  className="gd-draft-img"
                  src="/vitreen/painting-05.jpg"
                  alt={chosen.title}
                />
                <div className="gd-draft-legend">
                  <div className="gd-draft-legend-left">
                    <span className="gd-draft-artist-bold">{chosen.artist}</span>
                    <span className="gd-draft-title-italic"><em>{chosen.title}{chosen.year ? `, ${chosen.year}` : ""}</em></span>
                    <span className="gd-draft-medium">Acrylic on canvas</span>
                    <span className="gd-draft-dims">120 × 120 cm</span>
                    <span className="gd-draft-price-lg">{chosen.priceLabel}</span>
                  </div>
                  <button type="button" className="gd-draft-inquire">Inquire</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Scrim ──────────────────────────────────────────────────── */}
      <div className={`gd-scrim${panelOpen ? " is-on" : ""}`} />


      {/* ── Panel Gallery OS ───────────────────────────────────────── */}
      <section className={`gd-panel${panelOpen ? " is-open" : ""}`} aria-label="Panel Gallery OS">
        <div className="gd-panel-head">
          <span className="gd-panel-title">Gallery OS</span>
          <button className="gd-panel-close" type="button" onClick={() => setStep("draft")} aria-label="Fermer">✕</button>
        </div>

        <div className="gd-panel-scroll">
          <div className="gd-panel-intro">
            <strong>Insérer une œuvre</strong>
            <small>Recherche dans Gallery OS</small>
          </div>

          <div className="gd-search-input">
            <span>elron</span>
            <i className="gd-search-clear" aria-hidden="true">✕</i>
          </div>
          <p className="gd-search-hint">Titre ou nom d'artiste · appuie sur Chercher</p>
          <div className="gd-search-btns">
            <span className="gd-btn gd-btn--blue">Chercher</span>
            <span className="gd-btn gd-btn--ghost">Vue liste</span>
          </div>

          <div className="gd-divider" />
          <span className="gd-count">{works.length} résultats</span>

          <div className="gd-results">
            {works.map((w, i) => {
              const isInserting = step === "inserting" && chosen?.id === w.id;
              return (
                <article className={`gd-card${i === 0 ? " is-selected" : ""}`} key={w.id}>
                  <Swatch work={w} />
                  <div className="gd-card-body">
                    <div className="gd-card-meta">
                      <span className="gd-card-artist">{w.artist.toUpperCase()}</span>
                      <span className="gd-card-title"><em>{w.title}</em>{w.year ? `, ${w.year}` : ""}</span>
                      <span className="gd-card-price">
                        {w.priceLabel}{" "}
                        <span className={`gd-badge${w.status === "available" ? " gd-badge--ok" : ""}`}>
                          {w.status === "available" ? "AVAILABLE" : w.status.toUpperCase()}
                        </span>
                      </span>
                    </div>
                    <button
                      type="button"
                      className={`gd-insert${isInserting ? " is-done" : ""}`}
                      onClick={(e) => { e.stopPropagation(); handleInsert(w); }}
                      disabled={step === "inserting"}
                    >
                      {isInserting ? "Inséré ✓" : "Insérer"}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
