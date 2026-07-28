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

export const metaAssets = extractedMetaAssets
  .filter((asset) => assetLabels[asset.id] && !hiddenReportAssetIds.has(asset.id))
  .map((asset) => ({
    ...asset,
    ...assetLabels[asset.id],
    src: asset.thumbnail_path,
    fullSrc: asset.full_image_path,
    sourceSlide: asset.slide_number
  }));

const longTermCampaigns = [
  {
    id: "dynamic-retargeting",
    title: "🧨 Dynamický retargeting",
    period: "06/2026",
    conclusion: "Objem nákupů klesl a PNO se zhoršilo, zároveň klesla frekvence i CTR.",
    current: { spend: "9 021 Kč", purchases: "36", pno: "35,59 %", value: "25 350 Kč", clicks: "950", ctr: "2,12 %", frequency: "6,39" },
    previous: { spend: "9 581 Kč", purchases: "47", pno: "26,54 %", value: "36 103 Kč", clicks: "1 339", ctr: "2,50 %", frequency: "8,19" },
    deltas: [
      { label: "Nákupy", value: "↓ 11", tone: "bad" },
      { label: "PNO", value: "↑ 9,05 p. b.", tone: "bad" },
      { label: "Investice", value: "↓ 560 Kč", tone: "neutral" }
    ],
    assets: ["slide-37-asset-01"],
    interpretation: {
      happened: "Retargeting v červnu utratil podobný objem jako v květnu, ale doručil 36 nákupů místo 47 a hodnota nákupů klesla na 25 350 Kč.",
      meaning: "Pokles CTR z 2,50 % na 2,12 % a frekvence z 8,19 na 6,39 naznačuje slabší odezvu publika, ne pouze nižší tlak zásahu.",
      recommendation: "Zkontrolovat velikost retargeting publika a obměnit sdělení. Stávající sestava pořád prodává, ale PNO 35,59 % vyžaduje kreativní refresh nebo užší práci s publikem."
    }
  },
  {
    id: "advantage-shopping",
    title: "🤖 Advantage+ shopping",
    period: "06/2026",
    conclusion: "Kampaň navýšila objem nákupů při vyšší investici, efektivita se ale mírně zhoršila.",
    current: { spend: "10 906 Kč", purchases: "69", pno: "25,35 %", value: "43 017 Kč", clicks: "1 905", ctr: "1,57 %", frequency: "2,06" },
    previous: { spend: "7 840 Kč", purchases: "49", pno: "21,98 %", value: "35 663 Kč", clicks: "1 563", ctr: "1,59 %", frequency: "2,47" },
    deltas: [
      { label: "Nákupy", value: "↑ 20", tone: "good" },
      { label: "PNO", value: "↑ 3,37 p. b.", tone: "bad" },
      { label: "Investice", value: "↑ 3 066 Kč", tone: "neutral" }
    ],
    assets: ["slide-38-asset-01"],
    interpretation: {
      happened: "ASC shopping přinesl 69 nákupů oproti 49 v květnu a navýšil hodnotu nákupů na 43 017 Kč.",
      meaning: "Vyšší objem je vykoupený vyšším PNO. CTR zůstává téměř stejné, takže změna pravděpodobně stojí hlavně na škálování a mixu adsetů.",
      recommendation: "Kampaň ponechat jako objemový pilíř, ale hlídat PNO při dalším navyšování rozpočtu. Smysl dává průběžně oddělovat produktové skupiny s lepší marží."
    }
  },
  {
    id: "merilin-asc",
    title: "🌿 Merilin ASC",
    period: "06/2026",
    conclusion: "Kampaň navýšila počet nákupů, ale s vyšší investicí a mírně vyšším PNO.",
    current: { spend: "7 334 Kč", purchases: "26", pno: "36,40 %", value: "20 151 Kč", clicks: "592", ctr: "1,26 %", frequency: "2,37" },
    previous: { spend: "4 797 Kč", purchases: "19", pno: "33,51 %", value: "14 315 Kč", clicks: "503", ctr: "1,43 %", frequency: "2,41" },
    deltas: [
      { label: "Nákupy", value: "↑ 7", tone: "good" },
      { label: "PNO", value: "↑ 2,89 p. b.", tone: "bad" },
      { label: "Investice", value: "↑ 2 537 Kč", tone: "neutral" }
    ],
    assets: ["slide-39-asset-01"],
    creatives: [
      { asset: "slide-40-asset-02", resultAsset: "slide-40-asset-01", title: "Merilin — test doporučení žen", metrics: "13 nákupů · PNO 25,94 % · investice 2 607 Kč", label: "Kreativa drží lepší PNO než celá kampaň, takže má smysl ji dál rozvíjet." }
    ],
    interpretation: {
      happened: "Merilin vyrostl na 26 nákupů a 20 151 Kč v hodnotě nákupů. Top kreativa sama přinesla 13 nákupů s PNO 25,94 %.",
      meaning: "Nová kreativní exekuce má lepší efektivitu než průměr kampaně, ale celkový mix kampaně táhne PNO na 36,40 %.",
      recommendation: "Top kreativu ponechat aktivní a testovat její varianty. Slabší sestavy držet pod kontrolou, aby navýšení investice nezhoršovalo celkové PNO."
    }
  },
  {
    id: "kamzik-asc",
    title: "⛰️ Kamzík ASC",
    period: "06/2026",
    conclusion: "Po velmi silném květnu klesl objem i efektivita; CTR zůstává nadprůměrné hlavně u videa.",
    current: { spend: "6 652 Kč", purchases: "21", pno: "41,41 %", value: "16 062 Kč", clicks: "1 984", ctr: "4,90 %", frequency: "3,10" },
    previous: { spend: "10 277 Kč", purchases: "62", pno: "20,45 %", value: "50 260 Kč", clicks: "7 412", ctr: "11,47 %", frequency: "4,03" },
    deltas: [
      { label: "Nákupy", value: "↓ 41", tone: "bad" },
      { label: "PNO", value: "↑ 20,96 p. b.", tone: "bad" },
      { label: "Investice", value: "↓ 3 625 Kč", tone: "neutral" }
    ],
    assets: ["slide-41-asset-01"],
    creatives: [
      { asset: "slide-42-asset-02", resultAsset: "slide-42-asset-01", title: "Kamzík — švýcarská statika", metrics: "5 nákupů · PNO 33,40 % · investice 1 101 Kč", label: "Kreativa má lepší PNO než průměr kampaně, objem je ale zatím spíš opatrný." }
    ],
    interpretation: {
      happened: "Kamzík spadl z 62 na 21 nákupů a PNO vzrostlo z 20,45 % na 41,41 %.",
      meaning: "Pokles link clicks a CTR ukazuje, že červnová odezva byla výrazně slabší než květnový nadstandard. Přesto top kreativa drží nižší PNO než průměr kampaně.",
      recommendation: "Neškálovat plošně. Pracovat s top statikou a odděleně otestovat nové varianty hooku, protože historicky silná kampaň v červnu ztratila tah."
    }
  },
  {
    id: "condro-perfect-asc",
    title: "💊 Condro Perfect ASC",
    period: "06/2026",
    conclusion: "Kampaň byla v průběhu června dle dohody vypnuta, proto nižší objem nelze číst jako čisté zhoršení efektivity.",
    current: { spend: "6 229 Kč", purchases: "6", pno: "89,67 %", value: "6 946 Kč", clicks: "280", ctr: "0,98 %", frequency: "2,77" },
    previous: { spend: "10 388 Kč", purchases: "19", pno: "39,32 %", value: "26 421 Kč", clicks: "586", ctr: "1,04 %", frequency: "4,44" },
    deltas: [
      { label: "Nákupy", value: "↓ 13", tone: "bad" },
      { label: "PNO", value: "↑ 50,35 p. b.", tone: "bad" },
      { label: "Investice", value: "↓ 4 159 Kč", tone: "neutral" }
    ],
    assets: ["slide-43-asset-01"],
    creatives: [
      { asset: "slide-44-asset-02", resultAsset: "slide-44-asset-01", title: "Condro Perfect — klouby pod kontrolou", metrics: "6 nákupů · PNO 89,67 % celkem", label: "Kreativa potřebuje přísnější hlídání efektivity, protože objem nákupů je nízký a PNO vysoké." }
    ],
    interpretation: {
      happened: "Kampaň byla v průběhu června dle dohody vypnuta. Červen proto běžel kratší dobu, utratil 6 229 Kč a doručil 6 nákupů.",
      meaning: "Nižší investice i nižší výsledky jsou ovlivněné záměrným vypnutím. Vyšší PNO 89,67 % říká, že běžící část kampaně nebyla efektivní, ale pokles objemu není plně srovnatelný s celým květnem.",
      recommendation: "Vypnutí respektovat jako záměrné rozhodnutí. Při případném návratu kampaně nezačínat stejným mixem, ale jen s nově ověřenými kreativami a jasně odděleným testovacím budgetem."
    }
  },
  {
    id: "red3-asc",
    title: "🔴 RED3 ASC",
    period: "06/2026",
    conclusion: "Po dobrém startu přišel výrazný pokles nákupů a PNO se zhoršilo.",
    current: { spend: "6 137 Kč", purchases: "15", pno: "56,24 %", value: "10 913 Kč", clicks: "519", ctr: "1,14 %", frequency: "2,11" },
    previous: { spend: "9 370 Kč", purchases: "32", pno: "35,08 %", value: "26 712 Kč", clicks: "935", ctr: "1,24 %", frequency: "2,89" },
    deltas: [
      { label: "Nákupy", value: "↓ 17", tone: "bad" },
      { label: "PNO", value: "↑ 21,16 p. b.", tone: "bad" },
      { label: "Investice", value: "↓ 3 233 Kč", tone: "neutral" }
    ],
    assets: ["slide-46-asset-01"],
    creatives: [
      { asset: "slide-47-asset-02", resultAsset: "slide-47-asset-01", title: "RED3 — zesílená receptura", metrics: "6 nákupů · PNO 82,84 % · investice 3 692 Kč", label: "Video má objem, ale efektivita je slabší než průměr kampaně." }
    ],
    interpretation: {
      happened: "RED3 klesl z 32 na 15 nákupů a hodnota nákupů spadla z 26 712 Kč na 10 913 Kč.",
      meaning: "Pokles investice sám nevysvětluje zhoršení PNO na 56,24 %. Top video má objem, ale PNO 82,84 % ukazuje, že neprodává dostatečně efektivně.",
      recommendation: "Omezit škálování videa, které generuje objem bez odpovídající návratnosti, a připravit statické nebo produktovější varianty pro další test."
    }
  }
];

