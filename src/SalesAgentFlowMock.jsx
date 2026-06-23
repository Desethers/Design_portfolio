import React, { useEffect, useRef } from "react";

/* ───────────────────────────────────────────────────────────────────────
   Sales Agent — schéma de la chaîne d'action (node-graph, style Gallery OS)
   Déclencheurs → Intent filter → Sales Agent (Phase 1) → DraftReply (Phase 2)
   → Sanity (persistance) → UI de validation. Aucun envoi automatique.
   Réutilise les primitives visuelles gosc-* du projet.
   ─────────────────────────────────────────────────────────────────────── */

const STAGE_W = 820;
const STAGE_H = 588;

/* connecteurs (coordonnées dans le repère 820×588) */
const LINES_ACCENT = [
  "M216 306 C236 305 240 301 250 300", // Inquire → Sales Agent (direct)
  "M474 255 C512 255 516 112 548 112", // Sales Agent → DraftReply
  "M674 192 C674 204 674 216 674 228", // DraftReply → Validation
];
const LINES_FADED = [
  "M216 122 C232 121 238 118 250 117", // Email entrant → Intent filter
  "M362 191 C362 197 362 201 362 206", // Intent filter → Sales Agent
];

const COLLECT_STEPS = [
  "Recherche d'œuvres",
  "Détails d'une œuvre",
  "Fiche du contact",
  "Demandes précédentes",
  "Œuvres similaires",
  "Ton de la galerie",
];
const DRAFT_FIELDS = ["objet", "message", "langue", "priorité", "relance", "œuvres citées"];
const INTENT_CHIPS = ["prix", "disponibilité", "achat", "visite", "dimensions"];

const IconCursor = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
    <path d="M3 1.5v11l2.9-2.4 1.7 4 1.8-.8-1.7-3.9 4.3-.4z" />
  </svg>
);
const IconMail = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="1" y="3" width="14" height="10" rx="2" />
    <path d="m1 5.5 7 5 7-5" />
  </svg>
);

export default function SalesAgentFlowMock() {
  const wrapRef = useRef(null);
  const stageRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const stage = stageRef.current;
    if (!wrap || !stage) return undefined;
    const fit = () => {
      const width = wrap.clientWidth;
      if (!width) return;
      stage.style.transform = `scale(${width / STAGE_W})`;
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, []);

  return (
    <div
      className="gosc-wrap sag-wrap"
      ref={wrapRef}
      role="img"
      aria-label="Schéma de la chaîne d'action du Sales Agent : deux points d'entrée (un email de collectionneur ou une demande depuis le site), un tri qui ne garde que les vraies demandes, l'agent qui va chercher les vraies infos dans l'inventaire, un brouillon préparé, puis une étape de validation par la galerie — jamais d'envoi automatique."
    >
      <svg className="gosc-ratio" width={STAGE_W} height={STAGE_H} aria-hidden="true" />
      <div className="gosc-stage sag-stage" ref={stageRef} aria-hidden="true">
        <svg width={STAGE_W} height={STAGE_H} className="gosc-lines">
          {LINES_FADED.map((d, i) => (
            <path key={d} className="gosc-ln gosc-ln--faded" style={{ animationDelay: `${0.5 + i * 0.12}s` }} d={d} />
          ))}
          {LINES_ACCENT.map((d, i) => (
            <path key={d} className="gosc-ln gosc-ln--accent" style={{ animationDelay: `${0.9 + i * 0.14}s` }} d={d} />
          ))}
        </svg>

        {/* 1a — Entrée : email d'un collectionneur */}
        <div className="gosc-card sag-source" style={{ left: 20, top: 90, width: 196, animationDelay: "0.05s" }}>
          <span className="gosc-th gosc-th--neutral"><IconMail /></span>
          <div className="sag-source-id">
            <div className="gosc-name">Email reçu</div>
            <div className="gosc-sub">D'un collectionneur</div>
          </div>
        </div>

        {/* 1b — Entrée : demande depuis le site */}
        <div className="gosc-card sag-source" style={{ left: 20, top: 275, width: 196, animationDelay: "0.12s" }}>
          <span className="gosc-th gosc-th--neutral"><IconCursor /></span>
          <div className="sag-source-id">
            <div className="gosc-name">Demande en ligne</div>
            <div className="gosc-sub">Formulaire du site</div>
          </div>
        </div>

        {/* 2 — Tri des demandes */}
        <div className="gosc-card sag-node" style={{ left: 250, top: 44, width: 224, animationDelay: "0.35s" }}>
          <div className="sag-head"><span className="gosc-dot" /><span className="sag-title">Tri des demandes</span><span className="sag-tag">emails</span></div>
          <p className="sag-note">On ne garde que les vraies demandes&nbsp;:</p>
          <div className="sag-chips">
            {INTENT_CHIPS.map((c) => <span className="gosc-chip-xs" key={c}>{c}</span>)}
          </div>
        </div>

        {/* 3 — Assistant (cœur) */}
        <div className="gosc-card gosc-fiche sag-core" style={{ left: 250, top: 206, width: 224, animationDelay: "0.5s" }}>
          <div className="sag-head"><span className="gosc-dot" /><span className="sag-title">Assistant de vente</span></div>
          <div className="sag-model">Connecté à l'inventaire en direct</div>
          <div className="sag-section">Va chercher les vraies infos</div>
          <ul className="sag-collect">
            {COLLECT_STEPS.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>

        {/* 4 — Brouillon préparé */}
        <div className="gosc-card sag-node" style={{ left: 548, top: 44, width: 252, animationDelay: "0.78s" }}>
          <div className="sag-head"><span className="gosc-dot" /><span className="sag-title">Brouillon préparé</span><span className="sag-tag">sans doublon</span></div>
          <div className="sag-section">Ce que l'assistant rédige</div>
          <div className="sag-chips">
            {DRAFT_FIELDS.map((f) => <span className="gosc-chip-xs" key={f}>{f}</span>)}
          </div>
        </div>

        {/* 5 — Validation par la galerie */}
        <div className="gosc-card sag-node sag-validate" style={{ left: 548, top: 228, width: 252, animationDelay: "1s" }}>
          <div className="sag-winbar">
            <i /><i /><i />
            <span>Brouillons à valider</span>
            <span className="sag-winbar-tag">Enregistré</span>
          </div>
          <label className="sag-f">
            <span>Objet</span>
            <span className="sag-in">Re : Evening field — dispo &amp; prix</span>
          </label>
          <label className="sag-f">
            <span>Message</span>
            <span className="sag-in">Bonjour, merci pour votre message…</span>
          </label>
          <label className="sag-f">
            <span>Ajuster le ton</span>
            <span className="sag-in sag-in--hint">plus chaleureux</span>
          </label>
          <div className="sag-acts">
            <span className="sag-ghost"><span className="sag-ghost-ico">↻</span> Régénérer</span>
            <span className="sag-grow" />
            <span className="sag-ghost">Écarter</span>
            <span className="sag-solid">Envoyer</span>
          </div>
        </div>

        {/* Règle absolue */}
        <div className="sag-rule" style={{ left: 548, top: 532, width: 252 }}>
          <span className="sag-rule-mark">!</span>
          Jamais d'envoi automatique — validation humaine
        </div>

        {/* pulses sur les liens longs (les courts ne sont pas animés) */}
        {LINES_ACCENT.slice(0, 2).map((d, i) => (
          <span key={d} className="gosc-pulse" style={{ offsetPath: `path('${d}')`, animationDelay: `${1.6 + i * 0.5}s` }} />
        ))}
      </div>
    </div>
  );
}
