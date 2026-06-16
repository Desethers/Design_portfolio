import React from "react";

const ARTWORKS = [
  { initials: "EF", title: "Evening Field", artist: "Sacha Elron", price: "2 400 €", color: "#1a1a2e", img: "/artworks/evening-field.png" },
  { initials: "DS", title: "Dawn Study No. 7", artist: "Sacha Elron", price: "1 800 €", color: "#d8d8e8", img: "/artworks/dawn-study.png" },
];

export default function SalesAgentPreview() {
  return (
    <div className="sa-preview" aria-label="Démonstration du Sales Agent">
      <div className="sa-inquiry-panel">
        <div className="sa-inquiry-header">
          <div className="sa-avatar">EB</div>
          <div className="sa-inquiry-from">
            <strong>Eve Bertrand</strong>
            <span>il y a 2 min · inquiry@eve-bertrand.com</span>
          </div>
          <span className="sa-new-badge">Nouveau</span>
        </div>
        <p className="sa-inquiry-subject">Availability — contemporary works under 3 000 €</p>
        <p className="sa-inquiry-body">
          Bonjour, je recherche une œuvre contemporaine pour mon entrée — environ
          80×60 cm, budget autour de 3 000 €. Avez-vous quelque chose de disponible ?
        </p>
      </div>

      <div className="sa-draft-panel">
        <div className="sa-draft-label">
          <svg viewBox="0 0 20 20" aria-hidden="true">
            <path d="M10 2a1 1 0 0 0-1 1v1H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3V3a1 1 0 0 0-1-1z" />
            <path d="M7 9h6M7 12h4" strokeLinecap="round" />
          </svg>
          <span>Brouillon — Sales Agent</span>
          <span className="sa-status-dot" aria-label="Généré par IA" />
        </div>

        <div className="sa-draft-body">
          <p className="sa-draft-greeting">Bonjour Eve,</p>
          <p className="sa-draft-text">
            Merci pour votre message. Voici deux œuvres de notre inventaire qui
            correspondent à votre recherche :
          </p>

          <div className="sa-artworks">
            {ARTWORKS.map((aw) => (
              <div key={aw.initials} className="sa-artwork">
                <div className="sa-artwork-thumb" style={{ background: aw.color }}>
                  <img src={aw.img} alt={aw.title} className="sa-artwork-img" />
                </div>
                <div className="sa-artwork-info">
                  <strong>{aw.title}</strong>
                  <span>{aw.artist}</span>
                  <span className="sa-artwork-price">{aw.price}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="sa-draft-text">
            Je reste disponible si vous souhaitez plus d'informations ou organiser
            une présentation.
          </p>
        </div>

        <div className="sa-draft-actions">
          <button className="sa-btn-edit" type="button">Modifier</button>
          <button className="sa-btn-send" type="button">
            Envoyer
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 8h12M10 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
