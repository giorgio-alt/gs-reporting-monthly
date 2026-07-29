import { SystemLogo } from "../components/SystemLogo.js";

const ppcAssets = {
  pmaxOverview: {
    full: "assets/report-jun-26/ppc/extracted/slide-22-asset-01.webp",
    thumb: "assets/report-jun-26/ppc/extracted/slide-22-asset-01-thumb.webp"
  },
  pmaxCompare: {
    full: "assets/report-jun-26/ppc/extracted/slide-23-asset-01.webp",
    thumb: "assets/report-jun-26/ppc/extracted/slide-23-asset-01-thumb.webp"
  },
  karsaRoas: {
    full: "assets/report-jun-26/ppc/extracted/slide-36-asset-01.webp",
    thumb: "assets/report-jun-26/ppc/extracted/slide-36-asset-01-thumb.webp"
  },
  karsaClusters: {
    full: "assets/report-jun-26/ppc/extracted/slide-38-asset-01.webp",
    thumb: "assets/report-jun-26/ppc/extracted/slide-38-asset-01-thumb.webp"
  },
  sklik: {
    full: "assets/report-jun-26/ppc/sklik-june-2026-account.png",
    thumb: "assets/report-jun-26/ppc/sklik-june-2026-account-thumb.png",
    image_size: { width: 4414, height: 1356 }
  },
  sklikSearch: {
    full: "assets/report-jun-26/ppc/sklik/search.png",
    thumb: "assets/report-jun-26/ppc/sklik/search-thumb.png",
    image_size: { width: 2890, height: 1618 }
  },
  sklikCampaignTypes: {
    full: "assets/report-jun-26/ppc/sklik/campaign-types.png",
    thumb: "assets/report-jun-26/ppc/sklik/campaign-types-thumb.png",
    image_size: { width: 2864, height: 648 }
  }
};

const pmaxClusters = [
  {
    id: 3,
    roas: "253,58 %",
    targetRoas: "250 %",
    pno: "39,43 %",
    cost: "122 tis. Kč",
    conversions: "376,73",
    value: "310 tis. Kč",
    interactions: "7,61 tis.",
    comment: "Cluster 3 je největší objemový tahoun PMax části. ROAS je lehce nad cílem, ale PNO je už potřeba hlídat, protože právě tady leží největší část investice.",
    assets: [
      { label: "Výkon clusteru", full: "assets/report-jun-26/ppc/extracted/slide-24-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-24-asset-01-thumb.webp" },
      { label: "Produktový detail", full: "assets/report-jun-26/ppc/extracted/slide-25-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-25-asset-01-thumb.webp" },
      { label: "Trend clusteru", full: "assets/report-jun-26/ppc/extracted/slide-26-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-26-asset-01-thumb.webp" }
    ]
  },
  {
    id: 2,
    roas: "207,09 %",
    targetRoas: "193 %",
    pno: "48,29 %",
    cost: "54,8 tis. Kč",
    conversions: "138,21",
    value: "113 tis. Kč",
    interactions: "3,13 tis.",
    comment: "Cluster 2 je nad cílovou ROAS, ale efektivita je slabší než u clusteru 3. Dává smysl sledovat, které produktové skupiny v něm táhnou hodnotu a které pouze spotřebovávají rozpočet.",
    assets: [
      { label: "Výkon clusteru", full: "assets/report-jun-26/ppc/extracted/slide-27-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-27-asset-01-thumb.webp" },
      { label: "Produktový detail", full: "assets/report-jun-26/ppc/extracted/slide-28-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-28-asset-01-thumb.webp" },
      { label: "Trend clusteru", full: "assets/report-jun-26/ppc/extracted/slide-29-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-29-asset-01-thumb.webp" }
    ]
  },
  {
    id: 1,
    roas: "248,87 %",
    targetRoas: "230 %",
    pno: "40,18 %",
    cost: "13,5 tis. Kč",
    conversions: "41,37",
    value: "33,7 tis. Kč",
    interactions: "1,99 tis.",
    comment: "Cluster 1 má menší objem, ale drží slušnou efektivitu nad cílem. Je vhodný pro opatrné škálování a kontrolu, zda se růst objemu nezačne rychle promítat do vyššího PNO.",
    assets: [
      { label: "Výkon clusteru", full: "assets/report-jun-26/ppc/extracted/slide-30-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-30-asset-01-thumb.webp" },
      { label: "Produktový detail", full: "assets/report-jun-26/ppc/extracted/slide-31-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-31-asset-01-thumb.webp" },
      { label: "Trend clusteru", full: "assets/report-jun-26/ppc/extracted/slide-32-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-32-asset-01-thumb.webp" }
    ]
  },
  {
    id: 0,
    roas: "180,81 %",
    targetRoas: "250 %",
    pno: "55,31 %",
    cost: "7,19 tis. Kč",
    conversions: "19,50",
    value: "13 tis. Kč",
    interactions: "1,04 tis.",
    comment: "Cluster 0 je pod cílovou ROAS a má nejslabší efektivitu. V reportu ho držíme jako kandidáta na opatrnou optimalizaci produktového mixu nebo přísnější řízení rozpočtu.",
    assets: [
      { label: "Výkon clusteru", full: "assets/report-jun-26/ppc/extracted/slide-33-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-33-asset-01-thumb.webp" },
      { label: "Produktový detail", full: "assets/report-jun-26/ppc/extracted/slide-34-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-34-asset-01-thumb.webp" },
      { label: "Trend clusteru", full: "assets/report-jun-26/ppc/extracted/slide-35-asset-01.webp", thumb: "assets/report-jun-26/ppc/extracted/slide-35-asset-01-thumb.webp" }
    ]
  }
];

