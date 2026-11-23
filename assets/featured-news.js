(() => {
  const region = document.querySelector(".featured-news");
  const slides = region.querySelectorAll(".featured-story");
  const controls = region.querySelector(".story-controls");
  const rotation = controls.querySelector("[data-rotation]");
  const position = controls.querySelector("[data-position]");
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  let playing = !motion.matches;
  let index = 0;
  let timer;

  function show(step) {
    slides[index].hidden = true;
    index = (index + step + slides.length) % slides.length;
    slides[index].hidden = false;
    position.textContent = (index + 1) + " / " + slides.length;
  }

  function schedule() {
    clearInterval(timer);
    rotation.textContent = playing ? "Pause" : "Play";
    rotation.setAttribute("aria-label", rotation.textContent + " automatic story rotation");
    if (playing && !document.hidden && !region.matches(":hover")) {
      timer = setInterval(() => show(1), 5000);
    }
  }

  function pause() {
    playing = false;
    schedule();
  }

  controls.querySelector("[data-next]").onclick = () => { pause(); show(1); };
  controls.querySelector("[data-previous]").onclick = () => { pause(); show(-1); };
  rotation.onclick = () => { playing = !playing; schedule(); };
  region.addEventListener("focusin", event => {
    if (event.target.matches(":focus-visible")) pause();
  });
  region.addEventListener("mouseenter", schedule);
  region.addEventListener("mouseleave", schedule);
  document.addEventListener("visibilitychange", schedule);
  motion.addEventListener("change", () => { if (motion.matches) pause(); });
  controls.hidden = false;
  schedule();
})();
