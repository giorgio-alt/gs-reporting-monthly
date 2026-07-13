export function Header(meta) {
  return `
    <header class="header glass">
      <div class="brand">
        <div class="gsmark"><img src="${meta.logo}" alt="${meta.brand} logo" loading="eager" decoding="async"></div>
        <div>
          <div class="eyebrow">${meta.eyebrow}</div>
          <h1>${meta.title}</h1>
        </div>
      </div>
      <div class="version">${meta.version}</div>
    </header>
  `;
}
