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
    description: "Description à venir.",
    x: 45.25, y: 36.4, r: 3,
    media: []
  }
];
