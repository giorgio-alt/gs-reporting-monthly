import { SystemLogo } from "../components/SystemLogo.js";

const logoBySource = {
  "google / cpc": { system: "googleAds", label: "Google Ads" },
  "google / organic": { system: "googleAnalytics", label: "Google Analytics / GA4" },
  "facebook.com / cpc": { system: "meta", label: "Meta" },
  "seznam / cpc": { system: "seznamSklik", label: "Seznam / Sklik" },
  "seznam / organic": { system: "seznamSklik", label: "Seznam" },
  "newsletter / email": { label: "Newsletter" },
  "direct / none": { label: "Direct" }
};

const monthlySources = [
  { source: "google / cpc", visits: "22 260", visitsChange: "+29,08 %", events: "1 022", eventsChange: "+19,39 %", revenue: "910 012 Kč", revenueChange: "+8,81 %" },
  { source: "newsletter / email", visits: "7 585", visitsChange: "+27,87 %", events: "769", eventsChange: "+17,05 %", revenue: "724 187 Kč", revenueChange: "+10,38 %" },
  { source: "direct / none", visits: "6 830", visitsChange: "-58,49 %", events: "377", eventsChange: "-29,53 %", revenue: "384 937 Kč", revenueChange: "-33,02 %" },
  { source: "facebook.com / cpc", visits: "18 599", visitsChange: "+112,9 %", events: "510", eventsChange: "+36,36 %", revenue: "333 518 Kč", revenueChange: "+52,02 %" },
  { source: "google / organic", visits: "19 050", visitsChange: "-17,27 %", events: "298", eventsChange: "-21,78 %", revenue: "278 370 Kč", revenueChange: "-23,08 %" },
  { source: "seznam / cpc", visits: "10 608", visitsChange: "+35,53 %", events: "296", eventsChange: "+79,39 %", revenue: "268 850 Kč", revenueChange: "+62,52 %" },
  { source: "seznam / organic", visits: "7 301", visitsChange: "-23,51 %", events: "145", eventsChange: "-12,65 %", revenue: "169 697 Kč", revenueChange: "+7,53 %" }
];

const ytdSources = [
  { source: "facebook.com / cpc", visits: "131 630", visitsChange: "+146,01 %", events: "2 486", eventsChange: "+30,23 %", revenue: "1 638 874 Kč", revenueChange: "+32,39 %" },
  { source: "google / cpc", visits: "126 164", visitsChange: "+11,51 %", events: "6 125", eventsChange: "+3,15 %", revenue: "5 619 333 Kč", revenueChange: "+5,54 %" },
  { source: "seznam / cpc", visits: "56 424", visitsChange: "+39,72 %", events: "2 130", eventsChange: "+79,29 %", revenue: "1 963 730 Kč", revenueChange: "+80,3 %" },
  { source: "newsletter / email", visits: "46 899", visitsChange: "+4,27 %", events: "5 153", eventsChange: "+0,55 %", revenue: "4 824 246 Kč", revenueChange: "+8,08 %" },
  { source: "google / organic", visits: "120 306", visitsChange: "-38,94 %", events: "2 063", eventsChange: "-27,38 %", revenue: "1 896 092 Kč", revenueChange: "-24,35 %" }
];

