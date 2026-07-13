export function CampaignCard({ title, summary = "", body = "" }) {
  return `
    <details class="metaCampaign">
      <summary>
        <div class="metaSummary">
          <h3>${title}</h3>
          ${summary ? `<p>${summary}</p>` : ""}
        </div>
        <span class="detailBtn">Detail</span>
      </summary>
      <div class="metaBody">${body}</div>
    </details>
  `;
}
