import { SystemLogo } from "../components/SystemLogo.js";

const topProducts = [
  { name: "GS Condro® DIAMANT, 720 tablet", revenue: "187 432 Kč", purchased: "103", change: "+26,59 %" },
  { name: "Cemio RED3®, 360 kapslí, NOVÝ", revenue: "137 479 Kč", purchased: "84", change: "+13,33 %" },
  { name: "GS Merilin, 4 × 60 tablet", revenue: "133 994 Kč", purchased: "103", change: "-22,96 %" },
  { name: "GS Condro® DIAMANT, 200 tablet", revenue: "120 866 Kč", purchased: "203", change: "-6,53 %" },
  { name: "GS Koenzym Lipo Q10® 100 mg, 4 × 60 kapslí", revenue: "108 208 Kč", purchased: "114", change: "+6,22 %" },
  { name: "GS Omega 3 citrus, 2 × 150 kapslí", revenue: "107 914 Kč", purchased: "200", change: "-11,69 %" },
  { name: "Cemio Kamzík® NOVINKA, 180 kapslí", revenue: "106 443 Kč", purchased: "135", change: "+1 552,33 %" },
  { name: "Cemio Kamzík® NOVINKA, 360 kapslí", revenue: "103 232 Kč", purchased: "73", change: "+955,22 %" },
  { name: "Cemio RED3®, 90 kapslí, NOVÝ", revenue: "95 572 Kč", purchased: "210", change: "+17,13 %" },
  { name: "Cemio Kamzík® NOVINKA, 90 kapslí", revenue: "85 189 Kč", purchased: "201", change: "+1 364,74 %" }
];

const productGroups = [
  { name: "GS Condro® DIAMANT", views: "1 734", cart: "448", purchased: "143", revenue: "146 827 Kč" },
  { name: "GS Fit&Beauty Collagen", views: "3 652", cart: "837", purchased: "242", revenue: "111 189 Kč" },
  { name: "Cemio Kamzík® silnější", views: "2 171", cart: "1 210", purchased: "152", revenue: "89 330 Kč" },
  { name: "Cemio RED3®", views: "770", cart: "302", purchased: "104", revenue: "83 759 Kč" },
  { name: "GS Omega 3 citrus", views: "588", cart: "358", purchased: "151", revenue: "63 654 Kč" },
  { name: "GS Merilin", views: "1 157", cart: "1 509", purchased: "706", revenue: "55 681 Kč" },
  { name: "GS Koenzym Lipo Q10® 100 mg", views: "545", cart: "201", purchased: "79", revenue: "46 256 Kč" },
  { name: "Cemio Odvodnění & detox", views: "2 178", cart: "570", purchased: "203", revenue: "42 210 Kč" },
  { name: "GS Perfect Condro", views: "1 187", cart: "111", purchased: "40", revenue: "37 965 Kč" }
];

const blogRows = [
  { url: "/gs-magazin/nezadouci-ucinky-statinu-leku-na-snizeni-cholesterolu/", views: "2 094", viewsChange: "-2,56 %", users: "1 774", usersChange: "+0,62 %" },
  { url: "/gs-magazin/jak-vypada-slunecni-alergie-poznejte-jeji-nejcastejsi-projevy/", views: "1 563", viewsChange: "+40,18 %", users: "1 273", usersChange: "+36,73 %" },
  { url: "/gs-magazin/priznaky-menopauzy-kompletni-seznam-ktery-byste-mela-znat/", views: "1 398", viewsChange: "-33,71 %", users: "1 044", usersChange: "-7,77 %" },
  { url: "/gs-magazin/tep-kolene-co-vas-ceka-pri-operaci-i-po-ni/", views: "1 329", viewsChange: "+0,53 %", users: "1 060", usersChange: "-0,09 %" },
  { url: "/gs-magazin/bolest-kycle-co-ji-zpusobuje-a-jak-se-ji-zbavit/", views: "1 325", viewsChange: "-19,75 %", users: "1 086", usersChange: "-20,03 %" }
];

