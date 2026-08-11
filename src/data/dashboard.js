import { SystemLogo } from "../components/SystemLogo.js";

const logoBySource = {
  "google / cpc": { system: "googleAds", label: "Google Ads" },
  "google / organic": { system: "googleAnalytics", label: "Google Analytics / GA4" },
  "facebook.com / cpc": { system: "meta", label: "Meta" },
  "seznam / cpc": { system: "seznamSklik", label: "Seznam / Sklik" },
  "seznam / organic": { system: "seznamSklik", label: "Seznam" },
  "sport.cz / clanek_10": { label: "Sport.cz" },
  "newsletter / email": { label: "Newsletter" },
  "direct / none": { label: "Direct" },
  "(direct) / (none)": { label: "Direct" }
};

const monthlySources = [
  { source: "google / cpc", visits: "23 385", visitsChange: "+34,68 %", events: "969", eventsChange: "-9,35 %", revenue: "918 542 Kč", revenueChange: "-12,1 %" },
  { source: "newsletter / email", visits: "7 996", visitsChange: "+21,67 %", events: "674", eventsChange: "-20,14 %", revenue: "708 575 Kč", revenueChange: "-18,43 %" },
  { source: "seznam / cpc", visits: "12 356", visitsChange: "+104,81 %", events: "324", eventsChange: "+60,4 %", revenue: "337 384 Kč", revenueChange: "+62,24 %" },
  { source: "(direct) / (none)", visits: "5 648", visitsChange: "-70,94 %", events: "288", eventsChange: "-59,26 %", revenue: "295 420 Kč", revenueChange: "-61,96 %" },
  { source: "google / organic", visits: "20 353", visitsChange: "-12,1 %", events: "258", eventsChange: "-41,63 %", revenue: "263 122 Kč", revenueChange: "-35,21 %" },
  { source: "facebook.com / cpc", visits: "16 579", visitsChange: "+52,86 %", events: "276", eventsChange: "0 %", revenue: "232 080 Kč", revenueChange: "+12,62 %" },
  { source: "sport.cz / clanek_10", visits: "1 584", visitsChange: "", events: "108", eventsChange: "", revenue: "127 031 Kč", revenueChange: "" },
  { source: "seznam / organic", visits: "6 636", visitsChange: "-28,31 %", events: "94", eventsChange: "-56,48 %", revenue: "106 320 Kč", revenueChange: "-50,25 %" }
];

const ytdSources = [
  { source: "google / cpc", visits: "149 549", visitsChange: "+14,59 %", events: "7 094", eventsChange: "+1,24 %", revenue: "6 537 875 Kč", revenueChange: "+2,65 %" },
  { source: "newsletter / email", visits: "54 895", visitsChange: "+6,49 %", events: "5 827", eventsChange: "-2,38 %", revenue: "5 532 821 Kč", revenueChange: "+3,76 %" },
  { source: "seznam / cpc", visits: "68 780", visitsChange: "+48,18 %", events: "2 454", eventsChange: "+76,54 %", revenue: "2 301 114 Kč", revenueChange: "+77,4 %" },
  { source: "google / organic", visits: "140 659", visitsChange: "-36,12 %", events: "2 321", eventsChange: "-29,3 %", revenue: "2 159 214 Kč", revenueChange: "-25,86 %" },
  { source: "facebook.com / cpc", visits: "148 209", visitsChange: "+130,31 %", events: "2 762", eventsChange: "+26,41 %", revenue: "1 870 954 Kč", revenueChange: "+29,57 %" }
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
  },
  {
    month: "07/2026",
    pnoCosts: [
      { system: "googleAds", label: "Google Ads", value: 384966 },
      { system: "seznamSklik", label: "Seznam / Sklik", value: 180497 },
      { system: "meta", label: "Meta", value: 101005 },
      { system: "heureka", label: "Heureka", value: 3356 },
      { system: "zbozi", label: "Zboží.cz", value: 5770 }
    ],
    brandCosts: [
      { label: "Brand SOME", value: 11191 },
      { label: "Brand Perfect", value: 0 },
      { label: "Lipo", value: 0 },
      { label: "Bacto3", value: 0 }
    ]
  }
];

