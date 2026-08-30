/**
 * Données des projets + position des points cliquables sur la roche.
 *
 * x / y = position en pourcentage (0-100) sur l'image ENTIÈRE (assets/img/rock.jpg),
 * pas seulement sur la roche. Ces coordonnées ont été calées visuellement sur la
 * vraie photo (assets/img/rock.jpg). Pour les affiner au pixel près, ouvre le site
 * avec ?calibrate à la fin de l'URL (ex: index.html?calibrate) : un clic sur un
 * symbole affiche ses coordonnées exactes dans la console, à recopier ici.
 *
 * Seuls les symboles listés ici sont cliquables (survol = son + tooltip).
 * Les broches/épingles décoratives ne sont volontairement pas dans cette liste :
 * elles ne mènent nulle part.
 *
 * description / media sont provisoires ("on verra plus tard") — à remplacer par
 * le vrai contenu de chaque projet.
 */
const PROJECTS = [
  {
    slug: "accor",
    title: "Accor",
    category: "Campagne",
    description: "Description à venir.",
    x: 45.25, y: 21.2, r: 3,
    media: []
  },
  {
    slug: "acer",
    title: "Acer",
    category: "Campagne",
    description: "Description à venir.",
    x: 52.8, y: 24.6, r: 4.5,
    media: []
  },
  {
    slug: "canal-plus",
    title: "Canal+",
    category: "Campagne",
    description: "Description à venir.",
    x: 45, y: 43.6, r: 5.5,
    media: []
  },
  {
    slug: "la-spa",
    title: "La SPA",
    category: "Campagne",
    description: "Description à venir.",
    x: 57.5, y: 38.1, r: 3.5,
    media: []
  },
  {
    slug: "louis-vuitton",
    title: "Louis Vuitton",
    category: "Campagne",
    description: "Description à venir.",
    x: 50, y: 68.6, r: 3.5,
    media: []
  },
  {
    slug: "prints",
    title: "Prints",
    category: "Collection",
    description: "Description à venir.",
    x: 44.75, y: 77.9, r: 4,
    // Cette page rassemblera plusieurs projets : { title: "..." } par entrée.
    subprojects: []
  },
  {
    slug: "createur-dimmortels",
    title: "Créateur d'immortels",
    category: "Projet personnel",
    description: "Description à venir.",
    x: 57.75, y: 52.9, r: 4.5,
    media: []
  },
  {
    slug: "united24",
    title: "UNITED 24",
    category: "Projet",
    description: "Description à venir.",
    x: 58.5, y: 67.7, r: 3.5,
    media: []
  },
  {
    slug: "firecatchers",
    title: "Firecatchers",
    category: "Projet",
    description: "Description à venir.",
    x: 51.75, y: 83.8, r: 4,
    media: []
  },
  {
    slug: "plan-international",
    title: "Plan International",
    category: "Campagne",
    description: "Description à venir.",
    x: 45.25, y: 55, r: 4,
    media: []
  },
  {
    slug: "about",
    title: "About Pierre",
    category: "À propos",
    x: 45.25, y: 36.4, r: 3,
    // Page "About" : contenu structuré au lieu de description/media.
    // photo = portrait (à côté du contact), awardsPhoto = photo des prix.
    // Dépose les deux fichiers dans assets/img/ et mets à jour les chemins ici.
    about: {
      photo: "assets/img/pierre-portrait.jpg",
      awardsPhoto: "assets/img/pierre-awards.jpg",
      contact: {
        email: "PierreRiboulet0410@gmail.com",
        phone: "(+33) 7 81 49 49 00"
      },
      experience: [
        { period: "Août 2022 — Présent", role: "Copywriter", company: "Havas Play Paris" },
        { period: "Juin 2020 — Août 2022", role: "Junior Copywriter", company: "Havas Sports & Entertainment" }
      ],
      clients: [
        "Acer", "Action contre la faim", "Alpine F1 Team", "Berluti", "Canal +",
        "GMF", "La SPA", "Paris 2024", "PSG", "Renault"
      ],
      education: [
        "Master Art and Creative Direction — Sup de Pub Paris",
        "Master Copywriting — Sup de Pub Paris",
        "Bachelor Information & Communication — Clermont University"
      ],
      awards: [
        { org: "D&AD", items: ["Graphite — Creator Content", "Wood — Media / Direct", "Merit — User Participation"] },
        { org: "Cannes Lions", items: [
          "Silver — Media / Use of Influencers",
          "Bronze — Media / Audience Insight",
          "Bronze — Brand Experience",
          "Shortlist — Social & Creators",
          "Shortlist — Charity / Government",
          "Shortlist — Challenges & Breakthroughs",
          "Shortlist — Gaming Entertainment",
          "Shortlist — Brand Experience",
          "Shortlist — Social & Creators"
        ] },
        { org: "One Show", items: ["Gold — Livestream", "Bronze — Community Activation", "Bronze — Social Channel", "Bronze — Innovation"] },
        { org: "Stratégies", items: ["Grand Prix — Media", "Grand Prix — Digital", "9x Gold"] },
        { org: "LIA", items: ["Young Creative 2023"] },
        { org: "Eurobest", items: [
          "Bronze — Media Not-for-profit",
          "Bronze — Activation Gaming",
          "Bronze — Media Entertainment",
          "Bronze — PR Cause Related"
        ] },
        { org: "Effie Awards", items: ["Silver — Film"] },
        { org: "French Art Director Club", items: ["Bronze — Film"] },
        { org: "Gerety", items: ["Silver — Media"] }
      ]
    }
  }
];
