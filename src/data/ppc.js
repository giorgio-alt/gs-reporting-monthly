import { SystemLogo } from "../components/SystemLogo.js";

const ppcAsset = (name, width, height) => ({
  full: `assets/report-jul-26/ppc/${name}.png`,
  thumb: `assets/report-jul-26/ppc/${name}-thumb.png`,
  image_size: { width, height }
});

const ppcAssets = {
  pmaxOverview: ppcAsset("pmax-overview-07-2026", 1600, 445),
  pmaxCompare: ppcAsset("pmax-compare-07-2026", 1600, 445),
  aiMaxCampaign: ppcAsset("ai-max-campaign-07-2026", 970, 189),
  aiMaxAdGroups: ppcAsset("ai-max-ad-groups-07-2026", 1465, 605),
  karsaRoas: ppcAsset("karsa-roas-troas-07-2026", 895, 330),
  karsaDailyProfit: ppcAsset("karsa-daily-profit-07-2026", 1010, 360),
  karsaMainOverview: ppcAsset("karsa-main-overview-07-2026", 890, 174),
  karsaClusters: ppcAsset("karsa-cluster-summary-07-2026", 555, 220),
  karsaClusterProducts: ppcAsset("karsa-cluster-products-07-2026", 735, 430),
  karsaClusterRoasHistory: ppcAsset("karsa-cluster-roas-history-07-2026", 690, 485),
  karsaProductMovements: ppcAsset("karsa-product-movements-07-2026", 890, 305)
};

const pmaxClusters = [
  {
    id: 3,
    roas: "293,26 %",
    targetRoas: "320 %",
    pno: "34,10 %",
    cost: "130 tis. Kč",
    conversions: "386,87",
    value: "381 tis. Kč",
    interactions: "6,31 tis.",
    raw: { cost: 129926.53, roas: 293.26, pno: 34.10, conversions: 386.87, interactions: 6311 },
    mom: {
      pno: { value: -10.46, tone: "good" },
      roas: { value: 11.68, tone: "good" },
      cost: { value: 6.19, tone: "neutral" },
      conversions: { value: -0.57, tone: "bad" },
      value: { value: -16.48, tone: "bad" }
    },
    comment: "Cluster 3 zůstává hlavní objemový tahoun. V červenci zvládl vyšší spend s lepší efektivitou: ROAS roste a PNO klesá, takže tady dává smysl držet řízení rozpočtu aktivní, ale ne brzdit ho zbytečně brzy.",
    assets: [
      { label: "Výkon clusteru", ...ppcAsset("pmax-cluster3-summary-07-2026", 1565, 325) }
    ]
  },
  {
    id: 2,
    roas: "238,03 %",
    targetRoas: "275 %",
    pno: "42,01 %",
    cost: "125 tis. Kč",
    conversions: "334,52",
    value: "296 tis. Kč",
    interactions: "6,28 tis.",
    raw: { cost: 124529.27, roas: 238.03, pno: 42.01, conversions: 334.52, interactions: 6280 },
    mom: {
      pno: { value: -7.90, tone: "good" },
      roas: { value: 8.58, tone: "good" },
      cost: { value: 127.35, tone: "neutral" },
      conversions: { value: 126.73, tone: "good" },
      value: { value: 92.33, tone: "good" }
    },
    comment: "Cluster 2 v červenci výrazně škáloval. Spend šel nahoru, konverze rostly ještě rychleji a PNO se zlepšilo, takže růst objemu zatím nepůsobí draze. Jen je potřeba hlídat, aby se při dalším navyšování nerozpadla hodnota objednávek.",
    assets: [
      { label: "Výkon clusteru", ...ppcAsset("pmax-cluster2-summary-07-2026", 1565, 315) }
    ]
  },
  {
    id: 1,
    roas: "224,20 %",
    targetRoas: "245 %",
    pno: "44,60 %",
    cost: "42,6 tis. Kč",
    conversions: "124,83",
    value: "95,6 tis. Kč",
    interactions: "8,64 tis.",
    raw: { cost: 42622.34, roas: 224.20, pno: 44.60, conversions: 124.83, interactions: 8641 },
    mom: {
      pno: { value: 15.65, tone: "bad" },
      roas: { value: -13.53, tone: "bad" },
      cost: { value: 214.57, tone: "neutral" },
      conversions: { value: 187.63, tone: "good" },
      value: { value: 140.23, tone: "good" }
    },
    comment: "Cluster 1 přinesl výrazně víc objemu, ale efektivita už za tím zaostala. Je to typický trade-off: více nákupů, vyšší spend a zároveň slabší ROAS. Další růst bych tu řídil opatrněji než u clusterů 2 a 3.",
    assets: [
      { label: "Výkon clusteru", ...ppcAsset("pmax-cluster1-summary-07-2026", 1565, 315) },
      { label: "Vývoj nákladů", ...ppcAsset("pmax-cluster1-cost-chart-07-2026", 820, 505) }
    ]
  },
  {
    id: 0,
    roas: "282,12 %",
    targetRoas: "235 %",
    pno: "35,45 %",
    cost: "14,3 tis. Kč",
    conversions: "55,20",
    value: "40,4 tis. Kč",
    interactions: "1,18 tis.",
    raw: { cost: 14322.41, roas: 282.12, pno: 35.45, conversions: 55.20, interactions: 1177 },
    mom: {
      pno: { value: -31.59, tone: "good" },
      roas: { value: 46.18, tone: "good" },
      cost: { value: 99.19, tone: "neutral" },
      conversions: { value: 169.22, tone: "good" },
      value: { value: 61.67, tone: "good" }
    },
    comment: "Cluster 0 se z menšího základu výrazně zlepšil. Objem je pořád nižší, ale ROAS je nad cílem a PNO kleslo, takže tu dává smysl nechat prostor pro další test bez unáhleného škrtání.",
    assets: [
      { label: "Výkon clusteru", ...ppcAsset("pmax-cluster0-summary-07-2026", 1565, 320) }
    ]
  }
];