const mediaBudget = [
  { month: "2026-01", planned: 960000, actual: 474714 },
  { month: "2026-02", planned: 780000, actual: 400017 },
  { month: "2026-03", planned: 595000, actual: 437013 },
  { month: "2026-04", planned: 505000, actual: 520205 },
  { month: "2026-05", planned: 555000, actual: 509356 },
  { month: "2026-06", planned: 355000, actual: 708539 },
  { month: "2026-07", planned: 375000, actual: 675594 }
];

const activeCostMonth = monthlyCostModel.at(-1);
const costMonths = monthlyCostModel.map((month) => month.month);
const pnoCostRows = activeCostMonth.pnoCosts.map(({ system, label }) => ({ system, label }));
const brandCostRows = [
  { label: "Brand SOME" },
  { label: "Brand Perfect" }
];

const normalizeNumberSpacing = (value) => value.replace(/\u00a0/g, " ");
const formatCurrency = (value) => `${normalizeNumberSpacing(new Intl.NumberFormat("cs-CZ").format(value))} Kč`;
const formatPercent = (value) => `${normalizeNumberSpacing(new Intl.NumberFormat("cs-CZ", { minimumFractionDigits: 1, maximumFractionDigits: 1 }).format(value))} %`;
const formatPercentPrecise = (value) => `${normalizeNumberSpacing(new Intl.NumberFormat("cs-CZ", { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value))} %`;
const formatBudgetMonth = (month) => {
  const [year, monthNumber] = month.split("-");
  return `${monthNumber}/${year}`;
};

const budgetTone = (fulfillment) => {
  if (fulfillment > 110) return "danger";
  if (fulfillment > 100) return "warning";
  if (fulfillment >= 85) return "good";
  return "neutral";
};

const sumBudget = (key) => mediaBudget.reduce((total, month) => total + month[key], 0);
const activeBudgetMonth = mediaBudget.at(-1);
const monthlyFulfillment = (activeBudgetMonth.actual / activeBudgetMonth.planned) * 100;
const monthlyVariance = activeBudgetMonth.actual - activeBudgetMonth.planned;
const ytdPlanned = sumBudget("planned");
const ytdActual = sumBudget("actual");
const ytdFulfillment = (ytdActual / ytdPlanned) * 100;
const ytdVariance = ytdActual - ytdPlanned;
const budgetPeriodLabel = `${formatBudgetMonth(mediaBudget[0].month)}–${formatBudgetMonth(activeBudgetMonth.month)}`;
const signedCurrency = (value) => `${value > 0 ? "+" : value < 0 ? "-" : ""}${formatCurrency(Math.abs(value))}`;
const unavailableLabel = "Data nejsou k dispozici";
const activeMonthLocative = "červenci";
const activeMonthGenitive = "července";

const isNumber = (value) => typeof value === "number" && Number.isFinite(value);
const safePercentChange = (current, previous) => isNumber(current) && isNumber(previous) && previous !== 0
  ? ((current - previous) / previous) * 100
  : null;
const safePno = (costs, revenue) => isNumber(costs) && isNumber(revenue) && revenue !== 0
  ? (costs / revenue) * 100
  : null;
const maybeCurrency = (value) => isNumber(value) ? formatCurrency(value) : unavailableLabel;
const maybePercent = (value, formatter = formatPercent) => isNumber(value) ? formatter(value) : unavailableLabel;
const signedPercent = (value, formatter = formatPercentPrecise) => isNumber(value)
  ? `${value > 0 ? "+" : ""}${formatter(value)}`
  : unavailableLabel;
const signedPp = (value) => isNumber(value)
  ? `${value > 0 ? "+" : ""}${formatPercent(value).replace(" %", " p. b.")}`
  : unavailableLabel;
const signedPpPrecise = (value) => isNumber(value)
  ? `${value > 0 ? "+" : ""}${formatPercentPrecise(value).replace(" %", " p. b.")}`
  : unavailableLabel;

const businessPerformance = {
  label: "Business / interní data",
  ytd: {
    period: "01–07/2026",
    revenue: 28108254,
    revenuePreviousYear: 27333374.68,
    marketingCosts: ytdActual,
    marketingCostsPreviousYear: 3268258
  },
  currentMonth: {
    period: "07/2026",
    revenue: 3600000,
    revenuePreviousYear: 4628979.98,
    marketingCosts: activeBudgetMonth.actual,
    marketingCostsPreviousYear: 418861
  },
  trend: [
    {
      label: "YTD 01–07",
      revenue: 28108254,
      revenuePreviousYear: 27333374.68,
      marketingCosts: ytdActual,
      marketingCostsPreviousYear: 3268258
    },
    {
      label: "07/2026",
      revenue: 3600000,
      revenuePreviousYear: 4628979.98,
      marketingCosts: activeBudgetMonth.actual,
      marketingCostsPreviousYear: 418861
    }
  ]
};

