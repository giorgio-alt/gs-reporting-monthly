import extractedMetaAssets from "./meta-extracted-assets.json";
import { SystemLogo } from "../components/SystemLogo.js";

const hiddenReportAssetIds = new Set([
  "slide-37-asset-02",
  "slide-38-asset-02",
  "slide-39-asset-02",
  "slide-41-asset-02",
  "slide-43-asset-02",
  "slide-46-asset-02",
  "slide-48-asset-02"
]);

const assetLabels = {
  "slide-37-asset-01": { campaignId: "dynamic-retargeting", type: "performance", label: "Červnový výkon kampaně", alt: "Dynamický retargeting — červnový výkon kampaně" },
  "slide-37-asset-02": { campaignId: "dynamic-retargeting", type: "performance", label: "Květnový výkon kampaně", alt: "Dynamický retargeting — květnový výkon kampaně" },
  "slide-38-asset-01": { campaignId: "advantage-shopping", type: "performance", label: "Červnový výkon kampaně", alt: "Advantage+ shopping — červnový výkon kampaně" },
  "slide-38-asset-02": { campaignId: "advantage-shopping", type: "performance", label: "Květnový výkon kampaně", alt: "Advantage+ shopping — květnový výkon kampaně" },
  "slide-39-asset-01": { campaignId: "merilin-asc", type: "performance", label: "Červnový výkon kampaně", alt: "Merilin ASC — červnový výkon kampaně" },
  "slide-39-asset-02": { campaignId: "merilin-asc", type: "performance", label: "Květnový výkon kampaně", alt: "Merilin ASC — květnový výkon kampaně" },
  "slide-40-asset-01": { campaignId: "merilin-asc", type: "creative-results", label: "Výsledky top kreativy", alt: "Merilin ASC — výsledky top kreativy" },
  "slide-40-asset-02": { campaignId: "merilin-asc", type: "creative", label: "Top kreativa", alt: "Merilin ASC — top kreativa" },
  "slide-41-asset-01": { campaignId: "kamzik-asc", type: "performance", label: "Červnový výkon kampaně", alt: "Kamzík ASC — červnový výkon kampaně" },
  "slide-41-asset-02": { campaignId: "kamzik-asc", type: "performance", label: "Květnový výkon kampaně", alt: "Kamzík ASC — květnový výkon kampaně" },
  "slide-42-asset-01": { campaignId: "kamzik-asc", type: "creative-results", label: "Výsledky top kreativy", alt: "Kamzík ASC — výsledky top kreativy" },
  "slide-42-asset-02": { campaignId: "kamzik-asc", type: "creative", label: "Top kreativa", alt: "Kamzík ASC — top kreativa" },
  "slide-43-asset-01": { campaignId: "condro-perfect-asc", type: "performance", label: "Červnový výkon kampaně", alt: "Condro Perfect ASC — červnový výkon kampaně" },
  "slide-43-asset-02": { campaignId: "condro-perfect-asc", type: "performance", label: "Květnový výkon kampaně", alt: "Condro Perfect ASC — květnový výkon kampaně" },
  "slide-44-asset-01": { campaignId: "condro-perfect-asc", type: "creative-results", label: "Výsledky top kreativy", alt: "Condro Perfect ASC — výsledky top kreativy" },
  "slide-44-asset-02": { campaignId: "condro-perfect-asc", type: "creative", label: "Top kreativa", alt: "Condro Perfect ASC — top kreativa" },
  "slide-46-asset-01": { campaignId: "red3-asc", type: "performance", label: "Červnový výkon kampaně", alt: "RED3 ASC — červnový výkon kampaně" },
  "slide-46-asset-02": { campaignId: "red3-asc", type: "performance", label: "Květnový výkon kampaně", alt: "RED3 ASC — květnový výkon kampaně" },
  "slide-47-asset-01": { campaignId: "red3-asc", type: "creative-results", label: "Výsledky top kreativy", alt: "RED3 ASC — výsledky top kreativy" },
  "slide-47-asset-02": { campaignId: "red3-asc", type: "creative", label: "Top kreativa", alt: "RED3 ASC — top kreativa" },
  "slide-48-asset-01": { campaignId: "lead-campaign", type: "performance", label: "Červnový výkon kampaně", alt: "Lead kampaň — červnový výkon kampaně" },
  "slide-48-asset-02": { campaignId: "lead-campaign", type: "performance", label: "Květnový výkon kampaně", alt: "Lead kampaň — květnový výkon kampaně" },
  "slide-50-asset-01": { campaignId: "flight-betakaroten", type: "creative", label: "Ukázka kreativy", alt: "Kampaň Betakaroten — ukázka kreativy" },
  "slide-50-asset-02": { campaignId: "flight-betakaroten", type: "adset-detail", label: "Detail ad setu kampaně", alt: "Kampaň Betakaroten — detail ad setu kampaně" },
  "slide-50-asset-03": { campaignId: "flight-betakaroten", type: "creative-results", label: "Výsledky kreativy", alt: "Kampaň Betakaroten — výsledky kreativy" },
  "slide-51-asset-01": { campaignId: "flight-omega3", type: "creative", label: "Ukázka kreativy", alt: "Kampaň Omega3 — ukázka kreativy" },
  "slide-51-asset-02": { campaignId: "flight-omega3", type: "adset-detail", label: "Detail kampaně", alt: "Kampaň Omega3 — detail kampaně" },
  "slide-51-asset-03": { campaignId: "flight-omega3", type: "creative-results", label: "Výsledky kreativy", alt: "Kampaň Omega3 — výsledky kreativy" },
  "slide-52-asset-01": { campaignId: "flight-letni-slevy", type: "creative", label: "Ukázka kreativy", alt: "Kampaň Týden letních slev — ukázka kreativy" },
  "slide-52-asset-02": { campaignId: "flight-letni-slevy", type: "adset-detail", label: "Detail ad setu kampaně", alt: "Kampaň Týden letních slev — detail ad setu kampaně" },
  "slide-52-asset-03": { campaignId: "flight-letni-slevy", type: "creative-results", label: "Výsledky kreativy", alt: "Kampaň Týden letních slev — výsledky kreativy" },
  "slide-53-asset-01": { campaignId: "flight-zelezo", type: "creative", label: "Ukázka kreativy", alt: "Kampaň Železo — ukázka kreativy" },
  "slide-53-asset-02": { campaignId: "flight-zelezo", type: "adset-detail", label: "Detail ad setu kampaně", alt: "Kampaň Železo — detail ad setu kampaně" },
  "slide-53-asset-03": { campaignId: "flight-zelezo", type: "creative-results", label: "Výsledky kreativy", alt: "Kampaň Železo — výsledky kreativy" }
};

