# Portfolio — Pierre Riboulet

Portfolio publicitaire minimaliste : une seule image (une roche sur laquelle
sont fixés les logos/symboles des projets), chaque symbole ouvre la page du
projet correspondant. 11 pages au total : la roche + 10 projets.

- Acer, Canal+, La SPA, Louis Vuitton
- Prints (page collection : rassemblera plusieurs projets)
- Créateur d'immortels, UNITED 24, Firecatchers, Plan International
- About Pierre

Les broches/épingles décoratives sur la roche ne sont pas cliquables
(pas de page attribuée) : ni point, ni son au survol.

## Structure

```
index.html                    Page d'accueil (la roche)
project.html                  Gabarit de page projet (lit ?slug=...)
assets/css/style.css          Styles
assets/js/main.js             Curseur pioche, son de roche, points cliquables
assets/js/projects-data.js    Données des projets + position des points sur la roche
assets/img/rock.jpg           Photo de la roche
```

## À faire avant mise en ligne

1. **Recaler les points cliquables** si besoin : ouvre le site avec
   `?calibrate` à la fin de l'URL (ex. `index.html?calibrate`) et clique sur
   chaque symbole. Les coordonnées exactes (x/y en %) s'affichent dans la
   console et sont copiées dans le presse-papiers — reporte-les dans
   `assets/js/projects-data.js`.
2. **Compléter chaque projet** dans `projects-data.js` : description
   définitive, et médias (`media: [{ type: "video", src: "..." }]` ou
   `{ type: "image", src: "..." }`). Pour "Prints", remplir `subprojects`
   avec `{ title: "..." }` par projet une fois qu'ils existent.

## Détails techniques

- **Curseur pioche** : dessiné en SVG et animé en JS (aucune image externe),
  actif uniquement sur les appareils avec souris (`hover: hover` + `pointer: fine`).
- **Son de roche qui se brise** : généré à la volée avec la Web Audio API
  (bruit filtré + court impact), donc aucun fichier audio à héberger.
- **Aucune dépendance** : HTML/CSS/JS natifs, déployable tel quel sur
  GitHub Pages ou tout hébergeur statique.