const businessYtdRevenueYoY = safePercentChange(businessPerformance.ytd.revenue, businessPerformance.ytd.revenuePreviousYear);
const businessYtdRevenueDiff = businessPerformance.ytd.revenue - businessPerformance.ytd.revenuePreviousYear;
const businessYtdCostsYoY = safePercentChange(businessPerformance.ytd.marketingCosts, businessPerformance.ytd.marketingCostsPreviousYear);
const businessYtdPno = safePno(businessPerformance.ytd.marketingCosts, businessPerformance.ytd.revenue);
const businessYtdPnoPrevious = safePno(businessPerformance.ytd.marketingCostsPreviousYear, businessPerformance.ytd.revenuePreviousYear);
const businessYtdPnoChange = isNumber(businessYtdPno) && isNumber(businessYtdPnoPrevious) ? businessYtdPno - businessYtdPnoPrevious : null;
const businessDynamicsGap = isNumber(businessYtdRevenueYoY) && isNumber(businessYtdCostsYoY)
  ? businessYtdRevenueYoY - businessYtdCostsYoY
  : null;
const businessMonthRevenueYoY = safePercentChange(businessPerformance.currentMonth.revenue, businessPerformance.currentMonth.revenuePreviousYear);
const businessMonthCostsYoY = safePercentChange(businessPerformance.currentMonth.marketingCosts, businessPerformance.currentMonth.marketingCostsPreviousYear);
const businessMonthPno = safePno(businessPerformance.currentMonth.marketingCosts, businessPerformance.currentMonth.revenue);
const businessMonthPnoPrevious = safePno(businessPerformance.currentMonth.marketingCostsPreviousYear, businessPerformance.currentMonth.revenuePreviousYear);
const businessTrendMaxRevenue = Math.max(...businessPerformance.trend.flatMap((item) => [item.revenue, item.revenuePreviousYear].filter(isNumber)));
const businessTrendMaxCosts = Math.max(...businessPerformance.trend.flatMap((item) => [item.marketingCosts, item.marketingCostsPreviousYear].filter(isNumber)));

const changeClass = (value = "") => value.trim().startsWith("+") ? "good" : value.trim().startsWith("-") ? "bad" : "neutral";
const renderChangeBadge = (value) => value
  ? `<span class="labelChange ${changeClass(value)}">${value}</span>`
  : `<span class="labelChange neutral">bez YoY</span>`;

const businessDeltaTone = (value, positiveIsGood = true) => {
  if (!isNumber(value)) return "neutral";
  if (value === 0) return "neutral";
  const isPositive = value > 0;
  return isPositive === positiveIsGood ? "up" : "down";
};

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
    <td>${item.visits}${renderChangeBadge(item.visitsChange)}</td>
    <td>${item.events}${renderChangeBadge(item.eventsChange)}</td>
    <td class="revenueFocus">${item.revenue}</td>
    <td class="deltaCell">${renderChangeBadge(item.revenueChange)}</td>
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

const renderBudgetCard = ({ title, fulfillment, actual, planned, diffLabel, diffValue, status, tone }) => {
  const progress = Math.min(fulfillment, 100);
  const overBudget = Math.max(fulfillment - 100, 0);
  return `<article class="budgetCard ${tone}" style="--budget-progress:${progress}%">
    <div class="budgetCardHead">
      <span>${title}</span>
      <b>${status}</b>
    </div>
    <strong>${formatPercent(fulfillment)}</strong>
    <p>Plnění budgetu</p>
    <div class="budgetSpend">${formatCurrency(actual)} <span>z ${formatCurrency(planned)}</span></div>
    <div class="budgetProgress" aria-label="Plnění budgetu ${formatPercent(fulfillment)}">
      <i></i>
    </div>
    ${overBudget > 0 ? `<div class="budgetOverrun">Přesah nad plán ${formatPercent(overBudget)}</div>` : ""}
    <dl class="budgetFacts">
      <div><dt>Plán</dt><dd>${formatCurrency(planned)}</dd></div>
      <div><dt>Čerpání</dt><dd>${formatCurrency(actual)}</dd></div>
      <div><dt>${diffLabel}</dt><dd>${diffValue}</dd></div>
    </dl>
  </article>`;
};

