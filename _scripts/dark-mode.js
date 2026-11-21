{
  const system = window.matchMedia("(prefers-color-scheme: dark)");
  const choices = ["auto", "day", "dark"];
  let choice = "auto";

  try {
    const saved = localStorage.getItem("colour-theme");
    const legacy = localStorage.getItem("dark-mode");
    if (choices.includes(saved)) choice = saved;
    else if (legacy === "true") choice = "dark";
    else if (legacy === "false") choice = "day";
  } catch {
    // Storage may be unavailable in private browsing.
  }

  let boundaryTimer;
  function applyTheme() {
    clearTimeout(boundaryTimer);
    const now = new Date();
    const hour = now.getHours();
    const night = hour < 7 || hour >= 20;
    const dark = choice === "dark" || (choice === "auto" && (system.matches || night));
    if (choice === "auto") {
      const next = new Date(now);
      next.setHours(hour < 7 ? 7 : hour < 20 ? 20 : 31, 0, 0, 0);
      boundaryTimer = setTimeout(applyTheme, next - now);
    }
    document.documentElement.dataset.dark = String(dark);
    document.documentElement.style.colorScheme = dark ? "dark" : "light";
  }

  applyTheme();
  window.addEventListener("pageshow", applyTheme);
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) applyTheme();
  });
  system.addEventListener("change", applyTheme);
  document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("theme-choice");
    select.value = choice;
    select.addEventListener("change", () => {
      choice = select.value;
      applyTheme();
      try {
        localStorage.setItem("colour-theme", choice);
      } catch {
        // The selection still applies to the current page.
      }
    });
  });
}
