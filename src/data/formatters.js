export function formatCurrency(value) {
  return `${Math.round(value).toLocaleString("cs-CZ")} Kč`;
}

export function formatPercent(value, decimals = 2) {
  return `${value.toLocaleString("cs-CZ", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })} %`;
}

export function formatNumber(value, decimals = 0) {
  return value.toLocaleString("cs-CZ", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
}