const renderMediaBudgetSummary = () => `
  <div class="mediaBudgetSummary">
    ${renderBudgetCard({
      title: `Plnění budgetu · ${formatBudgetMonth(activeBudgetMonth.month)}`,
      fulfillment: monthlyFulfillment,
      actual: activeBudgetMonth.actual,
      planned: activeBudgetMonth.planned,
      diffLabel: "Rozdíl",
      diffValue: signedCurrency(monthlyVariance),
      status: `Přečerpáno o ${formatPercent(monthlyFulfillment - 100)}`,
      tone: budgetTone(monthlyFulfillment)
    })}
    ${renderBudgetCard({
      title: `Plnění budgetu YTD · ${budgetPeriodLabel}`,
      fulfillment: ytdFulfillment,
      actual: ytdActual,
      planned: ytdPlanned,
      diffLabel: "Zbývá do plánu",
      diffValue: formatCurrency(Math.abs(ytdVariance)),
      status: "V rámci kumulativního plánu",
      tone: budgetTone(ytdFulfillment)
    })}
  </div>
  <div class="budgetInterpretation">
    <h3>Čerpání mediálního budgetu</h3>
    <p>V ${activeMonthLocative} bylo vyčerpáno ${formatCurrency(activeBudgetMonth.actual)} proti plánovaným ${formatCurrency(activeBudgetMonth.planned)}. Měsíční budget byl naplněn na ${formatPercent(monthlyFulfillment)} a překročen o ${formatCurrency(monthlyVariance)}.</p>
    <p>V kumulativním pohledu od ledna do ${activeMonthGenitive} bylo vyčerpáno ${formatCurrency(ytdActual)} z plánovaných ${formatCurrency(ytdPlanned)}. Dosavadní roční plán je tak naplněn na ${formatPercent(ytdFulfillment)} a proti kumulativnímu plánu zbývá ${formatCurrency(Math.abs(ytdVariance))}.</p>
    <p>Červencové přečerpání zatím neznamená překročení kumulativního budgetu, ale rezerva vytvořená v předchozích měsících je už výrazně menší.</p>
  </div>`;

const renderBusinessKpi = ({ label, value, comparison, delta, tone = "neutral" }) => `
  <div class="metricTile businessYtdKpi">
    <span>${label}</span>
    <strong>${value}</strong>
    <small>${comparison}</small>
    <div class="delta ${tone}">${delta}</div>
  </div>`;

const renderBusinessYtdMiniContext = () => `
  <div class="businessYtdMiniContext">
    <span class="pill businessDataPill">Business YTD kontext</span>
    <div class="metricGrid ga4Top dashboardMetricGrid businessMiniMetricGrid">
      ${renderBusinessKpi({
        label: "Reálné tržby YTD",
        value: formatCurrency(businessPerformance.ytd.revenue),
        comparison: `vs. ${formatCurrency(businessPerformance.ytd.revenuePreviousYear)}`,
        delta: `${signedPercent(businessYtdRevenueYoY)} YoY`,
        tone: businessDeltaTone(businessYtdRevenueYoY)
      })}
      ${renderBusinessKpi({
        label: "Náklady YTD",
        value: formatCurrency(businessPerformance.ytd.marketingCosts),
        comparison: `vs. ${maybeCurrency(businessPerformance.ytd.marketingCostsPreviousYear)}`,
        delta: `${signedPercent(businessYtdCostsYoY)} YoY`,
        tone: businessDeltaTone(businessYtdCostsYoY, false)
      })}
      ${renderBusinessKpi({
        label: "Reálné PNO YTD",
        value: maybePercent(businessYtdPno, formatPercentPrecise),
        comparison: `vs. ${maybePercent(businessYtdPnoPrevious, formatPercentPrecise)}`,
        delta: signedPpPrecise(businessYtdPnoChange),
        tone: businessDeltaTone(businessYtdPnoChange, false)
      })}
    </div>
    <div class="sourceSummary compactSummary businessYtdMiniComment">
      <h3>Business YTD komentář</h3>
      <p>Reálné tržby YTD jsou meziročně výš o ${signedPercent(businessYtdRevenueYoY)} (${signedCurrency(businessYtdRevenueDiff)}), zatímco náklady započítané do PNO rostou o ${signedPercent(businessYtdCostsYoY)}. PNO se proto posouvá z ${maybePercent(businessYtdPnoPrevious, formatPercentPrecise)} na ${maybePercent(businessYtdPno, formatPercentPrecise)}. Červenec je slabší hlavně v obchodní realitě: tržby klesly o ${signedPercent(businessMonthRevenueYoY, formatPercent)} YoY, zatímco náklady rostly o ${signedPercent(businessMonthCostsYoY, formatPercent)} YoY.</p>
    </div>
  </div>`;

