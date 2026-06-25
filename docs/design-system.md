# Design System — RR Designer Portfolio

Reference pour reconstruire le portfolio dans Figma et garder une coherence entre la home, les pages projet et les use cases.

Source principale : `styles.css`.

## 01. Principes

- Interface editoriale, minimale et product-oriented.
- Les mockups et captures produit portent le recit visuel.
- Peu d'effets : fonds neutres, typographie sobre, grands espaces blancs.
- Les contours sont tres discrets, voire absents sur la home.
- Les cartes doivent rester lisibles, avec des rayons coherents et une hierarchy claire.

## 02. Couleurs

### Tokens globaux

| Token | Valeur | Usage |
| --- | --- | --- |
| `--color-bg` | `#ffffff` | Fond principal |
| `--color-bg-elevated` | `#ffffff` | Cartes, surfaces elevees |
| `--color-text` | `#1a1814` | Texte principal |
| `--color-text-muted` | `rgba(26, 24, 20, 0.62)` | Texte secondaire |
| `--color-border` | `rgba(26, 24, 20, 0.10)` | Bordures faibles |
| `--color-border-strong` | `rgba(26, 24, 20, 0.18)` | Bordures visibles |
| `--color-accent` | `#2c2824` | Accent sombre |

### Fonds

| Nom | Valeur | Usage |
| --- | --- | --- |
| Page blanche | `#ffffff` | Pages editoriales |
| Fond portfolio / projets | `#eeeeee` | Home et home des projets |
| Surface douce | `#fafafa` | Cards secondaires, metrics |
| Vert Gallery OS | `#e3ece0` | Cards / fonds Gallery OS |
| Gmail UI | `#f6f8fc` | Mockups Gmail |

### Accents UI

| Nom | Valeur | Usage |
| --- | --- | --- |
| Noir bouton | `#111110` | Boutons primaires, pills actives |
| Bleu Google | `#1a73e8` | Boutons Gmail, focus |
| Vert statut | `#1fa854` | Badges disponibles, validation |
| Rouge alerte | `#dc2626` | Alertes ponctuelles |

## 03. Typographie

Police principale :

```css
"Inter", system-ui, -apple-system, "Segoe UI", sans-serif
```

### Styles principaux

| Style | Taille | Graisse | Line-height | Usage |
| --- | --- | --- | --- | --- |
| Body | `16px` | `400` | `1.55` | Texte courant |
| Logo / nav | `14px` | `400–500` | `normal` | Header |
| Home title | `clamp(16px, 1.5vw, 18.4px)` | `400` | `1.1` | Nom / titres courts |
| Home subtitle | `12.8px` | `400` | `1.5` | Denomination sous le nom |
| Bio home | `14.4px` | `400` | `1.65` | Bio courte |
| Label editorial | `11.2px` | `400` | `1.4` | Labels de sections |
| Titre section | `14.4–16.8px` | `400` | `1.35` | Titres des blocs |
| Texte editorial | `14.4–16.8px` | `400` | `1.5` | Corps case study |
| Metric value | `17.6–25.6px` | `400` | `1.1` | Chiffres metrics |

Regles :

- Pas de graisse lourde sauf besoin UI specifique.
- Les titres restent sobres et proches du texte.
- Les textes longs sont gris/muted pour garder une lecture douce.
- Le tracking negatif est reserve aux titres courts.

## 04. Espacements

### Largeurs

| Token | Valeur | Usage |
| --- | --- | --- |
| `--measure-narrow` | `46rem` / `736px` | Texte et colonnes etroites |
| `--measure-wide` | `68rem` / `1088px` | Contenu principal |
| `--stack-rail` | `max(112px, calc((100vw - 1500px) / 2 + 80px))` | Alignement home horizontale |

### Espacements principaux

| Espace | Valeur | Usage |
| --- | --- | --- |
| Padding page | `24px` | Marges horizontales standard |
| Padding main | `3.5rem 1.5rem 4rem` | Pages classiques |
| Section case study | `clamp(96px, 11vw, 160px)` | Separation des grandes sections |
| Gap cartes home | `20px` | Carousel horizontal |
| Gap cards / grilles | `10–24px` | Selon densite |
| Padding card | `18–24px` | Contenu de carte |
| Padding hero projet | `clamp(40px, 6vw, 80px)` | Home des projets |

Regles :

- Les pages projet doivent respirer : eviter les sections trop collees.
- Les metrics sont une respiration visuelle, pas un bloc dense.
- Sur mobile, reduire les colonnes mais garder les proportions des mockups quand c'est possible.