const devices = [
  { name: "web / mobile", users: "40 571", usersChange: "-10,57 %", orders: "2 035", ordersChange: "+5,82 %", revenue: "1 622 430 Kč", revenueChange: "-3,6 %", note: "Největší objem uživatelů i objednávek, ale nižší hodnota tržeb." },
  { name: "web / desktop", users: "14 381", usersChange: "+8,27 %", orders: "1 717", ordersChange: "+4,95 %", revenue: "1 859 624 Kč", revenueChange: "+2,74 %", note: "Nižší objem než mobile, ale silnější tržby a vyšší hodnota nákupu." },
  { name: "web / tablet", users: "1 069", usersChange: "+38,47 %", orders: "36", ordersChange: "+28,57 %", revenue: "29 119 Kč", revenueChange: "+1,84 %", note: "Malý segment, růstově pozitivní, bez zásadního vlivu na celek." }
];

const funnelData = [
  {
    id: "purchase_funnel",
    title: "Nákupní funnel",
    month: "06/2026",
    path: "Návštěvy → zapojené návštěvy → objednávky",
    conversion: "3,96 %",
    change: "+0,02 p. b. MoM",
    biggestDrop: "Zapojení → objednávka",
    comment: "Návštěvnost i objednávky proti květnu rostou. Konverzní míra se drží stabilně, takže hlavní příležitost je dál zvyšovat hodnotu objednávky a zrychlovat cestu z aktivní návštěvy k nákupu.",
    months: [
      { month: "05/2026", steps: [{ label: "Návštěvy", value: 89324, change: "0 %" }, { label: "Zapojené návštěvy", value: 56245, change: "0 %" }, { label: "Objednávky", value: 3522, change: "0 %" }] },
      { month: "06/2026", steps: [{ label: "Návštěvy", value: 95742, change: "+7,18 %" }, { label: "Zapojené návštěvy", value: 61626, change: "+9,57 %" }, { label: "Objednávky", value: 3788, change: "+7,55 %" }] }
    ]
  },
  {
    id: "product_funnel",
    title: "Produktový funnel",
    month: "06/2026",
    path: "Zobrazení produktu → přidání do košíku → zakoupené položky",
    conversion: "11,93 %",
    change: "-2,71 p. b. MoM",
    biggestDrop: "Košík → zakoupení",
    comment: "Produktové zobrazení výrazně narostlo a košíků je víc, ale finální zakoupené položky lehce klesly. To říká, že produktový mix táhne tržbu, ale košík a dokončení nákupu si zaslouží pozornost.",
    months: [
      { month: "05/2026", steps: [{ label: "Zobrazení produktu", value: 66446, change: "0 %" }, { label: "Přidání do košíku", value: 22213, change: "0 %" }, { label: "Zakoupené položky", value: 9726, change: "0 %" }] },
      { month: "06/2026", steps: [{ label: "Zobrazení produktu", value: 79599, change: "+19,8 %" }, { label: "Přidání do košíku", value: 24327, change: "+9,52 %" }, { label: "Zakoupené položky", value: 9499, change: "-2,33 %" }] }
    ]
  },
  {
    id: "content_funnel",
    title: "Obsahový funnel",
    month: "06/2026",
    path: "Zobrazení článků → aktivní uživatelé → další zobrazení",
    conversion: "69,05 %",
    change: "+0,20 p. b. MoM",
    biggestDrop: "Zobrazení → aktivní uživatel",
    comment: "Blog má o něco nižší objem, ale kvalita čtení se drží. Článek o sluneční alergii roste sezonálně velmi dobře a dává smysl ho napojit na letní produkty i newsletter.",
    months: [
      { month: "05/2026", steps: [{ label: "Zobrazení článků", value: 27529, change: "0 %" }, { label: "Aktivní uživatelé", value: 18955, change: "0 %" }, { label: "Další zobrazení", value: 8574, change: "0 %" }] },
      { month: "06/2026", steps: [{ label: "Zobrazení článků", value: 26277, change: "-4,55 %" }, { label: "Aktivní uživatelé", value: 18146, change: "-4,27 %" }, { label: "Další zobrazení", value: 8131, change: "-5,17 %" }] }
    ]
  },
  {
    id: "device_funnel",
    title: "Zařízení / UX funnel",
    month: "06/2026",
    path: "Aktivní uživatelé → zapojení → objednávky",
    conversion: "6,79 %",
    change: "+0,77 p. b. YoY",
    biggestDrop: "Zapojení → objednávka",
    comment: "Mobile drží objem, desktop drží hodnotu. Celkově je objednávek meziročně víc i při nižším počtu aktivních uživatelů, což ukazuje na lepší schopnost dovést návštěvu k objednávce.",
    months: [
      { month: "06/2025", steps: [{ label: "Aktivní uživatelé", value: 59574, change: "0 %" }, { label: "Zapojení", value: 38042, change: "0 %" }, { label: "Objednávky", value: 3587, change: "0 %" }] },
      { month: "06/2026", steps: [{ label: "Aktivní uživatelé", value: 55806, change: "-6,32 %" }, { label: "Zapojení", value: 35931, change: "-5,55 %" }, { label: "Objednávky", value: 3788, change: "+5,6 %" }] }
    ]
  }
];

