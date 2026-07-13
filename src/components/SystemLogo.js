export const systemLogos = {
  googleAds: {
    label: "Google Ads",
    file: "/assets/logos/google-ads.svg",
    fallbackFile: "/assets/logos/google-ads.png"
  },
  googleAnalytics: {
    label: "Google Analytics / GA4",
    file: "/assets/logos/google-analytics.svg",
    fallbackFile: "/assets/logos/google-analytics.png"
  },
  meta: {
    label: "Meta",
    file: "/assets/logos/meta.svg"
  },
  seznamSklik: {
    label: "Seznam / Sklik",
    file: "/assets/logos/seznam.svg"
  },
  heureka: {
    label: "Heureka",
    file: "/assets/logos/heureka-badge.svg"
  },
  zbozi: {
    label: "Zbozi.cz",
    file: "/assets/logos/zbozi.svg",
    fallbackFile: "/assets/logos/zbozi.ico"
  },
  microsoftClarity: {
    label: "Microsoft Clarity",
    file: "/assets/logos/microsoft-clarity.ico"
  }
};

export function SystemLogo({ system, label, size = "inline", className = "" }) {
  const logo = systemLogos[system];
  const alt = label || logo?.label || system;
  if (!logo?.file) return `<span class="systemLogoFallback ${className}">${alt}</span>`;

  return `<img class="systemLogo systemLogo--${size} ${className}" src="${logo.file}" alt="${alt}" loading="lazy" decoding="async">`;
}

export function SystemLogoLabel({ system, label, text, size = "inline", className = "" }) {
  const visibleText = text || label || systemLogos[system]?.label || system;
  return `<span class="systemLogoLabel ${className}">${SystemLogo({ system, label: visibleText, size })}<span>${visibleText}</span></span>`;
}