const leadCampaign = {
  title: "📩 Lead kampaň",
  period: "06/2026",
  metrics: [
    { label: "Investice", value: "8 924 Kč", previous: "05/2026: 9 321 Kč" },
    { label: "Cena za výsledek", value: "270 Kč", previous: "05/2026: 291 Kč" },
    { label: "Výsledky", value: "33", previous: "05/2026: 32" }
  ],
  assets: ["slide-48-asset-01"],
  interpretation: "Lead kampaň v červnu doručila 33 výsledků oproti 32 v květnu a cena za výsledek klesla na 270 Kč. Výkon je tedy lehce efektivnější, ale objem zůstává stabilní, takže nejde o velký skok, spíš o zdravé udržení tempa."
};

const flightCampaigns = [
  {
    id: "flight-betakaroten",
    title: "Betakaroten",
    period: "06/2026",
    spend: "13 656 Kč",
    results: "84 nákupů",
    cost: "PNO 28,00 %",
    value: "48 769 Kč",
    assets: ["slide-50-asset-01", "slide-50-asset-02", "slide-50-asset-03"],
    note: "Kampaň Betakaroten přinesla 84 nákupů s PNO 28,00 %. To je solidní kombinace objemu i efektivity, takže kampaň v červnu táhla výkon bez toho, aby se PNO utrhlo ze řetězu.",
    recommendation: "Dává smysl ji držet jako výkonnostní oporu a při dalším navyšování rozpočtu hlídat, jestli počet nákupů roste rychleji než PNO."
  },
  {
    id: "flight-omega3",
    title: "Omega3",
    period: "06/2026",
    spend: "20 612 Kč",
    results: "30 nákupů",
    cost: "PNO 109,05 %",
    value: "18 902 Kč",
    assets: ["slide-51-asset-01", "slide-51-asset-02", "slide-51-asset-03"],
    note: "Kampaň Omega3 přinesla 30 nákupů, ale PNO 109,05 % je už příliš drahé. Zájem o kreativu tam je, jen se zatím nepřeklápí do prodejů tak efektivně, jak bychom potřebovali.",
    recommendation: "Nenavyšovat rozpočet, dokud se nezlepší poměr mezi počtem nákupů a PNO. Tady je potřeba buď ostřejší nabídka, přesnější publikum, nebo jasnější prodejní argument."
  },
  {
    id: "flight-letni-slevy",
    title: "Týden letních slev",
    period: "06/2026",
    spend: "24 156 Kč",
    results: "148 nákupů",
    cost: "PNO 20,75 %",
    value: "116 439 Kč",
    assets: ["slide-52-asset-01", "slide-52-asset-02", "slide-52-asset-03"],
    note: "Kampaň Týden letních slev je nejsilnější kus META výkonu: 148 nákupů při PNO 20,75 %. Tady se povedl objem i efektivita, což u promo kampaně není samozřejmost.",
    recommendation: "Použít ji jako benchmark pro další akční kampaně. Jasná sleva, produktový výběr a urgency fungují, takže podobný rámec má smysl dál opakovat a chytře obměňovat."
  },
  {
    id: "flight-zelezo",
    title: "Železo",
    period: "06/2026",
    spend: "9 286 Kč",
    results: "26 nákupů",
    cost: "PNO 65,39 %",
    value: "14 202 Kč",
    assets: ["slide-53-asset-01", "slide-53-asset-02", "slide-53-asset-03"],
    note: "Kampaň Železo doručila 26 nákupů, ale PNO 65,39 % drží výkon spíš v testovacím režimu. Video varianta vypadá nadějněji, protože sama přinesla 14 nákupů s PNO 53,64 %.",
    recommendation: "Pokračovat opatrně a víc tlačit směr, který přináší nákupy za nižší PNO. Pro větší rozpočet je potřeba nejdřív stáhnout efektivitu blíž k přijatelnému rozmezí."
  }
];

