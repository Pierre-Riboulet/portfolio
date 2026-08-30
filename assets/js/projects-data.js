/**
 * Données des projets + position des points cliquables sur la roche.
 *
 * x / y = position en pourcentage (0-100) sur l'image ENTIÈRE (assets/img/rock.jpg),
 * pas seulement sur la roche. Ces coordonnées ont été calées visuellement sur la
 * vraie photo (assets/img/rock.jpg). Pour les affiner au pixel près, ouvre le site
 * avec ?calibrate à la fin de l'URL (ex: index.html?calibrate) : un clic sur un
 * symbole affiche ses coordonnées exactes dans la console, à recopier ici.
 *
 * title / description sont des textes provisoires ("on verra plus tard") —
 * à remplacer par le vrai contenu de chaque projet.
 */
const PROJECTS = [
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
    slug: "alpine",
    title: "Alpine",
    category: "Campagne",
    description: "Description à venir.",
    x: 44.75, y: 77.9, r: 4,
    media: []
  },
  {
    slug: "photographie",
    title: "Photographie",
    category: "Projet personnel",
    description: "Description à venir.",
    x: 57.75, y: 52.9, r: 4.5,
    media: []
  },
  {
    slug: "ukraine",
    title: "Solidarité Ukraine",
    category: "Projet",
    description: "Description à venir.",
    x: 58.5, y: 67.7, r: 3.5,
    media: []
  },
  {
    slug: "casque",
    title: "Casque",
    category: "Projet",
    description: "Description à venir.",
    x: 51.75, y: 83.8, r: 4,
    media: []
  },
  {
    slug: "medaillon",
    title: "Médaillon",
    category: "Bijou",
    description: "Description à venir.",
    x: 45.25, y: 55, r: 4,
    media: []
  },
  {
    slug: "eye-ring",
    title: "Bague Œil",
    category: "Bijou",
    description: "Description à venir.",
    x: 45.25, y: 36.4, r: 3,
    media: []
  },
  {
    slug: "broche-saphir",
    title: "Broche Saphir",
    category: "Bijou",
    description: "Description à venir.",
    x: 39.75, y: 34.7, r: 3.5,
    media: []
  },
  {
    slug: "broche-rubis",
    title: "Broche Rubis",
    category: "Bijou",
    description: "Description à venir.",
    x: 38.25, y: 53.3, r: 4,
    media: []
  },
  {
    slug: "broche-diamant",
    title: "Broche Diamant",
    category: "Bijou",
    description: "Description à venir.",
    x: 38.75, y: 69.9, r: 3,
    media: []
  },
  {
    slug: "epingle-or-1",
    title: "Épingle Or",
    category: "Bijou",
    description: "Description à venir.",
    x: 45.25, y: 21.2, r: 2.5,
    media: []
  },
  {
    slug: "epingle-or-2",
    title: "Épingle Or II",
    category: "Bijou",
    description: "Description à venir.",
    x: 61, y: 69.9, r: 2.5,
    media: []
  },
  {
    slug: "fleur-gemmes",
    title: "Fleur de Gemmes",
    category: "Bijou",
    description: "Description à venir.",
    x: 53, y: 16.5, r: 2.5,
    media: []
  }
];