const sklikRows = [
  { metric: "Konverze", current: 241, previous: 200, format: "number", primary: true, tone: "higher-good" },
  { metric: "Cena za konverzi", current: 780.61, previous: 639.78, format: "currency", decimals: 2, tone: "lower-good" },
  { metric: "Hodnota konverzí", current: 244561, previous: 193437, format: "currency", tone: "higher-good" },
  { metric: "CTR", current: 0.41, previous: 13874 / 4081763 * 100, format: "percent", decimals: 2, tone: "higher-good" },
  { metric: "Prokliky", current: 22873, previous: 13874, format: "number" },
  { metric: "Zobrazení", current: 5606961, previous: 4081763, format: "number" },
  { metric: "CPC", current: 8.22, previous: 9.22, format: "currency", decimals: 2, tone: "lower-good" },
  { metric: "Cena", current: 188127, previous: 127955.89, format: "currency", tone: "neutral" }
];

const sklikCampaignRows = [
  { group: "Search", campaign: "Search kampaně", clicks: 862, impressions: 5950, cost: 5957.37, conversions: 49, value: 47905 },
  { group: "PMax", campaign: "PMax", clicks: 6159, impressions: 1572259, cost: 58443.66, conversions: 41, value: 67622 },
  { group: "Display", campaign: "Display · nativní prospecting", clicks: 4541, impressions: 836666, cost: 22510.41, conversions: 2, value: 1835 },
  { group: "Display", campaign: "Dynamický banner", clicks: 2050, impressions: 656819, cost: 12736.19, conversions: 0, value: 0 },
  { group: "Retargeting", campaign: "DRM dynamický banner", clicks: 4283, impressions: 638520, cost: 37229.08, conversions: 93, value: 76483 },
  { group: "Retargeting", campaign: "Remarketing statika", clicks: 2296, impressions: 1571555, cost: 18548.12, conversions: 53, value: 47717 },
  { group: "Retargeting", campaign: "DRTG návštěvníci", clicks: 930, impressions: 257634, cost: 4289.89, conversions: 3, value: 2999 },
  { group: "PLA", campaign: "PLA · seznam.cz", clicks: 1473, impressions: 51245, cost: 23548.20, conversions: 0, value: 0 },
  { group: "PLA", campaign: "PLA · zbozi.cz", clicks: 279, impressions: 16313, cost: 4864.08, conversions: 0, value: 0 }
];

