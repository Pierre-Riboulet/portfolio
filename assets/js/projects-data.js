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
    pageTitle: "All Accor — Surfin' the Seine",
    category: "Campagne",
    description: `At the world's biggest sporting events, brands spend millions trying to get noticed.
We didn't, or at least, not as much as everyone else.

Instead, we found one move that put Accor on screens around the world: we surfed the Seine.`,
    x: 45.25, y: 21.2, r: 3,
    media: []
  },
  {
    slug: "acer",
    title: "Acer",
    pageTitle: "Acer — We got you",
    category: "Campagne",
    description: "The Acer Swift 14 AI can do a lot of things. Even improve your relationship with your dad.",
    x: 52.8, y: 24.6, r: 4.5,
    media: []
  },
  {
    slug: "canal-plus",
    title: "Canal+",
    pageTitle: "Validé — Season 2",
    category: "Campagne",
    description: `To promote the return of the TV show where rap meets gang business, Canal+ wanted a print campaign.
So we went to the cities where street cred matters most: Paris, Marseille and Los Santos.`,
    x: 45, y: 43.6, r: 4.5,
    media: []
  },
  {
    slug: "la-spa",
    title: "La SPA",
    pageTitle: "La SPA — Films",
    category: "Campagne",
    description: `The Société Protectrice des Animaux is France's largest animal shelter. No need for tissues, there are no tearjerkers here. During three years, we decided to stay away from sad campaigns, convinced that humor could do more for the cause.

Proof that a funny cat is more effective than a three-legged dog: the association jumped from 11th to 2nd place among the French's favorite charities.`,
    x: 57.5, y: 38.1, r: 3.5,
    media: []
  },
  {
    slug: "louis-vuitton",
    title: "Louis Vuitton",
    pageTitle: "LVMH — Au-delà des bassins",
    category: "Campagne",
    description: "Ambassador for LVMH and Louis Vuitton, Léon Marchand has quickly become the world's number one swimmer. When the group asked us to create a series of images celebrating him, we did what Léon has always done: go far beyond the pool.",
    x: 50, y: 68.6, r: 3.5,
    media: []
  },
  {
    slug: "prints",
    title: "Prints",
    category: "Collection",
    description: "A few headlines that ended up printed, framed or saved somewhere.",
    x: 44.75, y: 77.9, r: 4,
    // Cette page rassemblera plusieurs projets : { title: "..." } par entrée.
    subprojects: []
  },
  {
    slug: "createur-dimmortels",
    title: "Créateur d'immortels",
    category: "Projet personnel",
    description: `I divide my life into three parts.
The first, when I work on my computer.
The second, when I work with my camera.
The third, when I work on myself, explaining my job to my mother for the 73rd time.

Here are a few examples of the second,
when I turn strangers into immortals.`,
    x: 57.75, y: 52.9, r: 4.5,
    media: []
  },
  {
    slug: "united24",
    title: "UNITED 24",
    pageTitle: "UNITED 24 — The Donation Map",
    category: "Projet",
    description: `In 1748, Benjamin Franklin is said to have coined the phrase "Time is money."
So we took him literally. For UNITED24, we created a Fortnite map where gamers' playtime generated donations for people affected by the war in Ukraine.`,
    x: 58.5, y: 67.7, r: 3.5,
    media: []
  },
  {
    slug: "firecatchers",
    title: "Firecatchers",
    pageTitle: "French Firefighters — Firecatchers",
    category: "Projet",
    description: `I'm the kind of person who shows up early. Even when it's just to watch my favorite streamer go live.
One day, while waiting with 30,000 other people in front of a waiting screen, I started wondering whether those 30,001 people could be useful for something. So we turned a few waiting screens into a way to watch over nature.`,
    x: 51.75, y: 83.8, r: 4,
    media: []
  },
  {
    slug: "plan-international",
    title: "Plan International",
    pageTitle: "Plan International — What do you do for a living",
    category: "Campagne",
    description: "In our industry, we all like to think we have pretty cool jobs. Well, just wait until a Plan International donor tells you about theirs.",
    x: 45.25, y: 55, r: 4,
    media: []
  },
  {
    slug: "about",
    title: "About Pierre",
    category: "À propos",
    x: 45.25, y: 36.4, r: 2.2,
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
