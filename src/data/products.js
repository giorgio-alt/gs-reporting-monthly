import { SystemLogo } from "../components/SystemLogo.js";

const topProducts = [
  { name: "GS Condro® DIAMANT, 200 tablet", revenue: "249 951 Kč", purchased: "380", change: "+106,80 %" },
  { name: "Cemio RED3®, 90 kapslí, NOVÝ", revenue: "146 749 Kč", purchased: "263", change: "+53,55 %" },
  { name: "Cemio RED3®, 180 kapslí, NOVÝ", revenue: "144 374 Kč", purchased: "147", change: "+82,99 %" },
  { name: "GS Merilin, 60 tablet", revenue: "144 032 Kč", purchased: "308", change: "+157,90 %" },
  { name: "GS Merilin, 4 × 60 tablet", revenue: "140 317 Kč", purchased: "106", change: "+4,72 %" },
  { name: "Cemio RED3®, 360 kapslí, NOVÝ", revenue: "136 947 Kč", purchased: "82", change: "-0,39 %" },
  { name: "GS Omega 3 citrus, 100+50 kapslí", revenue: "132 155 Kč", purchased: "404", change: "+83,54 %" },
  { name: "GS Condro® DIAMANT, 720 tablet", revenue: "126 260 Kč", purchased: "67", change: "-32,64 %" },
  { name: "GS Condro® DIAMANT, 360 tablet", revenue: "94 924 Kč", purchased: "79", change: "+26,89 %" },
  { name: "Cemio Kamzík® NOVINKA, 180 kapslí", revenue: "88 825 Kč", purchased: "106", change: "-16,55 %" }
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
  { url: "/gs-magazin/vse-co-potrebujete-vedet-o-ovsim-bodnuti/", views: "2 534", viewsChange: "+247,12 %", users: "2 104", usersChange: "+237,18 %" },
  { url: "/gs-magazin/nezadouci-ucinky-statinu-leku-na-snizeni-cholesterolu/", views: "1 676", viewsChange: "-19,96 %", users: "1 406", usersChange: "-20,74 %" },
  { url: "/gs-magazin/bolest-kycle-co-ji-zpusobuje-a-jak-se-ji-zbavit/", views: "1 254", viewsChange: "-5,36 %", users: "968", usersChange: "-10,87 %" },
  { url: "/gs-magazin/tep-kolene-co-vas-ceka-pri-operaci-i-po-ni/", views: "1 190", viewsChange: "-10,46 %", users: "927", usersChange: "-12,55 %" },
  { url: "/gs-magazin/jak-vypada-slunecni-alergie-poznejte-jeji-nejcastejsi-projevy/", views: "1 037", viewsChange: "-33,65 %", users: "900", usersChange: "-29,30 %" }
];

const devices = [
  { name: "web / mobile", users: "41 818", usersChange: "-11,80 %", orders: "1 670", ordersChange: "-27,49 %", revenue: "1 519 167 Kč", revenueChange: "-28,61 %", note: "Mobile drží největší objem, ale meziročně ztrácí objednávky i tržby. Tady je potřeba hlídat kvalitu návštěvnosti a průchod do nákupu." },
  { name: "web / desktop", users: "14 406", usersChange: "+3,28 %", orders: "1 641", ordersChange: "-18,72 %", revenue: "1 855 248 Kč", revenueChange: "-17,72 %", note: "Desktop má menší objem, ale nejvyšší tržební váhu. Slabší objednávky ukazují, že meziročně neklesá jen návštěvnost, ale i konverzní síla." },
  { name: "web / tablet", users: "1 462", usersChange: "+53,41 %", orders: "30", ordersChange: "-31,82 %", revenue: "32 419 Kč", revenueChange: "-24,61 %", note: "Tablet roste v uživatelích, ale obchodně zůstává malý a konverzně slabší. Je to spíš kontrolní segment než hlavní priorita." }
];

