/**
 * Données des projets + position des points cliquables sur la roche.
 *
 * x / y = position en pourcentage (0-100) sur l'image ENTIÈRE (assets/img/rock.jpg),
 * pas seulement sur la roche. Ce sont des estimations à partir de l'image fournie ;
 * une fois la vraie photo en place, ouvre le site avec ?calibrate à la fin de l'URL
 * (ex: index.html?calibrate) : un clic sur un symbole affiche ses coordonnées exactes
 * dans la console, à recopier ici.
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
    x: 53, y: 28, r: 4.5,
    media: []
  },
  {
    slug: "canal-plus",
    title: "Canal+",
    category: "Campagne",
    description: "Description à venir.",
    x: 44, y: 48, r: 5,
    media: []
  },
  {
    slug: "la-spa",
    title: "La SPA",
    category: "Campagne",
    description: "Description à venir.",
    x: 58, y: 43, r: 4.5,
    media: []
  },
  {
    slug: "louis-vuitton",
    title: "Louis Vuitton",
    category: "Campagne",
    description: "Description à venir.",
    x: 50, y: 74, r: 4.5,
    media: []
  },
  {
    slug: "alpine",
    title: "Alpine",
    category: "Campagne",
    description: "Description à venir.",
    x: 44, y: 84, r: 4.5,
    media: []
  },
  {
    slug: "photographie",
    title: "Photographie",
    category: "Projet personnel",
    description: "Description à venir.",
    x: 58, y: 56, r: 4.5,
    media: []
  },
  {
    slug: "ukraine",
    title: "Solidarité Ukraine",
    category: "Projet",
    description: "Description à venir.",
    x: 60, y: 71, r: 4,
    media: []
  },
  {
    slug: "casque",
    title: "Casque",
    category: "Projet",
    description: "Description à venir.",
    x: 51, y: 89, r: 4.5,
    media: []
  },
  {
    slug: "medaillon",
    title: "Médaillon",
    category: "Bijou",
    description: "Description à venir.",
    x: 46, y: 60, r: 4.5,
    media: []
  },
  {
    slug: "eye-ring",
    title: "Bague Œil",
    category: "Bijou",
    description: "Description à venir.",
    x: 45, y: 41, r: 3.5,
    media: []
  },
  {
    slug: "broche-saphir",
    title: "Broche Saphir",
    category: "Bijou",
    description: "Description à venir.",
    x: 39, y: 39, r: 4,
    media: []
  },
  {
    slug: "broche-rubis",
    title: "Broche Rubis",
    category: "Bijou",
    description: "Description à venir.",
    x: 37, y: 58, r: 4,
    media: []
  },
  {
    slug: "broche-diamant",
    title: "Broche Diamant",
    category: "Bijou",
    description: "Description à venir.",
    x: 38, y: 74, r: 3.5,
    media: []
  },
  {
    slug: "epingle-or-1",
    title: "Épingle Or",
    category: "Bijou",
    description: "Description à venir.",
    x: 46, y: 25, r: 3,
    media: []
  },
  {
    slug: "epingle-or-2",
    title: "Épingle Or II",
    category: "Bijou",
    description: "Description à venir.",
    x: 65, y: 69, r: 3,
    media: []
  },
  {
    slug: "fleur-gemmes",
    title: "Fleur de Gemmes",
    category: "Bijou",
    description: "Description à venir.",
    x: 53, y: 19, r: 3,
    media: []
  }
];
