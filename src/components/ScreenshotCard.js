export function ScreenshotCard({ href, src = href, title, caption = "", badge = "" }) {
  return `
    <a class="creativeThumb" href="${href}">
      <img src="${src}" alt="${title}" loading="lazy" decoding="async">
      <div>
        <h4>${title}</h4>
        ${caption ? `<p>${caption}</p>` : ""}
      </div>
      ${badge ? `<span class="visualBadge">${badge}</span>` : ""}
    </a>
  `;
}