const julyMetaAssets = [
  {
    id: "advantage-shopping-07-2026",
    campaignId: "advantage-shopping",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Advantage+ shopping — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/campaigns/advantage-shopping-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/advantage-shopping-07-2026.png",
    image_size: { width: 2618, height: 828 }
  },
  {
    id: "drtg-07-2026",
    campaignId: "dynamic-retargeting",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Dynamický retargeting — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/campaigns/drtg-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/drtg-07-2026.png",
    image_size: { width: 2622, height: 1258 }
  },
  {
    id: "merilin-overview-07-2026",
    campaignId: "merilin-asc",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Merilin ASC — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/campaigns/merilin-overview-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/merilin-overview-07-2026.png",
    image_size: { width: 2654, height: 804 }
  },
  {
    id: "merilin-chart-07-2026",
    campaignId: "merilin-asc",
    type: "creative-results",
    label: "Výsledky kreativy",
    alt: "Merilin ASC — výsledky kreativy",
    src: "assets/report-jul-26/meta/campaigns/merilin-chart-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/merilin-chart-07-2026.png",
    image_size: { width: 2480, height: 542 }
  },
  {
    id: "merilin-top-creative-07-2026",
    campaignId: "merilin-asc",
    type: "creative",
    label: "Top kreativa",
    alt: "Merilin ASC — top kreativa",
    src: "assets/report-jul-26/meta/campaigns/merilin-top-creative-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/merilin-top-creative-07-2026.png",
    image_size: { width: 420, height: 746 }
  },
  {
    id: "kamzik-overview-07-2026",
    campaignId: "kamzik-asc",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Kamzík ASC — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/campaigns/kamzik-overview-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/kamzik-overview-07-2026.png",
    image_size: { width: 2626, height: 744 }
  },
  {
    id: "kamzik-chart-07-2026",
    campaignId: "kamzik-asc",
    type: "creative-results",
    label: "Výsledky kreativy",
    alt: "Kamzík ASC — výsledky kreativy",
    src: "assets/report-jul-26/meta/campaigns/kamzik-chart-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/kamzik-chart-07-2026.png",
    image_size: { width: 2458, height: 458 }
  },
  {
    id: "kamzik-top-creative-07-2026",
    campaignId: "kamzik-asc",
    type: "creative",
    label: "Top kreativa",
    alt: "Kamzík ASC — top kreativa",
    src: "assets/report-jul-26/meta/campaigns/kamzik-top-creative-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/kamzik-top-creative-07-2026.png",
    image_size: { width: 358, height: 732 }
  },
  {
    id: "red3-overview-07-2026",
    campaignId: "red3-asc",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "RED3 ASC — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/campaigns/red3-overview-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/red3-overview-07-2026.png",
    image_size: { width: 2566, height: 576 }
  },
  {
    id: "red3-chart-07-2026",
    campaignId: "red3-asc",
    type: "creative-results",
    label: "Výsledky kreativy",
    alt: "RED3 ASC — výsledky kreativy",
    src: "assets/report-jul-26/meta/campaigns/red3-chart-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/red3-chart-07-2026.png",
    image_size: { width: 2488, height: 668 }
  },
  {
    id: "red3-top-creative-07-2026",
    campaignId: "red3-asc",
    type: "creative",
    label: "Top kreativa",
    alt: "RED3 ASC — top kreativa",
    src: "assets/report-jul-26/meta/campaigns/red3-top-creative-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/red3-top-creative-07-2026.png",
    image_size: { width: 342, height: 734 }
  },
  {
    id: "lead-first-purchase-07-2026",
    campaignId: "lead-campaign",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Lead kampaň — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/campaigns/lead-first-purchase-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/campaigns/lead-first-purchase-07-2026.png",
    image_size: { width: 2708, height: 792 }
  },
  {
    id: "flight-detox-creative-07-2026",
    campaignId: "flight-detox",
    type: "creative",
    label: "Top kreativa",
    alt: "Kampaň Detox — top kreativa",
    src: "assets/report-jul-26/meta/flights/detox-top-creative-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/detox-top-creative-07-2026.png",
    image_size: { width: 364, height: 738 }
  },
  {
    id: "flight-detox-overview-07-2026",
    campaignId: "flight-detox",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Kampaň Detox — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/flights/detox-overview-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/detox-overview-07-2026.png",
    image_size: { width: 2496, height: 814 }
  },
  {
    id: "flight-detox-chart-07-2026",
    campaignId: "flight-detox",
    type: "creative-results",
    label: "Výsledky kreativy",
    alt: "Kampaň Detox — výsledky kreativy",
    src: "assets/report-jul-26/meta/flights/detox-chart-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/detox-chart-07-2026.png",
    image_size: { width: 2484, height: 526 }
  },
  {
    id: "flight-cestovatelsky-balicek-creative-07-2026",
    campaignId: "flight-cestovatelsky-balicek",
    type: "creative",
    label: "Top kreativa",
    alt: "Kampaň Cestovatelský balíček — top kreativa",
    src: "assets/report-jul-26/meta/flights/cestovatelsky-balicek-top-creative-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/cestovatelsky-balicek-top-creative-07-2026.png",
    image_size: { width: 380, height: 738 }
  },
  {
    id: "flight-cestovatelsky-balicek-overview-07-2026",
    campaignId: "flight-cestovatelsky-balicek",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Kampaň Cestovatelský balíček — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/flights/cestovatelsky-balicek-overview-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/cestovatelsky-balicek-overview-07-2026.png",
    image_size: { width: 2496, height: 734 }
  },
  {
    id: "flight-cestovatelsky-balicek-chart-07-2026",
    campaignId: "flight-cestovatelsky-balicek",
    type: "creative-results",
    label: "Výsledky kreativy",
    alt: "Kampaň Cestovatelský balíček — výsledky kreativy",
    src: "assets/report-jul-26/meta/flights/cestovatelsky-balicek-chart-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/cestovatelsky-balicek-chart-07-2026.png",
    image_size: { width: 2484, height: 886 }
  },
  {
    id: "flight-krasa-creative-07-2026",
    campaignId: "flight-krasa",
    type: "creative",
    label: "Top kreativa",
    alt: "Kampaň Krása — top kreativa",
    src: "assets/report-jul-26/meta/flights/krasa-top-creative-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/krasa-top-creative-07-2026.png",
    image_size: { width: 346, height: 728 }
  },
  {
    id: "flight-krasa-overview-07-2026",
    campaignId: "flight-krasa",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Kampaň Krása — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/flights/krasa-overview-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/krasa-overview-07-2026.png",
    image_size: { width: 2522, height: 640 }
  },
  {
    id: "flight-krasa-chart-07-2026",
    campaignId: "flight-krasa",
    type: "creative-results",
    label: "Výsledky kreativy",
    alt: "Kampaň Krása — výsledky kreativy",
    src: "assets/report-jul-26/meta/flights/krasa-chart-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/krasa-chart-07-2026.png",
    image_size: { width: 2484, height: 906 }
  },
  {
    id: "flight-mamavit1-creative-07-2026",
    campaignId: "flight-mamavit1",
    type: "creative",
    label: "Top kreativa",
    alt: "Kampaň Mamavit 1 — top kreativa",
    src: "assets/report-jul-26/meta/flights/mamavit1-top-creative-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/mamavit1-top-creative-07-2026.png",
    image_size: { width: 350, height: 740 }
  },
  {
    id: "flight-mamavit1-overview-07-2026",
    campaignId: "flight-mamavit1",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Kampaň Mamavit 1 — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/flights/mamavit1-overview-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/mamavit1-overview-07-2026.png",
    image_size: { width: 2616, height: 896 }
  },
  {
    id: "flight-mamavit1-chart-07-2026",
    campaignId: "flight-mamavit1",
    type: "creative-results",
    label: "Výsledky kreativy",
    alt: "Kampaň Mamavit 1 — výsledky kreativy",
    src: "assets/report-jul-26/meta/flights/mamavit1-chart-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/mamavit1-chart-07-2026.png",
    image_size: { width: 2474, height: 532 }
  },
  {
    id: "flight-mamavit2-creative-07-2026",
    campaignId: "flight-mamavit2",
    type: "creative",
    label: "Top kreativa",
    alt: "Kampaň Mamavit 2 — top kreativa",
    src: "assets/report-jul-26/meta/flights/mamavit2-top-creative-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/mamavit2-top-creative-07-2026.png",
    image_size: { width: 362, height: 732 }
  },
  {
    id: "flight-mamavit2-overview-07-2026",
    campaignId: "flight-mamavit2",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Kampaň Mamavit 2 — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/flights/mamavit2-overview-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/mamavit2-overview-07-2026.png",
    image_size: { width: 2488, height: 548 }
  },
  {
    id: "flight-mamavit2-chart-07-2026",
    campaignId: "flight-mamavit2",
    type: "creative-results",
    label: "Výsledky kreativy",
    alt: "Kampaň Mamavit 2 — výsledky kreativy",
    src: "assets/report-jul-26/meta/flights/mamavit2-chart-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/mamavit2-chart-07-2026.png",
    image_size: { width: 2496, height: 634 }
  },
  {
    id: "flight-2plus1-creative-07-2026",
    campaignId: "flight-2plus1",
    type: "creative",
    label: "Top kreativa",
    alt: "Kampaň 2+1 zdarma — top kreativa",
    src: "assets/report-jul-26/meta/flights/2plus1-top-creative-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/2plus1-top-creative-07-2026.png",
    image_size: { width: 318, height: 738 }
  },
  {
    id: "flight-2plus1-overview-07-2026",
    campaignId: "flight-2plus1",
    type: "performance",
    label: "Červencový výkon kampaně",
    alt: "Kampaň 2+1 zdarma — červencový výkon kampaně",
    src: "assets/report-jul-26/meta/flights/2plus1-overview-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/2plus1-overview-07-2026.png",
    image_size: { width: 2494, height: 648 }
  },
  {
    id: "flight-2plus1-chart-07-2026",
    campaignId: "flight-2plus1",
    type: "creative-results",
    label: "Výsledky kreativy",
    alt: "Kampaň 2+1 zdarma — výsledky kreativy",
    src: "assets/report-jul-26/meta/flights/2plus1-chart-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/flights/2plus1-chart-07-2026.png",
    image_size: { width: 2504, height: 1144 }
  }
];

export const metaAssets = [
  ...extractedMetaAssets
    .filter((asset) => assetLabels[asset.id] && !hiddenReportAssetIds.has(asset.id))
    .map((asset) => ({
      ...asset,
      ...assetLabels[asset.id],
      src: asset.thumbnail_path,
      fullSrc: asset.full_image_path,
      sourceSlide: asset.slide_number
    })),
  ...julyMetaAssets
];

