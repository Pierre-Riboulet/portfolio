# Portfolio — Pierre Riboulet

Portfolio publicitaire minimaliste : une seule image (une roche sur laquelle
sont fixés les logos/symboles des projets), chaque symbole ouvre la page du
projet correspondant.

## Structure

```
index.html                    Page d'accueil (la roche)
project.html                  Gabarit de page projet (lit ?slug=...)
assets/css/style.css          Styles
assets/js/main.js             Curseur pioche, son de roche, points cliquables
assets/js/projects-data.js    Données des projets + position des points sur la roche
assets/img/rock-placeholder.svg  Image de remplacement en attendant la vraie photo
```

## À faire avant mise en ligne

1. **Remplacer l'image** : mets ta vraie photo de la roche dans
   `assets/img/`, puis mets à jour le `src` de l'`<img>` dans `index.html`
   (actuellement `assets/img/rock-placeholder.svg`).
2. **Recaler les points cliquables** : ouvre le site avec `?calibrate` à la
   fin de l'URL (ex. `index.html?calibrate`) et clique sur chaque symbole de
   la vraie photo. Les coordonnées exactes (x/y en %) s'affichent dans la
   console et sont copiées dans le presse-papiers — reporte-les dans
   `assets/js/projects-data.js`.
3. **Compléter chaque projet** dans `projects-data.js` : titre définitif,
   catégorie, description, et médias (`media: [{ type: "video", src: "..." }]`
   ou `{ type: "image", src: "..." }`).

## Détails techniques

- **Curseur pioche** : dessiné en SVG et animé en JS (aucune image externe),
  actif uniquement sur les appareils avec souris (`hover: hover` + `pointer: fine`).
- **Son de roche qui se brise** : généré à la volée avec la Web Audio API
  (bruit filtré + court impact), donc aucun fichier audio à héberger.
- **Aucune dépendance** : HTML/CSS/JS natifs, déployable tel quel sur
  GitHub Pages ou tout hébergeur statique.
