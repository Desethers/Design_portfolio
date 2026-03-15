export const projects = [
  {
    id: 1,
    slug: "onboarding-app",
    title: "Hanging",
    type: "Application mobile",
    year: "2024",
    desc: "Redesign du booking flow d'une app de réservation — de la recherche terrain au prototype validé.",
    tags: ["UX Research", "UI Design", "Prototypage"],
    description:
      "Service d'accrochage d'œuvres d'art pour collectionneurs privés et galeries partenaires — réservation en ligne, tarifs transparents, paiement direct.",
    video: "/Sans titre.mov",
    process: {
      role: "Product Designer & Développeur (solo)",
      duration: "Side project en cours",
      tools: ["Figma", "Cursor", "Stripe", "Vercel", "Supabase", "Claude Code"],
      brief:
        "Les accrocheurs professionnels existent — mais ce marché est opaque par nature. Pas d'annuaire, pas de tarif affiché, tout passe par le réseau. L'objectif était de structurer ce service pour la première fois : une expérience pensée pour des collectionneurs privés, où le prix est visible, la réservation directe, et aucun appel téléphonique nécessaire.",
      problem: {
        statement:
          "Hanging utilisait Calendly pour gérer les réservations. À chaque booking, l'utilisateur quittait hanging.fr pour atterrir sur une URL calendly.com — changement d'interface, changement de branding, perte totale du contexte de marque — au moment le plus critique du parcours : juste avant de payer.",
        visual: {
          src: "/Screenshot calendly.png",
          alt: "Capture d'écran de l'interface Calendly utilisée dans le flow de réservation initial de Hanging.",
          caption: "État existant : une expérience Calendly générique, hors de l'univers Hanging.",
        },
        user: "L'utilisateur venait de découvrir un service premium d'accrochage d'œuvres d'art. En arrivant sur une interface générique bleue Calendly, le sentiment de confiance construit sur la landing page s'effondrait. Pas de récapitulatif du plan choisi, pas de prix visible, pas de continuité visuelle.",
        business: "La redirection vers un outil tiers créait une rupture au moment de conversion le plus important. L'objectif était de rapatrier l'intégralité du flow — choix du créneau, formulaire, paiement Stripe — directement sur hanging.fr pour ne plus perdre l'utilisateur en chemin.",
        cards: [
          { domain: "Problème marché", num: "01", title: "Accès au service", question: "Comment permettre à un collectionneur de trouver et réserver un accrocheur professionnel sans avoir le bon réseau ?" },
          { domain: "Problème business", num: "02", title: "Expérience galerie incomplète", question: "Comment prolonger l'expérience d'achat d'une galerie jusqu'à l'installation de l'œuvre chez le client ?" },
          { domain: "Problème design", num: "03", title: "Interface inadaptée aux particuliers", question: "Comment concevoir une interface qui rassure un particulier — et non un musée — dès la première seconde ?" },
        ],
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
      wireframes: [
        { title: "V1 — Calendly (état existant)", src: "/wireframes/wireframe-v1.png", type: "image" },
        { title: "V2 — Custom flow", src: "/wireframes/wireframe-v2.png", type: "image" },
      ],
      execution: "Ce projet n'a pas été confié à un développeur. Le design et le code ont été produits par la même personne, en itérant directement dans le navigateur plutôt que de rester dans Figma.",
      stack: [
        { tool: "Figma", description: "Wireframes basse fidélité uniquement. Valider la structure du flow avant de passer au code." },
        { tool: "Claude Code", description: "Initialiser la structure du projet, générer les composants de base et accélérer les décisions d'architecture." },
        { tool: "Cursor", description: "Éditeur principal pour le frontend. Itérer sur les composants React et corriger les bugs au fil des tests." },
        { tool: "Supabase", description: "Base de données pour les créneaux et les réservations. Setup rapide, intégration directe avec Stripe." },
        { tool: "Stripe", description: "Paiement via Stripe Checkout. Flow fiable et rassurant sans solution custom." },
        { tool: "Vercel", description: "Déploiement continu depuis GitHub. Chaque push en production visible sur hanging.fr en moins d'une minute." },
      ],
      testing: {
        method: "Le produit est live mais n'a pas encore enregistré de réservation. À ce stade du projet, l'objectif était de construire et de shipper un flow complet et fonctionnel — du choix du créneau jusqu'au paiement Stripe — sur hanging.fr. La phase de validation utilisateur vient ensuite.",
        results: [],
        quote: "",
      },
      iterations: [],
      impact: "Le produit est en production sur hanging.fr. Les métriques de conversion seront mesurées et documentées lors des premières réservations.",
      retrospective:
        "J'aurais dû tester les wireframes plus tôt, dès la basse fidélité. J'ai perdu du temps sur des détails UI avant d'avoir validé la structure. La prochaine fois : tester le flow en noir et blanc avant de toucher aux couleurs.",
    },
    caseStudy: {
      hero: {
        title: "Hanging — L'art à sa place.",
        subtitle:
          "Service d'accrochage d'œuvres d'art pour collectionneurs privés et galeries partenaires — réservation en ligne, tarifs transparents, paiement direct.",
        tags: ["2025–2026", "Cursor", "Claude", "Stripe + Supabase", "Live"],
        stats: "3 Forfaits / B2C + B2B / Paris & IDF / 0 appels requis",
      },
      problem: {
        intro:
          "Les accrocheurs professionnels existent — mais le marché reste opaque : pas d'annuaire, pas de tarif affiché, tout passe par le réseau. Pour un collectionneur sans le bon contact, le service est invisible.",
        citation:
          "Un service qui existe depuis toujours — mais uniquement pour ceux qui ont le bon réseau.",
        sousCitation:
          "Secteur sans présence digitale. Zéro prix affiché. Tout par bouche-à-oreille.",
        cards: [
          {
            domain: "Problème marché",
            num: "01",
            title: "Accès au service",
            question:
              "Comment permettre à un collectionneur de trouver et réserver un accrocheur professionnel sans avoir le bon réseau ?",
          },
          {
            domain: "Problème business",
            num: "02",
            title: "Expérience galerie incomplète",
            question:
              "Comment prolonger l'expérience d'achat d'une galerie jusqu'à l'installation de l'œuvre chez le client ?",
          },
          {
            domain: "Problème design",
            num: "03",
            title: "Interface inadaptée aux particuliers",
            question:
              "Comment concevoir une interface qui rassure un particulier — et non un musée — dès la première seconde ?",
          },
        ],
      },
      objectifs: {
        intro: "Structurer ce service pour la première fois en ligne — une expérience pensée pour les collectionneurs privés.",
        items: [
          {
            title: "Tarifs visibles",
            text: "Afficher les prix là où tout le monde les cache. La transparence comme premier argument de confiance et levier de conversion.",
          },
          {
            title: "Réservation directe",
            text: "Choisir un forfait, un créneau, payer en ligne. Aucun intermédiaire, aucun délai d'attente de devis ou de rappel.",
          },
          {
            title: "Zéro appel requis",
            text: "Tout en self-service : consultation, booking, paiement. Le particulier avance sans avoir à décrocher le téléphone.",
          },
          {
            title: "Expérience collectionneur",
            text: "Une interface qui parle au particulier qui vient d'acheter une œuvre — pas à un musée. Rassurante dès la première seconde.",
          },
        ],
      },
      gtm: {
        citation:
          "Pas de budget acquisition. La visibilité comme premier argument de confiance.",
        sousCitation:
          "GTM : être le premier résultat Google quand un collectionneur cherche ce service à Paris.",
        cards: [
          {
            tag: "Cible prioritaire",
            title: "B2C d'abord",
            text: "Commencer par les collectionneurs privés pour valider le produit et accumuler des réservations réelles — avant d'approcher les galeries avec des preuves de traction.",
          },
          {
            tag: "Zone de lancement",
            title: "Paris & IDF uniquement",
            text: "Densité maximale de collectionneurs, aucun concurrent digital identifié sur la zone. Mieux vaut dominer un marché restreint que diluer l'offre nationalement en V1.",
          },
          {
            tag: "Acquisition organique",
            title: "SEO + transparence tarifaire",
            text: "Afficher les prix là où tout le monde les cache est à la fois une décision de design et une stratégie SEO — les pages de tarifs indexées captent une intention d'achat directe.",
          },
        ],
      },
      business: {
        citation: "Une galerie partenaire = un flux de clients sans acquisition.",
        b2c: {
          title: "Commission par réservation",
          text: "180€ → 650€ selon le forfait. Le collectionneur paie en ligne, l'expert intervient à domicile. Modèle one-shot, conversion directe.",
        },
        b2b: {
          title: "Partenariat galerie",
          text: "Une galerie vend 20 œuvres par mois. Si elle recommande Hanging à chaque vente, c'est 20 leads qualifiés sans effort d'acquisition — et un service différenciant pour ses clients.",
        },
      },
      product: {
        processAnnotation:
          "Forfait → Créneau → Expert → Paiement → Installation",
        processCaption:
          "Visualisation du process — répond à la peur implicite 'mais concrètement ça se passe comment ?'",
        consultationCaption:
          "Consultation 15 min — créneau sans appel préalable",
        bookingCaption: "Page réservation complète — calendrier + paiement intégré",
        bookingAnnotation:
          "Récap Stripe en sidebar — prix live selon le forfait",
      },
      decisions: [
        {
          num: "01",
          title: "Prix affichés",
          text: "Contre-intuitif dans ce secteur. La transparence tarifaire devient elle-même l'argument de confiance principal — et un levier SEO.",
        },
        {
          num: "02",
          title: "Calendrier > formulaire",
          text: 'Un formulaire dit "on vous rappellera peut-être". Un créneau visible dit "c\'est réservé, c\'est réel".',
        },
        {
          num: "03",
          title: "Process visualisé",
          text: "Le graphe Forfait → Installation répond à la peur implicite avant même qu'elle soit formulée.",
        },
      ],
      ai: {
        citation:
          "L'IA n'a pas remplacé les décisions de design — elle a réduit la friction entre l'idée et le prototype visible.",
        steps: [
          { num: "01", label: "Idée : Décision de design ou d'interface identifiée dans Figma" },
          { num: "02", label: "Prompt Cursor : Génération du composant ou de l'interaction en React" },
          { num: "03", label: "Prototype live : Validation en navigateur — pas en maquette statique" },
          { num: "04", label: "Décision : Itération ou validation — boucle recommence" },
        ],
        tools: [
          {
            name: "Cursor",
            usage: "Composants booking, connexion Supabase, logique calendrier, intégration Stripe",
            example:
              "Le récap sidebar live selon le forfait — from scratch en une session",
          },
          {
            name: "Claude",
            usage: "Copy landing, ton rassurant non-technique, itérations de headlines, structure des sections",
            example:
              '"L\'art à sa place. Au-dessus de votre canapé." — trouvé après 8 variantes',
          },
          {
            name: "Supabase",
            usage: "Base de données réservations, gestion des créneaux, stockage formulaire",
            example: "Schéma généré et connecté via Cursor sans écrire de SQL à la main",
          },
          {
            name: "Figma",
            usage: "Direction visuelle, hiérarchie, système typographique",
            example:
              "Palette monochrome, noir comme couleur de confiance dans le secteur art",
          },
        ],
      },
      learnings: {
        worked:
          "Le social proof institutionnel placé après les tarifs. L'ordre compte — le client voit le prix, doute, puis voit Pompidou. La séquence rassure au bon moment.",
        wouldRedo:
          "Une page dédiée B2B galeries avec un parcours séparé. B2C et B2B cohabitent sur la même landing — ça fonctionne en V1 mais crée une ambiguïté sur la cible principale.",
        next: "Espace galerie partenaire avec dashboard de suivi. Abonnement galerie plutôt que one-shot — revenu récurrent, acquisition sans effort.",
      },
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
