export function initFunnelTrendToggles() {
  document.querySelectorAll(".funnelTimeBlock").forEach((block) => {
    const cards = [...block.querySelectorAll("[data-funnel-card]")];
    const panels = [...block.querySelectorAll("[data-funnel-panel]")];

    const activatePanel = (id) => {
      cards.forEach((card) => {
        const isActive = card.dataset.funnelCard === id;
        const cta = card.querySelector(".funnelCardCta");
        card.classList.toggle("is-active", isActive);
        card.setAttribute("aria-expanded", String(isActive));
        if (cta) cta.textContent = isActive ? "Detail otevřený" : "Zobrazit detail";
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.funnelPanel === id;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    };

    cards.forEach((card) => {
      card.addEventListener("click", () => activatePanel(card.dataset.funnelCard));
      card.addEventListener("keydown", (event) => {
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        activatePanel(card.dataset.funnelCard);
      });
    });
  });

  document.querySelectorAll(".funnelDetailPanel").forEach((panel) => {
    const toggles = [...panel.querySelectorAll(".funnelMetricToggle")];
    const panes = [...panel.querySelectorAll(".funnelTrendPane")];

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const metric = toggle.dataset.funnelMetric;
        toggles.forEach((item) => item.classList.toggle("is-active", item === toggle));
        panes.forEach((pane) => pane.classList.toggle("is-active", pane.dataset.funnelPane === metric));
      });
    });
  });
}