const sklikRows = [
  { metric: "Prokliky", current: 24879, previous: 22873, format: "number", tone: "higher-good" },
  { metric: "Zobrazení", current: 4713854, previous: 5606961, format: "number", tone: "higher-good" },
  { metric: "CTR", current: 0.53, previous: 0.41, format: "percent", decimals: 2, tone: "higher-good", changeMode: "points" },
  { metric: "CPC", current: 7.49, previous: 8.22, format: "currency", decimals: 2, tone: "lower-good" },
  { metric: "Náklady", current: 186267.66, previous: 188127, format: "currency", decimals: 2, tone: "neutral" },
  { metric: "Konverze", current: 248, previous: 241, format: "number", primary: true, tone: "higher-good" },
  { metric: "Konverzní poměr", current: 248 / 24879 * 100, previous: 241 / 22873 * 100, format: "percent", decimals: 2, tone: "higher-good", changeMode: "points" },
  { metric: "Cena za konverzi", current: 751.08, previous: 780.61, format: "currency", decimals: 2, tone: "lower-good" },
  { metric: "Hodnota konverzí", current: 275345, previous: 244561, format: "currency", tone: "higher-good" },
  { metric: "PNO", current: 67.645, previous: 76.92, format: "percent", decimals: 2, tone: "lower-good", changeMode: "points" }
];

const aiMaxKpis = [
  { label: "Cena", value: "45 425,30 Kč" },
  { label: "ROAS", value: "447,24 %" },
  { label: "PNO", value: "22,36 %" },
  { label: "Konverze", value: "190,46" },
  { label: "CTR", value: "6,22 %" },
  { label: "Prům. CPC", value: "14,54 Kč" }
];

const aiMaxAdGroups = [
  { group: "GS Condro Diamant", value: "86 450,97 Kč", roas: "7,60", clicks: "491", ctr: "12,77 %", cost: "11 377,52 Kč", conversions: "71,35" },
  { group: "GS Koenzim Q10", value: "23 742,93 Kč", roas: "3,83", clicks: "715", ctr: "6,07 %", cost: "6 195,84 Kč", conversions: "25,17" },
  { group: "GS Merilin", value: "31 266,98 Kč", roas: "5,09", clicks: "372", ctr: "9,23 %", cost: "6 140,61 Kč", conversions: "29,05" },
  { group: "Cemio Kamzík", value: "18 152 Kč", roas: "3,38", clicks: "383", ctr: "4,80 %", cost: "5 367,63 Kč", conversions: "15" }
];

const karsaKpis = [
  { label: "Profit / den", value: "4 899" },
  { label: "ROAS 30D", value: "2,147" },
  { label: "Hodnota konverzí / den", value: "25 556" },
  { label: "Konverze / den", value: "30,5" },
  { label: "Cena / den", value: "11 901" },
  { label: "Kliknutí / den", value: "719" },
  { label: "Zobrazení / den", value: "160 235" }
];

const sklikCampaignRows = [
  {
    group: "Search",
    campaign: "Vyhledávání / Search",
    cost: 6998.84,
    clicks: 985,
    impressions: 6825,
    conversions: 44,
    value: 51085,
    pno: 13.70,
    previous: { cost: 6998.84 / 1.175, conversions: 44 / 0.898, value: 51085 / 1.066, pno: 12.44 }
  },
  {
    group: "Retargeting",
    campaign: "Dynamický retargeting",
    cost: 92355.38,
    clicks: 13815,
    impressions: 3335193,
    conversions: 166,
    value: 188394,
    pno: 49.02,
    previous: { cost: 92355.38 / 1.538, conversions: 166 / 1.114, value: 188394 / 1.481, pno: 47.22 }
  },
  {
    group: "PMax",
    campaign: "PMax",
    cost: 37127.84,
    clicks: 4539,
    impressions: 917203,
    conversions: 37,
    value: 35473,
    pno: 104.67,
    previous: { cost: 37127.84 / 0.635, conversions: 37 / 0.902, value: 35473 / 0.525, pno: 86.43 }
  },
  {
    group: "Display",
    campaign: "Display / prospecting",
    cost: 13888.99,
    clicks: 3456,
    impressions: 373686,
    conversions: 1,
    value: 393,
    pno: 3534.09,
    previous: { cost: 13888.99 / 0.394, conversions: 2, value: 393 / 0.214, pno: 1918.89 }
  },
  {
    group: "PLA",
    campaign: "PLA / produktová inzerce",
    cost: 35896.61,
    clicks: 2084,
    impressions: 80932,
    conversions: 0,
    value: 0,
    pno: null,
    previous: { cost: 35896.61 / 1.263, conversions: 0, value: 0, pno: null }
  }
];

