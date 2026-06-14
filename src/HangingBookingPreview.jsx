import React from "react";

const TIMES = ["09:00", "10:00", "11:00", "12:00", "13:00"];

export default function HangingBookingPreview() {
  return (
    <article className="hanging-booking-preview" aria-label="Démonstration du processus de réservation Hanging">
      <BookingSection label="1. Sélectionnez une date" />

      <BookingSection label="2. Choisissez un créneau" open>
        <div className="hanging-booking-times">
          <strong>Horaires disponibles</strong>
          <small>lundi 15 juin 2026</small>
          <div>
            {TIMES.map((slot) => (
              <span
                key={slot}
                className={slot === "09:00" ? "is-selected" : ""}
              >
                {slot}
              </span>
            ))}
          </div>
          <span className="hanging-booking-next">
            Continuer
          </span>
        </div>
      </BookingSection>

      <BookingSection label="3. Vos informations" />
      <BookingSection label="4. Informations Techniques" />
    </article>
  );
}

function BookingSection({ label, open = false, children }) {
  return (
    <section className={`hanging-booking-section${open ? " is-open" : ""}`}>
      <div className="hanging-booking-trigger">
        <span>{label}</span>
        <span aria-hidden="true">{open ? "⌃" : "⌄"}</span>
      </div>
      {open && <div className="hanging-booking-content">{children}</div>}
    </section>
  );
}