## 05. Rayons

| Token | Valeur | Usage |
| --- | --- | --- |
| `--card-radius` | `18px` | Cartes principales |
| Hero projet | `24px` | Grandes cards projet |
| Media / mockups | `16–22px` | Images, videos, frames |
| Pills | `999px` | Boutons ronds, filtres |
| Labels / badges | `6–10px` | Petits tags |
| Micro UI | `8–14px` | Inputs, cards internes |

Regle : garder un rayon doux, jamais trop "app mobile" sauf dans les mockups.

## 06. Bordures et ombres

### Bordures

- Bordure standard : `1px solid rgba(26, 24, 20, 0.10)`.
- Bordure visible : `1px solid rgba(26, 24, 20, 0.18)`.
- Sur la home, les cards principales doivent eviter les strokes visibles.
- Les strokes restent utiles dans les mockups produit pour structurer les interfaces.

### Ombres

| Ombre | Usage |
| --- | --- |
| `0 8px 24px rgba(26, 24, 20, 0.06)` | Hover discret |
| `0 3px 12px rgba(0, 0, 0, 0.12)` | Badges flottants |
| Ombres fortes | A eviter sauf mockup specifique |

## 07. Composants

### Home stack cards

- Format portrait dominant.
- Largeur : `clamp(280px, 27vw, 360px)`.
- Ratio moyen : `3 / 4.6`.
- Pas de stroke visible autour des cards.
- Interaction limitee : hover icon / badge, scroll horizontal.

### Project hero

- Fond gris `#eeeeee`.
- Grande card media centree.
- Texte d'intro place sous le hero, idealement juste sous le viewport sur desktop 13".
- Boutons ronds ou pills, peu nombreux.

### Editorial section

Structure recommandee :

- Colonne gauche : label + titre court.
- Colonne droite : texte principal ou bullet points.
- Texte concis, product design, pas de narration UX generique.

### Metrics

- Cards claires, fond `#fafafa`.
- Chiffre en haut, label en dessous.
- Pas de faux KPI.
- Les metrics doivent documenter le projet ou le prototype de facon verifiable.

### Media carousel

- Scroll horizontal.
- Snap doux.
- Les images/videos gardent leur ratio.
- Eviter de cropper les interfaces produit sauf cadrage volontaire.

### Mockups

- Priorite aux composants, assets et captures existantes des dossiers :
  - `/public/Vitreen`
  - `/public/Gallery OS`
  - `/Users/raphael/Travail/Web/Vitreen`
- Ne pas recreer un mockup en Figma si un composant source existe deja dans Vitreen ou Gallery OS.
- Les mockups doivent rester fideles a l'interface produit, pas devenir des illustrations decoratives.

## 08. Motion

- Transitions courtes : `0.2s–0.4s`.
- Hover discret : opacity, legere translation, apparition d'un badge.
- Eviter les effets de zoom qui croppent les titres ou contenus importants.
- Les interactions doivent servir la comprehension du projet.

## 09. Responsive

Desktop :

- Largeur centrale autour de `1088px`.
- Sections editoriales en deux colonnes.
- Grandes cards media en paysage ou mockup desktop.

Mobile :

- Une colonne.
- Conserver les carousels horizontaux quand ils portent le recit.
- Les mockups peuvent depasser legerement en largeur si cela preserve le ratio, mais ne doivent pas bloquer la navigation verticale.
- Les cards metrics doivent rester lisibles : eviter les colonnes trop etroites avec texte coupe.

## 10. Setup Figma recommande

Pages Figma :

1. `Foundations`
2. `Typography`
3. `Colors`
4. `Components`
5. `Project Templates`
6. `Mockups`

Variables a creer :

- Couleurs globales.
- Text styles.
- Spacing scale.
- Radius scale.
- Card styles.

Composants prioritaires :

- Home stack card.
- Project hero card.
- Editorial section.
- Metrics strip.
- Browser frame.
- Media carousel.
- Icon badge.
- Pill button.

## 11. Regles d'ecriture

- Texte court, concret, oriente produit.
- Chaque section doit relier une decision de design a une valeur produit.
- Eviter les sections UX generiques : personas, empathy maps, longs resumes de recherche.
- Pour les projets avec IA, expliquer ou l'IA modifie le workflow, pas seulement ou elle genere du contenu.
- Garder une structure case study simple : Contexte, Reframing, Architecture produit, Experience produit.
