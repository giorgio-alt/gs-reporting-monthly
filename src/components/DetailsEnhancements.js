const detailsMotion = {
  duration: 260,
  easing: "cubic-bezier(0.22, 1, 0.36, 1)"
};

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const scrollToSummary = (summary) => {
  summary.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "center"
  });
};

function addCollapseButton(details) {
  if (details.querySelector(":scope > .detailsCollapseFooter")) return;

  const footer = document.createElement("div");
  footer.className = "detailsCollapseFooter";

  const button = document.createElement("button");
  button.type = "button";
  button.className = "detailsCollapseBtn";
  button.innerHTML = `<span aria-hidden="true">↑</span> Sbalit sekci`;

  footer.append(button);
  details.append(footer);

  button.addEventListener("click", () => {
    collapseDetails(details, true);
  });
}

function expandDetails(details) {
  const summary = details.querySelector("summary");
  if (!summary || details.open) return;

  summary.setAttribute("aria-expanded", "true");

  if (prefersReducedMotion()) {
    details.open = true;
    return;
  }

  details.dataset.animating = "true";
  details.style.overflow = "hidden";
  details.style.height = `${summary.offsetHeight}px`;
  details.open = true;

  const targetHeight = details.scrollHeight;
  const animation = details.animate(
    { height: [`${summary.offsetHeight}px`, `${targetHeight}px`] },
    detailsMotion
  );

  animation.onfinish = () => {
    details.style.height = "";
    details.style.overflow = "";
    delete details.dataset.animating;
  };
  animation.oncancel = animation.onfinish;
}

function collapseDetails(details, shouldScroll = false) {
  const summary = details.querySelector("summary");
  if (!summary || !details.open) return;

  summary.setAttribute("aria-expanded", "false");

  const finish = () => {
    details.open = false;
    if (shouldScroll) scrollToSummary(summary);
  };

  if (prefersReducedMotion()) {
    finish();
    return;
  }

  details.dataset.animating = "true";
  details.style.overflow = "hidden";

  const startHeight = details.offsetHeight;
  const targetHeight = summary.offsetHeight;
  const animation = details.animate(
    { height: [`${startHeight}px`, `${targetHeight}px`] },
    detailsMotion
  );

  animation.onfinish = () => {
    finish();
    details.style.height = "";
    details.style.overflow = "";
    delete details.dataset.animating;
  };
  animation.oncancel = animation.onfinish;
}

export function initDetailsEnhancements() {
  document.querySelectorAll("details").forEach((details) => {
    if (details.dataset.detailsEnhanced === "true") return;

    const summary = details.querySelector("summary");
    if (!summary) return;

    details.dataset.detailsEnhanced = "true";
    summary.setAttribute("aria-expanded", String(details.open));
    addCollapseButton(details);

    summary.addEventListener("click", (event) => {
      if (event.defaultPrevented) return;
      event.preventDefault();
      if (details.dataset.animating === "true") return;

      if (details.open) {
        collapseDetails(details);
      } else {
        expandDetails(details);
      }
    });
  });
}
