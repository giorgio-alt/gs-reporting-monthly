export function initBehaviorTooltips() {
  if (document.documentElement.dataset.behaviorTooltipsEnhanced === "true") return;
  document.documentElement.dataset.behaviorTooltipsEnhanced = "true";

  const closeAll = (except) => {
    document.querySelectorAll(".behaviorInfoWrap.is-open").forEach((wrap) => {
      if (wrap === except) return;
      wrap.classList.remove("is-open");
      wrap.querySelector(".behaviorInfoBtn")?.setAttribute("aria-expanded", "false");
    });
  };

  document.querySelectorAll(".behaviorInfoBtn").forEach((button) => {
    button.setAttribute("aria-expanded", "false");
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest?.(".behaviorInfoBtn");
    const wrap = button?.closest(".behaviorInfoWrap");

    if (!button || !wrap) {
      closeAll();
      return;
    }

    event.preventDefault();
    const shouldOpen = !wrap.classList.contains("is-open");
    closeAll(wrap);
    wrap.classList.toggle("is-open", shouldOpen);
    button.setAttribute("aria-expanded", String(shouldOpen));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeAll();
  });
}