const clarityInsights = [
  { label: "Sledujeme", value: "4 hlavní cesty", text: "Nákupní, produktovou, obsahovou a UX cestu podle zařízení." },
  { label: "Největší propad", value: "Košík → zakoupení", text: "Produktový funnel má silný zájem, ale dokončení nákupu je slabší místo." },
  { label: "Roste", value: "+7,55 % objednávky", text: "Nákupní cesta drží stabilní konverzi a objem objednávek roste." },
  { label: "Klesá", value: "-2,33 % položky", text: "Zakoupené položky klesly i přes růst zobrazení produktů a košíků." },
  { label: "Proč to sledovat", value: "Objem vs. průchod", text: "Díky funnelům poznáme, jestli výkon mění návštěvnost, zapojení nebo ztráta v konkrétním kroku." }
];

const clarityFrictionMetrics = [
  {
    label: "Quick backs",
    value: "12,82 %",
    sessions: "6 289 sessions",
    mom: "bez srovnání",
    tone: "neutral",
    max: 15,
    months: [{ month: "06/2026", value: 12.82 }]
  },
  {
    label: "Dead clicks",
    value: "7,86 %",
    sessions: "3 853 sessions",
    mom: "bez srovnání",
    tone: "neutral",
    max: 15,
    months: [{ month: "06/2026", value: 7.86 }]
  },
  {
    label: "Rage clicks",
    value: "0,09 %",
    sessions: "46 sessions",
    mom: "bez srovnání",
    tone: "good",
    max: 2,
    months: [{ month: "06/2026", value: 0.09 }]
  },
  {
    label: "Excessive scrolling",
    value: "< 0,01 %",
    sessions: "2 sessions",
    mom: "bez srovnání",
    tone: "good",
    max: 2,
    months: [{ month: "06/2026", value: 0.01 }]
  }
];

const clarityGlossary = [
  { term: "Dead clicks", text: "Kliknutí na prvek, který nereaguje.", why: "Pomáhá odhalit místa, kde uživatel čeká akci, ale stránka mu ji nenabídne." },
  { term: "Rage clicks", text: "Rychlé opakované klikání na stejné místo.", why: "Typicky ukazuje frustraci nebo nejasný prvek v nákupní cestě." },
  { term: "Excessive scrolling", text: "Neobvykle dlouhé scrollování.", why: "Může značit, že uživatel hledá důležitou informaci příliš dlouho." },
  { term: "Quick backs", text: "Rychlý návrat zpět po otevření stránky.", why: "Často ukazuje nesoulad očekávání, slabý landing page match nebo horší navigaci." },
  { term: "JavaScript errors", text: "Chyby na stránce, které mohou ovlivnit chování webu.", why: "Důležité hlavně tam, kde mohou brzdit dokončení objednávky." }
];