const longTermCampaigns = [
  {
    id: "dynamic-retargeting",
    title: "🧨 Dynamický retargeting",
    period: "07/2026",
    previousPeriod: "06/2026",
    conclusion: "Výrazně lepší PNO při téměř stejném počtu nákupů.",
    current: { spend: "6 473 Kč", purchases: "35", pno: "20,10 %", value: "32 205 Kč", clicks: "772", ctr: "2,05 %", frequency: "6,37" },
    sourceData: { period: "2026-07", spend: 6473.07, purchases: 35, pno: 20.10, purchaseValue: 32204.53, linkClicks: 772, ctr: 2.05, frequency: 6.37 },
    previous: { spend: "9 021 Kč", purchases: "36", pno: "35,59 %", value: "25 350 Kč", clicks: "950", ctr: "2,12 %", frequency: "6,39" },
    deltas: [
      { label: "Nákupy", value: "↓ 1", tone: "bad" },
      { label: "PNO", value: "↓ 15,49 p. b.", tone: "good" },
      { label: "Investice", value: "↓ 2 548 Kč", tone: "neutral" }
    ],
    assets: ["drtg-07-2026", "slide-37-asset-01"],
    interpretation: {
      happened: "Retargeting v červenci ubral spend z 9 021 Kč na 6 473 Kč, ale prakticky udržel objem: 35 nákupů proti 36 v červnu. Hodnota nákupů přitom vzrostla na 32 205 Kč.",
      meaning: "Tady nejde o slabší výkon kvůli nižšímu rozpočtu, spíš naopak. Kampaň pracovala efektivněji a PNO spadlo z 35,59 % na 20,10 %. CTR zůstalo velmi blízko červnu a frekvence 6,37 nenaznačuje prudkou kreativní únavu, jen retargeting už běží na publiku, které je potřeba dál hlídat."
    }
  },
  {
    id: "advantage-shopping",
    title: "🤖 Advantage+ shopping",
    period: "07/2026",
    previousPeriod: "06/2026",
    conclusion: "PNO se zlepšilo, ale kampaň výrazně ubrala na objemu.",
    current: { spend: "6 181 Kč", purchases: "36", pno: "21,66 %", value: "28 536 Kč", clicks: "1 305", ctr: "1,65 %", frequency: "2,67" },
    sourceData: { period: "2026-07", spend: 6180.82, purchases: 36, pno: 21.66, purchaseValue: 28536.07, linkClicks: 1305, ctr: 1.65, frequency: 2.67 },
    previous: { spend: "10 906 Kč", purchases: "69", pno: "25,35 %", value: "43 017 Kč", clicks: "1 905", ctr: "1,57 %", frequency: "2,06" },
    deltas: [
      { label: "Nákupy", value: "↓ 33", tone: "bad" },
      { label: "PNO", value: "↓ 3,69 p. b.", tone: "good" },
      { label: "Investice", value: "↓ 4 725 Kč", tone: "neutral" }
    ],
    assets: ["advantage-shopping-07-2026", "slide-38-asset-01"],
    interpretation: {
      happened: "A+ Shopping v červenci přinesl 36 nákupů při investici 6 181 Kč. Proti červnu je to o 33 nákupů méně, zároveň ale spend klesl výrazně rychleji než hodnota nákupů.",
      meaning: "Efektivita se díky tomu zlepšila: PNO kleslo z 25,35 % na 21,66 %. CTR lehce vzrostlo na 1,65 % a frekvence 2,67 zatím nevypadá jako kreativní únava. Hlavním tématem je tedy menší objem, ne zhoršená odezva reklamy. Rozpočet dává smysl vracet po menších krocích a hlídat, jestli PNO zůstane poblíž červencové úrovně."
    }
  },
  {
    id: "merilin-asc",
    title: "🌿 Merilin ASC",
    period: "07/2026",
    previousPeriod: "06/2026",
    conclusion: "Objem klesl, efektivita se ale lehce zlepšila.",
    current: { spend: "4 520 Kč", purchases: "13", pno: "33,45 %", value: "13 510 Kč", clicks: "413", ctr: "1,24 %", frequency: "2,51" },
    sourceData: { period: "2026-07", spend: 4519.51, purchases: 13, pno: 33.45, purchaseValue: 13509.61, linkClicks: 413, ctr: 1.24, frequency: 2.51 },
    previous: { spend: "7 334 Kč", purchases: "26", pno: "36,40 %", value: "20 151 Kč", clicks: "592", ctr: "1,26 %", frequency: "2,37" },
    deltas: [
      { label: "Nákupy", value: "↓ 13", tone: "bad" },
      { label: "PNO", value: "↓ 2,95 p. b.", tone: "good" },
      { label: "Investice", value: "↓ 2 814 Kč", tone: "neutral" }
    ],
    assets: ["merilin-overview-07-2026", "merilin-chart-07-2026", "slide-39-asset-01"],
    creatives: [
      { asset: "merilin-top-creative-07-2026", resultAsset: "merilin-chart-07-2026", title: "Merilin — doporučují ženy", metrics: "Top kreativa · 4 nákupy · PNO 31,46 %", label: "Kreativa drží efektivitu blízko průměru kampaně a je vhodná pro další varianty sdělení." }
    ],
    interpretation: {
      happened: "Merilin v červenci jel s nižší investicí a přinesl 13 nákupů proti 26 v červnu. Hodnota nákupů klesla na 13 510 Kč, ale PNO se zlepšilo z 36,40 % na 33,45 %.",
      meaning: "Pokles objemu je hlavně důsledek nižšího rozpočtu, ne dramaticky horší odezvy. CTR zůstalo prakticky stabilní a frekvence 2,51 je stále zdravá. Top kreativa s motivem doporučení žen má smysl dál rozvíjet, ale škálování by mělo jít postupně, aby se lepší PNO nerozpustilo ve vyšším spendu."
    }
  },
  {
    id: "kamzik-asc",
    title: "⛰️ Kamzík ASC",
    period: "07/2026",
    previousPeriod: "06/2026",
    conclusion: "Výrazný pokles objemu a slabší PNO, i přes stále použitelnou CTR.",
    current: { spend: "2 257 Kč", purchases: "5", pno: "51,04 %", value: "4 422 Kč", clicks: "506", ctr: "3,35 %", frequency: "3,79" },
    sourceData: { period: "2026-07", spend: 2256.86, purchases: 5, pno: 51.04, purchaseValue: 4422.00, linkClicks: 506, ctr: 3.35, frequency: 3.79 },
    previous: { spend: "6 652 Kč", purchases: "21", pno: "41,41 %", value: "16 062 Kč", clicks: "1 984", ctr: "4,90 %", frequency: "3,10" },
    deltas: [
      { label: "Nákupy", value: "↓ 16", tone: "bad" },
      { label: "PNO", value: "↑ 9,63 p. b.", tone: "bad" },
      { label: "Investice", value: "↓ 4 395 Kč", tone: "neutral" }
    ],
    assets: ["kamzik-overview-07-2026", "kamzik-chart-07-2026", "slide-41-asset-01"],
    creatives: [
      { asset: "kamzik-top-creative-07-2026", resultAsset: "kamzik-chart-07-2026", title: "Kamzík — liposomální kolagen", metrics: "Top kreativa · 3 nákupy · PNO 47,54 %", label: "Nejsilnější kreativa drží část výkonu, ale celkový objem je už hodně nízký." }
    ],
    interpretation: {
      happened: "Kamzík v červenci výrazně ubral na objemu: investice spadla na 2 257 Kč a kampaň přinesla 5 nákupů proti 21 v červnu.",
      meaning: "Tady se ale nezměnil jen rozpočet. PNO se zhoršilo z 41,41 % na 51,04 % a hodnota nákupů klesla výrazněji než by bylo ideální. CTR 3,35 % je pořád solidní, takže kreativa umí zaujmout, ale už se nepřeklápí do nákupů tak efektivně. Frekvence 3,79 není sama o sobě alarm, spíš ukazuje potřebu ostřejšího prodejního sdělení."
    }
  },
  {
    id: "red3-asc",
    title: "🔴 RED3 ASC",
    period: "07/2026",
    previousPeriod: "06/2026",
    conclusion: "Menší objem, ale výrazně lepší efektivita a vyšší CTR.",
    current: { spend: "3 155 Kč", purchases: "10", pno: "33,71 %", value: "9 359 Kč", clicks: "461", ctr: "1,69 %", frequency: "4,02" },
    sourceData: { period: "2026-07", spend: 3154.85, purchases: 10, pno: 33.71, purchaseValue: 9359.00, linkClicks: 461, ctr: 1.69, frequency: 4.02 },
    previous: { spend: "6 137 Kč", purchases: "15", pno: "56,24 %", value: "10 913 Kč", clicks: "519", ctr: "1,14 %", frequency: "2,11" },
    deltas: [
      { label: "Nákupy", value: "↓ 5", tone: "bad" },
      { label: "PNO", value: "↓ 22,53 p. b.", tone: "good" },
      { label: "Investice", value: "↓ 2 982 Kč", tone: "neutral" }
    ],
    assets: ["red3-overview-07-2026", "red3-chart-07-2026", "slide-46-asset-01"],
    creatives: [
      { asset: "red3-top-creative-07-2026", resultAsset: "red3-chart-07-2026", title: "RED3 — benefitová statika", metrics: "Top kreativa · 5 nákupů · PNO 18,19 %", label: "Statika táhne efektivitu výrazně lépe než průměr kampaně." }
    ],
    interpretation: {
      happened: "RED3 v červenci snížil investici z 6 137 Kč na 3 155 Kč a klesl z 15 na 10 nákupů. Hodnota nákupů se ale držela poměrně blízko červnu, takže PNO spadlo z 56,24 % na 33,71 %.",
      meaning: "Tady je vidět kvalitativní posun: menší objem, ale výrazně lepší efektivita. CTR vyrostlo na 1,69 % a top statika s PNO 18,19 % ukazuje jasnější kreativní směr. Frekvence 4,02 už stojí za sledování, ale díky lepší CTR zatím nevypadá jako čistá kreativní únava."
    }
  }
];

