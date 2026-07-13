export function Navigation(items) {
  return `
    <nav class="nav glass">
      ${items
        .map((item, index) => `<a class="${index === 0 ? "active" : ""}" href="#${item.id}">${item.label}</a>`)
        .join("")}
    </nav>
  `;
}

export function initNavigation() {
  const links = [...document.querySelectorAll(".nav a")];
  const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);

  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}
