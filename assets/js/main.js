(function () {
  "use strict";

  var isFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Dépose ton image dans assets/cursor/ avec ce nom exact (PNG avec fond
  // transparent recommandé). Tant qu'elle n'y est pas, la pioche dessinée en
  // SVG ci-dessous reste utilisée automatiquement.
  var CURSOR_IMG_SRC = "assets/cursor/pickaxe.png";
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
  // idéalement courts). Ils alternent à chaque survol. Tant qu'un fichier
  // n'est pas en ligne, le son synthétisé ci-dessous prend le relais pour lui.
  var CRACK_SOUND_SRCS = [
    "assets/audio/crack-1.mp3",
    "assets/audio/crack-2.mp3",
    "assets/audio/crack-3.mp3"
  ];

  var readyCrackSrcs = [];
  CRACK_SOUND_SRCS.forEach(function (src) {
    var probe = new Audio();
    probe.addEventListener("canplaythrough", function () {
      if (readyCrackSrcs.indexOf(src) === -1) readyCrackSrcs.push(src);
    }, { once: true });
    probe.preload = "auto";
    probe.src = src;
  });

  var crackIndex = 0;
  function playCrackSound() {
    if (readyCrackSrcs.length === 0) {
      playRockCrackSynth();
      return;
    }
    var src = readyCrackSrcs[crackIndex % readyCrackSrcs.length];
    crackIndex++;
    var el = new Audio(src);
    el.play().catch(function () {});
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

  /* ---------------- Points chauds sur la roche ---------------- */

  function buildHotspots(cursor) {
    var frame = document.querySelector(".rock-frame");
    if (!frame || typeof PROJECTS === "undefined") return;

    PROJECTS.forEach(function (project) {
      var a = document.createElement("a");
      a.href = "project.html?slug=" + encodeURIComponent(project.slug);
      a.className = "hotspot";
      a.style.left = project.x + "%";
      a.style.top = project.y + "%";
      if (project.r) {
        a.style.width = project.r * 2 + "%";
      }
      a.setAttribute("aria-label", project.title);

      var label = document.createElement("span");
      label.className = "hotspot-label";
      label.textContent = project.title;
      a.appendChild(label);

      a.addEventListener("mouseenter", function () {
        playCrackSound();
        if (cursor) {
          cursor.classList.remove("swing");
          void cursor.offsetWidth; // relance l'animation
          cursor.classList.add("swing");
        }
      });

      // Tactile : premier tap = aperçu du nom, second tap = navigation
      a.addEventListener("click", function (e) {
        if (isFinePointer) return;
        if (!a.classList.contains("touch-active")) {
          e.preventDefault();
          document.querySelectorAll(".hotspot.touch-active").forEach(function (el) {
            el.classList.remove("touch-active");
          });
          a.classList.add("touch-active");
          playCrackSound();
        }
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
