export const reportMeta = {
  client: "Green Swan / GS Klub",
  brand: "GS Klub.cz",
  title: "Vyhodnocení 07/2026 · červenec 2026",
  eyebrow: "Měsíční vyhodnocení výkonu",
  version: "Červenec 2026",
  footer: "GS Klub · měsíční vyhodnocení výkonu · červenec 2026",
  logo: "assets/brand/gs-klub-logo-transparent.png",
  agencyLogo: "assets/brand/deserved-agency-logo.png",
  navigation: [
    { id: "dashboard", label: "01 Dashboard" },
    { id: "produkty", label: "02 Výkon produktů" },
    { id: "ppc", label: "03 Google Ads & Sklik" },
    { id: "meta", label: "04 META" },
    { id: "projekty", label: "05 Projekty" }
  ],
  chapters: [
    {
      id: "dashboard",
      number: "01",
      title: "Dashboard",
      description: "Obchodní realita července, plán, PNO z reality a referenční analytický trend GA4.",
      defaultOpen: true,
      chips: ["Realita 26: 3,60 mil. Kč", "Plán 26: 4,74 mil. Kč", "PNO 18,77 %", "YoY -22,23 %"]
    },
    {
      id: "produkty",
      number: "02",
      title: "Výkon produktů",
      description: "Červencový produktový výkon, produktové skupiny, blog, zařízení a behaviorální vývoj v čase.",
      chips: ["Tržba z položek +0,89 %", "Zakoupené položky 9 661", "Blog +0,89 %", "Clarity 3 měsíce"]
    },
    {
      id: "ppc",
      number: "03",
      title: "Google Ads & Sklik",
      description: "Červencový PMax výkon, produktové clustery z Karsa AI, AI Max a výsledky Skliku.",
      chips: ["PMax 07/2026", "AI Max", "Karsa AI", "Sklik CPC 7,49 Kč"]
    },
    {
      id: "meta",
      number: "04",
      title: "META",
      description: "Souhrn META kampaní s detailními kartami, kreativami a komentářem k PNO i počtu nákupů.",
      chips: ["ASC kampaně", "Retargeting", "Produktové kampaně", "Boostování"]
    },
    {
      id: "projekty",
      number: "05",
      title: "Projekty",
      description: "Stručný přehled priorit pro další období: Lead kampaň, retence a Seznam PMAX.",
      chips: ["Lead kampaň", "Retence", "Seznam PMAX"]
    }
  ]
};