const changeClass = (value) => value.trim().startsWith("+") ? "good" : value.trim().startsWith("-") ? "bad" : "neutral";

const changeChip = (value) => `<span class="labelChange ${changeClass(value)}">${value}</span>`;

const formatValue = (value) => new Intl.NumberFormat("cs-CZ").format(value);

const renderProductRow = (item, index) => `
  <tr>
    <td><span class="rankNo">${String(index + 1).padStart(2, "0")}</span>${item.name}</td>
    <td>${item.purchased}</td>
    <td class="revenueFocus">${item.revenue}</td>
    <td class="deltaCell">${changeChip(item.change)}</td>
  </tr>`;

const renderGroupRow = (item, index) => `
  <tr>
    <td><span class="rankNo">${String(index + 1).padStart(2, "0")}</span>${item.name}</td>
    <td>${item.views}</td>
    <td>${item.cart}</td>
    <td>${item.purchased}</td>
    <td class="revenueFocus">${item.revenue}</td>
  </tr>`;

const renderBlogRow = (item, index) => `
  <tr>
    <td><span class="rankNo">${String(index + 1).padStart(2, "0")}</span><span class="urlCell">${item.url}</span></td>
    <td>${item.views} ${changeChip(item.viewsChange)}</td>
    <td>${item.users} ${changeChip(item.usersChange)}</td>
  </tr>`;

const renderDeviceCard = (item) => `
  <div class="deviceCard">
    <div class="deviceCardHead">
      <span>${item.name}</span>
      ${changeChip(item.revenueChange)}
    </div>
    <strong>${item.revenue}</strong>
    <div class="deviceMetrics">
      <span>Aktivní uživatelé <b>${item.users}</b> ${changeChip(item.usersChange)}</span>
      <span>Objednávky <b>${item.orders}</b> ${changeChip(item.ordersChange)}</span>
    </div>
    <p>${item.note}</p>
  </div>`;

const conversionRate = (month) => month.steps.at(-1).value / month.steps[0].value * 100;

const dropOffRate = (month) => (1 - month.steps.at(-1).value / month.steps[0].value) * 100;

const renderMiniFunnel = (funnel, variant = "mini") => {
  const current = funnel.months.at(-1);
  const max = current.steps[0].value;

  return `<div class="funnelShape funnelShape--${variant}">
    ${current.steps.map((step) => {
      const width = Math.max(22, step.value / max * 100);
      return `<div class="funnelSegment" style="--segment-width:${width}%">
        <div class="funnelSegmentBar"></div>
        <div class="funnelSegmentMeta">
          <span>${step.label}</span>
          <b>${formatValue(step.value)}</b>
          ${changeChip(step.change)}
        </div>
      </div>`;
    }).join("")}
  </div>`;
};

const percentText = (value) => `${value.toFixed(1).replace(".", ",")} %`;

const percentPointText = (value) => `${value > 0 ? "+" : ""}${value.toFixed(2).replace(".", ",")} p. b.`;

const numericChangeChip = (value, suffix = "%") => changeChip(`${value > 0 ? "+" : ""}${value.toFixed(2).replace(".", ",")} ${suffix}`);

