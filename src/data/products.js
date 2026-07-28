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

const behaviorHealthMetrics = [
  {
    id: "rage-clicks",
    title: "Rage Clicks",
    values: [
      { period: "2026-05", value: 0.09, sessions: 46 },
      { period: "2026-06", value: 0.02, sessions: 9 }
    ],
    displayValue: "0,02 %",
    max: 0.12,
    trend: "good",
    comment: "Opakované klikání na stejné místo v červnu výrazně ustoupilo. Tohle je dobrý signál: méně momentů, kdy uživatel zkouší stránku přemluvit silou.",
    plainInsight: "Frustrační klikání je v červnu nízké a proti květnu se citelně zlepšilo."
  },
  {
    id: "dead-clicks",
    title: "Dead Clicks",
    values: [
      { period: "2026-05", value: 7.86, sessions: 3853 },
      { period: "2026-06", value: 0.58, sessions: 297 }
    ],
    displayValue: "0,58 %",
    max: 8,
    trend: "good",
    comment: "Kliknutí na nereagující prvky spadla z 7,86 % na 0,58 %. Uživatelé tak v červnu mnohem méně naráželi na prvky, které vypadají klikatelné, ale nic neudělají.",
    plainInsight: "Největší meziměsíční zlepšení ve zdraví webu je právě u dead clicks."
  },
  {
    id: "quick-backs",
    title: "Quick Backs",
    values: [
      { period: "2026-05", value: 12.82, sessions: 6289 },
      { period: "2026-06", value: 12.33, sessions: 6367 }
    ],
    displayValue: "12,33 %",
    max: 14,
    trend: "good",
    comment: "Rychlé návraty lehce klesly, i když počet zasažených sessions zůstal objemově podobný. Chování je stabilnější, ale pořád jde o metriky, které stojí za pravidelné sledování.",
    plainInsight: "Quick backs jsou o něco lepší, ale stále představují nejsilnější behaviorální signál v Clarity."
  },
  {
    id: "excessive-scrolling",
    title: "Excessive Scrolling",
    values: [
      { period: "2026-05", value: 0.01, sessions: 2 },
      { period: "2026-06", value: 0.01, sessions: 6 }
    ],
    displayValue: "0,01 %",
    max: 0.12,
    trend: "neutral",
    comment: "Nadměrné scrollování zůstává prakticky zanedbatelné. V červnu jde jen o 6 sessions, takže zde není vidět plošný problém s dohledatelností obsahu.",
    plainInsight: "Excessive scrolling je nízké a nevypadá jako širší UX problém."
  }
];