const leadCampaign = {
  title: "📩 Lead kampaň",
  period: "07/2026",
  metrics: [
    { label: "Investice", value: "6 190 Kč", previous: "06/2026: 8 924 Kč" },
    { label: "Cena za výsledek", value: "238 Kč", previous: "06/2026: 270 Kč" },
    { label: "Výsledky", value: "26", previous: "06/2026: 33" }
  ],
  sourceData: { period: "2026-07", spend: 6190.09, results: 26, costPerResult: 238.08, impressions: 24445, reach: 9501 },
  assets: ["lead-first-purchase-07-2026", "slide-48-asset-01"],
  interpretation: "Lead kampaň v červenci ubrala na objemu, ale pracovala efektivněji. Investice klesla na 6 190 Kč a výsledků bylo 26 oproti 33 v červnu, cena za výsledek se ale zlepšila zhruba z 270 Kč na 238 Kč. Pro další měsíc dává smysl hlídat, jestli levnější leady udrží kvalitu, ne jen cenu."
};

const flightCampaigns = [
  {
    id: "flight-detox",
    title: "Detox",
    period: "07/2026",
    spend: "10 320 Kč",
    results: "38 nákupů",
    cost: "PNO 46,26 %",
    value: "22 307 Kč",
    clicks: "884",
    ctr: "1,12 %",
    frequency: "3,24",
    sourceData: { period: "2026-07", spend: 10319.77, purchases: 38, pno: 46.26, purchaseValue: 22307.00, linkClicks: 884, ctr: 1.12, frequency: 3.24 },
    assets: ["flight-detox-creative-07-2026", "flight-detox-overview-07-2026", "flight-detox-chart-07-2026"],
    note: "Kampaň Detox přinesla nejvyrovnanější objem ze samostatných červencových kampaní: 38 nákupů a hodnota 22 307 Kč. PNO 46,26 % už ale říká, že objem není zadarmo. CTR 1,12 % je spíš klidnější a frekvence 3,24 zatím nepůsobí jako tvrdá kreativní únava, takže další řízení by mělo stát hlavně na kontrole PNO při případném navyšování rozpočtu."
  },
  {
    id: "flight-cestovatelsky-balicek",
    title: "Cestovatelský balíček",
    period: "07/2026",
    spend: "7 761 Kč",
    results: "5 nákupů",
    cost: "PNO 113,77 %",
    value: "6 822 Kč",
    clicks: "1 433",
    ctr: "2,55 %",
    frequency: "2,68",
    sourceData: { period: "2026-07", spend: 7761.18, purchases: 5, pno: 113.77, purchaseValue: 6822.00, linkClicks: 1433, ctr: 2.55, frequency: 2.68 },
    assets: ["flight-cestovatelsky-balicek-creative-07-2026", "flight-cestovatelsky-balicek-overview-07-2026", "flight-cestovatelsky-balicek-chart-07-2026"],
    note: "Cestovatelský balíček uměl přitáhnout pozornost a kliky: CTR 2,55 % a 1 433 link clicků jsou solidní signál zájmu. Problém je až v prodejním dopadu, protože 5 nákupů při PNO 113,77 % je pro výkonnostní škálování příliš drahé. Kreativa tedy pravděpodobně funguje jako vstup do zájmu, ale nabídka nebo landing cesta potřebuje silnější konverzní dotažení."
  },
  {
    id: "flight-krasa",
    title: "Krása",
    period: "07/2026",
    spend: "10 369 Kč",
    results: "23 nákupů",
    cost: "PNO 98,18 %",
    value: "10 561 Kč",
    clicks: "1 327",
    ctr: "1,66 %",
    frequency: "2,45",
    sourceData: { period: "2026-07", spend: 10368.76, purchases: 23, pno: 98.18, purchaseValue: 10561.00, linkClicks: 1327, ctr: 1.66, frequency: 2.45 },
    assets: ["flight-krasa-creative-07-2026", "flight-krasa-overview-07-2026", "flight-krasa-chart-07-2026"],
    note: "Kampaň Krása přinesla 23 nákupů, ale PNO 98,18 % je na hraně smysluplné návratnosti. Kreativa se s letním opálením čte dobře a CTR 1,66 % ukazuje použitelný zájem, jen se zatím nepřeklápí do hodnoty nákupů dost efektivně. Další práce by měla mířit na silnější nabídku nebo přesnější publikum, ne na plošné navyšování spendu."
  },
  {
    id: "flight-mamavit1",
    title: "Mamavit 1",
    period: "07/2026",
    spend: "8 207 Kč",
    results: "29 nákupů",
    cost: "PNO 48,95 %",
    value: "16 765 Kč",
    clicks: "618",
    ctr: "0,49 %",
    frequency: "3,58",
    sourceData: { period: "2026-07", spend: 8206.75, purchases: 29, pno: 48.95, purchaseValue: 16765.00, linkClicks: 618, ctr: 0.49, frequency: 3.58 },
    assets: ["flight-mamavit1-creative-07-2026", "flight-mamavit1-overview-07-2026", "flight-mamavit1-chart-07-2026"],
    note: "Mamavit 1 má v červenci slušný počet nákupů, ale kreativní odezva je nízká: CTR 0,49 % naznačuje, že reklama už netáhne pozornost tak snadno. PNO 48,95 % je výrazně lepší než u Krásy nebo Cestovatelského balíčku, takže výkon není špatný, jen je potřeba opatrně pracovat s kreativou. Frekvence 3,58 může začít tlačit na únavu, pokud se bude rozpočet navyšovat bez obměny sdělení."
  },
  {
    id: "flight-mamavit2",
    title: "Mamavit 2",
    period: "07/2026",
    spend: "7 878 Kč",
    results: "9 nákupů",
    cost: "PNO 82,30 %",
    value: "9 572 Kč",
    clicks: "861",
    ctr: "0,81 %",
    frequency: "3,61",
    sourceData: { period: "2026-07", spend: 7877.51, purchases: 9, pno: 82.30, purchaseValue: 9572.00, linkClicks: 861, ctr: 0.81, frequency: 3.61 },
    assets: ["flight-mamavit2-creative-07-2026", "flight-mamavit2-overview-07-2026", "flight-mamavit2-chart-07-2026"],
    note: "Mamavit 2 přinesl nižší objem než první Mamavit kampaň: 9 nákupů při PNO 82,30 %. Kliků je relativně dost, ale CTR 0,81 % a frekvence 3,61 ukazují, že kreativa pravděpodobně potřebuje jasnější první sdělení. Bez zlepšení efektivity bych rozpočet držel spíš v testovacím režimu."
  },
  {
    id: "flight-2plus1",
    title: "2+1 zdarma",
    period: "07/2026",
    spend: "27 017 Kč",
    results: "68 nákupů",
    cost: "PNO 43,93 %",
    value: "61 502 Kč",
    clicks: "2 982",
    ctr: "1,52 %",
    frequency: "neuvedeno",
    sourceData: { period: "2026-07", spend: 27017.22, purchases: 68, pno: 43.93, purchaseValue: 61502.00, linkClicks: 2982, ctr: 1.52, frequency: null },
    assets: ["flight-2plus1-creative-07-2026", "flight-2plus1-overview-07-2026", "flight-2plus1-chart-07-2026"],
    note: "Kampaň 2+1 zdarma je největší červencový objemový tahoun: 68 nákupů a hodnota 61 502 Kč. PNO 43,93 % není nízké, ale při tomto objemu jde o nejpoužitelnější akční rámec v červencových kampaních. CTR 1,52 % ukazuje použitelnou odezvu a promo mechanika evidentně pomáhá převést pozornost do nákupů. Další navýšení dává smysl jen postupně, s kontrolou, zda se PNO nezačne při škálování rozjíždět."
  }
];