const renderTrendPane = (funnel, metric, active = false) => {
  const previous = funnel.months[0];
  const current = funnel.months.at(-1);

  if (metric === "volume") {
    return `<div class="funnelTrendPane${active ? " is-active" : ""}" data-funnel-pane="${metric}">
      <div class="funnelTrendCompare">
        ${current.steps.map((step, index) => {
          const previousValue = previous.steps[index].value;
          const change = previousValue === 0 ? 0 : (step.value / previousValue - 1) * 100;
          return `<div class="funnelTrendRow">
            <span>${step.label}</span>
            <div class="funnelTrendValues">
              <b>${formatValue(previousValue)}</b>
              <i aria-hidden="true">→</i>
              <strong>${formatValue(step.value)}</strong>
              ${numericChangeChip(change)}
            </div>
          </div>`;
        }).join("")}
      </div>
    </div>`;
  }

  if (metric === "conversion") {
    const previousRate = conversionRate(previous);
    const currentRate = conversionRate(current);
    return `<div class="funnelTrendPane${active ? " is-active" : ""}" data-funnel-pane="${metric}">
      <div class="funnelTrendSummary">
        <span>${previous.month}</span>
        <b>${percentText(previousRate)}</b>
        <i aria-hidden="true">→</i>
        <span>${current.month}</span>
        <strong>${percentText(currentRate)}</strong>
        ${changeChip(percentPointText(currentRate - previousRate))}
      </div>
      <p>Konverze porovnává první a poslední krok funnelu. U dvou měsíců je přesnější číst ji jako jednoduché srovnání, ne jako dlouhý trend.</p>
    </div>`;
  }

  const previousDropOff = dropOffRate(previous);
  const currentDropOff = dropOffRate(current);
  return `<div class="funnelTrendPane${active ? " is-active" : ""}" data-funnel-pane="${metric}">
    <div class="funnelTrendSummary">
      <span>${previous.month}</span>
      <b>${percentText(previousDropOff)}</b>
      <i aria-hidden="true">→</i>
      <span>${current.month}</span>
      <strong>${percentText(currentDropOff)}</strong>
      ${changeChip(percentPointText(currentDropOff - previousDropOff))}
    </div>
    <p>Drop-off ukazuje, jaká část uživatelů se mezi prvním a posledním krokem ztratí. Nižší hodnota je lepší.</p>
  </div>`;
};

const renderDropTable = (funnel) => {
  const current = funnel.months.at(-1);
  return `<table class="dashTable funnelDropTable">
    <thead><tr><th>Krok</th><th>Objem</th><th>Průchod</th><th>Změna</th></tr></thead>
    <tbody>
      ${current.steps.map((step, index) => {
        const previous = index === 0 ? current.steps[0].value : current.steps[index - 1].value;
        const rate = index === 0 ? "100 %" : `${(step.value / previous * 100).toFixed(1).replace(".", ",")} %`;
        const previousValue = funnel.months[0].steps[index].value;
        const change = previousValue === 0 ? 0 : (step.value / previousValue - 1) * 100;
        return `<tr><td>${step.label}</td><td>${formatValue(step.value)}</td><td>${rate}</td><td>${numericChangeChip(change)}</td></tr>`;
      }).join("")}
    </tbody>
  </table>`;
};

const renderFunnelCard = (funnel, index) => `
  <article
    class="funnelTimeCard${index === 0 ? " is-active" : ""}"
    role="button"
    tabindex="0"
    data-funnel-card="${funnel.id}"
    aria-expanded="${index === 0 ? "true" : "false"}"
    aria-controls="funnel-detail-${funnel.id}"
  >
    <div class="funnelCardTop">
      <span>${funnel.month}</span>
      ${changeChip(funnel.change)}
    </div>
    <h3>${funnel.title}</h3>
    <p>${funnel.path}</p>
    <div class="funnelCardMetric"><span>Konverze</span><strong>${funnel.conversion}</strong></div>
    ${renderMiniFunnel(funnel)}
    <div class="funnelDropNote">Největší propad: <b>${funnel.biggestDrop}</b></div>
    <span class="funnelCardCta">${index === 0 ? "Detail otevřený" : "Zobrazit detail"}</span>
  </article>`;

