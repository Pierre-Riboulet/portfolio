/**
 * Données des projets + position des points cliquables sur la roche.
 *
 * x / y = position en pourcentage (0-100) sur l'image ENTIÈRE (assets/img/rock.jpg),
 * pas seulement sur la roche. Ces coordonnées ont été calées visuellement sur la
 * vraie photo (assets/img/rock.jpg). Pour les affiner au pixel près, ouvre le site
 * avec ?calibrate à la fin de l'URL (ex: index.html?calibrate) : un clic sur un
 * symbole affiche ses coordonnées exactes dans la console, à recopier ici.
 *
 * Seuls les symboles listés ici sont cliquables (survol = son + curseur qui
 * s'anime + titre qui apparaît de part et d'autre de la roche, coupé en deux
 * via hoverLeft/hoverRight). Les broches/épingles décoratives ne sont
 * volontairement pas dans cette liste : elles ne mènent nulle part.
 *
 * mobile = { x, y, rx, ry } : mêmes symboles, mais calées sur
 * assets/img/rock-mobile.jpg (recadrage portrait dédié, 1356x2941), utilisée
 * sous 700px de large. Recalées au pixel près sur ce fichier précis : si la
 * photo mobile est un jour recadrée différemment, ces valeurs doivent être
 * reprises avec la même méthode (?calibrate).
 *
 * description / media sont provisoires ("on verra plus tard") — à remplacer par
 * le vrai contenu de chaque projet.
 */
