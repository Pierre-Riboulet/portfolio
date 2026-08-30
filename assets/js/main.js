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

  function preloadAudio(src, onReady) {
    var probe = new Audio();
    probe.addEventListener("canplaythrough", onReady, { once: true });
    probe.preload = "auto";
    probe.src = src;
  }

  var readyGeneralCrackSrcs = [];
  GENERAL_CRACK_SRCS.forEach(function (src) {
    preloadAudio(src, function () {
      if (readyGeneralCrackSrcs.indexOf(src) === -1) readyGeneralCrackSrcs.push(src);
    });
  });

  var aboutCrackReady = false;
  preloadAudio(ABOUT_CRACK_SRC, function () { aboutCrackReady = true; });

  var crackIndex = 0;
  function playCrackSound(project) {
    if (project && project.slug === "about") {
      if (aboutCrackReady) {
        new Audio(ABOUT_CRACK_SRC).play().catch(function () {});
      } else {
        playRockCrackSynth();
      }
      return;
    }
    if (readyGeneralCrackSrcs.length === 0) {
      playRockCrackSynth();
      return;
    }
    var src = readyGeneralCrackSrcs[crackIndex % readyGeneralCrackSrcs.length];
    crackIndex++;
    new Audio(src).play().catch(function () {});
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
    gain.gain.setValueAtTime(0.55, now);
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
    clickGain.gain.setValueAtTime(0.35, now);
    clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

    click.connect(clickGain);
    clickGain.connect(ctx.destination);
    click.start(now);
    click.stop(now + 0.1);
  }

  /* ----------------------------------------------------------------------
   * L'image remplit tout l'écran en pur CSS (assets/css/style.css :
   * .rock-frame img a min-width:100vw / min-height:100vh, la technique
   * "cover" classique d'avant object-fit). .rock-frame se redimensionne
   * automatiquement sur la taille réelle de l'image (display:inline-block),
   * donc les points en % positionnés dedans restent toujours calés sur les
   * bons symboles, sans aucun calcul JS ni écouteur de redimensionnement.
   * -------------------------------------------------------------------- */

  /* ---------------- Points chauds sur la roche ---------------- */

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

    PROJECTS.forEach(function (project) {
      var a = document.createElement("a");
      a.href = "project.html?slug=" + encodeURIComponent(project.slug);
      a.className = "hotspot";
      a.style.left = project.x + "%";
      a.style.top = project.y + "%";
      // rx/ry = demi-largeur/demi-hauteur en % (ellipse calée sur la forme
      // réelle du symbole) ; r reste accepté comme repli pour un cercle simple.
      if (project.rx || project.ry) {
        a.style.width = (project.rx || project.ry) * 2 + "%";
        a.style.height = (project.ry || project.rx) * 2 + "%";
      } else if (project.r) {
        a.style.width = project.r * 2 + "%";
        a.style.height = project.r * 2 + "%";
      }
      a.setAttribute("aria-label", project.title);

      a.addEventListener("mouseenter", function () {
        playCrackSound(project);
        showCaption(project);
        if (cursor) {
          cursor.classList.remove("swing");
          void cursor.offsetWidth; // relance l'animation
          cursor.classList.add("swing");
        }
      });

      a.addEventListener("mouseleave", hideCaption);

      // Tactile : joue le son avant que la navigation ne parte.
      a.addEventListener("click", function () {
        if (isFinePointer) return;
        playCrackSound(project);
      });

      frame.appendChild(a);
    });
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

  document.addEventListener("DOMContentLoaded", function () {
    var cursor = initCursor();
    buildHotspots(cursor);
    initCalibration();
  });
})();