const boostAssets = [
  {
    id: "boost-engagement-facebook-high",
    label: "Klíště: jak vybrat",
    alt: "Facebook příspěvek Klíště jak vybrat",
    src: "assets/report-jun-26/meta/boosting/posts/engagement-facebook-high-clean-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/posts/engagement-facebook-high-clean.png",
    image_size: { width: 535, height: 993 }
  },
  {
    id: "boost-engagement-instagram-high",
    label: "Klíště: jak vybrat",
    alt: "Instagram příspěvek Klíště jak vybrat",
    src: "assets/report-jun-26/meta/boosting/posts/engagement-instagram-high-clean-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/posts/engagement-instagram-high-clean.png",
    image_size: { width: 560, height: 1000 }
  },
  {
    id: "boost-traffic-facebook-high",
    label: "Netypické příznaky menopauzy",
    alt: "Facebook příspěvek Netypické příznaky menopauzy",
    src: "assets/report-jun-26/meta/boosting/posts/traffic-facebook-high-clean-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/posts/traffic-facebook-high-clean.png",
    image_size: { width: 510, height: 945 }
  },
  {
    id: "boost-traffic-facebook-low",
    label: "Týden letních slev",
    alt: "Facebook příspěvek Týden letních slev",
    src: "assets/report-jun-26/meta/boosting/posts/traffic-facebook-low-clean-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/posts/traffic-facebook-low-clean.png",
    image_size: { width: 445, height: 936 }
  },
  {
    id: "boost-traffic-instagram-high",
    label: "Netypické příznaky menopauzy",
    alt: "Instagram příspěvek Netypické příznaky menopauzy",
    src: "assets/report-jun-26/meta/boosting/posts/traffic-instagram-high-clean-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/posts/traffic-instagram-high-clean.png",
    image_size: { width: 540, height: 917 }
  },
  {
    id: "boost-traffic-instagram-low",
    label: "Týden letních slev",
    alt: "Instagram příspěvek Týden letních slev",
    src: "assets/report-jun-26/meta/boosting/posts/traffic-instagram-low-clean-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/posts/traffic-instagram-low-clean.png",
    image_size: { width: 442, height: 895 }
  },
  {
    id: "boost-traffic-facebook-high-07-2026",
    label: "Úpal nebo úžeh?",
    alt: "Facebook příspěvek Úpal nebo úžeh",
    src: "assets/report-jul-26/meta/boosting/traffic-facebook-high-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/boosting/traffic-facebook-high-07-2026.png",
    image_size: { width: 305, height: 518 }
  },
  {
    id: "boost-traffic-facebook-low-07-2026",
    label: "Cestovatelský balíček",
    alt: "Facebook příspěvek Cestovatelský balíček",
    src: "assets/report-jul-26/meta/boosting/traffic-facebook-low-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/boosting/traffic-facebook-low-07-2026.png",
    image_size: { width: 311, height: 460 }
  },
  {
    id: "boost-traffic-instagram-high-07-2026",
    label: "6 chyb při používání SPF",
    alt: "Instagram příspěvek 6 chyb při používání SPF",
    src: "assets/report-jul-26/meta/boosting/traffic-instagram-high-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/boosting/traffic-instagram-high-07-2026.png",
    image_size: { width: 304, height: 512 }
  },
  {
    id: "boost-traffic-instagram-low-07-2026",
    label: "Extra Multivitamin",
    alt: "Instagram příspěvek Extra Multivitamin",
    src: "assets/report-jul-26/meta/boosting/traffic-instagram-low-07-2026-thumb.png",
    fullSrc: "assets/report-jul-26/meta/boosting/traffic-instagram-low-07-2026.png",
    image_size: { width: 325, height: 521 }
  }
];

const boostAssetById = Object.fromEntries(boostAssets.map((asset) => [asset.id, asset]));

const boostOverviewAssets = {
  engagement: {
    title: "Engagement overview",
    subtitle: "Přehled všech boostovaných příspěvků",
    cta: "Otevřít seznam příspěvků",
    fullSrc: "assets/report-jun-26/meta/boosting/bm-engagement-overview.png",
    src: "assets/report-jun-26/meta/boosting/bm-engagement-overview-thumb.png",
    alt: "Engagement overview ze systému Business Manager",
    image_size: { width: 3374, height: 830 }
  },
  traffic: {
    title: "Traffic overview",
    subtitle: "Přehled všech boostovaných příspěvků",
    cta: "Otevřít seznam příspěvků",
    fullSrc: "assets/report-jun-26/meta/boosting/bm-traffic-overview.png",
    src: "assets/report-jun-26/meta/boosting/bm-traffic-overview-thumb.png",
    alt: "Traffic overview ze systému Business Manager",
    image_size: { width: 3420, height: 1822 }
  },
  "traffic-07-2026": {
    title: "Traffic overview",
    subtitle: "Přehled traffic boostů za červenec 2026",
    cta: "Otevřít seznam příspěvků",
    fullSrc: "assets/report-jul-26/meta/boosting/traffic-overview-07-2026.png",
    src: "assets/report-jul-26/meta/boosting/traffic-overview-07-2026-thumb.png",
    alt: "Traffic overview boostovaných příspěvků za červenec 2026",
    image_size: { width: 1917, height: 795 }
  }
};

const juneBoostSections = [
  {
    id: "engagement",
    title: "Engagement",
    objective: "Cílem engagement boostu jsou reakce, komentáře, sdílení a interakce s příspěvkem. Tady nejde primárně o návštěvu webu, ale o to, které téma dokáže samo vytáhnout odezvu publika.",
    rows: [
      {
        id: "engagement-fb-kliste",
        title: "Klíště: jak vybrat",
        platform: "Facebook",
        asset: "boost-engagement-facebook-high",
        classification: "high",
        results: 596,
        cost: 0.84,
        reactions: 233,
        comments: 6,
        linkClicks: 2,
        spend: "499,92 Kč",
        metrics: [
          { label: "Výsledky", value: "596 engagement" },
          { label: "Cena za engagement", value: "0,84 Kč" },
          { label: "Reakce", value: "233" },
          { label: "Komentáře", value: "6" }
        ]
      },
      {
        id: "engagement-ig-kliste",
        title: "Klíště: jak vybrat",
        platform: "Instagram",
        asset: "boost-engagement-instagram-high",
        classification: "high",
        results: 263,
        cost: 1.9,
        reactions: 120,
        comments: 1,
        linkClicks: 0,
        spend: "499,69 Kč",
        metrics: [
          { label: "Výsledky", value: "263 engagement" },
          { label: "Cena za engagement", value: "1,90 Kč" },
          { label: "Reakce", value: "120" },
          { label: "Komentáře", value: "1" }
        ]
      }
    ]
  },
  {
    id: "traffic",
    title: "Traffic",
    objective: "Traffic boost hodnotí schopnost příspěvků přivést uživatele na web nebo landing page. Tady je důležitější klik, cena za návštěvu a CTR než samotná reakce pod příspěvkem.",
    rows: [
      { id: "traffic-ig-menopauza", title: "Netypické příznaky menopauzy", platform: "Instagram", asset: "boost-traffic-instagram-high", classification: "high", results: 341, cost: 1.46, ctr: 4.48, reach: "7 220", impressions: "9 114", spend: "499,31 Kč" },
      { id: "traffic-fb-menopauza", title: "Netypické příznaky menopauzy", platform: "Facebook", asset: "boost-traffic-facebook-high", classification: "high", results: 286, cost: 1.49, ctr: 4.67, reach: "6 609", impressions: "7 829", spend: "424,86 Kč" },
      { id: "traffic-fb-merilin-sampon", rowLabel: "fb | merilin-sampon-novinka | statika | 06-26", title: "Merilin šampon novinka", platform: "Facebook", results: 172, cost: 2.9, ctr: 2.58, reach: "5 737", impressions: "9 602", spend: "498,50 Kč" },
      { id: "traffic-fb-vlasske-orechy", rowLabel: "fb | blog-vlasske-orechy | statika | 06-26", title: "Blog: vlašské ořechy", platform: "Facebook", results: 125, cost: 4, ctr: 1.99, reach: "6 082", impressions: "8 453", spend: "499,78 Kč" },
      { id: "traffic-fb-letni-slevy", title: "Týden letních slev", platform: "Facebook", asset: "boost-traffic-facebook-low", classification: "low", results: 124, cost: 8.06, ctr: 1.78, reach: "5 102", impressions: "9 746", spend: "999,65 Kč" },
      { id: "traffic-ig-letni-slevy", title: "Týden letních slev", platform: "Instagram", asset: "boost-traffic-instagram-low", classification: "low", results: 124, cost: 8.06, ctr: 1.92, reach: "4 082", impressions: "7 804", spend: "999,52 Kč" },
      { id: "traffic-ig-merilin-sampon", rowLabel: "ig | merilin-sampon-novinka | statika | 06-26", title: "Merilin šampon novinka", platform: "Instagram", results: 115, cost: 4.34, ctr: 2.37, reach: "3 718", impressions: "5 448", spend: "498,54 Kč" },
      { id: "traffic-fb-kamzik-foto", rowLabel: "fb | kamzik-novy-foto | statika | 06-26", title: "Kamzík nový foto", platform: "Facebook", results: 102, cost: 4.87, ctr: 2.14, reach: "3 859", impressions: "6 498", spend: "496,41 Kč" },
      { id: "traffic-ig-gs-merilin", rowLabel: "ig | gs-merillin | statika | 06-26", title: "GS Merilin", platform: "Instagram", results: 100, cost: 4.99, ctr: 1.82, reach: "4 738", impressions: "6 979", spend: "498,59 Kč" },
      { id: "traffic-fb-zelezo", rowLabel: "fb | zelezo-sleva | statika | 06-26", title: "Železo sleva", platform: "Facebook", results: 93, cost: 5.37, ctr: 1.56, reach: "6 372", impressions: "9 152", spend: "499,67 Kč" },
      { id: "traffic-ig-bestsellers", rowLabel: "ig | bestsellers | statika | 06-26", title: "Bestsellers", platform: "Instagram", results: 91, cost: 5.49, ctr: 2.39, reach: "4 367", impressions: "5 184", spend: "500,00 Kč" }
    ]
  }
];