const monthlyCostModel = [
  {
    month: "01/2026",
    pnoCosts: [
      { system: "googleAds", label: "Google Ads", value: 248802 },
      { system: "seznamSklik", label: "Seznam / Sklik", value: 94010 },
      { system: "meta", label: "Meta", value: 107466 },
      { system: "heureka", label: "Heureka", value: 14703 },
      { system: "zbozi", label: "Zboží.cz", value: 9734 }
    ],
    brandCosts: [
      { label: "Brand SOME", value: 7499 },
      { label: "Brand Perfect", value: 8822 },
      { label: "Lipo", value: 0 },
      { label: "Bacto3", value: 0 }
    ]
  },
  {
    month: "02/2026",
    pnoCosts: [
      { system: "googleAds", label: "Google Ads", value: 191433 },
      { system: "seznamSklik", label: "Seznam / Sklik", value: 84407 },
      { system: "meta", label: "Meta", value: 113109 },
      { system: "heureka", label: "Heureka", value: 5304 },
      { system: "zbozi", label: "Zboží.cz", value: 5764 }
    ],
    brandCosts: [
      { label: "Brand SOME", value: 13632 },
      { label: "Brand Perfect", value: 7645 },
      { label: "Lipo", value: 42492 },
      { label: "Bacto3", value: 16018 }
    ]
  },
  {
    month: "03/2026",
    pnoCosts: [
      { system: "googleAds", label: "Google Ads", value: 234756 },
      { system: "seznamSklik", label: "Seznam / Sklik", value: 65119 },
      { system: "meta", label: "Meta", value: 128694 },
      { system: "heureka", label: "Heureka", value: 6001 },
      { system: "zbozi", label: "Zboží.cz", value: 2443 }
    ],
    brandCosts: [
      { label: "Brand SOME", value: 9764 },
      { label: "Brand Perfect", value: 4815 },
      { label: "Lipo", value: 62046 },
      { label: "Bacto3", value: 9573 }
    ]
  },
  {
    month: "04/2026",
    pnoCosts: [
      { system: "googleAds", label: "Google Ads", value: 252973 },
      { system: "seznamSklik", label: "Seznam / Sklik", value: 103073 },
      { system: "meta", label: "Meta", value: 153956 },
      { system: "heureka", label: "Heureka", value: 5445 },
      { system: "zbozi", label: "Zboží.cz", value: 4758 }
    ],
    brandCosts: [
      { label: "Brand SOME", value: 8142 },
      { label: "Brand Perfect", value: 17717 },
      { label: "Lipo", value: 6082 },
      { label: "Bacto3", value: 9984 }
    ]
  },
  {
    month: "05/2026",
    pnoCosts: [
      { system: "googleAds", label: "Google Ads", value: 274256 },
      { system: "seznamSklik", label: "Seznam / Sklik", value: 108676 },
      { system: "meta", label: "Meta", value: 115898 },
      { system: "heureka", label: "Heureka", value: 5527 },
      { system: "zbozi", label: "Zboží.cz", value: 4999 }
    ],
    brandCosts: [
      { label: "Brand SOME", value: 12872 },
      { label: "Brand Perfect", value: 10389 },
      { label: "Lipo", value: 0 },
      { label: "Bacto3", value: 0 }
    ]
  },
  {
    month: "06/2026",
    pnoCosts: [
      { system: "googleAds", label: "Google Ads", value: 334390 },
      { system: "seznamSklik", label: "Seznam / Sklik", value: 183262 },
      { system: "meta", label: "Meta", value: 182242 },
      { system: "heureka", label: "Heureka", value: 3781 },
      { system: "zbozi", label: "Zboží.cz", value: 4864 }
    ],
    brandCosts: [
      { label: "Brand SOME", value: 12111 },
      { label: "Brand Perfect", value: 6229 },
      { label: "Lipo", value: 0 },
      { label: "Bacto3", value: 0 }
    ]
  }
];

const activeCostMonth = monthlyCostModel.at(-1);
const costMonths = monthlyCostModel.map((month) => month.month);
const pnoCostRows = activeCostMonth.pnoCosts.map(({ system, label }) => ({ system, label }));
const brandCostRows = [
  { label: "Brand SOME" },
  { label: "Brand Perfect" }
];

const formatCurrency = (value) => `${new Intl.NumberFormat("cs-CZ").format(value)} Kč`;

const changeClass = (value) => value.trim().startsWith("+") ? "good" : value.trim().startsWith("-") ? "bad" : "neutral";

const sourceName = (source) => {
  const logo = logoBySource[source];
  if (!logo?.system) {
    return `<span class="sourceLabel"><span class="sourceBadge">${logo?.label ?? "Zdroj"}</span><b>${source}</b></span>`;
  }

  return `<span class="sourceLabel">${SystemLogo({ system: logo.system, label: logo.label, className: "channelLogo" })}<b>${source}</b></span>`;
};

const renderSourceRow = (item) => `
  <tr>
    <td>${sourceName(item.source)}</td>
    <td>${item.visits}<span class="labelChange ${changeClass(item.visitsChange)}">${item.visitsChange}</span></td>
    <td>${item.events}<span class="labelChange ${changeClass(item.eventsChange)}">${item.eventsChange}</span></td>
    <td class="revenueFocus">${item.revenue}</td>
    <td class="deltaCell"><span class="labelChange ${changeClass(item.revenueChange)}">${item.revenueChange}</span></td>
  </tr>`;