const sklikGroupConfig = {
  Search: {
    displayName: "Vyhledávání / Search",
    status: "Velmi efektivní",
    tone: "good",
    description: "Search drží velmi zdravé PNO 13,70 %. Konverzí je meziměsíčně méně, ale hodnota konverzí roste, takže jde pořád o malý, ale obchodně kvalitní zdroj."
  },
  Retargeting: {
    displayName: "Dynamický retargeting",
    status: "Hlavní přínos",
    tone: "stable",
    includes: ["Remarketing statika", "DRM | GS Klub.cz – dynamický banner", "DRTG seznam návštěvníci"],
    description: "Dynamický retargeting drží hlavní obchodní přínos Skliku. Náklady rostly, ale zároveň přibyly konverze i jejich hodnota, takže vyšší investice měla reálný obchodní dopad."
  },
  PMax: {
    displayName: "PMax",
    status: "Slabší efektivita",
    tone: "watch",
    description: "PMax v červenci ubral náklady i objem, ale hodnota konverzí klesla rychleji než spend. PNO se proto zhoršilo a kampaň potřebuje opatrnější řízení produktových skupin."
  },
  Display: {
    displayName: "Display / prospecting",
    status: "Podpůrný výkon",
    tone: "watch",
    description: "Display má velmi nízký konverzní objem, takže extrémní PNO nebereme jako stabilní obchodní signál. V červenci funguje spíš jako podpůrný zásah než jako výkonový tahoun."
  },
  PLA: {
    displayName: "PLA / produktová inzerce",
    status: "Bez konverzí",
    tone: "muted",
    description: "PLA zvýšila spend, ale konverze zůstávají na nule. Není to technická chyba v reportu; pro další měsíc dává smysl kontrola feedu, relevance a produktového pokrytí."
  }
};

const sklikGroupOrder = ["Search", "Retargeting", "PMax", "Display", "PLA"];

const sklikCampaignGroups = sklikGroupOrder.map((group) => {
  const campaigns = sklikCampaignRows.filter((row) => row.group === group);
  const sum = (key) => campaigns.reduce((total, row) => total + row[key], 0);
  const cost = sum("cost");
  const clicks = sum("clicks");
  const impressions = sum("impressions");
  const conversions = sum("conversions");
  const value = sum("value");
  const primary = campaigns[0] ?? {};
  const previous = primary.previous ?? {};
  return {
    group,
    displayName: sklikGroupConfig[group].displayName ?? group,
    campaigns,
    ...sklikGroupConfig[group],
    cost,
    clicks,
    impressions,
    conversions,
    value,
    ctr: impressions > 0 ? clicks / impressions * 100 : null,
    cpc: clicks > 0 ? cost / clicks : null,
    conversionRate: clicks > 0 ? conversions / clicks * 100 : null,
    costPerConversion: conversions > 0 ? cost / conversions : null,
    pno: Number.isFinite(primary.pno) ? primary.pno : value > 0 ? cost / value * 100 : null,
    previous: {
      cost: previous.cost,
      conversions: previous.conversions,
      value: previous.value,
      pno: previous.pno
    }
  };
});

const sklikAccountTotals = {
  cost: 186267.66,
  clicks: 24879,
  impressions: 4713854,
  conversions: 248,
  value: 275345
};

const sklikChartMetrics = [
  { id: "cost", label: "Náklady", value: (group) => group.cost, format: "currency" },
  { id: "conversions", label: "Konverze", value: (group) => group.conversions, format: "number" },
  { id: "value", label: "Hodnota konverzí", value: (group) => group.value, format: "currency" },
  { id: "pno", label: "PNO", value: (group) => group.pno, format: "percent" }
];

const karsaClusterRows = [
  { cluster: "Cluster 0", products: "45", roas: "2,04", value: "15 317 / 7 492", campaign: "PMAX | cluster 0" },
  { cluster: "Cluster 1", products: "136", roas: "1,94", value: "40 431 / 20 799", campaign: "PMAX | cluster 1" },
  { cluster: "Cluster 2", products: "41", roas: "1,63", value: "121 478 / 74 330", campaign: "PMAX | cluster 2" },
  { cluster: "Cluster 3", products: "25", roas: "2,43", value: "237 749 / 97 954", campaign: "PMAX | cluster 3" }
];

const googleAdsComment = "PMax se v červenci čte nejlépe přes clustery: dvojka a trojka drží největší obchodní váhu, zatímco menší clustery ukazují, kde se dá ještě hledat efektivní objem. Pozitivní je, že u hlavních clusterů roste nebo se stabilizuje návratnost i při vyšší aktivitě.";
const karsaComment = "Karsa AI pomáhá rozpadnout PMax výkon na produktová portfolia a hlídat, jestli se růst opírá o zdravé skupiny produktů. V PTC Manageru zatím dává smysl držet původní tROAS: po úvodní učící fázi byl výkon ještě nekonzistentní, takže teď je lepší nejdřív stabilizovat výsledky a teprve potom řešit výraznější změnu cílové návratnosti.";
const sklikComment = "Sklik v červenci pracoval efektivněji. Při téměř stejných nákladech přinesl více prokliků, více konverzí a o 12,6 % vyšší hodnotu konverzí. Cena za konverzi klesla na 751 Kč a PNO se zlepšilo o 9,28 procentního bodu. Výkon ale nebyl napříč kampaněmi rovnoměrný: hlavní obchodní přínos držel retargeting, zatímco PMax a Display zůstávají efektivitou slabší.";