const behaviorJourneys = [
  {
    id: "homepage-journey",
    title: "Homepage Journey",
    month: "06/2026",
    path: "Homepage → Product → Cart → Checkout → Purchase",
    conversion: "4,83 %",
    change: "-1,79 p. b. MoM",
    biggestDrop: "Homepage → Product",
    comment: "Cesta z homepage v červnu ztrácí hlavně hned na přechodu do produktu. Celkový průchod k objednávce klesl z 6,62 % na 4,83 %, takže úvodní stránka posílá do produktové části menší podíl návštěv než v květnu.",
    months: [
      {
        month: "05/2026",
        steps: [
          { label: "Homepage", value: 2688, rate: 100, change: "0 %" },
          { label: "Product", value: 973, rate: 36.2, change: "0 %" },
          { label: "Cart", value: 482, rate: 49.54, change: "0 %" },
          { label: "Checkout", value: 275, rate: 57.05, change: "0 %" },
          { label: "Purchase", value: 178, rate: 64.73, change: "0 %" }
        ]
      },
      {
        month: "06/2026",
        steps: [
          { label: "Homepage", value: 2879, rate: 100, change: "+7,11 %" },
          { label: "Product", value: 1006, rate: 34.94, change: "+3,39 %" },
          { label: "Cart", value: 463, rate: 46.02, change: "-3,94 %" },
          { label: "Checkout", value: 229, rate: 49.46, change: "-16,73 %" },
          { label: "Purchase", value: 139, rate: 60.7, change: "-21,91 %" }
        ]
      }
    ]
  },
  {
    id: "product-journey",
    title: "Product Journey",
    month: "06/2026",
    path: "Product → Cart → Checkout → Purchase",
    conversion: "4,78 %",
    change: "-0,53 p. b. MoM",
    biggestDrop: "Product → Cart",
    comment: "Produktová cesta má v červnu vyšší počet produktových sessions, ale slabší přechod do košíku. Pozitivní je, že samotný krok checkout → purchase se zlepšil, takže největší pozornost dává smysl držet před košíkem.",
    months: [
      {
        month: "05/2026",
        steps: [
          { label: "Product", value: 24208, rate: 100, change: "0 %" },
          { label: "Cart", value: 4084, rate: 16.87, change: "0 %" },
          { label: "Checkout", value: 2182, rate: 53.43, change: "0 %" },
          { label: "Purchase", value: 1285, rate: 58.89, change: "0 %" }
        ]
      },
      {
        month: "06/2026",
        steps: [
          { label: "Product", value: 27235, rate: 100, change: "+12,50 %" },
          { label: "Cart", value: 4028, rate: 14.79, change: "-1,37 %" },
          { label: "Checkout", value: 2115, rate: 52.51, change: "-3,07 %" },
          { label: "Purchase", value: 1301, rate: 61.51, change: "+1,25 %" }
        ]
      }
    ]
  },
  {
    id: "checkout-journey",
    title: "Checkout Journey",
    month: "06/2026",
    path: "Checkout → Purchase",
    conversion: "60,68 %",
    change: "+3,53 p. b. MoM",
    biggestDrop: "Checkout → Purchase",
    comment: "Samotné dokončení z checkoutu do objednávky se v červnu zlepšilo z 57,15 % na 60,68 %. To pomáhá oddělit problém před checkoutem od toho, co se děje přímo v závěru nákupní cesty.",
    months: [
      {
        month: "05/2026",
        steps: [
          { label: "Checkout", value: 3300, rate: 100, change: "0 %" },
          { label: "Purchase", value: 1886, rate: 57.15, change: "0 %" }
        ]
      },
      {
        month: "06/2026",
        steps: [
          { label: "Checkout", value: 3243, rate: 100, change: "-1,73 %" },
          { label: "Purchase", value: 1968, rate: 60.68, change: "+4,35 %" }
        ]
      }
    ]
  }
];

const behaviorInsights = [
  {
    title: "Dead Clicks",
    value: "0,58 %",
    mom: "-7,28 p. b.",
    tone: "good",
    comment: "Největší zlepšení v červnu. Stránka působí pro uživatele jednoznačněji a méně často svádí ke kliknutí na nereagující prvky."
  },
  {
    title: "Quick Backs",
    value: "12,33 %",
    mom: "-0,49 p. b.",
    tone: "good",
    comment: "Metrika se lehce zlepšila, ale pořád je nejvýraznější ze všech behaviorálních signálů. Stojí za to sledovat hlavně stránky, ze kterých se lidé rychle vrací."
  },
  {
    title: "Rage Clicks",
    value: "0,02 %",
    mom: "-0,07 p. b.",
    tone: "good",
    comment: "Frustrační klikání je v červnu nízké. Tady se web tváří klidněji a uživatelé méně bojují s interakcemi."
  },
  {
    title: "Excessive Scrolling",
    value: "0,01 %",
    mom: "0,00 p. b.",
    tone: "neutral",
    comment: "Pouze jednotky sessions. Nevidíme signál, že by lidé plošně hledali důležité informace příliš dlouho."
  },
  {
    title: "Registrace do klubu",
    value: "0,16 %",
    mom: "-0,05 p. b.",
    tone: "watch",
    comment: "Průchod k registraci je v červnu nižší a objem dokončení klesl ze 103 na 85 sessions. Je to samostatná behaviorální cesta, ne hlavní nákupní funnel."
  }
];

