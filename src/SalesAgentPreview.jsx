import React from "react";

const ARTWORKS = [
  { title: "Evening Field", artist: "Sacha Elron", year: "2023", price: "2 400 €", img: "/artworks/evening-field.png" },
  { title: "Dawn Study No. 7", artist: "Sacha Elron", year: "2023", price: "1 800 €", img: "/artworks/dawn-study.png" },
];

export default function SalesAgentPreview() {
  return (
    <div className="sa-preview" aria-label="Démonstration du Sales Agent">
      <div className="sa-frame">
        <div className="sa-frame-bar">
          <span className="sa-frame-dots" aria-hidden="true">
            <i /><i /><i />
          </span>
          <span className="sa-frame-title">Gallery OS — Sales drafts</span>
          <span className="sa-frame-path">/dashboard/sales-drafts</span>
        </div>

        <div className="sa-frame-body">
          <div className="sa-badges">
            <span className="sa-badge sa-badge--priority">Priorité · high</span>
            <span className="sa-badge sa-badge--vip">VIP</span>
            <span className="sa-badge sa-badge--lang">Langue · fr</span>
          </div>

          {/* Email entrant — d'où vient la demande */}
          <section className="sa-card sa-card--incoming">
            <div className="sa-card-head">
              <span className="sa-card-label">Email entrant</span>
              <span className="sa-card-time">il y a 2 min</span>
            </div>
            <div className="sa-inquiry-from">
              <div className="sa-avatar">EB</div>
              <div className="sa-inquiry-id">
                <strong>Eve Bertrand</strong>
                <span>eve.bertrand@collection.com</span>
              </div>
            </div>
            <p className="sa-inquiry-subject">Availability — contemporary works under 3 000 €</p>
            <p className="sa-inquiry-body">
              Bonjour, je recherche une œuvre contemporaine pour mon entrée — environ
              80×60 cm, budget autour de 3 000 €. Avez-vous quelque chose de disponible ?
            </p>
          </section>

          {/* Connecteur : l'agent transforme l'email en brouillon */}
          <div className="sa-connector" aria-hidden="true">
            <span className="sa-connector-line" />
            <span className="sa-connector-chip">
              <svg viewBox="0 0 20 20">
                <rect x="4" y="6" width="12" height="10" rx="2" />
                <path d="M10 6V3M7 11h0M13 11h0" strokeLinecap="round" />
              </svg>
              Le Sales Agent rédige
            </span>
            <span className="sa-connector-line" />
          </div>

          {/* Brouillon généré */}
          <section className="sa-card sa-card--draft">
            <div className="sa-card-head">
              <span className="sa-card-label">Brouillon — Sales Agent</span>
              <span className="sa-tools">lookupContact · getArtworkDetails · findSimilarArtworks</span>
            </div>
            <p className="sa-draft-field">
              <span className="sa-field-key">Objet</span>
              Re: Availability — contemporary works under 3 000 €
            </p>
            <div className="sa-draft-body">
              <p className="sa-draft-greeting">Bonjour Eve,</p>
              <p className="sa-draft-text">
                Merci pour votre message. Voici deux œuvres disponibles de notre
                inventaire qui correspondent à votre recherche :
              </p>

              <div className="sa-artworks">
                {ARTWORKS.map((aw) => (
                  <div key={aw.title} className="sa-artwork">
                    <div className="sa-artwork-thumb">
                      <img src={aw.img} alt={aw.title} className="sa-artwork-img" />
                    </div>
                    <div className="sa-artwork-info">
                      <strong>{aw.title}</strong>
                      <span>{aw.artist} · {aw.year}</span>
                    </div>
                    <span className="sa-artwork-price">{aw.price}</span>
                  </div>
                ))}
              </div>

              <p className="sa-draft-text">
                Je reste disponible si vous souhaitez plus d'informations ou organiser
                une présentation.
              </p>
            </div>
          </section>

          {/* Raisonnement de l'agent */}
          <div className="sa-reasoning">
            <span className="sa-reasoning-key">Raisonnement</span>
            <p>
              Contact identifié (VIP, 2 achats passés). Deux œuvres disponibles sous
              3 000 € au format demandé — prix et statut repris de l'inventaire, rien
              d'inventé.
            </p>
          </div>

          {/* Actions — validation humaine */}
          <div className="sa-actions">
            <button className="sa-btn sa-btn--send" type="button">Envoyer</button>
            <button className="sa-btn sa-btn--postpone" type="button">Reporter · J+3</button>
            <button className="sa-btn sa-btn--save" type="button">Enregistrer</button>
            <button className="sa-btn sa-btn--dismiss" type="button">Écarter</button>
          </div>
        </div>
      </div>
    </div>
  );
}