const PROJECTS = [
  {
    slug: "accor",
    title: "Accor",
    pageTitle: "All Accor - Surfin' the Seine",
    hoverLeft: "All Accor", hoverRight: "Surfin' the Seine",
    category: "Campagne",
    description: "At the world's biggest sporting events, brands spend millions trying to get noticed. We didn't, or at least, not as much as everyone else. Instead, we found one move that put Accor on screens around the world: we surfed the Seine.",
    credits: [
      [
        { role: "Art director", name: "Charlotte Merlaud" },
        { role: "Copywriter", name: "Pierre Riboulet" }
      ],
      [
        { role: "Motion", name: "Lio Studio" },
        { role: "Direction", name: "Fabrice Plazolles" }
      ],
      [
        { role: "Production", name: "Prose on Pixels" },
        { role: "Agency", name: "Havas Play" }
      ]
    ],
    x: 45.5, y: 21.1, rx: 3.2, ry: 6.3,
    mobile: { x: 37.3, y: 27.3, rx: 7.2, ry: 4.3 },
    media: [{ type: "vimeo", id: "1054417358" }],
    pressShots: [
      "assets/img/accor-press/accor-press-01.webp",
      "assets/img/accor-press/accor-press-02.webp",
      "assets/img/accor-press/accor-press-03.webp",
      "assets/img/accor-press/accor-press-04.webp",
      "assets/img/accor-press/accor-press-05.webp",
      "assets/img/accor-press/accor-press-06.webp",
      "assets/img/accor-press/accor-press-07.jpg",
      "assets/img/accor-press/accor-press-08.webp",
      "assets/img/accor-press/accor-press-09.jpg",
      "assets/img/accor-press/accor-press-10.jpg",
      "assets/img/accor-press/accor-press-11.jpg",
      "assets/img/accor-press/accor-press-12.jpg",
      "assets/img/accor-press/accor-press-13.jpg",
      "assets/img/accor-press/accor-press-14.jpg"
    ]
  },
  {
    slug: "acer",
    title: "Acer",
    pageTitle: "Acer - We got you",
    hoverLeft: "Acer", hoverRight: "We got you",
    category: "Campagne",
    description: "The Acer Swift 14 AI can do a lot of things. Even improve your relationship with your dad.",
    credits: [
      [
        { role: "Director", name: "Luke Brookner" },
        { role: "Creative Director", name: "Fabrice Plazolles" }
      ],
      [
        { role: "Art Director", name: "Charlotte Merlaud" },
        { role: "Copywriter", name: "Pierre Riboulet" }
      ],
      [
        { role: "Production", name: "Prose on Pixels" },
        { role: "Agency", name: "Havas Play" }
      ]
    ],
    x: 53.0, y: 27.5, rx: 4.6, ry: 3.0,
    mobile: { x: 56.1, y: 32.8, rx: 11.8, ry: 1.8 },
    media: [{ type: "vimeo", id: "1050499345" }]
  },
  {
    slug: "canal-plus",
    title: "Canal+",
    pageTitle: "Validé - Season 2",
    hoverLeft: "Validé", hoverRight: "Season 2",
    category: "Campagne",
    description: `To promote the return of the TV show where rap meets gang business, Canal+ wanted a print campaign.
So we went to the cities where street cred matters most: Paris, Marseille and Los Santos.`,
    credits: [
      [
        { role: "Motion", name: "Chloe Mencarelli" },
        { role: "Creative Director", name: "Fabrice Plazolles" }
      ],
      [
        { role: "Art Director", name: "Pierre Riboulet" },
        { role: "Copywriter", name: "Pierre Riboulet" }
      ],
      [
        { role: "InGame production", name: "Pierre Acuña" },
        { role: "Agency", name: "Havas Play" }
      ]
    ],
    x: 45.7, y: 43.8, rx: 5.3, ry: 2.1,
    mobile: { x: 38.5, y: 46.15, rx: 19.5, ry: 1.55 },
    media: [{ type: "vimeo", id: "1058393916" }]
  },
  {
    slug: "la-spa",
    title: "La SPA",
    pageTitle: "La SPA - Films",
    hoverLeft: "La SPA", hoverRight: "Films",
    category: "Campagne",
    description: `The Société Protectrice des Animaux is France's largest animal shelter. No need for tissues, there are no tearjerkers here. During three years, we decided to stay away from sad campaigns, convinced that humor could do more for the cause.

Proof that a funny cat is more effective than a three-legged dog: the association jumped from 11th to 2nd place among the French's favorite charities.`,
    credits: [
      [
        { role: "Art Director", name: "Charlotte Merlaud" },
        { role: "Copywriter", name: "Pierre Riboulet" }
      ],
      [
        { role: "Creative Director", name: "Fabrice Plazolles" },
        { role: "Production", name: "Wanda - Jungler" }
      ]
    ],
    x: 57.7, y: 39.3, rx: 2.6, ry: 4.4,
    mobile: { x: 71.0, y: 42.65, rx: 7.5, ry: 4.65 },
    media: [
      { type: "vimeo", id: "1059450283" },
      { type: "vimeo", id: "1059436357" },
      { type: "vimeo", id: "1059451872", hash: "42fbb53afc" }
    ]
  },
  {
    slug: "louis-vuitton",
    title: "Louis Vuitton",
    pageTitle: "LVMH - Au-delà des bassins",
    hoverLeft: "LVMH", hoverRight: "Au-delà des bassins",
    category: "Campagne",
    description: "Ambassador for LVMH and Louis Vuitton, Léon Marchand has quickly become the world's number one swimmer. When the group asked us to create a series of images celebrating him, we did what Léon has always done: go far beyond the pool.",
    // Convention crédits : la dernière colonne (la plus à droite) est
    // toujours Production puis Agency, quel que soit le nombre de
    // colonnes précédentes.
    credits: [
      [
        { role: "Photography", name: "Nelson Rosier" },
        { role: "Art direction", name: "Gabriel Santos<br>Pierre Riboulet" }
      ],
      [
        { role: "Vidéo", name: "Tom Weber" },
        { role: "Direction", name: "Sophie Suard" }
      ],
      [
        { role: "Production", name: "Prose on Pixels" },
        { role: "Agency", name: "Havas Play" }
      ]
    ],
    x: 50.7, y: 67.7, rx: 2.6, ry: 4.2,
    mobile: { x: 49.0, y: 64.05, rx: 10.5, ry: 4.25 },
    media: [
      { type: "image", src: "assets/img/lvmh/lvmh-01.jpg" },
      { type: "image", src: "assets/img/lvmh/lvmh-02.jpg" },
      { type: "image", src: "assets/img/lvmh/lvmh-03.jpg" },
      { type: "image", src: "assets/img/lvmh/lvmh-04.jpg" },
      { type: "image", src: "assets/img/lvmh/lvmh-05.jpg" },
      { type: "image", src: "assets/img/lvmh/lvmh-06.jpg" },
      { type: "image", src: "assets/img/lvmh/lvmh-07.jpg" },
      { type: "image", src: "assets/img/lvmh/lvmh-08.jpg" }
    ]
  },
  {
    slug: "prints",
    title: "Prints",
    hoverLeft: "", hoverRight: "Prints",
    category: "Collection",
    description: "A few headlines that ended up printed, framed or saved somewhere.",
    x: 44.4, y: 77.1, rx: 2.5, ry: 5.1,
    mobile: { x: 35.0, y: 71.6, rx: 6.5, ry: 4.6 },
    media: [
      { type: "image", src: "assets/img/prints/prints-01.webp" },
      { type: "image", src: "assets/img/prints/prints-02.webp" },
      { type: "image", src: "assets/img/prints/prints-03.webp" },
      { type: "image", src: "assets/img/prints/prints-04.webp" },
      { type: "image", src: "assets/img/prints/prints-05.webp" },
      { type: "image", src: "assets/img/prints/prints-06.webp" },
      { type: "image", src: "assets/img/prints/prints-07.webp" },
      { type: "image", src: "assets/img/prints/prints-08.webp" }
    ]
  },
  {
    slug: "createur-dimmortels",
    title: "Créateur d'immortels",
    hoverLeft: "Créateur", hoverRight: "d'immortels",
    category: "Projet personnel",
    description: `I divide my life into three parts.
The first, when I work on my computer.
The second, when I work with my camera.
The third, when I work on myself, explaining my job to my mother for the 73rd time.

Here are a few examples of the second,
when I turn strangers into immortals.`,
    x: 57.5, y: 52.8, rx: 3.4, ry: 4.35,
    mobile: { x: 70.75, y: 52.85, rx: 11.75, ry: 3.15 },
    media: []
  },
  {
    slug: "united24",
    title: "UNITED 24",
    pageTitle: "UNITED 24 - The Donation Map",
    hoverLeft: "UNITED 24", hoverRight: "The Donation Map",
    category: "Projet",
    description: "In 1748, Benjamin Franklin is said to have coined the phrase \"Time is money.\" So we took him literally. For UNITED24, we created a Fortnite map where gamers' playtime generated donations for people affected by the war in Ukraine.",
    credits: [
      [
        { role: "InGame Production", name: "Pierre Acuña" },
        { role: "Creative Director", name: "Fabrice Plazolles" }
      ],
      [
        { role: "Art Director", name: "Quentin Clausse" },
        { role: "Copywriter", name: "Nil Nivière Schouvaloff - Pierre Riboulet" }
      ],
      [
        { role: "Motion", name: "Erwan Thomas" },
        { role: "Agency", name: "Havas Play" }
      ]
    ],
    x: 58.4, y: 67.1, rx: 2.3, ry: 4.7,
    mobile: { x: 73.75, y: 63.35, rx: 5.25, ry: 3.65 },
    media: [{ type: "vimeo", id: "1056571140" }]
  },
  {
    slug: "firecatchers",
    title: "Firecatchers",
    pageTitle: "French Firefighters - Firecatchers",
    hoverLeft: "French Firefighters", hoverRight: "Firecatchers",
    category: "Projet",
    description: `I'm the kind of person who shows up early. Even when it's just to watch my favorite streamer go live.
One day, while waiting with 30,000 other people in front of a waiting screen, I started wondering whether those 30,001 people could be useful for something. So we turned a few waiting screens into a way to watch over nature.`,
    credits: [
      [
        { role: "Art Director", name: "Charlotte Merlaud - Alvaro Barth" },
        { role: "Copywriter", name: "Pierre Riboulet" }
      ],
      [
        { role: "Creative Director", name: "Fabrice Plazolles" },
        { role: "Motion", name: "Vitor Araujo" }
      ],
      [
        { role: "Production", name: "BETC Sao Paulo" },
        { role: "Agency", name: "Havas Play" }
      ]
    ],
    x: 52.1, y: 82.2, rx: 2.8, ry: 4.4,
    mobile: { x: 53.5, y: 74.65, rx: 9.5, ry: 3.65 },
    media: [{ type: "vimeo", id: "1225917302" }]
  },
  {
    slug: "plan-international",
    title: "Plan International",
    pageTitle: "Plan International - What do you do for a living",
    hoverLeft: "Plan International", hoverRight: "What do you do for a living",
    category: "Campagne",
    description: "In our industry, we all like to think we have pretty cool jobs. Well, just wait until a Plan International donor tells you about theirs.",
    credits: [
      [
        { role: "Director", name: "Axel Segala" },
        { role: "Creative Director", name: "Fabrice Plazolles" }
      ],
      [
        { role: "Art Director", name: "Pierre Riboulet" },
        { role: "Copywriter", name: "Pierre Riboulet" }
      ],
      [
        { role: "Credits photo", name: "Plan International" },
        { role: "Agency", name: "Havas Play" }
      ]
    ],
    x: 45.2, y: 57.7, rx: 3.3, ry: 5.0,
    mobile: { x: 34.25, y: 56.0, rx: 9.75, ry: 4.3 },
    media: [{ type: "vimeo", id: "1057237781", hash: "780a04aa5e" }]
  },
  {
    slug: "about",
    title: "About Pierre",
    hoverLeft: "About", hoverRight: "Pierre",
    category: "À propos",
    x: 45.7, y: 37.7, rx: 3.1, ry: 3.3,
    mobile: { x: 35.0, y: 40.5, rx: 9.5, ry: 2.3 },
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