const behaviorTrendSeries = [
  { id: "homepage-product", title: "Homepage → Product", unit: "%", values: [{ period: "05/2026", value: 36.2 }, { period: "06/2026", value: 34.94 }] },
  { id: "product-cart", title: "Product → Cart", unit: "%", values: [{ period: "05/2026", value: 16.87 }, { period: "06/2026", value: 14.79 }] },
  { id: "cart-checkout", title: "Cart → Checkout", unit: "%", values: [{ period: "05/2026", value: 56.45 }, { period: "06/2026", value: 54.69 }] },
  { id: "checkout-purchase", title: "Checkout → Purchase", unit: "%", values: [{ period: "05/2026", value: 57.15 }, { period: "06/2026", value: 60.68 }] },
  { id: "dead-clicks", title: "Dead Clicks", unit: "%", values: [{ period: "05/2026", value: 7.86 }, { period: "06/2026", value: 0.58 }] },
  { id: "quick-backs", title: "Quick Backs", unit: "%", values: [{ period: "05/2026", value: 12.82 }, { period: "06/2026", value: 12.33 }] },
  { id: "rage-clicks", title: "Rage Clicks", unit: "%", values: [{ period: "05/2026", value: 0.09 }, { period: "06/2026", value: 0.02 }] }
];

const clarityScreenshots = [
  { title: "Homepage Journey · 06/2026", full: "assets/report-jun-26/clarity/06-1.png", thumb: "assets/report-jun-26/clarity/06-1-thumb.png" },
  { title: "Product Journey · 06/2026", full: "assets/report-jun-26/clarity/06-2.png", thumb: "assets/report-jun-26/clarity/06-2-thumb.png" },
  { title: "Checkout Journey · 06/2026", full: "assets/report-jun-26/clarity/06-3.png", thumb: "assets/report-jun-26/clarity/06-3-thumb.png" },
  { title: "Registrace do klubu · 06/2026", full: "assets/report-jun-26/clarity/06-4.png", thumb: "assets/report-jun-26/clarity/06-4-thumb.png" },
  { title: "Behavioral Insights · 06/2026", full: "assets/report-jun-26/clarity/06-5.png", thumb: "assets/report-jun-26/clarity/06-5-thumb.png" },
  { title: "Homepage Journey · 05/2026", full: "assets/report-jun-26/clarity/05-1.png", thumb: "assets/report-jun-26/clarity/05-1-thumb.png" },
  { title: "Product Journey · 05/2026", full: "assets/report-jun-26/clarity/05-2.png", thumb: "assets/report-jun-26/clarity/05-2-thumb.png" },
  { title: "Checkout Journey · 05/2026", full: "assets/report-jun-26/clarity/05-3.png", thumb: "assets/report-jun-26/clarity/05-3-thumb.png" },
  { title: "Registrace do klubu · 05/2026", full: "assets/report-jun-26/clarity/05-4.png", thumb: "assets/report-jun-26/clarity/05-4-thumb.png" },
  { title: "Behavioral Insights · 05/2026", full: "assets/report-jun-26/clarity/05-5.png", thumb: "assets/report-jun-26/clarity/05-5-thumb.png" }
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

const currentPoint = (items) => items.at(-1);

const previousPoint = (items) => items.at(-2) ?? items[0];

const conversionRate = (month) => month.steps.at(-1).value / month.steps[0].value * 100;

const dropOffRate = (month) => (1 - month.steps.at(-1).value / month.steps[0].value) * 100;

const decimalText = (value, digits = 2) => value.toFixed(digits).replace(".", ",");

const renderMiniFunnel = (funnel, variant = "mini") => {
  const current = funnel.months.at(-1);
  const previous = previousPoint(funnel.months);
  const max = current.steps[0].value;

  return `<div class="funnelShape funnelShape--${variant}">
    ${current.steps.map((step, index) => {
      const previousStep = previous.steps[index];
      const rateChange = previousStep ? step.rate - previousStep.rate : 0;
      const width = Math.max(22, step.value / max * 100);
      return `<div class="funnelSegment" style="--segment-width:${width}%">
        <div class="funnelSegmentBar"></div>
        <div class="funnelSegmentMeta">
          <span>${step.label}</span>
          <b>${formatValue(step.value)} sessions</b>
          <small>${decimalText(step.rate)} % průchod ${index === 0 ? changeChip(step.change) : changeChip(percentPointText(rateChange))}</small>
        </div>
      </div>`;
    }).join("")}
  </div>`;
};

const percentText = (value, digits = 1) => `${decimalText(value, digits)} %`;

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
              <strong>${formatValue(step.value)} sessions</strong>
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
      <p>Celkový průchod porovnává první a poslední krok cesty. U dvou měsíců je přesnější číst ho jako jednoduché srovnání, ne jako dlouhý trend.</p>
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
    <p>Drop-off ukazuje, jaká část sessions se mezi prvním a posledním krokem ztratí. Nižší hodnota je lepší.</p>
  </div>`;
};

const renderDropTable = (funnel) => {
  const current = funnel.months.at(-1);
  const previous = previousPoint(funnel.months);
  return `<table class="dashTable funnelDropTable">
    <thead><tr><th>Krok</th><th>Sessions</th><th>Průchod krokem</th><th>MoM</th></tr></thead>
    <tbody>
      ${current.steps.map((step, index) => {
        const previousStep = previous.steps[index];
        const rateChange = previousStep ? step.rate - previousStep.rate : 0;
        const mom = index === 0 ? changeChip(step.change) : changeChip(percentPointText(rateChange));
        return `<tr><td>${step.label}</td><td>${formatValue(step.value)}</td><td>${percentText(step.rate, 2)}</td><td>${mom}</td></tr>`;
      }).join("")}
    </tbody>
  </table>`;
};

const renderFunnelCard = (funnel, index) => `
  <article
    class="funnelTimeCard behaviorJourneyCard${index === 0 ? " is-active" : ""}"
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
    <div class="funnelCardMetric"><span>Celkový průchod</span><strong>${funnel.conversion}</strong></div>
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
        <h4>Aktuální cesta</h4>
        ${renderMiniFunnel(funnel, "large")}
      </div>
      <div>
        <div class="funnelTrendHead">
          <h4>Trend v čase</h4>
          <div class="funnelMetricTabs" role="tablist" aria-label="Přepnutí metriky trendu">
            <button class="funnelMetricToggle is-active" type="button" data-funnel-metric="volume">Sessions</button>
            <button class="funnelMetricToggle" type="button" data-funnel-metric="conversion">Průchod</button>
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

const renderBehaviorHeroInsight = (item) => `
  <div class="clarityInsightItem behaviorHeroItem">
    <span>${item.title}</span>
    <b>${item.displayValue}</b>
    <p>${item.plainInsight}</p>
  </div>`;

const renderBehaviorHealthTrend = (metric) => `
  <div class="clarityMiniTrend" aria-label="Trend ${metric.title}">
    ${metric.values.map((point) => `<span style="--bar-height:${Math.max(4, Math.min(100, point.value / metric.max * 100))}%" title="${point.period}: ${decimalText(point.value)} %"></span>`).join("")}
  </div>`;

const renderBehaviorHealthMetric = (metric) => {
  const previous = previousPoint(metric.values);
  const current = currentPoint(metric.values);
  const valueChange = current.value - previous.value;
  const sessionChange = current.sessions - previous.sessions;

  return `<article class="clarityMetricCard behaviorHealthCard ${metric.trend}">
    <div class="clarityMetricTop">
      <span>${metric.title}</span>
      <i>${changeChip(percentPointText(valueChange))}</i>
    </div>
    <strong>${metric.displayValue}</strong>
    <small>${formatValue(current.sessions)} sessions ${changeChip(`${sessionChange > 0 ? "+" : ""}${formatValue(sessionChange)}`)}</small>
    ${renderBehaviorHealthTrend(metric)}
    <p>${metric.comment}</p>
  </article>`;
};

const renderBehaviorInsight = (item) => `
  <article class="clarityGlossaryItem behaviorInsightCard ${item.tone}">
    <div class="clarityMetricTop">
      <span>${item.title}</span>
      <i>${changeChip(item.mom)}</i>
    </div>
    <b>${item.value}</b>
    <p>${item.comment}</p>
  </article>`;

const renderSparkline = (series) => {
  const width = 160;
  const height = 54;
  const pad = 8;
  const values = series.values.map((point) => point.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const points = series.values.map((point, index) => {
    const x = pad + (index / Math.max(1, series.values.length - 1)) * (width - pad * 2);
    const y = height - pad - ((point.value - min) / range) * (height - pad * 2);
    return { x, y, point };
  });
  const pointString = points.map(({ x, y }) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

  return `<svg class="behaviorSparkline" viewBox="0 0 ${width} ${height}" role="img" aria-label="Trend ${series.title}">
    <polyline points="${pointString}" fill="none" />
    ${points.map(({ x, y, point }) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="3.5"><title>${point.period}: ${decimalText(point.value)} ${series.unit}</title></circle>`).join("")}
  </svg>`;
};

const renderBehaviorTrend = (series) => {
  const previous = previousPoint(series.values);
  const current = currentPoint(series.values);
  const change = current.value - previous.value;

  return `<article class="behaviorTrendCard">
    <div class="behaviorTrendTop">
      <span>${series.title}</span>
      ${changeChip(percentPointText(change))}
    </div>
    ${renderSparkline(series)}
    <div class="behaviorTrendBottom">
      <small>${previous.period}: ${decimalText(previous.value)} ${series.unit}</small>
      <strong>${current.period}: ${decimalText(current.value)} ${series.unit}</strong>
    </div>
  </article>`;
};

const renderClarityScreenshot = (item) => `
  <a class="creativeThumb behaviorShotThumb" href="${item.full}" aria-label="Otevřít detail: ${item.title}">
    <img src="${item.thumb}" alt="${item.title}" loading="lazy" />
    <span>${item.title}</span>
  </a>`;

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

  <div class="panel glass funnelTimeBlock behaviorAnalyticsBlock">
    <span class="pill systemPill">${SystemLogo({ system: "microsoftClarity", label: "Clarity", className: "channelLogo" })}Behavior Analytics</span>
    <h2>MS Clarity · Behavior Analytics</h2>
    <p class="sectionLead">Tahle část sleduje, jak se lidé na webu skutečně chovají: kde klikají zbytečně, kde se rychle vrací a jak se mění průchod hlavními cestami. Clarity zde stojí samostatně, bez míchání s reklamními nebo obchodními KPI.</p>
    <div class="clarityMetricSection behaviorBlock">
      <div>
        <h3>1. Web Health</h3>
        <p>Web je v behaviorálních signálech čistší než v květnu. Největší zlepšení vidíme u dead clicks a rage clicks, zatímco quick backs zůstávají nejvýraznější metrikou pro další sledování.</p>
      </div>
      <div class="clarityMetricGrid behaviorHealthGrid">
        ${behaviorHealthMetrics.map(renderBehaviorHealthMetric).join("")}
      </div>
    </div>

    <div class="behaviorBlock behaviorJourneysBlock">
      <div class="behaviorBlockHead">
        <h3>2-4. Journey vývoj v čase</h3>
        <p>Homepage, produktová část a checkout jsou oddělené, aby bylo jasné, jestli se chování mění na začátku cesty, před košíkem, nebo až při dokončení objednávky.</p>
      </div>
      <div class="funnelTimeGrid behaviorJourneyGrid">
        ${behaviorJourneys.map(renderFunnelCard).join("")}
      </div>
      <div class="funnelDetailPanels">
        ${behaviorJourneys.map(renderFunnelDetailPanel).join("")}
      </div>
    </div>

    <div class="clarityGlossary behaviorBlock behaviorInsightsBlock">
      <div class="behaviorBlockHead">
        <h3>5. Behavioral Insights</h3>
        <p>Krátké signály z Clarity, které nejsou samostatným marketingovým výkonem. Pomáhají rychle rozlišit, jestli uživatelé naráží na nejasnou interakci, návrat zpět, nebo dlouhé hledání obsahu.</p>
      </div>
      <div class="clarityGlossaryGrid behaviorInsightGrid">
        ${behaviorInsights.map(renderBehaviorInsight).join("")}
      </div>
    </div>

    <div class="behaviorBlock behaviorTrendsBlock">
      <div class="behaviorBlockHead">
        <h3>6. Behavior Trends</h3>
        <p>Trendová vrstva je připravená na další měsíce. Jakmile přibude další období, stačí doplnit dataset a mini grafy se automaticky rozšíří.</p>
      </div>
      <div class="behaviorTrendGrid">
        ${behaviorTrendSeries.map(renderBehaviorTrend).join("")}
      </div>
    </div>

    <details class="behaviorBlock behaviorScreenshotBlock">
      <summary>
        <span>Clarity náhledy</span>
        <b>Podpůrné vizuály z května a června</b>
        <i class="detailBtn">Detail ⌄</i>
      </summary>
      <div class="behaviorScreenshotGallery">
        ${clarityScreenshots.map(renderClarityScreenshot).join("")}
      </div>
    </details>
  </div>
</section>`;
