export const reportMeta = {
  client: "Green Swan / GS Klub",
  brand: "GS Klub.cz",
  title: "Vyhodnocení 06/2026 · červen 2026",
  eyebrow: "Měsíční vyhodnocení výkonu",
  version: "Červen 2026",
  footer: "GS Klub · měsíční vyhodnocení výkonu · červen 2026",
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
      description: "Obchodní realita června, plán, PNO z reality a referenční analytický trend GA4.",
      defaultOpen: true,
      chips: ["Realita 26: 3,75 mil. Kč", "Plán 26: 4,06 mil. Kč", "PNO 18,89 %", "YoY +9,77 %"]
    },
    {
      id: "produkty",
      number: "02",
      title: "Výkon produktů",
      description: "Červnový produktový výkon, produktové skupiny, blog a zařízení v klientském reportovém pohledu.",
      chips: ["Tržba z položek +6,2 %", "Zakoupené položky 9 499", "Blog -4,55 %", "Desktop tržby +2,74 %"]
    },
    {
      id: "ppc",
      number: "03",
      title: "Google Ads & Sklik",
      description: "PMax výkon, produktové clustery z Karsa AI, ROAS vs. tROAS a červnové výsledky Skliku.",
      chips: ["PMax clustery", "Karsa AI", "ROAS vs. tROAS", "Sklik +65 % prokliků"]
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