const behaviorHealthMetrics = [
  {
    id: "rage-clicks",
    title: "Rage Clicks",
    values: [
      { period: "2026-05", value: 0.09, sessions: 46 },
      { period: "2026-06", value: 0.02, sessions: 9 },
      { period: "2026-07", value: 0.005, sessions: 1 }
    ],
    displayValue: "<0,01 %",
    max: 0.12,
    trend: "good",
    comment: "Rage clicks v červenci klesly prakticky na minimum. Z pohledu frustrace při interakcích web působí klidněji a uživatelé méně narážejí na prvky, které by je nutily opakovaně klikat.",
    plainInsight: "Frustrační klikání je v červenci velmi nízké a dál se zlepšilo."
  },
  {
    id: "dead-clicks",
    title: "Dead Clicks",
    values: [
      { period: "2026-05", value: 7.86, sessions: 3853 },
      { period: "2026-06", value: 0.58, sessions: 297 },
      { period: "2026-07", value: 0.41, sessions: 214 }
    ],
    displayValue: "0,41 %",
    max: 8,
    trend: "good",
    comment: "Dead clicks dál klesají, tentokrát na 0,41 %. Po velkém červnovém zlepšení je důležité, že se metrika nevrací zpět nahoru a web zůstává pro uživatele srozumitelnější.",
    plainInsight: "Dead clicks drží po červnovém zlepšení nízkou úroveň."
  },
  {
    id: "quick-backs",
    title: "Quick Backs",
    values: [
      { period: "2026-05", value: 12.82, sessions: 6289 },
      { period: "2026-06", value: 12.33, sessions: 6367 },
      { period: "2026-07", value: 11.89, sessions: 6181 }
    ],
    displayValue: "11,89 %",
    max: 14,
    trend: "good",
    comment: "Quick backs se zlepšují třetí měsíc v řadě, ale pořád jde o nejsilnější behaviorální signál. Neznamená to automaticky problém v nákupu, spíš stránky nebo vstupy, kde očekávání uživatele není hned naplněné.",
    plainInsight: "Quick backs klesají, ale zůstávají nejvýraznější behaviorální metrikou."
  },
  {
    id: "excessive-scrolling",
    title: "Excessive Scrolling",
    values: [
      { period: "2026-05", value: 0.01, sessions: 2 },
      { period: "2026-06", value: 0.01, sessions: 6 },
      { period: "2026-07", value: 0.005, sessions: 3 }
    ],
    displayValue: "<0,01 %",
    max: 0.12,
    trend: "neutral",
    comment: "Nadměrné scrollování je i v červenci pouze v jednotkách sessions. Nevidíme signál, že by lidé plošně hledali klíčový obsah příliš dlouho.",
    plainInsight: "Excessive scrolling zůstává nízké a nevypadá jako širší UX problém."
  }
];

const behaviorJourneys = [
  {
    id: "homepage-journey",
    title: "Homepage Journey",
    month: "07/2026",
    path: "Homepage → Product → Cart → Checkout → Purchase",
    conversion: "5,33 %",
    change: "+0,50 p. b. MoM",
    biggestDrop: "Product → Cart",
    comment: "Homepage cesta se v červenci lehce zlepšila v celkovém průchodu k objednávce. Startovní objem sessions je nižší, ale poslední krok na objednávku přidal. Nejcitlivější místo zůstává přechod z produktu do košíku: tady se rozhoduje, jestli návštěva pokračuje v nákupní logice.",
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
      },
      {
        month: "07/2026",
        steps: [
          { label: "Homepage", value: 2719, rate: 100, change: "-5,56 %" },
          { label: "Product", value: 956, rate: 35.16, change: "-4,97 %" },
          { label: "Cart", value: 428, rate: 44.77, change: "-7,56 %" },
          { label: "Checkout", value: 228, rate: 53.27, change: "-0,44 %" },
          { label: "Purchase", value: 145, rate: 63.6, change: "+4,32 %" }
        ]
      }
    ]
  },
  {
    id: "product-journey",
    title: "Product Journey",
    month: "07/2026",
    path: "Product → Cart → Checkout → Purchase",
    conversion: "3,89 %",
    change: "-0,89 p. b. MoM",
    biggestDrop: "Product → Cart",
    comment: "Produktová cesta v červenci nabírá víc produktových sessions, ale celkový průchod k objednávce klesá na 3,89 %. Problém není v samotném checkoutu, ale hlavně před košíkem: z produktového detailu do košíku projde jen 14,02 % sessions.",
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
      },
      {
        month: "07/2026",
        steps: [
          { label: "Product", value: 29440, rate: 100, change: "+8,10 %" },
          { label: "Cart", value: 4128, rate: 14.02, change: "+2,48 %" },
          { label: "Checkout", value: 2068, rate: 50.1, change: "-2,22 %" },
          { label: "Purchase", value: 1144, rate: 55.32, change: "-12,07 %" }
        ]
      }
    ]
  },
  {
    id: "checkout-journey",
    title: "Checkout Journey",
    month: "07/2026",
    path: "Checkout → Purchase",
    conversion: "56,52 %",
    change: "-4,16 p. b. MoM",
    biggestDrop: "Checkout → Purchase",
    comment: "Checkout flow v červenci oslabil: z pokladny do objednávky prošlo 56,52 % sessions. Není to dramatický propad, ale proti červnu se závěr cesty zhoršil a při větším objemu košíků by se tahle ztráta rychle propsala do objednávek.",
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
      },
      {
        month: "07/2026",
        steps: [
          { label: "Checkout", value: 2976, rate: 100, change: "-8,23 %" },
          { label: "Purchase", value: 1682, rate: 56.52, change: "-14,53 %" }
        ]
      }
    ]
  }
];

