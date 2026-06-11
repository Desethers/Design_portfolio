import React, { useState } from "react";

const WEEKDAYS = ["LU", "MA", "ME", "JE", "VE", "SA"];
const DAYS = [
  null, 1, 2, 3, 4, 5,
  7, 8, 9, 10, 11, 12,
  14, 15, 16, 17, 18, 19,
  21, 22, 23, 24, 25, 26,
  28, 29, 30, null, null, null,
];
const TIMES = ["09:00", "10:00", "11:00", "12:00", "13:00"];

export default function HangingBookingPreview() {
  const [section, setSection] = useState("time");
  const [date, setDate] = useState(15);
  const [time, setTime] = useState("09:00");
  const [wallType, setWallType] = useState("Mur plein");

  const toggle = (nextSection) => {
    setSection((current) => (current === nextSection ? "" : nextSection));
  };

  return (
    <article className="hanging-booking-preview" aria-label="Démonstration du processus de réservation Hanging">
      <BookingSection
        label="1. Sélectionnez une date"
        open={section === "date"}
        onToggle={() => toggle("date")}
      >
        <div className="hanging-booking-month">
          <button type="button" aria-label="Mois précédent">‹</button>
          <strong>juin 2026</strong>
          <button type="button" aria-label="Mois suivant">›</button>
        </div>
        <div className="hanging-booking-calendar">
          {WEEKDAYS.map((day) => <span key={day}>{day}</span>)}
          {DAYS.map((day, index) => (
            day ? (
              <button
                key={day}
                type="button"
                className={date === day ? "is-selected" : ""}
                onClick={() => {
                  setDate(day);
                  setSection("time");
                }}
              >
                {day}
              </button>
            ) : <i key={`empty-${index}`} />
          ))}
        </div>
      </BookingSection>

      <BookingSection
        label="2. Choisissez un créneau"
        open={section === "time"}
        onToggle={() => toggle("time")}
      >
        <div className="hanging-booking-times">
          <strong>Horaires disponibles</strong>
          <small>lundi {date} juin 2026</small>
          <div>
            {TIMES.map((slot) => (
              <button
                key={slot}
                type="button"
                className={time === slot ? "is-selected" : ""}
                onClick={() => setTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
          <button type="button" className="hanging-booking-next" onClick={() => setSection("contact")}>
            Continuer
          </button>
        </div>
      </BookingSection>

      <BookingSection
        label="3. Vos informations"
        open={section === "contact"}
        onToggle={() => toggle("contact")}
      >
        <div className="hanging-booking-form">
          <label>
            Nom complet
            <input type="text" defaultValue="Jean Dupont" />
          </label>
          <label>
            Email
            <input type="email" defaultValue="jean@exemple.fr" />
          </label>
          <button type="button" className="hanging-booking-next" onClick={() => setSection("technical")}>
            Continuer
          </button>
        </div>
      </BookingSection>

      <BookingSection
        label="4. Informations Techniques"
        open={section === "technical"}
        onToggle={() => toggle("technical")}
      >
        <div className="hanging-booking-technical">
          <strong>Type de mur</strong>
          <div>
            {["Placo", "Mur plein", "Mixte"].map((type) => (
              <button
                key={type}
                type="button"
                className={wallType === type ? "is-selected" : ""}
                onClick={() => setWallType(type)}
              >
                {type}
              </button>
            ))}
          </div>
          <p>{date} juin · {time} · {wallType}</p>
        </div>
      </BookingSection>
    </article>
  );
}

function BookingSection({ label, open, onToggle, children }) {
  return (
    <section className={`hanging-booking-section${open ? " is-open" : ""}`}>
      <button type="button" className="hanging-booking-trigger" onClick={onToggle}>
        <span>{label}</span>
        <span aria-hidden="true">{open ? "⌃" : "⌄"}</span>
      </button>
      {open && <div className="hanging-booking-content">{children}</div>}
    </section>
  );
}