const renderBusinessContextItem = ({ label, value, meta, tone = "neutral" }) => `
  <div class="businessMonthItem">
    <span>${label}</span>
    <strong>${value}</strong>
    <small class="${tone}">${meta}</small>
  </div>`;

const renderBusinessTrendBar = (value, max, className, label) => {
  if (!isNumber(value) || !isNumber(max) || max === 0) {
    return `<span class="businessTrendMissing">${unavailableLabel}</span>`;
  }

  const height = Math.max((value / max) * 100, 8);
  return `<i class="${className}" style="--bar-height:${height}%" title="${label}: ${formatCurrency(value)}"></i>`;
};

const renderBusinessTrendGroup = (item) => `
  <div class="businessTrendGroup">
    <div class="businessTrendBars revenueBars" aria-label="${item.label} tržby">
      ${renderBusinessTrendBar(item.revenuePreviousYear, businessTrendMaxRevenue, "previous", "Tržby 2025")}
      ${renderBusinessTrendBar(item.revenue, businessTrendMaxRevenue, "current", "Tržby 2026")}
    </div>
    <div class="businessTrendBars costBars" aria-label="${item.label} náklady">
      ${renderBusinessTrendBar(item.marketingCostsPreviousYear, businessTrendMaxCosts, "previous costs", "Náklady 2025")}
      ${renderBusinessTrendBar(item.marketingCosts, businessTrendMaxCosts, "current costs", "Náklady 2026")}
    </div>
    <strong>${item.label}</strong>
  </div>`;