const julyBoostSections = [
  {
    id: "engagement",
    title: "Engagement",
    objective: "Engagement boost pracuje hlavně s reakcemi, komentáři a další odezvou na příspěvek. V červenci ale nevznikl dostatečný vzorek pro fér vyhodnocení.",
    status: "empty",
    emptyState: {
      title: "V červenci bez vyhodnotitelného engagement boostu",
      copy: "Engagement boost byl v červenci připravený k otestování, ale nevznikl dostatečný objem aktivity pro relevantní vyhodnocení. Tento měsíc proto nevybíráme HIGH ani LOW performera.",
      secondary: "Poslední dostupné výsledky jsou z června 2026.",
      action: "Zobrazit červen"
    },
    rows: []
  },
  {
    id: "traffic",
    overviewId: "traffic-07-2026",
    title: "Traffic",
    objective: "Traffic boost v červenci hodnotíme podle návštěv cílové stránky, ceny za výsledek a CTR. Přehled ze systému zůstává hlavní kontext, performer karty ukazují příspěvky s jasnou vazbou na konkrétní řádek.",
    mixContext: [
      { label: "Výsledky celkem", value: "2 304 LPV" },
      { label: "Cena / LPV", value: "4,86 Kč" },
      { label: "CTR", value: "1,93 %" },
      { label: "Spend", value: "11 189 Kč" }
    ],
    rows: [
      { id: "traffic-jul-fb-upal", rowLabel: "fb | upal-nebo-uzeh | statika | 07-26", title: "Úpal nebo úžeh?", platform: "Facebook", asset: "boost-traffic-facebook-high-07-2026", classification: "high", results: 269, cost: 1.86, ctr: 3.50, reach: "11 826", impressions: "15 499", spend: "499,91 Kč" },
      { id: "traffic-jul-fb-cestovatelsky-balicek", rowLabel: "fb | cestovatelsky-balicek | statika | 06-26", title: "Cestovatelský balíček", platform: "Facebook", asset: "boost-traffic-facebook-low-07-2026", classification: "low", results: 7, cost: 71.39, ctr: 1.99, reach: "3 656", impressions: "4 421", spend: "499,75 Kč" },
      { id: "traffic-jul-ig-spf", rowLabel: "ig | 6-chyb-s-spf | 07-26", title: "6 chyb při používání SPF", platform: "Instagram", asset: "boost-traffic-instagram-high-07-2026", classification: "high", results: 236, cost: 2.12, ctr: 3.65, reach: "8 136", impressions: "9 876", spend: "499,87 Kč" },
      { id: "traffic-jul-ig-multivitamin", rowLabel: "ig | multivitamin | statika | 07-26", title: "Extra Multivitamin", platform: "Instagram", asset: "boost-traffic-instagram-low-07-2026", classification: "low", results: 64, cost: 7.81, ctr: 1.45, reach: "4 095", impressions: "5 735", spend: "499,70 Kč" }
    ]
  }
];

const boostMonths = [
  {
    id: "07-2026",
    label: "Červenec 2026",
    period: "07/2026",
    default: true,
    headline: "V červenci boostování stojí hlavně na trafficu: nejlépe fungují praktická sezónní témata s jasným důvodem kliknout.",
    copy: "Engagement neměl dostatečný objem pro samostatné hodnocení, proto ho netlačíme do umělých závěrů. Traffic má jasnější data: sledujeme návštěvy cílové stránky, cenu za výsledek a CTR odděleně pro Facebook a Instagram.",
    sections: julyBoostSections
  },
  {
    id: "06-2026",
    label: "Červen 2026",
    period: "06/2026",
    headline: "Červen ukazuje rozdíl mezi příspěvky, které táhly reakce nebo návštěvy, a těmi, které potřebovaly doladit.",
    copy: "Výsledky jsou rozdělené podle cíle a platformy. Přehled ze systému drží kontext, performer karty ukazují pouze ověřené příspěvky s jasnou vazbou na konkrétní řádek výkonu.",
    sections: juneBoostSections
  }
];

const assetById = Object.fromEntries(metaAssets.map((asset) => [asset.id, asset]));

export const metaSectionHtml = `
<section class="chapter" id="meta"><div class="chapterHead glass"><div class="chapterTitle"><div class="chapterNo">04 · META</div><h2>${SystemLogo({ system: "meta", label: "Meta", size: "section", className: "sectionLogo" })}Meta kampaně · červenec 2026</h2><p>Červencový výkon META kampaní s důrazem na PNO, počet nákupů, kreativní odezvu a práci s rozpočtem.</p></div></div>
<div class="metaStack metaJun26">
  <div class="metaSectionIntro glass">
    <div><span class="pill systemPill">${SystemLogo({ system: "meta", label: "Meta", className: "channelLogo" })}META · červenec 2026</span><h2>A. Dlouhodobé kampaně</h2><p>Každá kampaň má červencový výkon, červnový kontext a krátké čtení toho, co znamená kombinace PNO a počtu nákupů.</p></div>
    <div class="metaSourceNote">Hlavní otázka pro červenec: kde nižší spend přinesl lepší efektivitu a kde už objem nákupů klesá příliš nízko.</div>
  </div>
  ${longTermCampaigns.map(renderLongTermCampaign).join("")}
  <div class="metaGroupTitle"><span>B.</span><div><h2>Lead kampaň</h2><p>Krátký pohled na cenu za výsledek, počet leadů a stabilitu výkonu mezi měsíci.</p></div></div>
  ${renderLeadCampaign(leadCampaign)}
  <div class="metaGroupTitle"><span>C.</span><div><h2>Produktové kampaně</h2><p>Detox, Cestovatelský balíček, Krása, Mamavit a 2+1 zdarma čtené hlavně přes počet nákupů a PNO.</p></div></div>
  <div class="flightCards">${flightCampaigns.map(renderFlightCampaign).join("")}</div>
  <div class="metaGroupTitle"><span>D.</span><div><h2>Boostování příspěvků</h2><p>Engagement a traffic odděleně, včetně rozdílu mezi Facebookem a Instagramem.</p></div></div>
  ${renderBoostingSection()}
</div></section>`;

function renderLongTermCampaign(campaign) {
  return `
    <details class="metaCampaign metaLongTerm">
      <summary class="metaCampaignHeader">
        <div class="metaSummary">
          <h3>${campaign.title}</h3>
          <p><span>${campaign.period}</span><span>Meta kampaň</span><span>${campaign.conclusion}</span></p>
        </div>
        <div class="metaKpis metaHeaderKpis">
          ${metaKpi("Nákupy", campaign.current.purchases, campaign.deltas[0])}
          ${metaKpi("PNO", campaign.current.pno, campaign.deltas[1])}
          ${metaKpi("Investice", campaign.current.spend, campaign.deltas[2])}
        </div>
        <span class="metaDetailIcon" aria-hidden="true">⌄</span>
      </summary>
      <div class="metaBody metaCampaignBody">
        <div class="metaCampaignKpiRow">
          ${comparisonGrid(campaign)}
        </div>
        <div class="metaEditorialGrid ${campaign.creatives ? "" : "evidenceOnly"}">
          ${renderCampaignPrimaryVisual(campaign)}
          ${renderEvidenceSection(campaign)}
        </div>
        ${interpretationBlock(campaign.interpretation)}
      </div>
    </details>
  `;
}

