export const projects = [
  {
    id: 1,
    slug: "hanging",
    featured: true,
    cover: "/Sans titre.mov",
    screenshot: "/vitreen/Calendrier Hanging.png",
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
      tldr: {
        headline: "Premier service d'accrochage en ligne pour collectionneurs — booking et paiement sur hanging.fr, sans Calendly.",
        bullets: [
          "Rupture Calendly au moment du paiement → flow custom Stripe intégré",
          "Tarifs affichés, créneau visible, zéro appel requis",
          "Produit live — validation conversion à venir",
        ],
      },
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
        visual: {
          type: "video",
          src: "/Naviguation claude google.mov",
        },
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
    slug: "vitreen",
    featured: true,
    screenshot: "/vitreen/gallery-os-overview.png",
    title: "Vitreen — Gallery OS",
    type: "Plateforme B2B · Galeries d'art",
    year: "2025–2026",
    desc: "Vitreen (promesse) + Gallery OS (produit) — faire circuler les œuvres depuis l'archive jusqu'au collectionneur.",
    tags: ["Product Design", "UX B2B", "Gallery OS", "Prototypage"],
    description:
      "Vitreen pose la promesse (vitreen.art) — Gallery OS est l'atelier opérationnel (dashboard, inventaire, inquiries, Vitreen Studio). Deux couches, une marque : « Powered by Vitreen ».",
    video: "/vitreen/Scene-4.mp4",
    process: {
      role: "Product Designer & Founder (solo)",
      duration: "Projet en cours — 2025–2026",
      tools: ["Cursor", "Claude Code", "Next.js", "Tailwind", "Figma"],
      brief:
        "Deux couches, un écosystème. Vitreen (vitreen.art) porte la promesse : Digital Sales Partner, vocabulaire galerie, 4 piliers produit. Gallery OS est le dashboard opérationnel — inventaire, inquiries, private selection, Vitreen Studio, intégration Gmail — avec « Powered by Vitreen » dans la sidebar.",
      problem: {
        statement:
          "Les galeries ont les œuvres — mais pas le pipeline pour les faire circuler. Chaque envoi collectionneur repart de zéro : export Excel, mise en page PDF, lien WhatsApp, viewing room recréée à la main.",
        visual: {
          src: "/vitreen/gallery-os-overview.png",
          alt: "Dashboard Gallery OS — Overview avec inquiries, sélections privées et œuvres récentes.",
          caption: "Gallery OS — l'atelier où la promesse Vitreen devient opérationnelle.",
        },
        user: "Le directeur de galerie passe des heures à reformater les mêmes fiches œuvres pour un PDF, une viewing room ou un email. Les outils existants stockent — ils ne distribuent pas.",
        business: "Artlogic facture ~200€/mois pour archiver. Vitreen vise un modèle récurrent (300–800€/mois) centré sur la circulation et la conversion — « stocker vs vendre ».",
        cards: [
          { domain: "Problème marché", num: "01", title: "Fragmentation des outils", question: "Comment connecter archive, CRM et diffusion sans imposer une migration vers une nouvelle plateforme ?" },
          { domain: "Problème business", num: "02", title: "Temps perdu en ops", question: "Comment réduire le délai entre sélection d'œuvres et envoi au collectionneur ?" },
          { domain: "Problème design", num: "03", title: "Confiance B2B premium", question: "Comment concevoir une interface qui parle aux marchands d'art — pas aux techniciens ?" },
        ],
      },
      research: {
        intro: "Pas de tests utilisateurs formels à ce stade. La recherche s'appuie sur une immersion dans le secteur galerie, l'analyse des workflows existants (Artlogic, Excel, WhatsApp) et l'itération directe sur le produit live.",
        methods: ["Analyse concurrentielle (Artlogic, legacy CMS)", "Immersion secteur galerie", "Prototypage code-first", "Itérations copy FR/EN"],
        insights: [
          { label: "Stockage ≠ circulation", detail: "Les galeries paient déjà pour archiver. Le pain point n'est pas la base de données — c'est le passage de l'archive au matériel collector." },
          { label: "Vocabulaire métier", detail: "« CMS » et « responsive » créent de la distance. « Sales Journey », « Viewing Room », « Distribute » parlent le langage du marchand d'art." },
          { label: "Intégration > migration", detail: "Les galeries ne veulent pas changer leurs habitudes. Une couche qui se branche sur Gmail, PDF et Excel a plus de chances d'être adoptée qu'un outil tout-en-un." },
        ],
      },
      wireframes: [
        { title: "Vitreen — Hero V2.1", type: "vitreen-v21" },
        { title: "Vitreen — Products menu", type: "vitreen-products" },
        {
          title: "Sortie collectionneur",
          src: "/vitreen/screenshot-viewingroom.png",
          type: "image",
          preserveRatio: true,
        },
      ],
      execution: "Projet code-first : le design et le développement avancent en parallèle dans Next.js. Pas de maquettes Figma haute fidélité — les composants React sont la source de vérité visuelle, itérés directement dans le navigateur.",
      stack: [
        { tool: "Next.js + React", description: "Landing marketing, pages outils, Viewing Room Studio et éditeur canvas-first." },
        { tool: "Tailwind + framer-motion", description: "Design system inline — tokens couleur, typo Emilio, mega-menus animés." },
        { tool: "Cursor + Claude Code", description: "Génération composants, copy bilingue FR/EN, itérations UI rapides." },
        { tool: "Clerk + Sanity + Stripe", description: "Auth, contenu CMS, paiement — stack prête pour le passage en production." },
      ],
      testing: {
        method: "Produit en early stage — démos founder-led auprès de galeries cibles. Pas encore de métriques de conversion documentées. Prochaine étape : tests modérés sur le flow Viewing Room Studio.",
        results: [],
        quote: "",
      },
      iterations: [
        "Pivot positionnement : de « studio de création de sites » vers « Digital Sales Partner » — le vocabulaire a guidé toute l'architecture produit.",
        "Mega-menus Product/Solutions : hover + clic pour équilibrer découvrabilité et accessibilité mobile.",
      ],
      impact: "vitreen.art (promesse) + Gallery OS dashboard (produit) en développement actif. Viewing Room Studio, Private Selection et intégration Gmail opérationnels en local.",
      retrospective:
        "J'aurais validé le positionnement « Partner vs CMS » avec 2–3 galeries avant de coder la landing. Le design code-first accélère le ship mais complique la collaboration si un autre designer rejoint le projet.",
    },
    caseStudy: {
      tldr: {
        headline: "Couche opérationnelle B2B pour galeries — de l'archive au matériel collectionneur sans ressaisie.",
        bullets: [
          "Positionnement « Digital Sales Partner », pas CMS",
          "Viewing rooms, PDF et liens privés depuis les outils existants",
          "Produit live sur vitreen.art — early stage",
        ],
      },
      hero: {
        title: "Vitreen — Gallery OS",
        subtitle:
          "Vitreen pose la promesse (vitreen.art) — Gallery OS est l'atelier opérationnel : inventaire, inquiries, private selection, Vitreen Studio, Gmail. Artlogic stocke. Vitreen vend. Gallery OS est l'atelier où ça se passe.",
        tags: ["2025–2026", "Vitreen + Gallery OS", "Next.js", "Cursor", "Early stage"],
        stats: "vitreen.art · Gallery OS dashboard · Powered by Vitreen",
      },
      problem: {
        intro:
          "Chaque galerie développe sa propre façon de travailler — œuvres, publishing, relations collectionneurs, coordination interne. Ces activités restent fragmentées entre Excel, Artlogic, PDF et WhatsApp.",
        citation:
          "Les galeries ont les œuvres — mais pas le pipeline pour les faire circuler.",
        sousCitation:
          "Archive Excel · Artlogic · PDF manuel · WhatsApp — quatre outils, zéro continuité.",
        visual: {
          type: "image",
          src: "/vitreen/gallery-os-overview.png",
          alt: "Dashboard Gallery OS — Overview.",
          caption: "Gallery OS — dashboard opérationnel « Powered by Vitreen ».",
        },
        cards: [
          { domain: "Problème marché", num: "01", title: "Fragmentation des outils", question: "Comment connecter archive, CRM et diffusion sans imposer une migration vers une nouvelle plateforme ?" },
          { domain: "Problème business", num: "02", title: "Temps perdu en ops", question: "Comment réduire le délai entre sélection d'œuvres et envoi au collectionneur ?" },
          { domain: "Problème design", num: "03", title: "Confiance B2B premium", question: "Comment concevoir une interface qui parle aux marchands d'art — pas aux techniciens ?" },
        ],
      },
      objectifs: {
        intro: "Vitreen = pourquoi et comment on parle au marché. Gallery OS = où la galerie travaille au quotidien.",
        items: [
          { title: "Vitreen — la promesse", text: "Positionnement Digital Sales Partner sur vitreen.art — vocabulaire galerie, 4 piliers, copy FR/EN." },
          { title: "Gallery OS — l'atelier", text: "Dashboard : œuvres, inquiries, collectors, private selection, tools — une seule continuité opérationnelle." },
          { title: "Vitreen Studio", text: "Éditeur canvas-first pour composer viewing rooms depuis l'inventaire live — pas de ressaisie." },
          { title: "Intégrations natives", text: "Gmail sidebar, Artlogic, CSV — Vitreen dans le workflow existant, pas à côté." },
        ],
      },
      gtm: {
        citation: "Artlogic stocke. Vitreen vend. Gallery OS est l'atelier où ça se passe.",
        sousCitation: "GTM : approche founder-led, démos personnalisées, early adopters galeries mid-size.",
        cards: [
          { tag: "Cible", title: "Galeries mid-size", text: "5–20 artistes, déjà digitalisées mais frustrées par la lenteur entre archive et envoi collectionneur." },
          { tag: "Positionnement", title: "Partner, pas CMS", text: "« Digital Sales Partner » — une couche qui s'adapte aux habitudes, pas une plateforme imposée." },
          { tag: "Canal", title: "Direct + réseau", text: "Démos personnalisées, approche consultative. Pas de self-serve mass market en V1." },
          { tag: "Pricing", title: "SaaS + setup", text: "~2 000€ setup + 300–800€/mois — pivot récurrent vs one-shot, en cours de validation." },
        ],
      },
      business: {
        citation: "Artlogic = 200€/mois pour stocker. Vitreen = 500€/mois pour vendre.",
        b2c: {
          title: "Modèle récurrent",
          text: "Setup initial (~2 000€) + abonnement mensuel (300–800€). Argument : la valeur est dans la circulation des œuvres, pas dans le stockage.",
        },
        b2b: {
          title: "Gallery OS — 4 piliers en UI",
          text: "Overview · Artworks · Private Selection · Inquiries — chaque pilier Vitreen a son écran dans le dashboard. Sidebar : « Gallery OS » + « Powered by Vitreen ».",
        },
      },
      product: {
        processAnnotation: "Contexte → Positionnement → Traduction produit → État du projet",
        processCaption: "Une infrastructure pensée pour faire circuler les œuvres, sans remplacer les outils déjà installés dans les galeries.",
        screens: [
          {
            tag: "Contexte",
            title: "Le problème n'était pas de stocker",
            text: "Les galeries disposent déjà d'archives, de CRM et de fichiers œuvres. La rupture apparaît au moment de transformer ces données en sélections, emails ou viewing rooms : chaque diffusion demande encore de recomposer le même contenu.",
            media: "/vitreen/gallery-os-overview.png",
          },
          {
            tag: "Entretiens",
            title: "Ce que le terrain révèle",
            text: "Les échanges menés dans le secteur ont fait émerger trois constantes. Elles sont présentées ici comme des enseignements anonymisés ; les verbatims et captures pourront les remplacer sans modifier la structure.",
            type: "vitreen-interviews",
            items: [
              {
                label: "Stockage ≠ circulation",
                quote: "L'information existe déjà. Le temps se perd lorsqu'il faut la remettre en forme pour chaque destinataire.",
              },
              {
                label: "Vocabulaire métier",
                quote: "Une galerie parle d'œuvres, de sélections et de collectionneurs — pas de CMS ou de fonctionnalités.",
              },
              {
                label: "Intégration > migration",
                quote: "Un nouvel outil doit entrer dans le workflow existant avant de demander à l'équipe de changer ses habitudes.",
              },
            ],
          },
          {
            tag: "Positionnement",
            title: "Une infrastructure, pas un CMS",
            text: "Vitreen ne cherche pas à remplacer les habitudes d'une galerie. Le projet se positionne comme une couche opérationnelle qui relie l'inventaire, la publication et la relation collectionneur. Cette idée a remplacé le discours initial de création de sites.",
            media: "/vitreen/Frame 11.png",
          },
          {
            tag: "Traduction produit",
            title: "Le métier organise l'interface",
            text: "Le positionnement devient une architecture lisible : gestion des œuvres, publication publique ou privée, relations collectionneurs et assistants de galerie. La navigation décrit des usages concrets plutôt qu'une liste de fonctionnalités techniques.",
            type: "vitreen-products",
          },
          {
            tag: "Stack & workflow",
            title: "Du concept au produit live",
            text: "La stack accompagne une boucle courte : cadrer l'expérience, prototyper dans le navigateur, connecter les contenus et intégrations, puis déployer une version testable. Chaque outil intervient à une étape précise plutôt que comme une couche technique isolée.",
            type: "vitreen-stack",
            items: [
              { name: "Figma", role: "Cadrage" },
              { name: "Claude", role: "Architecture", icon: "/icones/claudecode-text.svg" },
              { name: "Cursor", role: "Prototype", icon: "/icones/cursor.svg" },
              { name: "Next.js", role: "Produit" },
              { name: "Sanity", role: "Contenu" },
              { name: "Gmail API", role: "Intégration", icon: "/vitreen/google-gmail-svgrepo-com.svg" },
              { name: "Vercel", role: "Déploiement", icon: "/icones/vercel.svg" },
            ],
          },
          {
            tag: "État du projet",
            title: "Un système encore en validation",
            text: "La landing, Gallery OS et les sorties collectionneur forment aujourd'hui un prototype fonctionnel. Les démonstrations permettent de tester le récit et les workflows ; les métriques d'usage et de conversion restent la prochaine étape.",
            media: "/vitreen/screenshot-viewingroom.png",
          },
        ],
      },
      decisions: [
        { num: "01", title: "Code-first vs Figma", text: "Itération rapide et démo live — le navigateur remplace la maquette statique. Trade-off : collaboration designer/dev plus difficile." },
        { num: "02", title: "Partner, pas CMS", text: "Le positionnement guide chaque mot de l'interface. « CMS » et « site web » écartés — « Sales Journey » et « Distribute » préférés." },
        { num: "03", title: "Deux repos, une marque", text: "Vitreen (marketing) et Gallery OS (dashboard) partagent le design language — « Powered by Vitreen » ancre la relation." },
        { num: "04", title: "Canvas-first Vitreen Studio", text: "L'éditeur vit dans Gallery OS — librairie live, pas import manuel. Moodboard, pas back-office." },
      ],
      ai: {
        citation: "L'IA accélère le ship — elle ne remplace pas les décisions de positionnement ni la séparation Vitreen / Gallery OS.",
        steps: [
          { num: "01", label: "Vitreen : Positionnement, 4 piliers, copy FR/EN (vitreen.art)" },
          { num: "02", label: "Gallery OS : Dashboard, sidebar, inquiries, private selection" },
          { num: "03", label: "Vitreen Studio : Éditeur canvas-first dans gallery-OS/dashboard" },
          { num: "04", label: "Itération : Validation en navigateur — deux apps, une promesse" },
        ],
        tools: [
          { name: "Cursor", usage: "Gallery OS dashboard, Vitreen Studio, landing Vitreen, Gmail add-on", example: "Sidebar Gallery OS + éditeur Viewing Room Studio — sessions itératives" },
          { name: "Claude Code", usage: "Architecture produit, i18n, guidelines marque Vitreen", example: "Séparation claire Vitreen (GTM) vs Gallery OS (ops)" },
          { name: "Next.js + Tailwind", usage: "Design system zinc/minimal partagé entre les deux apps", example: "Même langage visuel — dashboard et landing" },
          { name: "Sanity + Gmail API", usage: "CMS galerie + intégration sidebar Gmail depuis Tools", example: "Page /dashboard/tools/gmail — config add-on" },
        ],
      },
      learnings: {
        worked: "Séparer Vitreen (promesse) et Gallery OS (produit) a clarifié le récit — en entretien, on montre d'abord le dashboard réel, puis la landing.",
        wouldRedo: "Ne pas utiliser de visuels Krea ou mocks landing dans le case study portfolio — uniquement des captures Gallery OS et viewing rooms réelles.",
        next: "Distribute — transformer une sélection en viewing room / PDF / lien en un clic depuis Gallery OS.",
      },
    },
  },
  {
    id: 3,
    slug: "design-system",
    featured: false,
    cover: "/vitreen/Scene-5.mp4",
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
    featured: false,
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