const sklikGroupConfig = {
  Search: { status: "Velmi efektivní", tone: "good", description: "Vyhledávání má nejnižší PNO a nejlevnější konverzi. Malý objem, ale velmi zdravá efektivita." },
  Retargeting: { status: "Stabilní", tone: "stable", description: "Retargeting drží největší počet konverzí a dobrou hodnotu. Efektivita je výrazně lepší než u většiny objemových typů." },
  PMax: { status: "Slabá efektivita", tone: "watch", description: "PMax přináší objem, ale PNO je vysoké. Potřebuje detailnější řízení produktů a rozpočtu." },
  Display: { status: "Kritická efektivita", tone: "critical", description: "Display má slušný objem návštěv, ale jen dvě konverze. Tady je výkon spíš podpůrný než prodejní." },
  PLA: { status: "Bez konverzí", tone: "muted", description: "PLA čerpá rozpočet bez konverzí, proto ho nedává smysl hodnotit přes PNO. Potřebuje samostatnou kontrolu feedu a relevance." }
};

const sklikGroupOrder = ["Search", "PMax", "Display", "Retargeting", "PLA"];

const sklikCampaignGroups = sklikGroupOrder.map((group) => {
  const campaigns = sklikCampaignRows.filter((row) => row.group === group);
  const sum = (key) => campaigns.reduce((total, row) => total + row[key], 0);
  const cost = sum("cost");
  const clicks = sum("clicks");
  const impressions = sum("impressions");
  const conversions = sum("conversions");
  const value = sum("value");
  return {
    group,
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
    pno: value > 0 ? cost / value * 100 : null
  };
});

const sklikAccountTotals = {
  cost: sklikCampaignGroups.reduce((total, group) => total + group.cost, 0),
  clicks: sklikCampaignGroups.reduce((total, group) => total + group.clicks, 0),
  impressions: sklikCampaignGroups.reduce((total, group) => total + group.impressions, 0),
  conversions: sklikCampaignGroups.reduce((total, group) => total + group.conversions, 0),
  value: sklikCampaignGroups.reduce((total, group) => total + group.value, 0)
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

const googleAdsComment = "Vyšší spend v Google Ads je tažený hlavně větší investicí do PMax kampaní. Ty se teď víc řídí přes produktové clustery, takže dává smysl sledovat výkon po skupinách produktů, ne jen v jednom souhrnném čísle za celou kampaň.";
const karsaComment = "Clusterový pohled pomáhá rozpadnout PMax výkon podle produktových skupin a lépe vidět, kde vzniká objem a kde efektivita. V rámci PTC manageru zatím zůstává doporučení držet původní tROAS. Dává to smysl, protože po úvodní učící fázi byl výkon ještě poměrně nekonzistentní, takže teď je lepší nejdřív stabilizovat výsledky a až poté řešit výraznější změny cílové návratnosti.";
const sklikComment = "Sklik v červnu doručil 241 konverzí při ceně 780,61 Kč za konverzi. Objem prokliků a zobrazení roste, CPC je nižší, takže kanál škáluje levněji; dál dává smysl hlídat hlavně kvalitu konverzí a jejich hodnotu.";

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
  const change = ((row.current / row.previous) - 1) * 100;
  const sign = change > 0 ? "+" : "";
  const tone = row.tone === "neutral"
    ? "neutral"
    : row.tone === "lower-good"
      ? change < 0 ? "good" : change > 0 ? "bad" : "neutral"
      : change > 0 ? "good" : change < 0 ? "bad" : "neutral";
  return { label: `${sign}${formatNumber.format(change)} %`, tone };
};

const renderShot = (item, label = item.label) => `
  <a class="visualItem ppcAssetShot" href="${item.full}"${item.image_size ? ` style="--asset-ratio:${item.image_size.width} / ${item.image_size.height}"` : ""}>
    <img src="${item.thumb}" alt="${label}" loading="lazy">
    <span>${label}</span>
  </a>`;

const renderCluster = (cluster) => `
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
      <div class="ppcAssetGrid">${cluster.assets.map(renderShot).join("")}</div>
    </div>
  </details>`;

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

const formatSklikMetric = (value, format = "number", decimals = format === "percent" ? 2 : 0) => {
  if (!Number.isFinite(value)) return "—";
  if (format === "currency") return `${formatDecimal(value, decimals)} Kč`;
  if (format === "percent") return `${formatDecimal(value, decimals)} %`;
  return formatNumber.format(value);
};