function renderLeadCampaign(lead) {
  return `
    <details class="metaCampaign metaLead">
      <summary class="metaCampaignHeader">
        <div class="metaSummary"><h3>${lead.title}</h3><p><span>${lead.period}</span><span>Lead kampaň</span><span>Stabilní počet výsledků při mírně lepší ceně za výsledek.</span></p></div>
        <div class="metaKpis metaHeaderKpis">
          ${lead.metrics.map((metric) => `<div class="metaKpi"><span>${metric.label}</span><strong>${metric.value}</strong><small>${metric.previous}</small></div>`).join("")}
        </div>
        <span class="metaDetailIcon" aria-hidden="true">⌄</span>
      </summary>
      <div class="metaBody metaCampaignBody">
        <div class="metaLeadMetrics metaCampaignKpiRow">${lead.metrics.map((metric) => `<div><span>${metric.label}</span><strong>${metric.value}</strong><small>${metric.previous}</small></div>`).join("")}</div>
        <div class="metaEditorialGrid evidenceOnly">
          ${renderEvidenceSection(lead)}
        </div>
        <div class="metaInterpretation"><h4>Insight</h4><p>${lead.interpretation}</p></div>
      </div>
    </details>
  `;
}

function renderFlightCampaign(flight) {
  return `
    <div class="flight metaFlightCard metaFlightEditorial">
      <div class="metaFlightHead">
        <span class="pill">Kampaň · ${flight.period}</span>
        <h3>${flight.title}</h3>
      </div>
      <div class="metaFlightKpis">
        <div><span>Investice</span><strong>${flight.spend}</strong></div>
        <div><span>Nákupy</span><strong>${flight.results}</strong></div>
        <div><span>Efektivita</span><strong>${flight.cost}</strong></div>
        <div><span>Hodnota</span><strong>${flight.value}</strong></div>
      </div>
      ${renderFlightSignals(flight)}
      <div class="metaFlightVisualGrid">
        ${renderFlightPrimaryVisual(flight)}
        ${renderFlightEvidence(flight)}
      </div>
      <div class="metaInterpretation compact metaFlightInsight"><h4>Interpretace</h4><p>${flight.note}</p></div>
    </div>
  `;
}

function renderFlightSignals(flight) {
  const signals = [
    ["Kliky", flight.clicks],
    ["CTR", flight.ctr],
    ["Frekvence", flight.frequency]
  ].filter(([, value]) => value);

  if (!signals.length) return "";

  return `<div class="metaFlightSignals">
    ${signals.map(([label, value]) => `<span><b>${label}</b>${value}</span>`).join("")}
  </div>`;
}

function metaKpi(label, value, delta) {
  return `<div class="metaKpi"><span>${label}</span><strong>${value}</strong><small class="yoyChip ${delta.tone}">${delta.value}</small></div>`;
}

function parseMetaMetric(value) {
  return Number(String(value).replace(/\s/g, "").replace(/[^\d,.-]/g, "").replace(",", "."));
}

