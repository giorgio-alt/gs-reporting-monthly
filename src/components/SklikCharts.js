export function initSklikCharts() {
  document.querySelectorAll("[data-sklik-chart]").forEach((chart) => {
    const toggles = [...chart.querySelectorAll("[data-sklik-chart-toggle]")];
    const panels = [...chart.querySelectorAll("[data-sklik-chart-panel]")];

    const activate = (id) => {
      toggles.forEach((toggle) => {
        const isActive = toggle.dataset.sklikChartToggle === id;
        toggle.classList.toggle("is-active", isActive);
        toggle.setAttribute("aria-selected", String(isActive));
      });

      panels.forEach((panel) => {
        const isActive = panel.dataset.sklikChartPanel === id;
        panel.classList.toggle("is-active", isActive);
        panel.hidden = !isActive;
      });
    };

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", () => activate(toggle.dataset.sklikChartToggle));
    });
  });
}
