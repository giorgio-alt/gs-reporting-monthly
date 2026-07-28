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

const mediaBudget = [
  { month: "2026-01", planned: 960000, actual: 474714 },
  { month: "2026-02", planned: 780000, actual: 400017 },
  { month: "2026-03", planned: 595000, actual: 437013 },
  { month: "2026-04", planned: 505000, actual: 520205 },
  { month: "2026-05", planned: 555000, actual: 509356 },
  { month: "2026-06", planned: 355000, actual: 708539 }
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

const businessPerformance = {
  label: "Business / interní data",
  ytd: {
    period: "01–06/2026",
    revenue: 22701398,
    revenuePreviousYear: 22179907,
    marketingCosts: ytdActual,
    marketingCostsPreviousYear: null
  },
  currentMonth: {
    period: "06/2026",
    revenue: 3768005,
    revenuePreviousYear: 3416196,
    marketingCosts: activeBudgetMonth.actual,
    marketingCostsPreviousYear: null
  },
  trend: [
    {
      label: "YTD 01–06",
      revenue: 22701398,
      revenuePreviousYear: 22179907,
      marketingCosts: ytdActual,
      marketingCostsPreviousYear: null
    },
    {
      label: "06/2026",
      revenue: 3768005,
      revenuePreviousYear: 3416196,
      marketingCosts: activeBudgetMonth.actual,
      marketingCostsPreviousYear: null
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

const changeClass = (value) => value.trim().startsWith("+") ? "good" : value.trim().startsWith("-") ? "bad" : "neutral";

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
    <p>V červnu bylo vyčerpáno ${formatCurrency(activeBudgetMonth.actual)} proti plánovaným ${formatCurrency(activeBudgetMonth.planned)}. Měsíční budget byl naplněn na ${formatPercent(monthlyFulfillment)} a překročen o ${formatCurrency(monthlyVariance)}.</p>
    <p>V kumulativním pohledu od ledna do června bylo vyčerpáno ${formatCurrency(ytdActual)} z plánovaných ${formatCurrency(ytdPlanned)}. Dosavadní roční plán je tak naplněn na ${formatPercent(ytdFulfillment)} a proti kumulativnímu plánu zbývá ${formatCurrency(Math.abs(ytdVariance))}.</p>
    <p>Červnové přečerpání tedy zatím neznamená překročení kumulativního budgetu, ale výrazně snížilo rezervu vytvořenou v předchozích měsících.</p>
  </div>`;

const renderBusinessKpi = ({ label, value, comparison, delta, tone = "neutral" }) => `
  <div class="metricTile businessYtdKpi">
    <span>${label}</span>
    <strong>${value}</strong>
    <small>${comparison}</small>
    <div class="delta ${tone}">${delta}</div>
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
        delta: "YoY nelze vyčíslit",
        tone: "neutral"
      })}
      ${renderBusinessKpi({
        label: "PNO z celkových tržeb",
        value: maybePercent(businessYtdPno),
        comparison: `vs. ${maybePercent(businessYtdPnoPrevious)}`,
        delta: signedPp(businessYtdPnoChange),
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
          value: maybePercent(businessMonthPno),
          meta: `vs. ${maybePercent(businessMonthPnoPrevious)} loni`,
          tone: businessDeltaTone(businessMonthPno - businessYtdPno, false)
        })}
      </div>
    </div>

    <div class="businessTrendPanel">
      <div class="businessTrendHead">
        <div>
          <span class="sectionSubhead">Trendový kontext</span>
          <p>Graf ukazuje dostupné business hodnoty. Historické marketingové náklady 2025 zatím nejsou ve strukturovaných datech.</p>
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
      <p>Celkové tržby jsou od začátku roku meziročně výš o ${signedPercent(businessYtdRevenueYoY)} (${signedCurrency(businessYtdRevenueDiff)}). Marketingové náklady započítané do PNO jsou zatím ${formatCurrency(businessPerformance.ytd.marketingCosts)}, což dává PNO z celkových tržeb ${maybePercent(businessYtdPno)}. Protože loňské marketingové náklady nejsou v datech k dispozici, nepočítáme meziroční změnu nákladů ani PNO.</p>
      <p>Červen je proti loňsku tržebně silnější (${signedPercent(businessMonthRevenueYoY, formatPercent)} YoY), ale zároveň má výraznější marketingovou investici ${formatCurrency(businessPerformance.currentMonth.marketingCosts)} a měsíční PNO ${maybePercent(businessMonthPno)}. Další krok je doplnit historické náklady 2025 a do té doby držet kontrolu hlavně nad kanálovou efektivitou a čerpáním budgetové rezervy.</p>
    </div>
  </div>
  <div class="ga4MethodNote">
    Celková obchodní data ukazují skutečný vývoj tržeb a marketingových nákladů. GA4 část níže slouží k interpretaci webového chování, objednávek a zdrojů návštěvnosti. Hodnoty se kvůli rozdílné metodice nemusí přesně shodovat.
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

  ${renderBusinessYtdContext()}

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