const karsaClusterVisuals = [
  {
    asset: ppcAssets.karsaClusters,
    label: "Karsa AI · souhrn clusterů",
    title: "Souhrn clusterů",
    copy: "Souhrn ukazuje, jak Karsa rozděluje PMax produkty do výkonnostních portfolií. Pomáhá odlišit, kde se růst opírá o zdravé skupiny produktů a kde je lepší držet rozpočet opatrněji."
  },
  {
    asset: ppcAssets.karsaClusterProducts,
    label: "Karsa AI · počet produktů",
    title: "Počet produktů",
    copy: "Graf čte skladbu portfolia v jednotlivých clusterech a změnu jejich velikosti v čase. Stabilnější rozložení je dobrý signál, že se produktové rozdělení postupně usazuje."
  },
  {
    asset: ppcAssets.karsaClusterRoasHistory,
    label: "Karsa AI · vývoj ROAS",
    title: "Vývoj ROAS",
    copy: "Křivky ukazují rozdílný vývoj návratnosti clusterů. Krátký pohyb nebereme jako jistou predikci, spíš jako signál, kde se výkon začíná odchylovat od zbytku portfolia."
  },
  {
    asset: ppcAssets.karsaProductMovements,
    label: "Karsa AI · pohyby produktů",
    title: "Pohyby produktů",
    copy: "Moved In a Moved Out ukazují přesuny mezi clustery, Added a Removed nové nebo vyřazené produkty. Vyšší počet přesunů může znamenat učící se fázi; postupné zklidnění pomáhá jistějšímu řízení rozpočtu."
  }
];

const changeClass = (value) => value.trim().startsWith("+") ? "good" : value.trim().startsWith("-") ? "bad" : "neutral";
const chip = (value, tone = changeClass(value)) => `<span class="labelChange ${tone}">${value}</span>`;
const formatNumber = new Intl.NumberFormat("cs-CZ", { maximumFractionDigits: 0 });
const formatDecimal = (value, decimals = 2) => new Intl.NumberFormat("cs-CZ", {
  minimumFractionDigits: decimals,
  maximumFractionDigits: decimals
}).format(value);

