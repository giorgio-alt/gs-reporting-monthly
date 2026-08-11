export function initMetaBoostingTabs() {
  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-boost-month-target]");
    if (!trigger) return;

    const switcher = trigger.closest(".metaBoostMonthSwitcher");
    const id = trigger.dataset.boostMonthTarget;
    const input = switcher?.querySelector(`#meta-boost-${id}`);
    if (!input) return;

    input.checked = true;
    switcher.querySelectorAll("[data-boost-month-target]").forEach((item) => {
      item.setAttribute("aria-selected", String(item.dataset.boostMonthTarget === id));
    });
  });
}