const behaviorInsights = [
  {
    title: "Dead Clicks",
    value: "0,41 %",
    mom: "-0,17 p. b.",
    tone: "good",
    comment: "Po velkém červnovém zlepšení drží dead clicks nízko. Web dál méně často svádí ke kliknutí na prvky, které nereagují."
  },
  {
    title: "Quick Backs",
    value: "11,89 %",
    mom: "-0,44 p. b.",
    tone: "good",
    comment: "Metrika se dál zlepšuje, ale zůstává nejsilnějším behaviorálním signálem. Stojí za to sledovat hlavně stránky, ze kterých se lidé rychle vrací."
  },
  {
    title: "Rage Clicks",
    value: "<0,01 %",
    mom: "-0,02 p. b.",
    tone: "good",
    comment: "Frustrační klikání je v červenci prakticky minimální. Uživatelé méně bojují s interakcemi a web působí klidněji."
  },
  {
    title: "Excessive Scrolling",
    value: "<0,01 %",
    mom: "-0,01 p. b.",
    tone: "neutral",
    comment: "Pouze jednotky sessions. Nevidíme signál, že by lidé plošně hledali důležité informace příliš dlouho."
  }
];

const behaviorTrendSeries = [
  { id: "homepage-product", title: "Homepage → Product", unit: "%", values: [{ period: "05/2026", value: 36.2 }, { period: "06/2026", value: 34.94 }, { period: "07/2026", value: 35.16 }] },
  { id: "product-cart", title: "Product → Cart", unit: "%", values: [{ period: "05/2026", value: 16.87 }, { period: "06/2026", value: 14.79 }, { period: "07/2026", value: 14.02 }] },
  { id: "cart-checkout", title: "Cart → Checkout", unit: "%", values: [{ period: "05/2026", value: 56.45 }, { period: "06/2026", value: 52.51 }, { period: "07/2026", value: 50.1 }] },
  { id: "checkout-purchase", title: "Checkout → Purchase", unit: "%", values: [{ period: "05/2026", value: 57.15 }, { period: "06/2026", value: 60.68 }, { period: "07/2026", value: 56.52 }] },
  { id: "dead-clicks", title: "Dead Clicks", unit: "%", values: [{ period: "05/2026", value: 7.86 }, { period: "06/2026", value: 0.58 }, { period: "07/2026", value: 0.41 }] },
  { id: "quick-backs", title: "Quick Backs", unit: "%", values: [{ period: "05/2026", value: 12.82 }, { period: "06/2026", value: 12.33 }, { period: "07/2026", value: 11.89 }] },
  { id: "rage-clicks", title: "Rage Clicks", unit: "%", values: [{ period: "05/2026", value: 0.09 }, { period: "06/2026", value: 0.02 }, { period: "07/2026", value: 0.005 }] }
];

