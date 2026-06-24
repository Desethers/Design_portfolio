import React, { useEffect, useRef, useState } from "react";

/* ───────────────────────────────────────────────────────────────────────
   Gmail side panel — Vitreen
   Rejoue le flow réel en boucle :
   0. Compose Gmail ouvert (brouillon "Spring selection 2026")
   1. Clic sur le bouton flottant Vitreen (rond noir)
   2. Fenêtre de recherche Vitreen (vide)
   3. Saisie « elron »
   4. Résultats de l'inventaire (œuvres de Sacha Elron)
   5. Sélection de « Evening field »
   6. Clic sur Insérer
   7. Œuvre incrustée dans le corps du mail
   Échelle gérée par ResizeObserver (stage 600×920, portrait).
   ─────────────────────────────────────────────────────────────────────── */

const STAGE_W = 600;
const STAGE_H = 920;

const WORKS = [
  { title: "Evening field, 2023", price: "8 000 €", swatch: "#27325e" },
  { title: "Amber Nocturne, 2025", price: "14 000 €", swatch: "#222a4d" },
  { title: "Sage Interval, 2022", price: "6 500 €", swatch: "#b4582f" },
  { title: "Crimson Field, 2024", price: "9 500 €", swatch: "#2f5e43" },
  { title: "Dawn Study No. 7, 2023", price: "6 000 €", swatch: "#b8c2ec" },
  { title: "Untitled (Horizon), 2024", price: "8 000 €", swatch: "#e9c93a" },
];

const STEP_DURATIONS = [1500, 750, 750, 1100, 1100, 1150, 850, 3200];

const Cursor = () => (
  <svg className="gsp-cursor" viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M5 2.5v16.2l4.4-3.6 2.6 6 2.7-1.2-2.6-5.9 6.4-.6z"
      fill="#111110"
      stroke="#fff"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 3 8l9 5 9-5-9-5Z" />
    <path d="m3 13 9 5 9-5" />
    <path d="m3 16.5 9 5 9-5" opacity=".55" />
  </svg>
);

const GlyphImgList = () => (
  <svg viewBox="0 0 26 16" aria-hidden="true">
    <rect x="1" y="1.5" width="12" height="13" rx="2.5" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="4.6" cy="5.6" r="1.3" fill="currentColor" />
    <path d="M3 12 6.2 8.6l2.3 2 1.8-2.3 1.7 2.6" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="16" y="3.2" width="9" height="2.6" rx="1.3" fill="currentColor" />
    <rect x="16" y="8.6" width="9" height="2.6" rx="1.3" fill="currentColor" />
  </svg>
);

export default function GmailSidePanelMock() {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return undefined;
    const fit = () => {
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      if (!w || !h) return;
      const s = Math.min(w / STAGE_W, h / STAGE_H);
      const tx = (w - STAGE_W * s) / 2;
      const ty = (h - STAGE_H * s) / 2;
      stage.style.transform = `translate(${tx}px, ${ty}px) scale(${s})`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const t = setTimeout(
      () => setStep((s) => (s + 1) % STEP_DURATIONS.length),
      STEP_DURATIONS[step]
    );
    return () => clearTimeout(t);
  }, [step]);

  return (
    <div
      className="gsp-wrap"
      ref={wrapRef}
      role="img"
      aria-label="Démonstration du side panel Gmail Vitreen : depuis un brouillon Gmail, la galerie ouvre la fenêtre de recherche Vitreen, cherche une œuvre dans son inventaire, sélectionne « Evening field » de Sacha Elron et l'insère dans le mail."
    >
      <div className="gsp-stage" ref={stageRef} data-step={step} aria-hidden="true">
        {/* Rail latéral Google */}
        <div className="gsp-rail">
          <span className="gsp-rail-cal">31</span>
          <span className="gsp-rail-keep" />
          <span className="gsp-rail-tasks">✓</span>
          <span className="gsp-rail-contact" />
          <i className="gsp-rail-sep" />
          <span className="gsp-rail-vitreen"><GlyphImgList /></span>
          <span className="gsp-rail-plus">+</span>
        </div>

        {/* Fenêtre Compose Gmail */}
        <div className="gsp-compose">
          <div className="gsp-compose-bar">
            <span>Spring selection 2026</span>
            <em>–&ensp;⤢&ensp;✕</em>
          </div>
          <div className="gsp-compose-to">raphaelrossi@gmail.com</div>
          <div className="gsp-compose-subject">Spring selection 2026</div>
          <div className="gsp-compose-body">
            <p>Bonjour,</p>
            <p>
              Dans le cadre de l'exposition actuelle, je souhaitais vous présenter
              une pièce qui me semble incontournable pour votre collection.
            </p>

            {/* Fiche œuvre incrustée */}
            <div className="gsp-art-card">
              <div className="gsp-art-img">
                <img src="/vitreen/painting-05.jpg" alt="" loading="lazy" />
              </div>
              <div className="gsp-art-meta">
                <div className="gsp-art-head">
                  <div className="gsp-art-id">
                    <strong>Sacha Elron</strong>
                    <em>Evening field, 2023</em>
                  </div>
                  <span className="gsp-art-inquire">Inquire</span>
                </div>
                <span className="gsp-art-line">Acrylic on canvas</span>
                <span className="gsp-art-line">120 × 120 cm</span>
                <span className="gsp-art-price">8 000 €</span>
              </div>
            </div>
          </div>
          <div className="gsp-compose-foot">
            <span className="gsp-send">Send<i>▾</i></span>
            <span className="gsp-tool gsp-tool-aa">A<i>a</i></span>
            <span className="gsp-tool-dots">⌗ &nbsp; 🔗 &nbsp; ☺ &nbsp; ▦ &nbsp; ⏱</span>
          </div>
        </div>

        {/* Bouton flottant Vitreen (rond noir) */}
        <span className="gsp-fab">
          <LayersIcon />
        </span>

        {/* Fenêtre de recherche Vitreen */}
        <div className="gsp-search">
          <div className="gsp-search-head">
            <span>Gallery OS</span>
            <i>✕</i>
          </div>
          <div className="gsp-search-input">
            <span className="gsp-typed">elron</span>
            <i className="gsp-caret" />
            <span className="gsp-placeholder">Rechercher une œuvre…</span>
          </div>
          <div className="gsp-filters">
            <span className="is-active">Tout</span>
            <span>Disponibles</span>
            <span>Réservées</span>
            <span>Vendues</span>
            <span>NFS</span>
          </div>
          <p className="gsp-hint">Tape un titre ou un nom d'artiste.</p>
          <div className="gsp-results">
            {WORKS.map((w, i) => (
              <div
                className={`gsp-result${i === 0 ? " is-selected" : ""}`}
                key={w.title}
                style={{ "--d": `${i * 0.05}s` }}
              >
                <span className="gsp-check" />
                <span className="gsp-thumb" style={{ background: w.swatch }} />
                <span className="gsp-result-id">
                  <small>SACHA ELRON</small>
                  <em>{w.title}</em>
                  <b>{w.price}</b>
                </span>
                <span className="gsp-badge">AVAILABLE</span>
              </div>
            ))}
          </div>
          <div className="gsp-search-foot">
            <span className="gsp-foot-count">1 œuvre sélectionnée</span>
            <span className="gsp-foot-reset">↺</span>
            <span className="gsp-foot-insert">Insérer</span>
          </div>
        </div>

        <Cursor />
      </div>
    </div>
  );
}
