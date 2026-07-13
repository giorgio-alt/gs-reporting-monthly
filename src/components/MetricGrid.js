export function MetricGrid(items, className = "") {
  return `
    <div class="metricGrid ${className}">
      ${items
        .map(
          (item) => `
            <div class="metricTile">
              <span>${item.label}</span>
              <strong>${item.value}</strong>
              ${item.note ? `<small>${item.note}</small>` : ""}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}