const renderBusinessYtdContext = () => `
  <div class="panel glass businessYtdPanel">
    <div class="businessYtdHeader">
      <div>
        <span class="pill businessDataPill">Business / interní data</span>
        <h2>Celkový business kontext YTD</h2>
        <p>Celkové tržby a marketingové náklady započítané do PNO, odděleně od GA4 analytiky.</p>
      </div>
      <div class="businessPeriodBadge">${businessPerformance.ytd.period}</div>
    </div>

    <div class="metricGrid businessYtdGrid">
      ${renderBusinessKpi({
        label: "Celkové tržby YTD",
        value: formatCurrency(businessPerformance.ytd.revenue),
        comparison: `vs. ${formatCurrency(businessPerformance.ytd.revenuePreviousYear)}`,
        delta: `${signedPercent(businessYtdRevenueYoY)} · ${signedCurrency(businessYtdRevenueDiff)} YoY`,
        tone: businessDeltaTone(businessYtdRevenueYoY)
      })}
      ${renderBusinessKpi({
        label: "Marketingové náklady YTD",
        value: formatCurrency(businessPerformance.ytd.marketingCosts),
        comparison: `vs. ${maybeCurrency(businessPerformance.ytd.marketingCostsPreviousYear)}`,
        delta: `${signedPercent(businessYtdCostsYoY)} YoY`,
        tone: businessDeltaTone(businessYtdCostsYoY, false)
      })}
      ${renderBusinessKpi({
        label: "PNO z celkových tržeb",
        value: maybePercent(businessYtdPno, formatPercentPrecise),
        comparison: `vs. ${maybePercent(businessYtdPnoPrevious, formatPercentPrecise)}`,
        delta: signedPpPrecise(businessYtdPnoChange),
        tone: businessDeltaTone(businessYtdPnoChange, false)
      })}
      <div class="metricTile businessYtdKpi businessDynamicsKpi">
        <span>Tržby vs. náklady</span>
        <strong>${isNumber(businessDynamicsGap) ? signedPp(businessDynamicsGap) : unavailableLabel}</strong>
        <small>rozdíl dynamiky YoY</small>
        <dl>
          <div><dt>Tržby YoY</dt><dd>${signedPercent(businessYtdRevenueYoY)}</dd></div>
          <div><dt>Náklady YoY</dt><dd>${signedPercent(businessYtdCostsYoY)}</dd></div>
        </dl>
      </div>
    </div>

    <div class="businessMonthContext">
      <div class="businessMonthHead">
        <span>Aktuální měsíc v kontextu</span>
        <strong>${businessPerformance.currentMonth.period}</strong>
      </div>
      <div class="businessMonthGrid">
        ${renderBusinessContextItem({
          label: "Celkové tržby",
          value: formatCurrency(businessPerformance.currentMonth.revenue),
          meta: `${signedPercent(businessMonthRevenueYoY, formatPercent)} YoY`,
          tone: businessDeltaTone(businessMonthRevenueYoY)
        })}
        ${renderBusinessContextItem({
          label: "Marketingové náklady",
          value: formatCurrency(businessPerformance.currentMonth.marketingCosts),
          meta: isNumber(businessMonthCostsYoY) ? `${signedPercent(businessMonthCostsYoY, formatPercent)} YoY` : unavailableLabel,
          tone: "neutral"
        })}
        ${renderBusinessContextItem({
          label: "PNO měsíce",
          value: maybePercent(businessMonthPno, formatPercentPrecise),
          meta: `vs. ${maybePercent(businessMonthPnoPrevious, formatPercentPrecise)} loni`,
          tone: businessDeltaTone(businessMonthPno - businessYtdPno, false)
        })}
      </div>
    </div>

    <div class="businessTrendPanel">
      <div class="businessTrendHead">
        <div>
          <span class="sectionSubhead">Trendový kontext</span>
          <p>Graf odděluje interní tržby a marketingové náklady započítané do PNO. GA4 tržby se do této vrstvy nepoužívají.</p>
        </div>
        <div class="businessTrendLegend">
          <span><i class="previous"></i>2025</span>
          <span><i class="current"></i>2026</span>
          <span><i class="costs"></i>Náklady</span>
        </div>
      </div>
      <div class="businessTrendChart">
        ${businessPerformance.trend.map(renderBusinessTrendGroup).join("")}
      </div>
    </div>

    <div class="businessYtdComment">
      <h3>Celkový YTD komentář</h3>
      <p>Celkové tržby jsou od začátku roku meziročně výš o ${signedPercent(businessYtdRevenueYoY)} (${signedCurrency(businessYtdRevenueDiff)}). Marketingové náklady započítané do PNO ale rostou rychleji, o ${signedPercent(businessYtdCostsYoY)}, takže PNO z celkových tržeb se posouvá z ${maybePercent(businessYtdPnoPrevious)} na ${maybePercent(businessYtdPno)}.</p>
      <p>Červenec je proti loňsku tržebně slabší (${signedPercent(businessMonthRevenueYoY, formatPercent)} YoY), zatímco náklady rostou výrazně rychleji (${signedPercent(businessMonthCostsYoY, formatPercent)} YoY). Měsíční PNO tak vychází ${maybePercent(businessMonthPno)} proti loňským ${maybePercent(businessMonthPnoPrevious)}. Další krok je držet rozpočet víc navázaný na kanálovou efektivitu, aby vyšší investice netlačila PNO rychleji než tržby.</p>
    </div>
  </div>
  <div class="ga4MethodNote">
    Celková obchodní data ukazují skutečný vývoj tržeb a marketingových nákladů. GA4 část níže slouží k interpretaci webového chování, objednávek a zdrojů návštěvnosti. Hodnoty se kvůli rozdílné metodice nemusí přesně shodovat.
  </div>`;

