(() => {
  const region = document.querySelector(".featured-news");
  const slides = region.querySelectorAll(".featured-story");
  const controls = region.querySelector(".story-controls");
  const position = controls.querySelector("[data-position]");
  const track = controls.querySelector(".story-track");
  const motion = matchMedia("(prefers-reduced-motion: reduce)");
  const seconds = Number(region.dataset.delay);
  const delay = Number.isFinite(seconds) && seconds >= 0 ? seconds * 1000 : 5000;
  let index = 0;
  let timer;

  function show(step) {
    slides[index].hidden = true;
    index = (index + step + slides.length) % slides.length;
    slides[index].hidden = false;
    position.textContent = (index + 1) + " / " + slides.length;
    track.style.setProperty("--story-offset", (100 * index) + "%");
  }

  function schedule() {
    clearInterval(timer);
    if (delay && !motion.matches && !document.hidden && !region.matches(":hover, :focus-within")) {
      timer = setInterval(() => show(1), delay);
    }
  }

  controls.querySelector("[data-next]").onclick = () => { show(1); schedule(); };
  controls.querySelector("[data-previous]").onclick = () => { show(-1); schedule(); };
  region.addEventListener("mouseenter", schedule);
  region.addEventListener("mouseleave", schedule);
  region.addEventListener("focusin", schedule);
  region.addEventListener("focusout", () => queueMicrotask(schedule));
  document.addEventListener("visibilitychange", schedule);
  motion.addEventListener("change", schedule);
  controls.hidden = false;
  schedule();
})();