function formatMetaDeltaNumber(value, decimals = 0) {
  return new Intl.NumberFormat("cs-CZ", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(Math.abs(value));
}

function metaMetricDelta(label, current, previous) {
  const currentValue = parseMetaMetric(current);
  const previousValue = parseMetaMetric(previous);
  if (!Number.isFinite(currentValue) || !Number.isFinite(previousValue)) return null;

  const diff = currentValue - previousValue;
  const arrow = diff > 0 ? "↑" : diff < 0 ? "↓" : "→";
  const isPercentMetric = current.includes("%") || previous.includes("%");
  const isCurrencyMetric = current.includes("Kč") || previous.includes("Kč");
  const decimals = label === "Frekvence" ? 2 : 0;
  const formattedValue = isPercentMetric
    ? `${formatMetaDeltaNumber(diff, 2)} p. b.`
    : isCurrencyMetric
      ? `${formatMetaDeltaNumber(diff)} Kč`
      : formatMetaDeltaNumber(diff, decimals);
  const positiveIsGood = label === "Hodnota nákupů" || label === "CTR";
  const tone = diff === 0
    ? "neutral"
    : positiveIsGood
      ? diff > 0 ? "good" : "bad"
      : "neutral";

  return { value: `${arrow} ${formattedValue}`, tone };
}

function comparisonGrid(campaign) {
  const metrics = [
    ["Nákupy", campaign.current.purchases, campaign.deltas[0], campaign.previous.purchases],
    ["PNO", campaign.current.pno, campaign.deltas[1], campaign.previous.pno],
    ["Investice", campaign.current.spend, campaign.deltas[2], campaign.previous.spend],
    ["Hodnota nákupů", campaign.current.value, metaMetricDelta("Hodnota nákupů", campaign.current.value, campaign.previous.value), campaign.previous.value],
    ["Kliky", campaign.current.clicks, metaMetricDelta("Kliky", campaign.current.clicks, campaign.previous.clicks), campaign.previous.clicks],
    ["CTR", campaign.current.ctr, metaMetricDelta("CTR", campaign.current.ctr, campaign.previous.ctr), campaign.previous.ctr],
    ["Frekvence", campaign.current.frequency, metaMetricDelta("Frekvence", campaign.current.frequency, campaign.previous.frequency), campaign.previous.frequency]
  ];

  return `<div class="metaCompareGrid">${metrics.map(([label, current, delta, previous]) => `
    <div class="metaCompareMetric">
      <span>${label}</span>
      <strong>${current}</strong>
      ${delta ? `<em class="yoyChip ${delta.tone}">${delta.value}</em>` : ""}
      <small>${campaign.previousPeriod || "Předchozí období"}: ${previous}</small>
    </div>
  `).join("")}</div>`;
}

function interpretationBlock(copy) {
  return `<div class="metaInterpretation">
    <h4>Insight</h4>
    <p>${copy.happened}</p>
    <p>${copy.meaning}</p>
  </div>`;
}

function renderCreative(item) {
  const asset = assetById[item.asset];
  const resultAsset = item.resultAsset ? assetById[item.resultAsset] : null;
  if (!asset) return "";
  return `<div class="metaCreativePair">
    <a class="creativeThumb" href="${asset.fullSrc}">
      <img src="${asset.src}" alt="${asset.alt}" loading="lazy" decoding="async">
      <span>${item.title}<small>${item.metrics}</small><small>${item.label}</small></span>
    </a>
    ${resultAsset ? assetThumb(resultAsset, resultAsset.label) : ""}
  </div>`;
}

function renderCampaignPrimaryVisual(campaign) {
  const creative = campaign.creatives?.[0];
  if (!creative) return "";
  const asset = assetById[creative.asset];
  if (!asset) return "";

  return `<section class="metaPrimaryVisual">
    <div class="metaSectionLabel">Kreativa</div>
    <a class="creativeThumb metaPrimaryCreative" href="${asset.fullSrc}">
      <img src="${asset.src}" alt="${asset.alt}" loading="lazy" decoding="async">
      <span>${creative.title}<small>${creative.metrics}</small><small>${creative.label}</small></span>
    </a>
  </section>`;
}

function flightPrimaryAssetId(flight) {
  return flight.assets.find((assetId) => assetById[assetId]?.type === "creative") || flight.assets.find((assetId) => assetById[assetId]);
}

function renderFlightPrimaryVisual(flight) {
  const assetId = flightPrimaryAssetId(flight);
  const asset = assetById[assetId];
  if (!asset) return "";
  const { width = 0, height = 0 } = asset.image_size || {};
  const ratioStyle = width && height ? ` style="--asset-ratio:${width} / ${height}"` : "";

  return `<section class="metaFlightPrimary">
    <div class="metaSectionLabel">Kreativa</div>
    <a class="creativeThumb metaFlightCreative" href="${asset.fullSrc}"${ratioStyle}>
      <img src="${asset.src}" alt="${asset.alt}" loading="lazy" decoding="async">
      <span>${asset.label || "Ukázka kreativy"}</span>
    </a>
  </section>`;
}

function renderFlightEvidence(flight) {
  const primaryAssetId = flightPrimaryAssetId(flight);
  const evidenceAssetIds = flight.assets.filter((assetId) => assetId !== primaryAssetId && assetById[assetId]);
  if (!evidenceAssetIds.length) return "";

  return `<section class="metaFlightEvidence">
    <div class="metaFlightEvidenceHead">
      <div class="metaSectionLabel">Výkonové náhledy</div>
      <small>Overview a výsledky kreativy</small>
    </div>
    ${renderAssetGallery(evidenceAssetIds, "metaFlightEvidenceGrid")}
  </section>`;
}

function renderEvidenceSection(item) {
  const evidenceAssets = evidenceAssetIds(item);
  if (!evidenceAssets.length) return "";

  return `<section class="metaEvidenceSection">
    <div class="metaSectionLabel">Výkonové náhledy</div>
    ${renderAssetGallery(evidenceAssets, "metaEvidenceGallery")}
  </section>`;
}

function renderAssetGallery(assetIds, className = "") {
  const visibleAssetIds = [...new Set(assetIds)].filter((assetId) => assetById[assetId]);
  if (!visibleAssetIds.length) return "";
  return `<div class="metaAssetGallery ${className}">${visibleAssetIds.map((assetId) => assetThumb(assetById[assetId])).join("")}</div>`;
}

function assetThumb(asset, customLabel = asset.label) {
  if (!asset) return "";
  const label = customLabel || asset.label || "Ukázka kampaně";
  const { width = 0, height = 0 } = asset.image_size || {};
  const isWide = width && height && width / height >= 1.8;
  const ratioStyle = width && height ? ` style="--asset-ratio:${width} / ${height}"` : "";
  return `<a class="creativeThumb metaAssetThumb${isWide ? " wideAsset" : ""}" href="${asset.fullSrc}"${ratioStyle}>
    <img src="${asset.src}" alt="${asset.alt}" loading="lazy" decoding="async">
    <span>${label}</span>
  </a>`;
}

function evidenceAssetIds(item) {
  const creativeResultAssets = item.creatives
    ? item.creatives.map((creative) => creative.resultAsset).filter(Boolean)
    : [];

  return [...item.assets, ...creativeResultAssets];
}

function renderBoostingSection() {
  const defaultMonth = boostMonths.find((month) => month.default) || boostMonths[0];

  return `<div class="metaBoostingPanel glass">
    <div class="metaBoostMonthSwitcher">
      ${boostMonths.map((month) => `<input class="metaBoostMonthInput" type="radio" name="meta-boost-month" id="meta-boost-${month.id}"${month.id === defaultMonth.id ? " checked" : ""}>`).join("")}
      <div class="metaBoostTabs" aria-label="Přepnutí období boostování">
        ${boostMonths.map((month) => `<button type="button" data-boost-month-target="${month.id}" onclick="document.getElementById('meta-boost-${month.id}').checked=true" aria-selected="${month.id === defaultMonth.id ? "true" : "false"}">${month.label}</button>`).join("")}
      </div>
      <div class="metaBoostMonthPanels">
        ${boostMonths.map(renderBoostMonthPanel).join("")}
      </div>
    </div>
  </div>`;
}

function renderBoostMonthPanel(month) {
  return `<div class="metaBoostMonthPanel" data-boost-month="${month.id}">
    <div class="metaBoostVerdict">
      <span class="pill systemPill">${SystemLogo({ system: "meta", label: "Meta", className: "channelLogo" })}Meta · boostování · ${month.period}</span>
      <h2>${month.headline}</h2>
      <p>${month.copy}</p>
    </div>
    <nav class="metaBoostNav" aria-label="Navigace boosting příspěvků ${month.period}">
      ${month.sections.map((section) => `<a href="#boost-${month.id}-${section.id}">${section.title}</a>`).join("")}
    </nav>
    ${month.sections.map((section) => renderBoostSection(section, month)).join("")}
  </div>`;
}

function renderBoostSystemOverview(section) {
  const overview = boostOverviewAssets[section.overviewId || section.id];
  if (!overview) return "";
  const { width = 0, height = 0 } = overview.image_size || {};
  const ratioStyle = width && height ? ` style="--asset-ratio:${width} / ${height}"` : "";

  return `<article class="metaBoostSystemOverview">
    <div>
      <span>Přehled příspěvků ze systému</span>
      <h4>${overview.title}</h4>
      <p>${overview.subtitle}</p>
    </div>
    <a class="metaBoostSystemThumb metaBoostPostThumb" href="${overview.fullSrc}"${ratioStyle} aria-label="${overview.cta}: ${overview.title}">
      <img src="${overview.src}" alt="${overview.alt}" loading="lazy" decoding="async">
      <span>${overview.cta}</span>
    </a>
  </article>`;
}

function renderBoostSection(section, month) {
  return `<section class="metaBoostSection" id="boost-${month.id}-${section.id}">
    <div class="metaBoostSectionHead">
      <div>
        <h3>${section.title}</h3>
        <p>${section.objective}</p>
      </div>
    </div>
    ${renderBoostMixContext(section)}
    ${renderBoostEmptyState(section)}
    ${renderBoostSystemOverview(section)}
    ${["Facebook", "Instagram"].map((platform) => renderBoostPlatform(section, platform)).join("")}
  </section>`;
}

function renderBoostMixContext(section) {
  if (!section.mixContext?.length) return "";
  return `<div class="metaBoostMixContext">
    ${section.mixContext.map((metric) => `<div><span>${metric.label}</span><strong>${metric.value}</strong></div>`).join("")}
  </div>`;
}

function renderBoostEmptyState(section) {
  if (section.status !== "empty" || !section.emptyState) return "";
  return `<div class="metaBoostEmptyState">
    <div>
      <span>Bez samostatného vyhodnocení</span>
      <h4>${section.emptyState.title}</h4>
      <p>${section.emptyState.copy}</p>
      <small>${section.emptyState.secondary}</small>
    </div>
    <button type="button" data-boost-month-target="06-2026" onclick="document.getElementById('meta-boost-06-2026').checked=true">${section.emptyState.action}</button>
  </div>`;
}

function renderBoostPlatform(section, platform) {
  const rows = boostPlatformPerformers(section, platform);
  if (!rows.length) return "";

  return `<section class="metaBoostPlatform">
    <div class="metaBoostPlatformHead">
      ${boostPlatformLogo(platform)}
      <h4>${platform}</h4>
    </div>
    <div class="metaBoostPerformerGrid">
      ${rows.map((row) => renderBoostPerformerCard(section, row)).join("")}
    </div>
  </section>`;
}

function renderBoostPerformerCard(section, row) {
  const asset = boostAssetById[row.asset];
  if (!asset) return "";
  const isLow = row.classification === "low";
  const performerLabel = isLow ? "LOW performer" : "HIGH performer";
  const role = isLow ? "attention" : "highlight";

  return `<article class="metaBoostPerformer ${role}">
    <div class="metaBoostPerformerTop">
      <span>${boostPlatformLogo(row.platform)}${row.platform}</span>
      <i>${performerLabel}</i>
    </div>
    <div class="metaBoostPerformerBody">
      <h5>${row.title}</h5>
      <div class="metaBoostPerformerMain">
        ${boostPostThumb(asset, row, performerLabel, role)}
        <div class="metaBoostPerformerCopy">
          <div class="metaBoostMetricGrid">
            ${boostMetrics(section, row).map((metric) => `<div><span>${metric.label}</span><strong>${metric.value}</strong></div>`).join("")}
          </div>
          <p>${boostAutoComment(section, row, role)}</p>
        </div>
      </div>
    </div>
  </article>`;
}

function boostPlatformPerformers(section, platform) {
  return section.rows
    .filter((row) => row.asset && row.classification && row.platform === platform)
    .sort((a, b) => {
      if (a.classification !== b.classification) return a.classification === "high" ? -1 : 1;
      return b.results - a.results || a.cost - b.cost;
    });
}

function boostPlatformLogo(platform) {
  const system = platform === "Instagram" ? "instagram" : "facebook";
  return SystemLogo({ system, label: platform, className: "platformLogo" });
}

function boostMetrics(section, row) {
  if (section.id === "engagement") {
    return [
      { label: "Spend", value: row.spend },
      { label: "Engagements", value: `${row.results}` },
      { label: "Cena / result", value: `${row.cost.toFixed(2).replace(".", ",")} Kč` }
    ];
  }

  return [
    { label: "Spend", value: row.spend },
    { label: "LPV", value: `${row.results}` },
    { label: "Cena / LPV", value: `${row.cost.toFixed(2).replace(".", ",")} Kč` },
    { label: "CTR", value: `${row.ctr.toFixed(2).replace(".", ",")} %` }
  ];
}

function boostAutoComment(section, row, role) {
  if (section.id === "engagement") {
    return role === "highlight"
      ? `Příspěvek doručil ${row.results} engagementů při ceně ${row.cost.toFixed(2).replace(".", ",")} Kč za výsledek. Téma i formát dávají smysl zopakovat v další obsahové vlně.`
      : `Příspěvek měl slabší objem engagementů a vyšší cenu za výsledek. Příště dává smysl otestovat ostřejší první sdělení nebo jiný vizuální vstup.`;
  }

  if (role === "highlight") {
    return `Příspěvek přivedl ${row.results} návštěv cílové stránky při ceně ${row.cost.toFixed(2).replace(".", ",")} Kč a CTR ${row.ctr.toFixed(2).replace(".", ",")} %. Kombinace objemu a ceny ukazuje formát vhodný pro další podporu.`;
  }

  return `Příspěvek má vyšší cenu za návštěvu (${row.cost.toFixed(2).replace(".", ",")} Kč) a slabší CTR ${row.ctr.toFixed(2).replace(".", ",")} %. Před další podporou bychom upravili claim nebo kreativní vstup.`;
}

function boostPostThumb(asset, row, performerLabel, role) {
  const { width = 0, height = 0 } = asset.image_size || {};
  const ratioStyle = width && height ? ` style="--asset-ratio:${width} / ${height}"` : "";
  return `<a class="metaBoostPostThumb ${role}" href="${asset.fullSrc}"${ratioStyle} aria-label="Otevřít detail: ${row.title} · ${performerLabel}">
    <img src="${asset.src}" alt="${asset.alt}" loading="lazy" decoding="async">
    <span>Otevřít detail</span>
  </a>`;
}