const costValueForMonth = (month, group, label) => month[group].find((item) => item.label === label)?.value ?? 0;

const totalForRows = (month, group, rows) =>
  rows.reduce((total, row) => total + costValueForMonth(month, group, row.label), 0);

const costRowLabel = (row) => row.system
  ? `<span class="costMatrixLabel">${SystemLogo({ system: row.system, label: row.label, className: "channelLogo" })}<span>${row.label}</span></span>`
  : `<span class="costMatrixLabel">${row.label}</span>`;

const renderCostMatrixRow = (row, group) => `
  <tr>
    <th scope="row">${costRowLabel(row)}</th>
    ${monthlyCostModel.map((month) => `<td>${formatCurrency(costValueForMonth(month, group, row.label))}</td>`).join("")}
  </tr>`;

const renderCostMatrix = ({ title, rows, group, totalLabel, modifier = "" }) => `
  <div class="costMatrixGroup ${modifier}">
    <h3>${title}</h3>
    <div class="costMatrixScroll" tabindex="0" aria-label="${title}">
      <table class="costMatrixTable" style="--cost-month-count:${costMonths.length}">
        <thead>
          <tr>
            <th>Kanál</th>
            ${costMonths.map((month) => `<th>${month}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => renderCostMatrixRow(row, group)).join("")}
          <tr class="costMatrixTotal">
            <th scope="row">${totalLabel}</th>
            ${monthlyCostModel.map((month) => `<td>${formatCurrency(totalForRows(month, group, rows))}</td>`).join("")}
          </tr>
        </tbody>
      </table>
    </div>
  </div>`;

export const dashboardSectionHtml = `<section class="chapter" id="dashboard">
  <div class="chapterHead glass">
    <div class="chapterTitle">
      <div class="chapterNo">01 · Dashboard</div>
      <h2>Výkon červen 2026</h2>
      <p>Executive přehled obchodní reality, plánu, PNO z reality a analytického trendu GA4.</p>
    </div>
  </div>

  <div class="panel glass dashboardVerdict">
    <div class="mainKpiGrid dashboardKpis businessKpiGrid">
      <div class="mainKpi primaryBusinessKpi"><span>Realita 26</span><strong>3 750 000 Kč</strong><small>hlavní obchodní realita za červen</small><div class="delta up">+9,77 % vs. Realita Korekce 2025</div></div>
      <div class="mainKpi"><span>Plán 26</span><strong>4 064 219 Kč</strong><small>plán tržeb na červen</small><div class="delta down">plnění 92,27 %</div></div>
      <div class="mainKpi"><span>Rozdíl vs. plán</span><strong>-314 219 Kč</strong><small>Realita 26 minus Plán 26</small><div class="delta down">-7,73 %</div></div>
      <div class="mainKpi"><span>PNO z reality</span><strong>18,89 %</strong><small>708 539 Kč / Realita 26</small><div class="delta down">reálné náklady</div></div>
    </div>
  </div>

  <div class="contentGrid dashboardTopGrid">
    <div class="panel glass">
      <span class="pill">Realita 26 vs. plán a loňská korekce</span>
      <div class="miniCards dashboardReality businessRealityGrid">
        <div class="miniCard"><span>Realita Korekce 2025</span><strong>3 416 196 Kč</strong></div>
        <div class="miniCard"><span>Rozdíl YoY</span><strong>+333 804 Kč</strong></div>
        <div class="miniCard"><span>YoY proti korekci</span><strong>+9,77 %</strong></div>
        <div class="miniCard"><span>Realita vs. plán</span><strong>-314 219 Kč</strong></div>
      </div>
      <div class="sourceSummary">
        <h3>Obchodní komentář</h3>
        <p>Červen nedosáhl na plán o 314 tis. Kč, ale proti Realita Korekce 2025 je výš o 334 tis. Kč. Obchodně tedy nejde o slabý měsíc v meziročním pohledu, jen je potřeba hlídat, že vyšší reálné náklady posouvají PNO z reality na 18,89 %.</p>
      </div>
    </div>

    <div class="panel glass">
      <span class="pill">Reálné náklady a PNO</span>
      <div class="costHero businessCostHero">
        <div class="costBreakdown">
          ${renderCostMatrix({
            title: "Náklady započítané do PNO",
            rows: pnoCostRows,
            group: "pnoCosts",
            totalLabel: "Celkem započítané do PNO"
          })}
          ${renderCostMatrix({
            title: "Brandové náklady mimo PNO",
            rows: brandCostRows,
            group: "brandCosts",
            totalLabel: "Celkem brand mimo PNO",
            modifier: "brandCostGroup"
          })}
        </div>
      </div>
    </div>
  </div>

  <div class="panel glass dashboardSourcePanel dashboardGa4Block">
    <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}Analytický trend GA4</span>
    <div class="metricGrid dashboardGa4MetricGrid">
      <div class="metricTile"><span>GA4 tržby</span><strong>3 511 173 Kč</strong><small>vs. 3 521 512 Kč</small><div class="delta down">-0,29 % YoY</div></div>
      <div class="metricTile"><span>Objednávky</span><strong>3 788</strong><small>vs. 3 587 loni</small><div class="delta up">+5,6 % YoY</div></div>
      <div class="metricTile"><span>Návštěvy</span><strong>95 742</strong><small>prakticky stabilní objem</small><div class="delta down">-0,03 % YoY</div></div>
      <div class="metricTile"><span>Prům. tržba z nákupu</span><strong>926,92 Kč</strong><small>vs. 981,74 Kč loni</small><div class="delta down">-5,58 % YoY</div></div>
    </div>
    <span class="sectionSubhead">Výkon podle zdrojů</span>
    <div class="dashboardTable">
      <table class="dashTable sourceTable">
        <thead>
          <tr><th>Zdroj / médium</th><th>Návštěvy</th><th>Objednávky</th><th>Tržby</th><th class="changeCol">Změna tržeb</th></tr>
        </thead>
        <tbody>
          <tr class="summaryRow">
            <td>Celkem</td><td>95 742 <span class="labelChange bad">-0,03 %</span></td><td>3 788 <span class="labelChange good">+5,6 %</span></td><td class="revenueFocus">3 511 173 Kč</td><td class="deltaCell"><span class="labelChange bad">-0,29 %</span></td>
          </tr>
          ${monthlySources.map(renderSourceRow).join("")}
        </tbody>
      </table>
    </div>
  </div>

  <div class="contentGrid dashboardBottomGrid">
    <div class="panel glass">
      <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}GA4 YTD kontext</span>
      <div class="metricGrid ga4Top dashboardMetricGrid">
        <div class="metricTile"><span>Tržby YTD</span><strong>22 701 398 Kč</strong><small>vs. 22 179 907 Kč</small><div class="delta up">+2,35 %</div></div>
        <div class="metricTile"><span>Objednávky</span><strong>24 189</strong><small>vs. 24 326</small><div class="delta down">-0,56 %</div></div>
        <div class="metricTile"><span>Návštěvy</span><strong>620 701</strong><small>vs. 623 840</small><div class="delta down">-0,5 %</div></div>
      </div>
      <div class="sourceSummary compactSummary">
        <h3>GA4 YTD komentář</h3>
        <p>Od začátku roku je e-shop v tržbách lehce nad loňskem, konkrétně o +2,35 %. Návštěvnost je přitom mírně nižší a počet objednávek téměř stejný, takže růst táhne hlavně vyšší průměrná tržba z nákupu. Velmi dobře meziročně roste Seznam CPC a Facebook CPC. Slabší zůstává Google organic a direct, kde je vidět pokles objemu i tržeb.</p>
      </div>
    </div>

    <div class="panel glass">
      <span class="pill">Nejsilnější zdroje YTD</span>
      <div class="dashboardTable">
        <table class="dashTable sourceTable compactSourceTable">
          <thead>
            <tr><th>Zdroj / médium</th><th>Návštěvy</th><th>Objednávky</th><th>Tržby</th><th class="changeCol">Změna tržeb</th></tr>
          </thead>
          <tbody>${ytdSources.map(renderSourceRow).join("")}</tbody>
        </table>
      </div>
    </div>
  </div>
</section>`;