const boostAssets = [
  {
    id: "bm-engagement-overview",
    label: "Engagement overview · Business Manager",
    alt: "Business Manager přehled engagement boostovaných příspěvků",
    src: "assets/report-jun-26/meta/boosting/bm-engagement-overview-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/bm-engagement-overview.png",
    image_size: { width: 3374, height: 830 }
  },
  {
    id: "engagement-fb-ig-detail",
    label: "Kreativa · klíště jak vybrat",
    alt: "Engagement kreativa klíště jak vybrat pro Facebook a Instagram",
    src: "assets/report-jun-26/meta/boosting/engagement-fb-ig-detail-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/engagement-fb-ig-detail.png",
    image_size: { width: 3402, height: 1888 }
  },
  {
    id: "bm-traffic-overview",
    label: "Traffic overview · Business Manager",
    alt: "Business Manager přehled traffic boostovaných příspěvků",
    src: "assets/report-jun-26/meta/boosting/bm-traffic-overview-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/bm-traffic-overview.png",
    image_size: { width: 3420, height: 1822 }
  },
  {
    id: "traffic-facebook-detail",
    label: "Traffic kreativy · Facebook",
    alt: "Traffic kreativy pro Facebook: menopauza a letní slevy",
    src: "assets/report-jun-26/meta/boosting/traffic-facebook-detail-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/traffic-facebook-detail.png",
    image_size: { width: 1458, height: 1420 }
  },
  {
    id: "traffic-instagram-detail",
    label: "Traffic kreativy · Instagram",
    alt: "Traffic kreativy pro Instagram: menopauza a letní slevy",
    src: "assets/report-jun-26/meta/boosting/traffic-instagram-detail-thumb.png",
    fullSrc: "assets/report-jun-26/meta/boosting/traffic-instagram-detail.png",
    image_size: { width: 1502, height: 1402 }
  }
];

