(() => {
  const endpoint = document.currentScript.dataset.likesApi;
  const groups = new Map();
  const observer = new IntersectionObserver(entries => {
    for (const {target, isIntersecting} of entries) {
      if (!isIntersecting) continue;
      observer.unobserve(target);
      const key = target.dataset.likeKey;
      const group = groups.get(key);
      if (!group.started) {
        group.started = true;
        update(key, "read");
      }
    }
  });

  async function update(key, action) {
    const group = groups.get(key);
    if (group.busy) return;
    group.busy = true;
    const storageKey = "ml4pnp-like:" + key;
    for (const control of group.controls) control.querySelector("button").disabled = true;
    try {
      let token = localStorage.getItem(storageKey);
      if (!token && action === "like") {
        token = crypto.randomUUID();
        localStorage.setItem(storageKey, token);
      }
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        credentials: "omit",
        referrerPolicy: "no-referrer",
        body: JSON.stringify({item: key, token, action})
      });
      if (!response.ok) throw new Error("Likes unavailable");
      const {count, liked} = await response.json();
      for (const control of group.controls) {
        const button = control.querySelector("button");
        button.hidden = false;
        button.textContent = (liked ? "♥" : "♡") + " " + count;
        button.setAttribute("aria-pressed", String(liked));
        button.setAttribute("aria-label", "Like " + control.dataset.likeLabel + ", " + count + " likes");
        control.querySelector("small").textContent = action === "read" ? "" : (liked ? "Liked" : "Like removed");
      }
    } catch {
      if (action !== "read") {
        for (const control of group.controls) control.querySelector("small").textContent = "Couldn’t confirm. Try again.";
      }
    } finally {
      group.busy = false;
      for (const control of group.controls) control.querySelector("button").disabled = false;
    }
  }

  for (const control of document.querySelectorAll(".like-control")) {
    const key = control.dataset.likeKey;
    if (!groups.has(key)) groups.set(key, {controls: []});
    groups.get(key).controls.push(control);
    const button = control.querySelector("button");
    button.addEventListener("click", () => update(key, button.getAttribute("aria-pressed") === "true" ? "unlike" : "like"));
    observer.observe(control);
  }
})();