const renderFunnelDetailPanel = (funnel, index) => `
  <div
    id="funnel-detail-${funnel.id}"
    class="funnelDetailPanel${index === 0 ? " is-active" : ""}"
    data-funnel-panel="${funnel.id}"
    ${index === 0 ? "" : "hidden"}
  >
    <div class="funnelDetailIntro">
      <span>${funnel.month}</span>
      <h3>${funnel.title}</h3>
      <p>${funnel.path}</p>
    </div>
    <div class="funnelDetailGrid">
      <div>
        <h4>Aktuální trychtýř</h4>
        ${renderMiniFunnel(funnel, "large")}
      </div>
      <div>
        <div class="funnelTrendHead">
          <h4>Trend v čase</h4>
          <div class="funnelMetricTabs" role="tablist" aria-label="Přepnutí metriky trendu">
            <button class="funnelMetricToggle is-active" type="button" data-funnel-metric="volume">Objem</button>
            <button class="funnelMetricToggle" type="button" data-funnel-metric="conversion">Konverze</button>
            <button class="funnelMetricToggle" type="button" data-funnel-metric="dropoff">Drop-off</button>
          </div>
        </div>
        <div class="funnelTrendWrap">
          ${renderTrendPane(funnel, "volume", true)}
          ${renderTrendPane(funnel, "conversion")}
          ${renderTrendPane(funnel, "dropoff")}
        </div>
        ${renderDropTable(funnel)}
      </div>
      <p class="funnelComment">${funnel.comment}</p>
    </div>
    <div class="detailsCollapseFooter funnelCollapseFooter">
      <button class="detailsCollapseBtn funnelCollapseBtn" type="button" data-funnel-collapse="${funnel.id}">
        <span aria-hidden="true">↑</span> Sbalit detail
      </button>
    </div>
  </div>`;

const renderClarityInsight = (item) => `
  <div class="clarityInsightItem">
    <span>${item.label}</span>
    <b>${item.value}</b>
    <p>${item.text}</p>
  </div>`;

const renderClarityTrend = (metric) => `
  <div class="clarityMiniTrend" aria-label="Trend ${metric.label}">
    ${metric.months.map((point) => `<span style="--bar-height:${Math.max(4, Math.min(100, point.value / metric.max * 100))}%" title="${point.month}: ${point.value} %"></span>`).join("")}
  </div>`;

const renderClarityMetric = (metric) => `
  <article class="clarityMetricCard ${metric.tone}">
    <div class="clarityMetricTop">
      <span>${metric.label}</span>
      <i>${metric.mom}</i>
    </div>
    <strong>${metric.value}</strong>
    <small>${metric.sessions}</small>
    ${renderClarityTrend(metric)}
  </article>`;

const renderGlossaryItem = (item) => `
  <div class="clarityGlossaryItem">
    <b>${item.term}</b>
    <p>${item.text}</p>
    <small>${item.why}</small>
  </div>`;

