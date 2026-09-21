(function () {
  "use strict";

  var isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  var CURSOR_IMG_SRC = "assets/img/pickaxe.png";
  var FALLBACK_CURSOR_SVG =
    '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">' +
    '<path d="M15 30 L27 8" stroke="#3b2a1a" stroke-width="3.4" stroke-linecap="round"/>' +
    '<path d="M6 9 C11 3, 21 1, 29 6 C24 8, 20 11, 17 15 C13 11, 9 9, 6 9 Z" fill="#8a8a86" stroke="#3f3f3d" stroke-width="1.2"/>' +
    '<path d="M6 9 C4 10.5, 3.2 12, 3 13.6" stroke="#3f3f3d" stroke-width="1.4" stroke-linecap="round" fill="none"/>' +
    '<path d="M29 6 C30.6 7.4, 31.4 8.8, 31.6 10.2" stroke="#3f3f3d" stroke-width="1.4" stroke-linecap="round" fill="none"/>' +
    "</svg>";

  /* ---------------- Curseur pioche ---------------- */

  function initCursor() {
    if (!isFinePointer) return;

    document.body.classList.add("has-custom-cursor");

    var cursor = document.createElement("div");
    cursor.id = "pickaxe-cursor";

    var img = document.createElement("img");
    img.src = CURSOR_IMG_SRC;
    img.alt = "";
    img.draggable = false;
    img.onerror = function () {
      cursor.innerHTML = FALLBACK_CURSOR_SVG;
    };
    cursor.appendChild(img);

    document.body.appendChild(cursor);

    var raf = null;
    var lastX = -100, lastY = -100;

    window.addEventListener("mousemove", function (e) {
      lastX = e.clientX;
      lastY = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        cursor.style.left = lastX + "px";
        cursor.style.top = lastY + "px";
        raf = null;
      });
    }, { passive: true });

    document.addEventListener("mouseleave", function () {
      cursor.style.display = "none";
    });
    document.addEventListener("mouseenter", function () {
      cursor.style.display = "";
    });

    return cursor;
  }

  /* ---------------- Son de roche qui se brise ---------------- */

  // Dépose tes 3 fichiers dans assets/audio/ avec ces noms exacts (mp3 ou wav,
  // idéalement courts). crack-1/crack-2 alternent sur tous les symboles ;
  // crack-3 ne se déclenche que sur le symbole "about" (l'œil). Tant qu'un
  // fichier n'est pas en ligne, le son synthétisé ci-dessous prend le relais.
  var GENERAL_CRACK_SRCS = [
    "assets/audio/crack-1.mp3",
    "assets/audio/crack-2.mp3"
  ];
  var ABOUT_CRACK_SRC = "assets/audio/crack-3.mp3";

  // Safari iOS ne "débloque" la lecture/le préchargement audio qu'après un
  // vrai geste utilisateur : attendre un événement "canplaythrough" en
  // préchargement (comme avant) ne se déclenchait jamais avant le premier
  // tap sur mobile, donc ça retombait toujours sur le son synthétisé. On
  // tente maintenant la lecture directement au moment du survol/tap, et on
  // ne bascule sur le repli que si cette tentative échoue vraiment.
  var crackIndex = 0;
  function playCrackSound(project) {
    var special = project && project.slug === "about";
    var src = special
      ? ABOUT_CRACK_SRC
      : GENERAL_CRACK_SRCS[crackIndex % GENERAL_CRACK_SRCS.length];
    if (!special) crackIndex++;

    try {
      var el = new Audio(src);
      el.volume = 0.8;
      var playPromise = el.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () { playRockCrackSynth(); });
      }
    } catch (e) {
      playRockCrackSynth();
    }
  }

  var audioCtx = null;
  function getAudioContext() {
    if (!audioCtx) {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      audioCtx = new Ctx();
    }
    if (audioCtx.state === "suspended") audioCtx.resume();
    return audioCtx;
  }

  function playRockCrackSynth() {
    var ctx = getAudioContext();
    if (!ctx) return;

    var now = ctx.currentTime;
    var pitch = 0.85 + Math.random() * 0.3;

    // Bruit blanc court -> enveloppe rapide -> filtre passe-haut/bande = "crac"
    var bufferSize = Math.floor(ctx.sampleRate * 0.18);
    var buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    var data = buffer.getChannelData(0);
    for (var i = 0; i < bufferSize; i++) {
      var decay = Math.pow(1 - i / bufferSize, 3.2);
      data[i] = (Math.random() * 2 - 1) * decay;
    }

    var noise = ctx.createBufferSource();
    noise.buffer = buffer;
    noise.playbackRate.value = pitch;

    var bandpass = ctx.createBiquadFilter();
    bandpass.type = "bandpass";
    bandpass.frequency.value = 1800 * pitch;
    bandpass.Q.value = 0.8;

    var highpass = ctx.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.value = 600;

    var gain = ctx.createGain();
    gain.gain.setValueAtTime(0.44, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.16);

    noise.connect(bandpass);
    bandpass.connect(highpass);
    highpass.connect(gain);
    gain.connect(ctx.destination);
    noise.start(now);
    noise.stop(now + 0.18);

    // Petit "toc" grave pour donner du corps à l'impact
    var click = ctx.createOscillator();
    click.type = "triangle";
    click.frequency.setValueAtTime(180 * pitch, now);
    click.frequency.exponentialRampToValueAtTime(60, now + 0.09);

    var clickGain = ctx.createGain();
    clickGain.gain.setValueAtTime(0.28, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    click.connect(clickGain);
    clickGain.connect(ctx.destination);
    click.start(now);
    click.stop(now + 0.1);
  }

  /* Les navigateurs bloquent tout son tant qu'aucun vrai geste (clic/tap/
     touche) n'a eu lieu sur la page — un simple survol ne compte pas. Donc le
     tout premier survol, avant le tout premier clic, restera toujours
     silencieux (aucun site web ne peut contourner cette règle). En revanche,
     on peut réduire cette fenêtre au minimum : dès le tout premier clic/tap
     n'importe où sur la page (pas forcément sur un symbole), on débloque
     immédiatement le son au lieu d'attendre qu'une navigation le fasse. */
  var audioUnlocked = false;
  function unlockAudioOnce() {
    if (audioUnlocked) return;
    audioUnlocked = true;
    var ctx = getAudioContext();
    if (ctx && ctx.state === "suspended") ctx.resume();
    GENERAL_CRACK_SRCS.concat([ABOUT_CRACK_SRC]).forEach(function (src) {
      var el = new Audio(src);
      el.volume = 0;
      var p = el.play();
      if (p && typeof p.then === "function") {
        p.then(function () { el.pause(); }).catch(function () {});
      }
    });
  }
  ["pointerdown", "touchstart", "keydown"].forEach(function (evt) {
    window.addEventListener(evt, unlockAudioOnce, { once: true, passive: true });
  });

  /* ----------------------------------------------------------------------
   * L'image remplit tout l'écran en pur CSS (assets/css/style.css : .rock-frame
   * est mis à l'échelle via calc() pour couvrir l'écran en conservant le ratio
   * de la photo, comme background-size:cover mais sans JS). Les points chauds
   * positionnés en % dedans restent donc toujours calés sur les bons symboles,
   * sans aucun calcul de géométrie en JS.
   * -------------------------------------------------------------------- */

  /* ---------------- Points chauds sur la roche ---------------- */

  // Sous 700px, <picture> (index.html) charge rock-mobile.jpg à la place de
  // rock.jpg : cadrage différent, donc chaque projet a son propre jeu de
  // coordonnées (project.mobile). On regarde cette même largeur ici pour
  // savoir lequel utiliser, et on réagit à un changement (rotation d'écran)
  // en reconstruisant les points chauds avec le bon jeu de coordonnées.
  var mobileMQ = window.matchMedia("(max-width: 700px)");

  function coordsFor(project) {
    return (mobileMQ.matches && project.mobile) ? project.mobile : project;
  }

  function buildHotspots(cursor) {
    var frame = document.querySelector(".rock-frame");
    if (!frame || typeof PROJECTS === "undefined") return;

    var captionLeft = document.getElementById("hover-caption-left");
    var captionRight = document.getElementById("hover-caption-right");

    function showCaption(project) {
      if (!captionLeft || !captionRight) return;
      captionLeft.textContent = project.hoverLeft || "";
      captionRight.textContent = project.hoverRight || "";
      captionLeft.classList.add("visible");
      captionRight.classList.add("visible");
    }

    function hideCaption() {
      if (!captionLeft || !captionRight) return;
      captionLeft.classList.remove("visible");
      captionRight.classList.remove("visible");
    }

    function render() {
      frame.querySelectorAll(".hotspot").forEach(function (el) {
        el.remove();
      });

      PROJECTS.forEach(function (project) {
        var coords = coordsFor(project);
        var a = document.createElement("a");
        a.href = "project.html?slug=" + encodeURIComponent(project.slug);
        a.className = "hotspot";
        a.style.left = coords.x + "%";
        a.style.top = coords.y + "%";
        // rx/ry = demi-largeur/demi-hauteur en % (ellipse calée sur la forme
        // réelle du symbole) ; r reste accepté comme repli pour un cercle simple.
        if (coords.rx || coords.ry) {
          a.style.width = (coords.rx || coords.ry) * 2 + "%";
          a.style.height = (coords.ry || coords.rx) * 2 + "%";
        } else if (coords.r) {
          a.style.width = coords.r * 2 + "%";
          a.style.height = coords.r * 2 + "%";
        }
        a.setAttribute("aria-label", project.title);

        // Le son au clic/tap a été retiré : sur mobile (le seul endroit où un
        // clic sur un point chaud comptait comme interaction tactile avant la
        // navigation), Pierre ne veut plus de bruit à l'appui. Sur ordinateur,
        // le son reste déclenché par le survol (mouseenter) ci-dessous.
        a.addEventListener("mouseenter", function () {
          if (!isFinePointer) return;
          playCrackSound(project);
          showCaption(project);
          if (cursor) {
            cursor.classList.remove("swing");
            void cursor.offsetWidth; // relance l'animation
            cursor.classList.add("swing");
          }
        });

        a.addEventListener("mouseleave", hideCaption);

        frame.appendChild(a);
      });
    }

    render();

    if (mobileMQ.addEventListener) {
      mobileMQ.addEventListener("change", render);
    } else if (mobileMQ.addListener) {
      mobileMQ.addListener(render); // repli Safari iOS ancien
    }
  }

  /* ---------------- Mode calibration (?calibrate) ---------------- */

  function initCalibration() {
    var params = new URLSearchParams(window.location.search);
    if (!params.has("calibrate")) return;

    document.body.classList.add("calibrate");
    var frame = document.querySelector(".rock-frame");
    var img = frame && frame.querySelector("img");
    if (!frame || !img) return;

    frame.addEventListener("click", function (e) {
      var rect = img.getBoundingClientRect();
      var x = ((e.clientX - rect.left) / rect.width) * 100;
      var y = ((e.clientY - rect.top) / rect.height) * 100;
      var xr = Math.round(x * 10) / 10;
      var yr = Math.round(y * 10) / 10;

      var marker = document.createElement("div");
      marker.className = "calibrate-marker";
      marker.style.left = xr + "%";
      marker.style.top = yr + "%";
      frame.appendChild(marker);

      var coords = "x: " + xr + ", y: " + yr;
      console.log(coords);
      if (navigator.clipboard) {
        navigator.clipboard.writeText(coords).catch(function () {});
      }
    });
  }

  /* ---------------- Diagnostic temporaire (?debug) ---------------- */
  // But : voir les vraies valeurs sur le téléphone qui pose problème au lieu
  // de deviner depuis des tests locaux. À retirer une fois le bug résolu.
  function initDebugOverlay() {
    var params = new URLSearchParams(window.location.search);
    if (!params.has("debug")) return;

    var box = document.createElement("div");
    box.style.cssText =
      "position:fixed;top:0;left:0;right:0;z-index:99999;background:rgba(0,0,0,0.85);" +
      "color:#0f0;font:11px/1.5 monospace;padding:8px;white-space:pre-wrap;pointer-events:none;";
    document.body.appendChild(box);

    function update() {
      var frame = document.querySelector(".rock-frame");
      var img = frame && frame.querySelector("img");
      var frameRect = frame ? frame.getBoundingClientRect() : null;
      var imgRect = img ? img.getBoundingClientRect() : null;
      var lines = [
        "innerWidth x innerHeight: " + window.innerWidth + " x " + window.innerHeight,
        "visualViewport: " + (window.visualViewport ? Math.round(window.visualViewport.width) + " x " + Math.round(window.visualViewport.height) : "n/a"),
        "documentElement.clientHeight: " + document.documentElement.clientHeight,
        "img currentSrc: " + (img ? img.currentSrc.split("/").pop() : "n/a"),
        "img natural size: " + (img ? img.naturalWidth + " x " + img.naturalHeight : "n/a"),
        ".rock-frame rect: " + (frameRect ? Math.round(frameRect.width) + " x " + Math.round(frameRect.height) + " @ (" + Math.round(frameRect.left) + "," + Math.round(frameRect.top) + ")" : "n/a"),
        "img rendered rect: " + (imgRect ? Math.round(imgRect.width) + " x " + Math.round(imgRect.height) + " @ (" + Math.round(imgRect.left) + "," + Math.round(imgRect.top) + ")" : "n/a"),
        "body.home computed height: " + (document.body ? getComputedStyle(document.body).height : "n/a"),
        "html computed height: " + getComputedStyle(document.documentElement).height
      ];
      box.textContent = lines.join("\n");
    }

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update);
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", update);
      window.visualViewport.addEventListener("scroll", update);
    }
    setInterval(update, 1000);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var cursor = initCursor();
    buildHotspots(cursor);
    initCalibration();
    initDebugOverlay();
  });
})();