const boostAssetById = Object.fromEntries(boostAssets.map((asset) => [asset.id, asset]));

const boostSections = [
  {
    id: "engagement",
    title: "Engagement",
    objective: "Cílem engagement boostu jsou reakce, komentáře, sdílení a interakce s příspěvkem. Tady nejde primárně o návštěvu webu, ale o to, které téma dokáže samo vytáhnout odezvu publika.",
    overview: "bm-engagement-overview",
    rows: [
      {
        id: "engagement-fb-kliste",
        rowLabel: "fb | kliste-jak-vybrat | statika | 06-26",
        title: "Klíště: jak vybrat",
        platform: "Facebook",
        asset: "engagement-fb-ig-detail",
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
        rowLabel: "ig | kliste-jak-vybrat | statika | 06-26",
        title: "Klíště: jak vybrat",
        platform: "Instagram",
        asset: "engagement-fb-ig-detail",
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
    overview: "bm-traffic-overview",
    rows: [
      { id: "traffic-ig-menopauza", rowLabel: "ig | netypicke-priznaky-menopauzy | statika", title: "Netypické příznaky menopauzy", platform: "Instagram", asset: "traffic-instagram-detail", results: 341, cost: 1.46, ctr: 4.48, reach: "7 220", impressions: "9 114", spend: "499,31 Kč" },
      { id: "traffic-fb-menopauza", rowLabel: "fb | netypicke-priznaky-menopauzy | statika", title: "Netypické příznaky menopauzy", platform: "Facebook", asset: "traffic-facebook-detail", results: 286, cost: 1.49, ctr: 4.67, reach: "6 609", impressions: "7 829", spend: "424,86 Kč" },
      { id: "traffic-fb-merilin-sampon", rowLabel: "fb | merilin-sampon-novinka | statika | 06-26", title: "Merilin šampon novinka", platform: "Facebook", results: 172, cost: 2.9, ctr: 2.58, reach: "5 737", impressions: "9 602", spend: "498,50 Kč" },
      { id: "traffic-fb-vlasske-orechy", rowLabel: "fb | blog-vlasske-orechy | statika | 06-26", title: "Blog: vlašské ořechy", platform: "Facebook", results: 125, cost: 4, ctr: 1.99, reach: "6 082", impressions: "8 453", spend: "499,78 Kč" },
      { id: "traffic-fb-novy-kamzik", rowLabel: "fb | novy-kamzik | album | 06-26", title: "Nový Kamzík", platform: "Facebook", asset: "traffic-facebook-detail", results: 124, cost: 8.06, ctr: 1.78, reach: "5 102", impressions: "9 746", spend: "999,65 Kč" },
      { id: "traffic-ig-novy-kamzik", rowLabel: "ig | novy-kamzik | statika | 06-26", title: "Nový Kamzík", platform: "Instagram", asset: "traffic-instagram-detail", results: 124, cost: 8.06, ctr: 1.92, reach: "4 082", impressions: "7 804", spend: "999,52 Kč" },
      { id: "traffic-ig-merilin-sampon", rowLabel: "ig | merilin-sampon-novinka | statika | 06-26", title: "Merilin šampon novinka", platform: "Instagram", results: 115, cost: 4.34, ctr: 2.37, reach: "3 718", impressions: "5 448", spend: "498,54 Kč" },
      { id: "traffic-fb-kamzik-foto", rowLabel: "fb | kamzik-novy-foto | statika | 06-26", title: "Kamzík nový foto", platform: "Facebook", results: 102, cost: 4.87, ctr: 2.14, reach: "3 859", impressions: "6 498", spend: "496,41 Kč" },
      { id: "traffic-ig-gs-merilin", rowLabel: "ig | gs-merillin | statika | 06-26", title: "GS Merilin", platform: "Instagram", results: 100, cost: 4.99, ctr: 1.82, reach: "4 738", impressions: "6 979", spend: "498,59 Kč" },
      { id: "traffic-fb-zelezo", rowLabel: "fb | zelezo-sleva | statika | 06-26", title: "Železo sleva", platform: "Facebook", results: 93, cost: 5.37, ctr: 1.56, reach: "6 372", impressions: "9 152", spend: "499,67 Kč" },
      { id: "traffic-ig-bestsellers", rowLabel: "ig | bestsellers | statika | 06-26", title: "Bestsellers", platform: "Instagram", results: 91, cost: 5.49, ctr: 2.39, reach: "4 367", impressions: "5 184", spend: "500,00 Kč" }
    ]
  }
];

const boostTakeaways = [
  "V každém boostovacím bloku je nejdřív Business Manager přehled jako zdroj pravdy.",
  "Nejúspěšnější příspěvky jsou odvozené z řádků přehledu, ne z ručně vybraných kreativ.",
  "Kreativa v kartě vždy odkazuje na konkrétní řádek a používá stejné metriky jako přehled.",
  "Příspěvky s prostorem ke zlepšení se zobrazí jen tam, kde je slabší výkon jednoznačný."
];

const assetById = Object.fromEntries(metaAssets.map((asset) => [asset.id, asset]));

export const metaSectionHtml = `
<section class="chapter" id="meta"><div class="chapterHead glass"><div class="chapterTitle"><div class="chapterNo">04 · META</div><h2>${SystemLogo({ system: "meta", label: "Meta", size: "section", className: "sectionLogo" })}Meta kampaně · červen 2026</h2><p>Červnový výkon META kampaní s důrazem na PNO, počet nákupů a praktická doporučení pro další práci s rozpočtem.</p></div></div>
<div class="metaStack metaJun26">
  <div class="metaSectionIntro glass">
    <div><span class="pill systemPill">${SystemLogo({ system: "meta", label: "Meta", className: "channelLogo" })}META · červen 2026</span><h2>A. Dlouhodobé kampaně</h2><p>Každá kampaň má červnový výkon, květnový kontext a krátké čtení toho, co znamená kombinace PNO a počtu nákupů.</p></div>
    <div class="metaSourceNote">Hlavní otázka pro červen: kde se vyplatí držet objem a kde už růst nákupů začíná stát příliš draho.</div>
  </div>
  ${longTermCampaigns.map(renderLongTermCampaign).join("")}
  <div class="metaGroupTitle"><span>B.</span><div><h2>Lead kampaň</h2><p>Krátký pohled na cenu za výsledek, počet leadů a stabilitu výkonu mezi měsíci.</p></div></div>
  ${renderLeadCampaign(leadCampaign)}
  <div class="metaGroupTitle"><span>C.</span><div><h2>Produktové kampaně</h2><p>Betakaroten, Omega3, Týden letních slev a Železo čtené hlavně přes počet nákupů a PNO.</p></div></div>
  <div class="flightCards">${flightCampaigns.map(renderFlightCampaign).join("")}</div>
  <div class="metaGroupTitle"><span>D.</span><div><h2>Boostování příspěvků</h2><p>Engagement a traffic odděleně, včetně rozdílu mezi Facebookem a Instagramem.</p></div></div>
  ${renderBoostingSection()}
</div></section>`;

function renderLongTermCampaign(campaign) {
  return `
    <details class="metaCampaign metaLongTerm">
      <summary>
        <div class="metaSummary">
          <h3>${campaign.title}</h3>
          <p>${campaign.period} · ${campaign.conclusion}</p>
        </div>
        <div class="metaKpis">
          ${metaKpi("Nákupy", campaign.current.purchases, campaign.deltas[0])}
          ${metaKpi("PNO", campaign.current.pno, campaign.deltas[1])}
          ${metaKpi("Investice", campaign.current.spend, campaign.deltas[2])}
          <span class="detailBtn">Detail ⌄</span>
        </div>
      </summary>
      <div class="metaBody">
        <div class="detailGrid">
          <div>
            <span class="pill">Aktuální měsíc vs. předchozí měsíc</span>
            ${comparisonGrid(campaign)}
            ${interpretationBlock(campaign.interpretation)}
          </div>
          <div class="metaSourceBlock">
            <span class="pill blue">Kreativa a výkon</span>
            ${renderAssetGallery(campaignGalleryAssets(campaign))}
          </div>
        </div>
        ${campaign.creatives ? `<div class="metaCreativeSection"><span class="pill blue">Top kreativy</span><div class="creativeGrid">${campaign.creatives.map(renderCreative).join("")}</div></div>` : ""}
      </div>
    </details>
  `;
}

function renderLeadCampaign(lead) {
  return `
    <details class="metaCampaign metaLead">
      <summary>
        <div class="metaSummary"><h3>${lead.title}</h3><p>${lead.period} · stabilní počet výsledků při mírně lepší ceně za výsledek.</p></div>
        <div class="metaKpis">
          ${lead.metrics.map((metric) => `<div class="metaKpi"><span>${metric.label}</span><strong>${metric.value}</strong><small>${metric.previous}</small></div>`).join("")}
          <span class="detailBtn">Detail ⌄</span>
        </div>
      </summary>
      <div class="metaBody">
        <div class="detailGrid">
          <div>
            <span class="pill">Lead výkon</span>
            <div class="metaLeadMetrics">${lead.metrics.map((metric) => `<div><span>${metric.label}</span><strong>${metric.value}</strong><small>${metric.previous}</small></div>`).join("")}</div>
            <div class="metaInterpretation"><h4>Interpretace</h4><p>${lead.interpretation}</p></div>
          </div>
          <div class="metaSourceBlock">
            <span class="pill blue">Kreativa a výkon</span>
            ${renderAssetGallery(lead.assets)}
          </div>
        </div>
      </div>
    </details>
  `;
}

function renderFlightCampaign(flight) {
  return `
    <div class="flight metaFlightCard">
      <span class="pill">Kampaň · ${flight.period}</span>
      <h3>${flight.title}</h3>
      <div class="metaFlightGrid">
        <div class="metaFlightKpis">
          <div><span>Investice</span><strong>${flight.spend}</strong></div>
          <div><span>Výsledky</span><strong>${flight.results}</strong></div>
          <div><span>Efektivita</span><strong>${flight.cost}</strong></div>
          <div><span>Hodnota</span><strong>${flight.value}</strong></div>
        </div>
        <div class="metaSourceBlock metaFlightSourceBlock">
          <span class="pill blue">Kreativa a výkon</span>
          ${renderAssetGallery(flight.assets, "metaFlightAssets")}
        </div>
      </div>
      <div class="metaInterpretation compact"><h4>Interpretace</h4><p>${flight.note}</p></div>
    </div>
  `;
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
  const formattedValue = isPercentMetric
    ? `${formatMetaDeltaNumber(diff, 2)} p. b.`
    : isCurrencyMetric
      ? `${formatMetaDeltaNumber(diff)} Kč`
      : formatMetaDeltaNumber(diff, 2);
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
    ["CTR", campaign.current.ctr, metaMetricDelta("CTR", campaign.current.ctr, campaign.previous.ctr), campaign.previous.ctr],
    ["Frekvence", campaign.current.frequency, metaMetricDelta("Frekvence", campaign.current.frequency, campaign.previous.frequency), campaign.previous.frequency]
  ];

  return `<div class="metaCompareGrid">${metrics.map(([label, current, delta, previous]) => `
    <div class="metaCompareMetric">
      <span>${label}</span>
      <strong>${current}</strong>
      ${delta ? `<em class="yoyChip ${delta.tone}">${delta.value}</em>` : ""}
      <small>05/2026: ${previous}</small>
    </div>
  `).join("")}</div>`;
}

function interpretationBlock(copy) {
  return `<div class="metaInterpretation">
    <h4>Co se stalo</h4><p>${copy.happened}</p>
    <h4>Co data pravděpodobně znamenají</h4><p>${copy.meaning}</p>
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

function campaignGalleryAssets(campaign) {
  const topCreativeAssets = campaign.creatives
    ? campaign.creatives.flatMap((creative) => [creative.asset, creative.resultAsset].filter(Boolean))
    : [];

  return [...topCreativeAssets, ...campaign.assets];
}

function renderBoostingSection() {
  return `<div class="metaBoostingPanel glass">
    <div class="metaBoostVerdict">
      <span class="pill systemPill">${SystemLogo({ system: "meta", label: "Meta", className: "channelLogo" })}Meta · boostování</span>
      <h2>Boostování v červnu čteme od přehledu v Business Manageru: nejdřív zdroj pravdy, potom navázané příspěvky a jejich metriky.</h2>
      <p>Každá karta níže vychází z konkrétního řádku v přehledu. Díky tomu je jasné, která kreativa patří ke kterým výsledkům a proč se dostala mezi nejúspěšnější příspěvky nebo mezi položky s prostorem ke zlepšení.</p>
    </div>
    ${boostSections.map(renderBoostSection).join("")}
    <div class="metaBoostTakeaways">
      <h3>Co si z boostování odnést</h3>
      <div>${boostTakeaways.map((item) => `<p>${item}</p>`).join("")}</div>
    </div>
  </div>`;
}

function renderBoostSection(section) {
  const highlights = boostHighlights(section);
  const needsAttention = boostNeedsAttention(section);

  return `<div class="metaBoostSection">
    <div class="metaBoostSectionHead">
      <div>
        <h3>${section.title}</h3>
        <p>${section.objective}</p>
        <div class="metaBoostTruthNote">
          <b>Přehled z Business Manageru je zdroj pravdy.</b>
          <span>Výběr příspěvků níže vzniká z řádků v tomto přehledu a drží vazbu řádek → kreativa → metriky.</span>
        </div>
      </div>
      ${boostAssetThumb(section.overview, `${section.title} overview`, "wide")}
    </div>
    ${renderBoostPerformerGroup(section, highlights, "highlight")}
    ${needsAttention.length ? renderBoostPerformerGroup(section, needsAttention, "attention") : ""}
  </div>`;
}

function renderBoostPerformerGroup(section, rows, role) {
  const title = role === "highlight" ? "Nejúspěšnější příspěvky" : "Příspěvky s prostorem ke zlepšení";
  const lead = role === "highlight"
    ? "Výběr vzniká automaticky z nejsilnějších řádků podle platformy."
    : "Zobrazujeme jen příspěvky, kde je slabší výkon dostatečně jednoznačný.";

  return `<div class="metaBoostPerformerGroup ${role}">
    <div class="metaBoostPerformerHead">
      <span>${role === "highlight" ? "Highlights" : "Needs Attention"}</span>
      <h4>${title}</h4>
      <p>${lead}</p>
    </div>
    <div class="metaBoostPerformerGrid">
      ${rows.map((row) => renderBoostPerformerCard(section, row, role)).join("")}
    </div>
  </div>`
}

function renderBoostPerformerCard(section, row, role) {
  return `<article class="metaBoostPerformer ${role}">
    ${boostAssetThumb(row.asset, `Kreativa · ${row.platform}`, "performer")}
    <div class="metaBoostPerformerBody">
      <div class="metaBoostPerformerTop">
        <span>${row.platform}</span>
        <i>${role === "highlight" ? "Nejúspěšnější" : "Prostor ke zlepšení"}</i>
      </div>
      <h5>${row.title}</h5>
      <div class="metaBoostRowLink">
        <span>Vazba na přehled</span>
        <b>${row.rowLabel}</b>
      </div>
      <div class="metaBoostMetricGrid">
        ${boostMetrics(section, row).map((metric) => `<div><span>${metric.label}</span><strong>${metric.value}</strong></div>`).join("")}
      </div>
      <p>${boostAutoComment(section, row, role)}</p>
    </div>
  </article>`;
}

function boostHighlights(section) {
  const leaders = new Map();
  section.rows
    .filter((row) => row.asset)
    .forEach((row) => {
      const current = leaders.get(row.platform);
      if (!current || row.results > current.results || (row.results === current.results && row.cost < current.cost)) {
        leaders.set(row.platform, row);
      }
    });

  return [...leaders.values()].sort((a, b) => b.results - a.results);
}

function boostNeedsAttention(section) {
  if (section.id !== "traffic") return [];
  const avgCost = section.rows.reduce((sum, row) => sum + row.cost, 0) / section.rows.length;
  const avgCtr = section.rows.reduce((sum, row) => sum + row.ctr, 0) / section.rows.length;

  return section.rows
    .filter((row) => row.asset && row.cost >= avgCost * 1.45 && row.ctr < avgCtr)
    .sort((a, b) => b.cost - a.cost || a.ctr - b.ctr);
}

function boostMetrics(section, row) {
  if (section.id === "engagement") return row.metrics;

  return [
    { label: "LPV", value: `${row.results} LPV` },
    { label: "Cena za LPV", value: `${row.cost.toFixed(2).replace(".", ",")} Kč` },
    { label: "CTR", value: `${row.ctr.toFixed(2).replace(".", ",")} %` },
    { label: "Spend", value: row.spend }
  ];
}

function boostAutoComment(section, row, role) {
  if (section.id === "engagement") {
    return role === "highlight"
      ? `Nejsilnější ${row.platform} řádek v engagement přehledu: vysoký počet interakcí při ceně ${row.cost.toFixed(2).replace(".", ",")} Kč za výsledek.`
      : `Nižší počet engagementů při vyšší ceně za výsledek oproti ostatním boostovaným příspěvkům.`;
  }

  if (role === "highlight") {
    return `Nejvyšší počet návštěv cílové stránky na platformě ${row.platform} při velmi dobré ceně za LPV a nadprůměrném CTR.`;
  }

  return `Vyšší cena za návštěvu a podprůměrné CTR oproti ostatním trafficovým příspěvkům. Tady výkon stojí za další úpravu nebo opatrnější podporu.`;
}

function boostAssetThumb(assetId, customLabel, variant = "") {
  const asset = boostAssetById[assetId];
  if (!asset) return "";
  const label = customLabel || asset.label;
  const { width = 0, height = 0 } = asset.image_size || {};
  const isWide = variant === "wide" || (variant !== "performer" && width && height && width / height >= 1.8);
  const ratioStyle = width && height ? ` style="--asset-ratio:${width} / ${height}"` : "";
  return `<a class="creativeThumb metaAssetThumb metaBoostThumb${isWide ? " wideAsset" : ""}${variant === "performer" ? " performerAsset" : ""}" href="${asset.fullSrc}"${ratioStyle}>
    <img src="${asset.src}" alt="${asset.alt}" loading="lazy" decoding="async">
    <span>${label}</span>
  </a>`;
}
