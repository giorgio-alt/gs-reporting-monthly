export function KpiCard({ icon = "", label, value, note = "" }) {
  return `
    <div class="mainKpi">
      ${icon ? `<div class="emoji">${icon}</div>` : ""}
      <span>${label}</span>
      <strong>${value}</strong>
      ${note ? `<small>${note}</small>` : ""}
    </div>
  `;
}