const clarityScreenshots = [
  { title: "Homepage Journey · 06/2026", full: "assets/report-jun-26/clarity/06-1.png", thumb: "assets/report-jun-26/clarity/06-1-thumb.png" },
  { title: "Product Journey · 06/2026", full: "assets/report-jun-26/clarity/06-2.png", thumb: "assets/report-jun-26/clarity/06-2-thumb.png" },
  { title: "Checkout Journey · 06/2026", full: "assets/report-jun-26/clarity/06-3.png", thumb: "assets/report-jun-26/clarity/06-3-thumb.png" },
  { title: "Registrace do klubu · 06/2026", full: "assets/report-jun-26/clarity/06-4.png", thumb: "assets/report-jun-26/clarity/06-4-thumb.png" },
  { title: "Homepage Journey · 05/2026", full: "assets/report-jun-26/clarity/05-1.png", thumb: "assets/report-jun-26/clarity/05-1-thumb.png" },
  { title: "Product Journey · 05/2026", full: "assets/report-jun-26/clarity/05-2.png", thumb: "assets/report-jun-26/clarity/05-2-thumb.png" },
  { title: "Checkout Journey · 05/2026", full: "assets/report-jun-26/clarity/05-3.png", thumb: "assets/report-jun-26/clarity/05-3-thumb.png" },
  { title: "Registrace do klubu · 05/2026", full: "assets/report-jun-26/clarity/05-4.png", thumb: "assets/report-jun-26/clarity/05-4-thumb.png" }
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
      <p>Červencový pohled na produktový výkon, produktové skupiny, obsahový výkon blogu, zařízení a behaviorální signály.</p>
    </div>
  </div>

  <div class="panel glass productVerdict">
    <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}Produktový verdict</span>
    <h2>Produktová část v červenci lehce přidala v tržbě i prodaných položkách. Výkon táhne silný Condro Diamant, RED3 a Merilin, zatímco blog ukazuje sezonní skok u tématu ovšího bodnutí.</h2>
    <p>Červenec nepřinesl dramatický skok, ale zdravé meziměsíční zlepšení: tržba z položek roste o 0,89 % a zakoupené položky o 1,71 %. Pozitivní je hlavně růst přidání do košíku, který ukazuje, že produktový zájem není jen pasivní prohlížení.</p>
    <div class="mainKpiGrid productKpiGrid">
      <div class="mainKpi"><span>Tržba z položek</span><strong>3 457 076 Kč</strong><small>vs. červen 3 426 600 Kč</small><div class="delta up">+0,89 % MoM</div></div>
      <div class="mainKpi"><span>Zakoupené položky</span><strong>9 661</strong><small>vs. červen 9 499</small><div class="delta up">+1,71 % MoM</div></div>
      <div class="mainKpi"><span>Přidání do košíku</span><strong>28 611</strong><small>vs. červen 24 327</small><div class="delta up">+17,61 % MoM</div></div>
      <div class="mainKpi"><span>Zobrazené položky</span><strong>83 217</strong><small>vs. červen 79 599</small><div class="delta up">+4,55 % MoM</div></div>
    </div>
  </div>

  <div class="contentGrid productTopGrid">
    <div class="panel glass">
      <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}TOP produkty podle tržeb</span>
      <div class="dashboardTable">
        <table class="dashTable productReportTable">
          <thead><tr><th>Produkt</th><th>Zakoupeno</th><th>Tržba</th><th class="changeCol">MoM tržby</th></tr></thead>
          <tbody>
            <tr class="summaryRow"><td>Celkem</td><td>9 661</td><td class="revenueFocus">3 457 076 Kč</td><td class="deltaCell">${changeChip("+0,89 %")}</td></tr>
            ${topProducts.map(renderProductRow).join("")}
          </tbody>
        </table>
      </div>
    </div>

    <div class="panel glass">
      <span class="pill">Čtení produktu</span>
      <div class="sourceSummary productComment">
        <h3>Co stojí za růstem</h3>
        <p>Největší podíl drží GS Condro® DIAMANT, 200 tablet, který v červenci doručil 380 zakoupených kusů a téměř 250 tis. Kč tržby. RED3 má v TOP desítce hned tři varianty a Merilin dvě, takže růst nestojí na jedné položce, ale na širším produktovém mixu.</p>
      </div>
      <div class="sourceSummary productComment">
        <h3>Meziměsíční pohyb</h3>
        <p>Červenec roste hlavně přes lepší práci v košíkové části: přidání do košíku je o 17,61 % výš, zatímco tržba roste mírněji. To je dobrý signál zájmu, ale zároveň připomínka, že ne každý košík se dotáhne do objednávky.</p>
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
      <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}Blog · červenec vs. červen</span>
      <div class="metricGrid ga4Top dashboardMetricGrid">
        <div class="metricTile"><span>Zobrazení</span><strong>26 511</strong><small>vs. 26 277</small><div class="delta up">+0,89 %</div></div>
        <div class="metricTile"><span>Aktivní uživatelé</span><strong>18 333</strong><small>vs. 18 146</small><div class="delta up">+1,03 %</div></div>
        <div class="metricTile"><span>Doba zapojení</span><strong>2:05</strong><small>vs. 2:06</small><div class="delta down">-0,43 %</div></div>
      </div>
      <div class="dashboardTable">
        <table class="dashTable productReportTable blogReportTable">
          <thead><tr><th>Článek</th><th>Zobrazení</th><th>Aktivní uživatelé</th></tr></thead>
          <tbody>${blogRows.map(renderBlogRow).join("")}</tbody>
        </table>
      </div>
      <div class="sourceSummary compactSummary">
        <h3>Blogový komentář</h3>
        <p>Blog jako celek v červenci lehce roste v návštěvnosti, ale výkon táhne hlavně nový sezonní hit o ovším bodnutí. Ostatní top články spíš klesají, takže obsahově nejde o plošné zlepšení, ale o jasný důkaz, že praktická letní témata umí rychle získat pozornost.</p>
      </div>
    </div>

    <div class="panel glass">
      <span class="pill systemPill">${SystemLogo({ system: "googleAnalytics", label: "Google Analytics / GA4", className: "channelLogo" })}Zařízení · červenec YoY</span>
      <div class="metricGrid ga4Top dashboardMetricGrid">
        <div class="metricTile"><span>Aktivní uživatelé</span><strong>57 826</strong><small>vs. 62 294</small><div class="delta down">-7,17 %</div></div>
        <div class="metricTile"><span>Objednávky</span><strong>3 341</strong><small>vs. 4 366</small><div class="delta down">-23,48 %</div></div>
        <div class="metricTile"><span>Celkové tržby</span><strong>3 406 834 Kč</strong><small>vs. 4 425 821 Kč</small><div class="delta down">-23,02 %</div></div>
      </div>
      <div class="deviceMixGrid">${devices.map(renderDeviceCard).join("")}</div>
      <div class="sourceSummary compactSummary">
        <h3>Mobile drží objem, desktop hodnotu</h3>
        <p>V červenci je YoY pohled slabší napříč zařízeními. Mobile pořád drží největší objem, desktop nejvyšší tržby, ale obě hlavní zařízení ztrácí v objednávkách. Není to jen návštěvnostní problém; část výkonu mizí v konverzní kvalitě a hodnotě dokončených objednávek.</p>
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
        <p>Web je v behaviorálních signálech stabilnější než v předchozích měsících. Rage clicks i dead clicks zůstávají nízko, zatímco quick backs jsou pořád hlavní metrika k pravidelnému sledování.</p>
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

    <div class="behaviorBlock behaviorTrendsBlock">
      <div class="behaviorBlockHead">
        <h3>5. Behavior Trends</h3>
        <p>Trendová vrstva je připravená na další měsíce. Jakmile přibude další období, stačí doplnit dataset a mini grafy se automaticky rozšíří.</p>
      </div>
      <div class="behaviorTrendGrid">
        ${behaviorTrendSeries.map(renderBehaviorTrend).join("")}
      </div>
    </div>

  </div>
</section>`;
