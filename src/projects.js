export const projects = [
  {
    id: 1,
    slug: "onboarding-app",
    title: "Hanging",
    type: "Application mobile",
    year: "2024",
    desc: "Redesign du booking flow d'une app de réservation — de la recherche terrain au prototype validé.",
    tags: ["UX Research", "UI Design", "Prototypage"],
    video: "/Sans titre.mov",
    process: {
      role: "Product Designer & Développeur (solo)",
      duration: "Side project en cours",
      tools: ["Figma", "Cursor", "Stripe", "Vercel"],
      brief:
        "Redesigner le flow de réservation d'un service d'accrochage d'œuvres d'art. L'objectif : garder les utilisateurs sur hanging.fr du début à la fin — du choix du plan jusqu'au paiement — sans les rediriger vers un outil tiers.",
      problem: {
        statement:
          "Hanging utilisait Calendly pour gérer les réservations. À chaque booking, l'utilisateur quittait hanging.fr pour atterrir sur une URL calendly.com — changement d'interface, changement de branding, perte totale du contexte de marque — au moment le plus critique du parcours : juste avant de payer.",
        user: "L'utilisateur venait de découvrir un service premium d'accrochage d'œuvres d'art. En arrivant sur une interface générique bleue Calendly, le sentiment de confiance construit sur la landing page s'effondrait. Pas de récapitulatif du plan choisi, pas de prix visible, pas de continuité visuelle.",
        business: "La redirection vers un outil tiers créait une rupture au moment de conversion le plus important. L'objectif était de rapatrier l'intégralité du flow — choix du créneau, formulaire, paiement Stripe — directement sur hanging.fr pour ne plus perdre l'utilisateur en chemin.",
      },
      research: {
        intro: "Sans analytics sur le flow Calendly, la recherche s'est appuyée sur une analyse heuristique du parcours existant et un benchmark d'outils de réservation comparables (Calendly, Cal.com, interfaces de booking hôtelier).\n\nTrois hypothèses de friction ont orienté le redesign :",
        methods: ["Analyse heuristique", "Benchmark concurrentiel", "Audit du flow existant"],
        insights: [
          { label: "Confiance au paiement", detail: "Quitter hanging.fr pour une page Calendly générique au moment d'entrer ses coordonnées bancaires casse le sentiment de sécurité construit sur la landing. C'est un pattern documenté en UX e-commerce." },
          { label: "Progression invisible", detail: "Calendly n'affiche pas d'indicateur d'étapes. L'utilisateur ne sait pas ce qui l'attend après avoir choisi un créneau — formulaire ? paiement ? confirmation ?" },
          { label: "Surcharge cognitive", detail: "Les informations produit (ce qui est inclus, les conditions) étaient mélangées aux informations de planning dans la sidebar Calendly, sans hiérarchie visuelle claire." },
        ],
      },
      ideation:
        "2 sessions de sketching rapide (crazy 8s), puis sélection de 2 directions à prototyper. Direction retenue : flow en 4 étapes avec stepper visible, récapitulatif progressif et page de confirmation rassurante.",
      wireframes: [
        { title: "V1 — Calendly (état existant)", src: "/wireframes/wireframe-v1.png", type: "image" },
        { title: "V2 — Custom flow", src: "/wireframes/wireframe-v2.png", type: "image" },
      ],
      testing: {
        method: "Tests modérés sur prototype Figma avec 5 participants (profils variés, 25-45 ans).",
        results: [
          { metric: "Taux de complétion", before: "40 %", after: "78 %" },
          { metric: "Temps moyen par flow", before: "4 min 20 s", after: "2 min 10 s" },
          { metric: "Erreurs de navigation", before: "8,2 / session", after: "1,4 / session" },
        ],
        quote: "« Je savais exactement où j'en étais, c'était rassurant. » — Participant 3",
      },
      iterations: [
        "Ajout d'un récapitulatif flottant persistent (bottom sheet) après test 1 : les utilisateurs voulaient voir le prix à tout moment.",
        "Simplification de l'écran paiement : suppression des champs optionnels, passage à un formulaire en 2 colonnes.",
        "Renforcement des signaux de confiance (badge SSL, nombre d'avis) sur l'écran final.",
      ],
      impact: [
        { value: "+38 pts", label: "Taux de complétion" },
        { value: "−50 %", label: "Temps par réservation" },
        { value: "4,4/5", label: "Satisfaction (SUS simplifié)" },
      ],
      retrospective:
        "J'aurais dû tester les wireframes plus tôt, dès la basse fidélité. J'ai perdu du temps sur des détails UI avant d'avoir validé la structure. La prochaine fois : tester le flow en noir et blanc avant de toucher aux couleurs.",
    },
  },
  {
    id: 2,
    slug: "navigation-b2b",
    title: "Projet 02",
    type: "Web app B2B",
    year: "2024",
    desc: "Refonte de la navigation d'une plateforme SaaS — architecture d'information et validation utilisateur.",
    tags: ["Architecture IA", "Tests utilisateurs", "Prototype"],
    process: {
      role: "Product Designer (en collaboration avec 1 PM)",
      duration: "4 semaines",
      tools: ["Figma", "Optimal Workshop", "Miro"],
      brief:
        "Repenser la navigation principale d'une plateforme B2B dont les utilisateurs experts perdaient du temps à trouver les fonctionnalités clés.",
      problem: {
        statement: "La navigation mélait catégories métier et catégories techniques. Les raccourcis fréquents étaient enfouis à 3 niveaux de profondeur.",
        user: "Les utilisateurs experts passaient plusieurs minutes par jour à naviguer vers des actions répétitives. La frustration impactait l'adoption des nouvelles fonctionnalités.",
        business: "Le taux d'adoption des nouvelles features stagnait à 22 %. Le support recevait 40+ tickets/mois liés à la navigation.",
      },
      research: {
        methods: ["Card sorting ouvert avec 8 utilisateurs", "Tree testing de l'architecture actuelle", "Analyse des logs de navigation (données analytics)", "3 entretiens avec le support client"],
        insights: [
          { label: "Deux types d'utilisateurs", detail: "Experts (usage quotidien, veulent la vitesse) vs occasionnels (ont besoin de guidage). La nav actuelle ne satisfaisait aucun des deux." },
          { label: "7 raccourcis récurrents", detail: "80 % des actions quotidiennes se concentraient sur 7 fonctionnalités — aucune n'était accessible en 1 clic." },
          { label: "Labels ambigus", detail: "Le card sorting révélait que 3 items sur 8 étaient catégorisés différemment par chaque utilisateur." },
        ],
      },
      ideation:
        "Atelier Miro avec le PM et 2 développeurs : redesign de l'arborescence, proposition d'une nav à 2 vitesses (raccourcis personnalisables + nav guidée). 3 structures testées en tree testing avant de passer au design.",
      wireframes: null,
      testing: {
        method: "Tests de tâches non modérés via Maze (12 participants, utilisateurs réels de la plateforme).",
        results: [
          { metric: "Taux de succès des tâches", before: "58 %", after: "91 %" },
          { metric: "Temps moyen / tâche", before: "47 s", after: "18 s" },
          { metric: "Score de satisfaction", before: "2,8/5", after: "4,2/5" },
        ],
        quote: "« Enfin je trouve tout sans chercher. » — Utilisateur expert, 3 ans d'ancienneté",
      },
      iterations: [
        "Le premier prototype avait une barre de raccourcis fixe — les utilisateurs voulaient la personnaliser. Ajout d'un mode édition drag & drop.",
        "Les breadcrumbs étaient trop discrets : augmentation de la taille et ajout du niveau racine systématiquement.",
      ],
      impact: [
        { value: "+33 pts", label: "Taux de succès tâches" },
        { value: "−62 %", label: "Temps moyen / tâche" },
        { value: "−85 %", label: "Tickets support navigation" },
      ],
      retrospective:
        "Le tree testing en amont a sauvé beaucoup de temps. Je recommanderais de toujours passer par cette étape avant de commencer à designer. J'aurais aussi impliqué les développeurs plus tôt pour valider les contraintes techniques.",
    },
  },
  {
    id: 3,
    slug: "design-system",
    title: "Projet 03",
    type: "Design System",
    year: "2023",
    desc: "Construction d'un design system complet pour une startup SaaS — tokens, composants et documentation.",
    tags: ["Design System", "Composants", "Documentation"],
    process: {
      role: "Product Designer (lead design system)",
      duration: "8 semaines",
      tools: ["Figma", "Notion", "Storybook (collaboration dev)"],
      brief:
        "Créer une source de vérité partagée entre design et développement pour une startup SaaS avec 3 designers et une équipe frontend de 5 personnes.",
      problem: {
        statement: "Chaque nouvelle feature réinventait les mêmes composants. 40 variantes de boutons coexistaient dans le produit.",
        user: "Les utilisateurs du produit percevaient des incohérences visuelles entre les modules. La qualité perçue s'en ressentait.",
        business: "Le temps de design par feature était 2× trop long. Les devs passaient du temps à interpréter des maquettes ambiguës.",
      },
      research: {
        methods: ["Audit visuel complet de l'UI (120+ composants recensés)", "Entretiens avec 3 développeurs frontend", "Analyse des frictions dans le handoff Figma → code", "Benchmark de 4 design systems publics (Material, Atlassian, Radix, Shopify Polaris)"],
        insights: [
          { label: "Pas de tokens partagés", detail: "Les couleurs, espacements et typographies existaient uniquement dans les têtes des designers — jamais formalisés." },
          { label: "Composants sans états", detail: "La majorité des composants n'avaient ni état hover, ni focus, ni disabled — les devs les inventaient côté code." },
          { label: "Handoff flou", detail: "Les devs passaient en moyenne 45 min/feature à poser des questions sur les specs visuelles." },
        ],
      },
      ideation:
        "Priorisation par impact/effort des composants à créer en premier (boutons, inputs, cartes, navigation). Mise en place d'une convention de nommage commune design ↔ dev dès le départ.",
      wireframes: null,
      testing: {
        method: "Validation progressive avec les 2 autres designers et l'équipe frontend sur 3 features pilotes.",
        results: [
          { metric: "Temps de maquettage / feature", before: "3,5 jours", after: "1,5 jour" },
          { metric: "Questions handoff / feature", before: "12", after: "1,2" },
          { metric: "Composants incohérents détectés", before: "40+", after: "0" },
        ],
        quote: "« Pour la première fois, je savais exactement comment implémenter le design sans deviner. » — Dev frontend",
      },
      iterations: [
        "Les premiers tokens de couleur étaient trop rigides — refonte en sémantique (surface, on-surface, primary, etc.) plutôt qu'en valeurs brutes.",
        "Ajout d'une page 'Changelog' dans Notion après que les designers ne savaient plus quelle version des composants utiliser.",
      ],
      impact: [
        { value: "−57 %", label: "Temps de maquettage" },
        { value: "35", label: "Composants documentés" },
        { value: "0", label: "Questions handoff/semaine" },
      ],
      retrospective:
        "Un design system sans adoption ne sert à rien. J'aurais dû investir plus tôt dans la formation et la documentation pour les autres designers. Les sessions hebdomadaires 'design system office hours' ont tout changé.",
    },
  },
  {
    id: 4,
    slug: "app-sante",
    title: "Projet 04",
    type: "Application mobile",
    year: "2023",
    desc: "Concept d'app de suivi de santé mentale pour jeunes adultes — recherche exploratoire et prototypage.",
    tags: ["UX Research", "Design émotionnel", "Accessibilité"],
    process: {
      role: "Product Designer (projet personnel)",
      duration: "5 semaines",
      tools: ["Figma", "Notion", "FigJam"],
      brief:
        "Explorer comment concevoir une app de suivi de santé mentale qui ne soit pas anxiogène — sans métriques froides, sans obligation ressentie.",
      problem: {
        statement: "Les apps de santé mentale existantes reproduisent les codes des apps de fitness : objectifs, streaks, graphiques. Ces mécaniques amplifient l'anxiété chez des personnes déjà fragiles.",
        user: "Les jeunes adultes (20-28 ans) veulent un espace de suivi bienveillant, pas une nouvelle source de pression. Ils abandonnent les apps quand elles ressemblent à une obligation.",
        business: "Marché de la santé mentale en forte croissance. Différenciation possible par le design émotionnel et l'approche non-prescriptive.",
      },
      research: {
        methods: ["6 entretiens semi-directifs (20-28 ans)", "Revue de littérature sur le design bienveillant", "Analyse de 5 apps concurrentes (Calm, Daylio, Reflectly, Woebot, Sanvello)", "Journal de bord personnel sur 2 semaines"],
        insights: [
          { label: "Le streak crée de la pression", detail: "4 participants sur 6 avaient désinstallé une app suite à un streak cassé. La continuité forcée est contre-productive." },
          { label: "Le langage clinique distancie", detail: "Les termes 'humeur', 'symptômes', 'journalisation' créaient une distance. Les utilisateurs voulaient 'noter comment ils se sentent'." },
          { label: "10 secondes ou rien", detail: "Les check-ins de plus de 30 secondes étaient systématiquement ignorés les jours difficiles — exactement quand l'app serait la plus utile." },
        ],
      },
      ideation:
        "Exploration de 3 concepts radicalement différents : (1) check-in par météo émotionnelle, (2) journal vocal non transcrit, (3) timeline visuelle sans chiffres. Concept retenu : entrée par métaphore visuelle + rappels doux et non intrusifs.",
      wireframes: null,
      testing: {
        method: "Tests modérés du prototype Figma avec 4 participants issus de la recherche initiale.",
        results: [
          { metric: "Préférence vs apps existantes", before: "—", after: "3/4 participants" },
          { metric: "Temps d'entrée d'un check-in", before: "—", after: "8 secondes (médiane)" },
          { metric: "Perception 'bienveillant'", before: "—", after: "4/4 participants" },
        ],
        quote: "« C'est la première fois qu'une app de ce type ne me fait pas me sentir jugé. » — Participant 2",
      },
      iterations: [
        "Le rappel quotidien était perçu comme intrusif même à basse fréquence — remplacement par un rappel contextuel uniquement si l'utilisateur n'a pas ouvert l'app depuis 48h.",
        "Le récapitulatif hebdomadaire en graphique courbe générait de l'anxiété — passage à une représentation en 'paysage émotionnel' sans axe numérique.",
      ],
      impact: [
        { value: "8 s", label: "Check-in médian" },
        { value: "3/4", label: "Préfèrent ce concept" },
        { value: "100 %", label: "Perçoivent l'app comme bienveillante" },
      ],
      retrospective:
        "Ce projet m'a appris que le design émotionnel n'est pas un vernis — c'est une contrainte structurelle qui change tout, du wording aux mécaniques d'engagement. J'aurais aimé tester avec des personnes en situation réelle de détresse légère, pas seulement des profils 'bien-portants'.",
    },
  },
];