const renderSklikTypeCard = (group) => `
  <article class="sklikTypeCard ${group.tone}">
    <div class="sklikTypeHead">
      <span>${group.group}</span>
      <i>${group.status}</i>
    </div>
    <div class="sklikTypePrimary">
      <div><span>Náklady</span><strong>${formatSklikMetric(group.cost, "currency", 2)}</strong></div>
      <div><span>Konverze</span><strong>${formatSklikMetric(group.conversions)}</strong></div>
      <div><span>Hodnota konverzí</span><strong>${formatSklikMetric(group.value, "currency")}</strong></div>
      <div><span>PNO</span><strong>${formatSklikMetric(group.pno, "percent", 2)}</strong></div>
    </div>
    <dl class="sklikTypeDetail">
      <div><dt>Prokliky</dt><dd>${formatSklikMetric(group.clicks)}</dd></div>
      <div><dt>Zobrazení</dt><dd>${formatSklikMetric(group.impressions)}</dd></div>
      <div><dt>CTR</dt><dd>${formatSklikMetric(group.ctr, "percent", 2)}</dd></div>
      <div><dt>CPC</dt><dd>${formatSklikMetric(group.cpc, "currency", 2)}</dd></div>
      <div><dt>Konv. poměr</dt><dd>${formatSklikMetric(group.conversionRate, "percent", 2)}</dd></div>
      <div><dt>Cena za konverzi</dt><dd>${formatSklikMetric(group.costPerConversion, "currency", 2)}</dd></div>
    </dl>
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
        <span>${group.group}</span>
        <i style="--bar-height:${height}%"></i>
        <strong>${formatSklikMetric(value, metric.format, metric.format === "currency" ? 0 : 2)}</strong>
      </div>`;
    }).join("")}
  </div>`;
};

const renderSklikCampaignTypeBlock = () => `
  <div class="sklikTypeBlock">
    <div class="sklikTypeIntro">
      <span class="pill orange">Sklik podle typu kampaní</span>
      <h3>Sklik podle typu kampaní</h3>
      <p>Agregovaný pohled na výkon vyhledávání, obsahových kampaní, retargetingu a produktové inzerce.</p>
    </div>
    <div class="sklikTypeGrid">
      ${sklikCampaignGroups.map(renderSklikTypeCard).join("")}
    </div>
    <div class="sklikAccountCheck">
      <span>Součet skupin</span>
      <b>${formatSklikMetric(sklikAccountTotals.cost, "currency")} · ${formatSklikMetric(sklikAccountTotals.clicks)} prokliků · ${formatSklikMetric(sklikAccountTotals.impressions)} zobrazení · ${formatSklikMetric(sklikAccountTotals.conversions)} konverzí · ${formatSklikMetric(sklikAccountTotals.value, "currency")}</b>
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
    <div class="ppcAssetGrid ppcAssetGridTwo sklikTypeSources">
      ${renderShot(ppcAssets.sklikSearch, "Sklik · Search")}
      ${renderShot(ppcAssets.sklikCampaignTypes, "Sklik · PMax, Display, Retargeting a PLA")}
    </div>
  </div>`;

export const ppcSectionHtml = `<section class="chapter" id="ppc">
  <div class="chapterHead glass">
    <div class="chapterTitle">
      <div class="chapterNo">03 · Google Ads &amp; Sklik</div>
      <h2>${SystemLogo({ system: "googleAds", label: "Google Ads", size: "section", className: "sectionLogo" })}Google Ads &amp; Sklik</h2>
      <p>PPC kapitola kombinuje PMax výkon, produktové clustery z Karsa AI, ROAS vs. tROAS a červnové výsledky Skliku.</p>
    </div>
  </div>

  <div class="panel glass ppcSummary" id="ppc-summary">
    <span class="pill systemPill">${SystemLogo({ system: "googleAds", label: "Google Ads", className: "channelLogo" })}${SystemLogo({ system: "seznamSklik", label: "Seznam / Sklik", className: "channelLogo" })}PPC summary</span>
    <h2>PMax je nově čtený přes produktové clustery, zatímco Sklik v červnu výrazně navýšil prokliky i zobrazení.</h2>
    <p>U PMax části je důležité nesledovat jen souhrn kampaně, ale rozlišit clustery podle ROAS, PNO a objemu. Karsa AI pomáhá vidět, kde produkty drží výkon nad cílem a kde je prostor pro optimalizaci. Sklik roste v objemu a zároveň zlevňuje CPC, ale vyšší čerpání je potřeba držet v kontextu obchodní reality.</p>
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
    <div class="dashboardTable">
      <table class="dashTable ppcNativeTable">
        <thead><tr><th>Cluster</th><th>ROAS</th><th>Cílová ROAS</th><th>PNO</th><th>Cena</th><th>Konverze</th><th>Hodnota konverze</th></tr></thead>
        <tbody>
          ${pmaxClusters.map((cluster) => `<tr><td>PMax cluster ${cluster.id}</td><td>${cluster.roas}</td><td>${cluster.targetRoas}</td><td>${cluster.pno}</td><td>${cluster.cost}</td><td>${cluster.conversions}</td><td>${cluster.value}</td></tr>`).join("")}
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

  <div class="panel glass ppcSection" id="karsa-ai">
    <span class="pill">Karsa AI</span>
    <div class="ppcHeroGrid">
      <div>
        <h2>Karsa AI rozděluje PMax na produktová portfolia s rozdílným výkonem.</h2>
        <p class="sectionLead">Nově do PMax části přidáváme pohled přes Karsa AI. Ten seskupuje produkty do clusterů a pomáhá lépe vidět, kde se výkon drží nad cílem, kde se blíží limitu a kde je prostor pro optimalizaci. Díky tomu se na PMax nedíváme jen jako na jednu kampaň, ale jako na portfolio produktových skupin s rozdílným výkonem.</p>
        <div class="ppcGlossary">
          <div><b>ROAS</b><p>Skutečná návratnost investice do reklamy, tedy hodnota konverzí vůči nákladům.</p></div>
          <div><b>tROAS</b><p>Cílová návratnost nastavená v Google Ads.</p></div>
          <div><b>EMA 7</b><p>Sedmidenní vyhlazený trend, který dává větší váhu novějším dnům a pomáhá číst vývoj bez denních výkyvů.</p></div>
        </div>
      </div>
      <div class="dashboardTable">
        <table class="dashTable ppcNativeTable">
          <thead><tr><th>Cluster</th><th>Produkty</th><th>ROAS 30D</th><th>Hodnota / cena</th><th>Kampaň</th></tr></thead>
          <tbody>${karsaClusterRows.map(renderKarsaRow).join("")}</tbody>
        </table>
      </div>
    </div>
    <div class="ppcAssetGrid ppcAssetGridTwo">
      ${renderShot(ppcAssets.karsaRoas, "Karsa AI přehled ROAS vs. tROAS")}
      ${renderShot(ppcAssets.karsaClusters, "Karsa AI produktové clustery")}
    </div>
    <div class="sourceSummary compactSummary">
      <h3>Karsa AI / Clusters</h3>
      <p>${karsaComment}</p>
    </div>
  </div>

  <div class="panel glass ppcSection" id="sklik-results">
    <span class="pill orange systemPill">${SystemLogo({ system: "seznamSklik", label: "Seznam / Sklik", className: "channelLogo" })}Sklik výsledky</span>
    <div class="contentGrid wideLeft">
      <div>
        <h2>Sklik v červnu doručil 241 konverzí a zároveň navýšil objem.</h2>
        <p class="sectionLead">Hlavním výsledkem Skliku jsou konverze, vedle nich je vidět i silnější objem prokliků a zobrazení. CPC klesá na 8,22 Kč, takže nárůst čerpání je spojený hlavně s vyšším rozsahem kampaní, ne s dražším klikem.</p>
        <div class="sourceSummary compactSummary">
          <h3>Čtení Skliku</h3>
          <p>${sklikComment}</p>
        </div>
        <div class="dashboardTable">
          <table class="dashTable ppcNativeTable">
            <thead><tr><th>Metrika</th><th>Červen 2026</th><th>Květen 2026</th><th class="changeCol">Změna</th></tr></thead>
            <tbody>${sklikRows.map(renderSklikRow).join("")}</tbody>
          </table>
        </div>
      </div>
      <div>${renderShot(ppcAssets.sklik, "Sklik detail výsledků")}</div>
    </div>
    <div id="sklik-campaign-types">
      ${renderSklikCampaignTypeBlock()}
    </div>
  </div>
</section>`;