export const dashboardSectionHtml = `<section class="chapter" id="dashboard">
  <div class="chapterHead glass">
    <div class="chapterTitle">
      <div class="chapterNo">01 · Dashboard</div>
      <h2>Výkon červenec 2026</h2>
      <p>Executive přehled obchodní reality, plánu, PNO z reality a analytického trendu GA4.</p>
    </div>
  </div>

  <div class="panel glass dashboardVerdict">
    <div class="mainKpiGrid dashboardKpis businessKpiGrid">
      <div class="mainKpi primaryBusinessKpi"><span>Realita 26</span><strong>3 600 000 Kč</strong><small>hlavní obchodní realita za červenec</small><div class="delta down">-22,23 % vs. Realita Korekce 2025</div></div>
      <div class="mainKpi"><span>Plán 26</span><strong>4 738 842 Kč</strong><small>plán tržeb na červenec</small><div class="delta down">plnění 75,97 %</div></div>
      <div class="mainKpi"><span>Rozdíl vs. plán</span><strong>-1 138 842 Kč</strong><small>Realita 26 minus Plán 26</small><div class="delta down">-24,03 %</div></div>
      <div class="mainKpi"><span>PNO z reality</span><strong>18,77 %</strong><small>675 594 Kč / Realita 26</small><div class="delta down">reálné náklady</div></div>
    </div>
  </div>

  <div class="contentGrid dashboardTopGrid">
    <div class="panel glass">
      <span class="pill">Reálné náklady a PNO</span>
      <div class="costHero businessCostHero">
        <div class="costBreakdown">
          ${renderMediaBudgetSummary()}
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
      <div class="metricTile"><span>GA4 tržby</span><strong>3 406 834 Kč</strong><small>vs. 4 425 821 Kč</small><div class="delta down">-23,02 % YoY</div></div>
      <div class="metricTile"><span>Objednávky</span><strong>3 341</strong><small>vs. 4 366 loni</small><div class="delta down">-23,48 % YoY</div></div>
      <div class="metricTile"><span>Návštěvy</span><strong>101 769</strong><small>vs. 100 757 loni</small><div class="delta up">+1,0 % YoY</div></div>
      <div class="metricTile"><span>Prům. tržba z nákupu</span><strong>1 019,70 Kč</strong><small>vs. 1 013,70 Kč loni</small><div class="delta up">+0,59 % YoY</div></div>
    </div>
    <span class="sectionSubhead">Výkon podle zdrojů</span>
    <div class="dashboardTable">
      <table class="dashTable sourceTable">
        <thead>
          <tr><th>Zdroj / médium</th><th>Návštěvy</th><th>Objednávky</th><th>Tržby</th><th class="changeCol">Změna tržeb</th></tr>
        </thead>
        <tbody>
          <tr class="summaryRow">
            <td>Celkem</td><td>101 769 <span class="labelChange good">+1,0 %</span></td><td>3 341 <span class="labelChange bad">-23,48 %</span></td><td class="revenueFocus">3 406 834 Kč</td><td class="deltaCell"><span class="labelChange bad">-23,02 %</span></td>
          </tr>
          ${monthlySources.map(renderSourceRow).join("")}
        </tbody>
      </table>
    </div>
    <div class="sourceSummary compactSummary ga4MonthlyInsight">
      <h3>Červencový GA4 moment</h3>
      <p>Zajímavým momentem července byl výkon zdroje sport.cz / clanek_10. Článek přivedl 1 584 návštěv, udržel velmi dobrou míru zapojení 76,2 % a zároveň vygeneroval 108 objednávek s tržbami 127 031 Kč. Nešlo tedy pouze o návštěvnostní zásah, ale o traffic, který dokázal přispět i ke konverzím.</p>
    </div>
  </div>

  ${renderBusinessYtdContext()}

  <div class="contentGrid dashboardBottomGrid">
    <div class="panel glass">
      <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}GA4 YTD kontext</span>
      <div class="metricGrid ga4Top dashboardMetricGrid">
        <div class="metricTile"><span>Tržby YTD</span><strong>26 108 232 Kč</strong><small>vs. 26 605 728 Kč</small><div class="delta down">-1,87 %</div></div>
        <div class="metricTile"><span>Objednávky</span><strong>27 530</strong><small>vs. 28 692</small><div class="delta down">-4,05 %</div></div>
        <div class="metricTile"><span>Návštěvy</span><strong>722 470</strong><small>vs. 724 597</small><div class="delta down">-0,29 %</div></div>
      </div>
      <div class="sourceSummary compactSummary">
        <h3>GA4 YTD komentář</h3>
        <p>Po započtení července jsou GA4 tržby YTD lehce pod loňskem, konkrétně o -1,87 %. Návštěvnost zůstává prakticky stabilní, ale počet objednávek je níž o -4,05 %, takže hlavní otázka není objem návštěv, ale kvalita průchodu k objednávce. Dobře dál drží Seznam CPC a Facebook CPC, slabší zůstává Google organic.</p>
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
