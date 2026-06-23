import React from "react";

/* ───────────────────────────────────────────────────────────────────────
   Sales Agent — Contexte : diptyque
   Gauche : la demande de renseignement d'un collectionneur (Evening field).
   Droite : l'œuvre concernée — ce que la galerie doit rassembler pour répondre.
   ─────────────────────────────────────────────────────────────────────── */

export default function SalesAgentContextDiptych() {
  return (
    <div className="sad" role="img" aria-label="Diptyque : à gauche, l'email d'un collectionneur demandant le prix et la disponibilité de l'œuvre Evening field ; à droite, la fiche de l'œuvre que la galerie doit rassembler pour répondre.">
      {/* Gauche — la demande de renseignement (UI Gmail) */}
      <article className="gml-msg">
        <div className="gml-subject">
          <h4>Question sur Evening field</h4>
          <span className="gml-chip">Boîte de réception</span>
        </div>

        <div className="gml-from">
          <span className="gml-avatar" aria-hidden="true">J</span>
          <div className="gml-from-main">
            <div className="gml-from-line">
              <span className="gml-from-name">Jean Collectionneur</span>
              <span className="gml-from-addr">&lt;collector@example.com&gt;</span>
            </div>
            <div className="gml-to">
              à moi
              <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 6l4 4 4-4" /></svg>
            </div>
          </div>
          <div className="gml-meta">
            <span className="gml-date">10:24 (il y a 2 min)</span>
            <span className="gml-icons">
              <svg viewBox="0 0 24 24" className="gml-star" aria-hidden="true"><path d="M12 4l2.3 4.9 5.3.6-3.9 3.6 1 5.3L12 16.4 7.3 18.9l1-5.3L4.4 10l5.3-.6z" /></svg>
              <svg viewBox="0 0 24 24" className="gml-reply" aria-hidden="true"><path d="M9 7L4 12l5 5M4.5 12H14a6 6 0 0 1 6 6v1" /></svg>
              <svg viewBox="0 0 24 24" className="gml-more" aria-hidden="true"><circle cx="12" cy="5" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="19" r="1.6" /></svg>
            </span>
          </div>
        </div>

        <div className="gml-body">
          <p>Bonjour,</p>
          <p>
            Serait-il possible de connaître le prix et la disponibilité
            d'« Evening field » ? Je serais intéressé pour une visite en galerie
            la semaine prochaine.
          </p>
          <p>Merci</p>
        </div>

        <div className="gml-actions">
          <button type="button" className="gml-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7L4 12l5 5M4.5 12H14a6 6 0 0 1 6 6v1" /></svg>
            Répondre
          </button>
          <button type="button" className="gml-btn">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 7l5 5-5 5M19.5 12H10a6 6 0 0 0-6 6v1" /></svg>
            Transférer
          </button>
        </div>
      </article>

      {/* Droite — la notification reçue dans Gallery OS */}
      <article className="sad-frame">
        <img
          src="/Gallery%20OS/frame_sales_agent_notif.png"
          alt="Gallery OS — notification : brouillon d'email prêt à valider"
        />
      </article>
    </div>
  );
}
