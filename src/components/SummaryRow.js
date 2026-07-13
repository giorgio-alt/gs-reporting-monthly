export function SummaryRow(cells, className = "summaryRow") {
  return `<tr class="${className}">${cells.map((cell) => `<td>${cell}</td>`).join("")}</tr>`;
}