const formatSklikValue = (row, value) => {
  if (value === null || value === undefined) return "—";
  const decimals = row.decimals ?? 0;
  const formatter = new Intl.NumberFormat("cs-CZ", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  if (row.format === "currency") return `${formatter.format(value)} Kč`;
  if (row.format === "percent") return `${formatter.format(value)} %`;
  return formatNumber.format(value);
};

const getSklikChange = (row) => {
  if (!Number.isFinite(row.current) || !Number.isFinite(row.previous) || row.previous === 0) return null;
  const change = row.changeMode === "points" ? row.current - row.previous : ((row.current / row.previous) - 1) * 100;
  const sign = change > 0 ? "+" : "";
  const tone = row.tone === "neutral"
    ? "neutral"
    : row.tone === "lower-good"
      ? change < 0 ? "good" : change > 0 ? "bad" : "neutral"
      : change > 0 ? "good" : change < 0 ? "bad" : "neutral";
  const label = row.changeMode === "points"
    ? `${sign}${formatDecimal(change, 2)} p. b.`
    : `${sign}${formatDecimal(change, 1)} %`;
  return { label, tone };
};

const renderShot = (item, label = item.label) => `
  <a class="visualItem ppcAssetShot" href="${item.full}"${item.image_size ? ` style="--asset-ratio:${item.image_size.width} / ${item.image_size.height}"` : ""}>
    <img src="${item.thumb}" alt="${label}" loading="lazy">
    <span>${label}</span>
  </a>`;

const renderKarsaVisual = (item) => `
  <article class="karsaVisualCard">
    ${renderShot(item.asset, item.label)}
    <div class="karsaVisualCopy">
      <h4>${item.title}</h4>
      <p>${item.copy}</p>
    </div>
  </article>`;

const renderCluster = (cluster) => {
  const gridClass = [
    "ppcAssetGrid",
    cluster.assets.length === 1 ? "ppcAssetGridSingle" : "",
    cluster.assets.length === 2 ? "ppcAssetGridTwo" : ""
  ].filter(Boolean).join(" ");

  return `
  <details class="ppcCluster" ${cluster.id === 3 ? "open" : ""}>
    <summary>
      <div>
        <span class="pill">PMax cluster ${cluster.id}</span>
        <h3>PMax cluster ${cluster.id}</h3>
        <p>${cluster.comment}</p>
        <span class="detailBtn ppcDetailBtn">Zobrazit detail ⌄</span>
      </div>
      <div class="ppcClusterKpis">
        <div><span>ROAS</span><strong>${cluster.roas}</strong><small>cíl ${cluster.targetRoas}</small></div>
        <div><span>PNO</span><strong>${cluster.pno}</strong><small>cena ${cluster.cost}</small></div>
        <div><span>Konverze</span><strong>${cluster.conversions}</strong><small>hodnota ${cluster.value}</small></div>
      </div>
    </summary>
    <div class="ppcClusterBody">
      <div class="${gridClass}">${cluster.assets.map(renderShot).join("")}</div>
    </div>
  </details>`;
};

const renderSklikRow = (row) => {
  const change = getSklikChange(row);
  return `
  <tr class="${row.primary ? "primaryMetricRow" : ""}">
    <td>${row.metric}</td>
    <td>${formatSklikValue(row, row.current)}</td>
    <td>${formatSklikValue(row, row.previous)}</td>
    <td class="deltaCell">${change ? chip(change.label, change.tone) : ""}</td>
  </tr>`;
};

const renderKarsaRow = (row) => `
  <tr>
    <td>${row.cluster}</td>
    <td>${row.products}</td>
    <td>${row.roas}</td>
    <td>${row.value}</td>
    <td>${row.campaign}</td>
  </tr>`;

const renderMiniKpi = (item) => `
  <div class="ppcMiniKpi">
    <span>${item.label}</span>
    <strong>${item.value}</strong>
  </div>`;

const renderAiMaxAdGroupRow = (row) => `
  <tr>
    <td>${row.group}</td>
    <td>${row.value}</td>
    <td>${row.roas}</td>
    <td>${row.conversions}</td>
    <td>${row.ctr}</td>
    <td>${row.cost}</td>
  </tr>`;

const pmaxDeltaBadge = (delta) => {
  if (!delta) return "";
  const direction = delta.value > 0 ? "↑" : delta.value < 0 ? "↓" : "→";
  const value = Math.abs(delta.value).toFixed(2).replace(".", ",");
  return `<span class="pmaxDeltaBadge ${delta.tone}">${direction} ${value} %</span>`;
};

const pmaxPointDeltaBadge = (delta) => {
  if (!delta) return "";
  const direction = delta.value > 0 ? "↑" : delta.value < 0 ? "↓" : "→";
  const value = Math.abs(delta.value).toFixed(2).replace(".", ",");
  return `<span class="pmaxDeltaBadge ${delta.tone}">${direction} ${value} p. b.</span>`;
};

const renderPmaxCell = (value, delta, options = {}) => `
  <span class="pmaxMetricCell">
    <strong>${value}</strong>
    ${options.points ? pmaxPointDeltaBadge(delta) : pmaxDeltaBadge(delta)}
  </span>`;

const pmaxRawValue = (cluster) => cluster.raw.cost * cluster.raw.roas / 100;
const pmaxTotal = (() => {
  const current = pmaxClusters.reduce((total, cluster) => ({
    cost: total.cost + cluster.raw.cost,
    conversions: total.conversions + cluster.raw.conversions,
    value: total.value + pmaxRawValue(cluster),
    interactions: total.interactions + cluster.raw.interactions
  }), { cost: 0, conversions: 0, value: 0, interactions: 0 });

  const previous = pmaxClusters.reduce((total, cluster) => ({
    cost: total.cost + cluster.raw.cost / (1 + cluster.mom.cost.value / 100),
    conversions: total.conversions + cluster.raw.conversions / (1 + cluster.mom.conversions.value / 100),
    value: total.value + pmaxRawValue(cluster) / (1 + cluster.mom.value.value / 100),
    interactions: total.interactions
  }), { cost: 0, conversions: 0, value: 0, interactions: 0 });

  const roas = current.value / current.cost * 100;
  const previousRoas = previous.value / previous.cost * 100;
  const pno = current.cost / current.value * 100;
  const previousPno = previous.cost / previous.value * 100;

  return {
    cost: current.cost,
    conversions: current.conversions,
    value: current.value,
    interactions: current.interactions,
    roas,
    pno,
    mom: {
      roas: { value: ((roas / previousRoas) - 1) * 100, tone: roas > previousRoas ? "good" : "bad" },
      pno: { value: pno - previousPno, tone: pno < previousPno ? "good" : "bad" },
      cost: { value: ((current.cost / previous.cost) - 1) * 100, tone: "neutral" },
      conversions: { value: ((current.conversions / previous.conversions) - 1) * 100, tone: current.conversions > previous.conversions ? "good" : "bad" },
      value: { value: ((current.value / previous.value) - 1) * 100, tone: current.value > previous.value ? "good" : "bad" }
    }
  };
})();

const renderPmaxOverviewRow = (cluster) => `
  <tr>
    <td>PMax cluster ${cluster.id}</td>
    <td>${renderPmaxCell(cluster.roas, cluster.mom?.roas)}</td>
    <td>${cluster.targetRoas}</td>
    <td>${renderPmaxCell(cluster.pno, cluster.mom?.pno, { points: true })}</td>
    <td>${renderPmaxCell(cluster.cost, cluster.mom?.cost)}</td>
    <td>${renderPmaxCell(cluster.conversions, cluster.mom?.conversions)}</td>
    <td>${renderPmaxCell(cluster.value, cluster.mom?.value)}</td>
  </tr>`;

const renderPmaxTotalRow = () => `
  <tr class="pmaxTotalRow">
    <td>Celkem / TOTAL</td>
    <td>${renderPmaxCell(formatSklikMetric(pmaxTotal.roas, "percent", 2), pmaxTotal.mom.roas)}</td>
    <td>—</td>
    <td>${renderPmaxCell(formatSklikMetric(pmaxTotal.pno, "percent", 2), pmaxTotal.mom.pno, { points: true })}</td>
    <td>${renderPmaxCell(formatSklikMetric(pmaxTotal.cost, "currency", 2), pmaxTotal.mom.cost)}</td>
    <td>${renderPmaxCell(formatDecimal(pmaxTotal.conversions, 2), pmaxTotal.mom.conversions)}</td>
    <td>${renderPmaxCell(formatSklikMetric(pmaxTotal.value, "currency", 0), pmaxTotal.mom.value)}</td>
  </tr>`;

const formatSklikMetric = (value, format = "number", decimals = format === "percent" ? 2 : 0) => {
  if (!Number.isFinite(value)) return "—";
  if (format === "currency") return `${formatDecimal(value, decimals)} Kč`;
  if (format === "percent") return `${formatDecimal(value, decimals)} %`;
  return formatNumber.format(value);
};

const getMetricDelta = (current, previous, options = {}) => {
  if (!Number.isFinite(current) || !Number.isFinite(previous)) return null;
  if (!options.allowZeroPrevious && previous === 0) return null;
  const value = options.mode === "points" ? current - previous : previous === 0 ? null : ((current / previous) - 1) * 100;
  if (!Number.isFinite(value)) return null;

  const tone = options.tone === "neutral"
    ? "neutral"
    : options.tone === "lower-good"
      ? value < 0 ? "good" : value > 0 ? "bad" : "neutral"
      : value > 0 ? "good" : value < 0 ? "bad" : "neutral";
  const sign = value > 0 ? "+" : "";
  const label = options.mode === "points"
    ? `${sign}${formatDecimal(value, 2)} p. b.`
    : `${sign}${formatDecimal(value, 1)} %`;
  return { label, tone };
};

const sklikMetricDelta = (delta, note = "vs. červen") => delta
  ? `<small class="sklikMetricDelta ${delta.tone}">${delta.label} ${note}</small>`
  : "";

const renderSklikPrimaryMetric = (label, value, delta, options = {}) => `
  <div class="${options.muted ? "is-muted" : ""}">
    <span>${label}</span>
    <strong>${value}</strong>
    ${sklikMetricDelta(delta)}
  </div>`;

const renderSklikTypeCard = (group) => `
  <article class="sklikTypeCard ${group.tone}">
    <div class="sklikTypeHead">
      <span>${group.displayName}</span>
      <i>${group.status}</i>
    </div>
    <div class="sklikTypePrimary">
      ${renderSklikPrimaryMetric("Náklady", formatSklikMetric(group.cost, "currency", 2), getMetricDelta(group.cost, group.previous.cost, { tone: "neutral" }))}
      ${renderSklikPrimaryMetric("Konverze", formatSklikMetric(group.conversions), getMetricDelta(group.conversions, group.previous.conversions, { tone: "higher-good", allowZeroPrevious: group.conversions === 0 }))}
      ${renderSklikPrimaryMetric("Hodnota konverzí", formatSklikMetric(group.value, "currency"), getMetricDelta(group.value, group.previous.value, { tone: "higher-good", allowZeroPrevious: group.value === 0 }))}
      ${renderSklikPrimaryMetric("PNO", group.group === "Display" ? "podpůrný výkon" : formatSklikMetric(group.pno, "percent", 2), group.group === "Display" ? null : getMetricDelta(group.pno, group.previous.pno, { tone: "lower-good", mode: "points" }), { muted: group.group === "Display" || group.group === "PLA" })}
    </div>
    <dl class="sklikTypeDetail">
      <div><dt>Prokliky</dt><dd>${formatSklikMetric(group.clicks)}</dd></div>
      <div><dt>Zobrazení</dt><dd>${formatSklikMetric(group.impressions)}</dd></div>
      <div><dt>CTR</dt><dd>${formatSklikMetric(group.ctr, "percent", 2)}</dd></div>
      <div><dt>CPC</dt><dd>${formatSklikMetric(group.cpc, "currency", 2)}</dd></div>
      <div><dt>Konv. poměr</dt><dd>${formatSklikMetric(group.conversionRate, "percent", 2)}</dd></div>
      <div><dt>Cena za konverzi</dt><dd>${formatSklikMetric(group.costPerConversion, "currency", 2)}</dd></div>
    </dl>
    ${group.includes ? `<div class="sklikIncludes"><span>Zahrnuje</span><b>${group.includes.join(" · ")}</b></div>` : ""}
    <p>${group.description}</p>
  </article>`;

const renderSklikChartPanel = (metric, active = false) => {
  const values = sklikCampaignGroups.map((group) => metric.value(group)).filter(Number.isFinite);
  const max = Math.max(...values, 1);
  return `<div class="sklikChartPanel${active ? " is-active" : ""}" data-sklik-chart-panel="${metric.id}" ${active ? "" : "hidden"}>
    ${sklikCampaignGroups.map((group) => {
      const value = metric.value(group);
      const height = Number.isFinite(value) ? Math.max(value / max * 100, 5) : 0;
      return `<div class="sklikChartBar">
        <span>${group.displayName}</span>
        <i style="--bar-height:${height}%"></i>
        <strong>${formatSklikMetric(value, metric.format, metric.format === "currency" ? 0 : 2)}</strong>
      </div>`;
    }).join("")}
  </div>`;
};

const renderSklikCampaignTypeBlock = () => `
  <div class="sklikTypeBlock" id="sklik-campaign-types">
    <div class="sklikTypeIntro">
      <span class="pill orange">Sklik podle typu kampaní</span>
      <h3>Sklik podle typu kampaní</h3>
      <p>Agregovaný pohled na výkon vyhledávání, dynamického retargetingu, PMaxu, displaye a produktové inzerce.</p>
    </div>
    <div class="sklikTypeGrid">
      ${sklikCampaignGroups.map(renderSklikTypeCard).join("")}
    </div>
    <div class="sklikAccountCheck">
      <span>Účetní kontrola</span>
      <b>${formatSklikMetric(sklikAccountTotals.cost, "currency", 2)} · ${formatSklikMetric(sklikAccountTotals.clicks)} prokliků · ${formatSklikMetric(sklikAccountTotals.impressions)} zobrazení · ${formatSklikMetric(sklikAccountTotals.conversions)} konverzí · ${formatSklikMetric(sklikAccountTotals.value, "currency")}</b>
    </div>
    <div class="sklikChart" data-sklik-chart>
      <div class="sklikChartHead">
        <h4>Porovnání skupin</h4>
        <div class="sklikChartTabs" role="tablist" aria-label="Přepnutí metriky grafu Sklik">
          ${sklikChartMetrics.map((metric, index) => `<button type="button" class="${index === 0 ? "is-active" : ""}" data-sklik-chart-toggle="${metric.id}" aria-selected="${index === 0 ? "true" : "false"}">${metric.label}</button>`).join("")}
        </div>
      </div>
      <div class="sklikChartPanels">
        ${sklikChartMetrics.map((metric, index) => renderSklikChartPanel(metric, index === 0)).join("")}
      </div>
    </div>
  </div>`;

export const ppcSectionHtml = `<section class="chapter" id="ppc">
  <div class="chapterHead glass">
    <div class="chapterTitle">
      <div class="chapterNo">03 · Google Ads &amp; Sklik</div>
      <h2>${SystemLogo({ system: "googleAds", label: "Google Ads", size: "section", className: "sectionLogo" })}Google Ads &amp; Sklik</h2>
      <p>PPC kapitola kombinuje červencový PMax výkon, produktové clustery z Karsa AI, ROAS vs. tROAS a výsledky Skliku.</p>
    </div>
  </div>

  <div class="panel glass ppcSummary" id="ppc-summary">
    <span class="pill systemPill">${SystemLogo({ system: "googleAds", label: "Google Ads", className: "channelLogo" })}${SystemLogo({ system: "seznamSklik", label: "Seznam / Sklik", className: "channelLogo" })}PPC summary</span>
    <h2>PMax v červenci ukazuje čitelnější výkon přes clustery, Sklik pracoval efektivněji a zvedl hodnotu konverzí.</h2>
    <p>U PMax části je důležité nesledovat jen souhrn kampaně, ale rozlišit clustery podle ROAS, PNO a objemu. Karsa AI pomáhá vidět, kde produkty drží výkon nad cílem a kde je prostor pro optimalizaci. Sklik v červenci přidal prokliky, konverze i hodnotu konverzí při téměř stejných nákladech.</p>
    <div class="ppcNavChips">
      <a href="#pmax-overview">PMax</a>
      <a href="#pmax-clusters">Clustery</a>
      <a href="#karsa-ai">Karsa AI</a>
      <a href="#sklik-results">Sklik</a>
      <a href="#sklik-campaign-types">Sklik typy kampaní</a>
    </div>
  </div>

  <div class="panel glass ppcSection" id="pmax-overview">
    <span class="pill systemPill">${SystemLogo({ system: "googleAds", label: "Google Ads", className: "channelLogo" })}PMax overview</span>
    <p class="pmaxDeltaNote">Změna oproti červnu 2026</p>
    <div class="dashboardTable">
      <table class="dashTable ppcNativeTable">
        <thead><tr><th>Cluster</th><th>ROAS</th><th>Cílová ROAS</th><th>PNO</th><th>Cena</th><th>Konverze</th><th>Hodnota konverze</th></tr></thead>
        <tbody>
          ${pmaxClusters.map(renderPmaxOverviewRow).join("")}
          ${renderPmaxTotalRow()}
        </tbody>
      </table>
    </div>
    <div class="sourceSummary compactSummary">
      <h3>Čtení PMax</h3>
      <p>${googleAdsComment}</p>
    </div>
    <div class="ppcAssetGrid ppcAssetGridTwo">
      ${renderShot(ppcAssets.pmaxOverview, "PMax přehled výkonu")}
      ${renderShot(ppcAssets.pmaxCompare, "PMax meziměsíční porovnání")}
    </div>
  </div>

  <div class="panel glass ppcSection" id="pmax-clusters">
    <span class="pill systemPill">${SystemLogo({ system: "googleAds", label: "Google Ads", className: "channelLogo" })}PMax clustery</span>
    <div class="ppcClusterStack">${pmaxClusters.map(renderCluster).join("")}</div>
  </div>

  <div class="panel glass ppcSection ppcOneOff" id="ai-max">
    <span class="pill systemPill">${SystemLogo({ system: "googleAds", label: "Google Ads", className: "channelLogo" })}AI Max</span>
    <div class="ppcHeroGrid">
      <div>
        <h2>AI Max v červenci ukazuje nejsilnější Google Ads kampaň s velmi slušnou efektivitou.</h2>
        <p class="sectionLead">Kampaň kombinuje vysoké CTR, ROAS 447,24 % a PNO 22,36 %. Největší obchodní roli v sestavách drží GS Condro Diamant, zatímco Merilin má dobrý poměr hodnoty a nákladů. Tenhle blok bereme jako nový pohled, který může v dalších měsících dobře doplnit clusterové řízení.</p>
      </div>
      <div class="ppcMiniKpiGrid">${aiMaxKpis.map(renderMiniKpi).join("")}</div>
    </div>
    <div class="dashboardTable">
      <table class="dashTable ppcNativeTable">
        <thead><tr><th>Sestava</th><th>Hodnota konverzí</th><th>ROAS</th><th>Konverze</th><th>CTR</th><th>Cena</th></tr></thead>
        <tbody>${aiMaxAdGroups.map(renderAiMaxAdGroupRow).join("")}</tbody>
      </table>
    </div>
    <div class="ppcAssetGrid ppcAssetGridSingle aiMaxAssetGrid">
      ${renderShot(ppcAssets.aiMaxAdGroups, "AI Max · sestavy")}
    </div>
  </div>

  <div class="panel glass ppcSection" id="karsa-ai">
    <span class="pill">Karsa AI</span>
    <div class="ppcHeroGrid">
      <div>
        <h2>Karsa AI rozděluje PMax na produktová portfolia s rozdílným výkonem.</h2>
        <p class="sectionLead">Červencový Karsa pohled kombinuje denní profit, klouzavé 30denní KPI a vývoj produktových clusterů. Smyslem není predikovat budoucnost z jednoho grafu, ale lépe číst, kde se portfolio stabilizuje a kde je potřeba rozpočet řídit opatrněji.</p>
        <div class="ppcGlossary">
          <div><b>ROAS</b><p>Skutečná návratnost investice do reklamy, tedy hodnota konverzí vůči nákladům.</p></div>
          <div><b>tROAS</b><p>Cílová návratnost nastavená v Google Ads.</p></div>
          <div><b>EMA 7</b><p>Sedmidenní vyhlazený trend, který dává větší váhu novějším dnům a pomáhá číst vývoj bez denních výkyvů.</p></div>
        </div>
      </div>
      <div class="ppcMiniKpiGrid">${karsaKpis.map(renderMiniKpi).join("")}</div>
    </div>
    <div class="sourceSummary compactSummary">
      <h3>Denní profit a trend</h3>
      <p>Profit je hodnota konverzí minus náklady. MACD a Signal pomáhají sledovat změnu dynamiky profitu, ale nebereme je jako jistou předpověď: slouží hlavně jako včasný signál, kdy se výkon začíná zlepšovat nebo slábnout.</p>
    </div>
    <div class="ppcAssetGrid ppcAssetGridTwo">
      ${renderShot(ppcAssets.karsaDailyProfit, "Karsa AI · denní profit")}
      ${renderShot(ppcAssets.karsaRoas, "Karsa AI přehled ROAS vs. tROAS")}
    </div>
    <div class="sourceSummary compactSummary">
      <h3>Vývoj produktových clusterů</h3>
      <p>Pohled na clustery ukazuje, jak se v čase skládá produktové portfolio. Vyšší počet přesunů může znamenat učící se nebo nestabilní fázi; postupná stabilizace je naopak dobrý signál, že se produktové rozdělení začíná usazovat.</p>
    </div>
    <div class="karsaVisualGrid">
      ${karsaClusterVisuals.map(renderKarsaVisual).join("")}
    </div>
    <div class="sourceSummary compactSummary">
      <h3>Karsa AI / Clusters</h3>
      <p>${karsaComment}</p>
    </div>
  </div>

  <div class="panel glass ppcSection" id="sklik-results">
    <span class="pill orange systemPill">${SystemLogo({ system: "seznamSklik", label: "Seznam / Sklik", className: "channelLogo" })}Sklik výsledky</span>
    <div class="sklikResultsContent">
      <h2>Sklik v červenci pracoval efektivněji: více prokliků, více konverzí a vyšší hodnota konverzí.</h2>
      <p class="sectionLead">Červencový přehled ukazuje 24 879 prokliků, 248 konverzí, cenu za konverzi 751,08 Kč a hodnotu konverzí 275 345 Kč. Oproti červnu je to úspornější práce s rozpočtem a lepší obchodní výsledek.</p>
      <div class="sourceSummary compactSummary">
        <h3>Čtení Skliku</h3>
        <p>${sklikComment}</p>
      </div>
      <div class="dashboardTable">
        <table class="dashTable ppcNativeTable">
          <thead><tr><th>Metrika</th><th>Červenec 2026</th><th>Červen 2026</th><th class="changeCol">Změna</th></tr></thead>
          <tbody>${sklikRows.map(renderSklikRow).join("")}</tbody>
        </table>
      </div>
      ${renderSklikCampaignTypeBlock()}
    </div>
  </div>
</section>`;