export const productsSectionHtml = `<section class="chapter" id="produkty">
  <div class="chapterHead glass">
    <div class="chapterTitle">
      <div class="chapterNo">02 · Výkon produktů</div>
      <h2>Produkty, skupiny, blog a zařízení</h2>
      <p>Červnový pohled na produktový výkon, produktové skupiny, obsahový výkon blogu a rozdíly mezi zařízeními.</p>
    </div>
  </div>

  <div class="panel glass productVerdict">
    <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}Produktový verdict</span>
    <h2>Produktová část června rostla v tržbách, i když počet zakoupených položek lehce klesl. Výkon táhne hodnotnější mix a několik silných produktových tahounů.</h2>
    <p>Produktová část působí zdravě: tržby rostou meziměsíčně, přestože počet zakoupených položek lehce klesl. Tahounem jsou zejména Condro Diamant, RED3 a novinkové Kamzíky, zatímco blog ukazuje sezónní potenciál u témat spojených s létem.</p>
    <div class="mainKpiGrid productKpiGrid">
      <div class="mainKpi"><span>Tržba z položek</span><strong>3 426 600 Kč</strong><small>vs. květen 3 226 663 Kč</small><div class="delta up">+6,2 % MoM</div></div>
      <div class="mainKpi"><span>Zakoupené položky</span><strong>9 499</strong><small>vs. květen 9 726</small><div class="delta down">-2,33 % MoM</div></div>
      <div class="mainKpi"><span>Přidání do košíku</span><strong>24 327</strong><small>vs. květen 22 213</small><div class="delta up">+9,52 % MoM</div></div>
      <div class="mainKpi"><span>Zobrazené položky</span><strong>79 599</strong><small>vs. květen 66 446</small><div class="delta up">+19,8 % MoM</div></div>
    </div>
  </div>

  <div class="contentGrid productTopGrid">
    <div class="panel glass">
      <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}TOP produkty podle tržeb</span>
      <div class="dashboardTable">
        <table class="dashTable productReportTable">
          <thead><tr><th>Produkt</th><th>Zakoupeno</th><th>Tržba</th><th class="changeCol">MoM tržby</th></tr></thead>
          <tbody>
            <tr class="summaryRow"><td>Celkem</td><td>9 499</td><td class="revenueFocus">3 426 600 Kč</td><td class="deltaCell">${changeChip("+6,2 %")}</td></tr>
            ${topProducts.map(renderProductRow).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="panel glass">
      <span class="pill">Čtení produktu</span>
      <div class="sourceSummary productComment">
        <h3>Co stojí za růstem</h3>
        <p>Největší podíl drží GS Condro® DIAMANT, 720 tablet, který kombinuje vysokou hodnotu objednávek s více než stovkou zakoupených kusů. Silně se drží také Cemio RED3®, 360 kapslí a GS Merilin, 4 × 60 tablet. TOP desítka je zdravě rozložená: žádný produkt netáhne výkon úplně sám, několik produktů se pohybuje nad hranicí 100 tis. Kč.</p>
      </div>
      <div class="sourceSummary productComment">
        <h3>Meziměsíční pohyb</h3>
        <p>Červen je v tržbě z položek lepší o +6,2 %, i když počet zakoupených položek klesl o -2,33 %. Výkon tedy rostl spíš přes hodnotnější produktový mix než přes vyšší počet prodaných kusů. Výrazné růsty novinkových Kamzíků jsou pozitivní signál, jen je dobré je číst s rezervou kvůli nízké květnové základně.</p>
      </div>
    </div>
  </div>

  <div class="panel glass productSectionBlock">
    <span class="pill">Produktové skupiny</span>
    <div class="dashboardTable">
      <table class="dashTable productReportTable">
        <thead><tr><th>Skupina</th><th>Zobrazení</th><th>Košík</th><th>Koupená balení</th><th>Tržby</th></tr></thead>
        <tbody>${productGroups.map(renderGroupRow).join("")}</tbody>
      </table>
    </div>
    <div class="sourceSummary compactSummary">
      <h3>Čtení skupin</h3>
      <p>Na úrovni skupin vede GS Condro® DIAMANT s tržbami 146 827 Kč, což potvrzuje silnou roli kloubní výživy v celkovém mixu. GS Fit&Beauty Collagen má nejvyšší počet zobrazení mezi top skupinami a tržby 111 189 Kč. Cemio Kamzík® silnější ukazuje velmi dobrý nákupní zájem díky vysokému počtu přidání do košíku.</p>
    </div>
  </div>

  <div class="contentGrid productBottomGrid">
    <div class="panel glass">
      <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}Blog · červen vs. květen</span>
      <div class="metricGrid ga4Top dashboardMetricGrid">
        <div class="metricTile"><span>Zobrazení</span><strong>26 277</strong><small>vs. 27 529</small><div class="delta down">-4,55 %</div></div>
        <div class="metricTile"><span>Aktivní uživatelé</span><strong>18 146</strong><small>vs. 18 955</small><div class="delta down">-4,27 %</div></div>
        <div class="metricTile"><span>Doba zapojení</span><strong>2:06</strong><small>vs. 2:03</small><div class="delta up">+2,68 %</div></div>
      </div>
      <div class="dashboardTable">
        <table class="dashTable productReportTable blogReportTable">
          <thead><tr><th>Článek</th><th>Zobrazení</th><th>Aktivní uživatelé</th></tr></thead>
          <tbody>${blogRows.map(renderBlogRow).join("")}</tbody>
        </table>
      </div>
      <div class="sourceSummary compactSummary">
        <h3>Blogový komentář</h3>
        <p>Blog v červnu mírně oslabil v celkových zobrazeních, ale doba zapojení se zlepšila. Největší růst má článek o sluneční alergii, což sezónně dává velký smysl. Stojí za to ho propojit s letními produkty, prevencí a newsletterem.</p>
      </div>
    </div>

    <div class="panel glass">
      <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}Zařízení · červen YoY</span>
      <div class="metricGrid ga4Top dashboardMetricGrid">
        <div class="metricTile"><span>Aktivní uživatelé</span><strong>55 806</strong><small>vs. 59 574</small><div class="delta down">-6,32 %</div></div>
        <div class="metricTile"><span>Objednávky</span><strong>3 788</strong><small>vs. 3 587</small><div class="delta up">+5,6 %</div></div>
        <div class="metricTile"><span>Celkové tržby</span><strong>3 511 173 Kč</strong><small>vs. 3 521 512 Kč</small><div class="delta down">-0,29 %</div></div>
      </div>
      <div class="deviceMixGrid">${devices.map(renderDeviceCard).join("")}</div>
      <div class="sourceSummary compactSummary">
        <h3>Mobile drží objem, desktop hodnotu</h3>
        <p>Mobile má pořád největší objem uživatelů i objednávek, ale tržby mu meziročně klesly o -3,6 %. Desktop naopak roste v aktivních uživatelích i tržbách. To naznačuje, že nákupní rozhodnutí s vyšší hodnotou stále častěji dobíhá na desktopu, zatímco mobile funguje jako hlavní objemový a průzkumný kanál.</p>
      </div>
    </div>
  </div>

  <div class="panel glass funnelTimeBlock">
    <span class="pill systemPill">${SystemLogo({ system: "microsoftClarity", label: "Clarity", className: "channelLogo" })}Vývoj funnelů</span>
    <h2>Funnel vývoj v čase</h2>
    <p class="sectionLead">Trychtýře ukazují, kde se v čase mění průchod nákupní a obsahovou cestou. Cílem není sledovat jen finální nákup, ale pochopit, ve kterém kroku se výkon zlepšuje nebo ztrácí.</p>
    <div class="clarityOverview">
      <div>
        <h3>MS Clarity přehled</h3>
        <p>MS Clarity část sleduje, jak uživatelé procházejí klíčovými cestami webu. Neřeší jen finální objednávku, ale i mezikroky: zobrazení produktu, přidání do košíku, zapojení, objednávku nebo práci s obsahem. Díky tomu vidíme, jestli se výkon mění kvůli nižšímu objemu návštěv, slabšímu zapojení, nebo ztrátám v konkrétním kroku.</p>
      </div>
      <div class="clarityInsightGrid">
        ${clarityInsights.map(renderClarityInsight).join("")}
      </div>
    </div>
    <div class="clarityMetricSection">
      <div>
        <h3>Clarity signály chování</h3>
        <p>Tyto metriky pomáhají rychle odlišit zdravé procházení webu od míst, kde uživatelé narážejí na nejasný prvek, frustraci nebo slabší navigaci.</p>
      </div>
      <div class="clarityMetricGrid">
        ${clarityFrictionMetrics.map(renderClarityMetric).join("")}
      </div>
    </div>
    <div class="funnelTimeGrid">
      ${funnelData.map(renderFunnelCard).join("")}
    </div>
    <div class="funnelDetailPanels">
      ${funnelData.map(renderFunnelDetailPanel).join("")}
    </div>
    <div class="clarityGlossary">
      <h3>MS Clarity slovníček</h3>
      <div class="clarityGlossaryGrid">
        ${clarityGlossary.map(renderGlossaryItem).join("")}
      </div>
    </div>
  </div>
</section>`;
