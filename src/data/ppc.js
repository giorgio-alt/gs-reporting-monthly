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
    full: "assets/report-jun-26/ppc/extracted/slide-39-asset-01.webp",
    thumb: "assets/report-jun-26/ppc/extracted/slide-39-asset-01-thumb.webp"
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
  { metric: "Prokliky", current: "22 873", previous: "13 874", change: "+65 %" },
  { metric: "Zobrazení", current: "5 606 961", previous: "4 081 763", change: "+37 %" },
  { metric: "CPC", current: "8,22 Kč", previous: "9,22 Kč", change: "-11 %" },
  { metric: "Cena", current: "188 127 Kč", previous: "127 956 Kč", change: "+47 %" }
];

const karsaClusterRows = [
  { cluster: "Cluster 0", products: "45", roas: "2,04", value: "15 317 / 7 492", campaign: "PMAX | cluster 0" },
  { cluster: "Cluster 1", products: "136", roas: "1,94", value: "40 431 / 20 799", campaign: "PMAX | cluster 1" },
  { cluster: "Cluster 2", products: "41", roas: "1,63", value: "121 478 / 74 330", campaign: "PMAX | cluster 2" },
  { cluster: "Cluster 3", products: "25", roas: "2,43", value: "237 749 / 97 954", campaign: "PMAX | cluster 3" }
];

const karsaSupportAssets = [
  {
    label: "Sklik detail výsledků",
    full: "assets/report-jun-26/ppc/extracted/slide-39-asset-01.webp",
    thumb: "assets/report-jun-26/ppc/extracted/slide-39-asset-01-thumb.webp"
  },
  {
    label: "Meta výkon kampaně",
    full: "assets/report-jun-26/meta/extracted/slide-50-asset-01.webp",
    thumb: "assets/report-jun-26/meta/extracted/slide-50-asset-01-thumb.webp"
  },
  {
    label: "Meta detail kreativy",
    full: "assets/report-jun-26/meta/extracted/slide-50-asset-02.webp",
    thumb: "assets/report-jun-26/meta/extracted/slide-50-asset-02-thumb.webp"
  }
];

const googleAdsComment = "Vyšší spend v Google Ads je tažený hlavně větší investicí do PMax kampaní. Ty se teď víc řídí přes produktové clustery, takže dává smysl sledovat výkon po skupinách produktů, ne jen v jednom souhrnném čísle za celou kampaň.";
const karsaComment = "Clusterový pohled pomáhá rozpadnout PMax výkon podle produktových skupin a lépe vidět, kde vzniká objem a kde efektivita. V rámci PTC manageru zatím zůstává doporučení držet původní tROAS. Dává to smysl, protože po úvodní učící fázi byl výkon ještě poměrně nekonzistentní, takže teď je lepší nejdřív stabilizovat výsledky a až poté řešit výraznější změny cílové návratnosti.";
const sklikComment = "Sklik se v červnu opírá hlavně o PMax logiku a produktově řízený výkon. Důležité je sledovat nejen celkový spend, ale i to, jak se výkon rozpadá podle produktových skupin a kde vzniká prostor pro další škálování nebo naopak korekci.";

const changeClass = (value) => value.trim().startsWith("+") ? "good" : value.trim().startsWith("-") ? "bad" : "neutral";
const chip = (value) => `<span class="labelChange ${changeClass(value)}">${value}</span>`;

const renderShot = (item, label = item.label) => `
  <a class="visualItem ppcAssetShot" href="${item.full}">
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

const renderSklikRow = (row) => `
  <tr>
    <td>${row.metric}</td>
    <td>${row.current}</td>
    <td>${row.previous}</td>
    <td class="deltaCell">${chip(row.change)}</td>
  </tr>`;

const renderKarsaRow = (row) => `
  <tr>
    <td>${row.cluster}</td>
    <td>${row.products}</td>
    <td>${row.roas}</td>
    <td>${row.value}</td>
    <td>${row.campaign}</td>
  </tr>`;

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
    <div class="karsaSupportGallery">
      <div>
        <h3>Navazující kanálové náhledy</h3>
        <p class="sectionLead">Doplňkové screenshoty drží kontext výkonu napříč Sklikem a Meta kampaněmi. Slouží jako rychlé rozklikávací náhledy vedle Karsa AI produktového pohledu.</p>
      </div>
      <div class="ppcAssetGrid karsaChannelGrid">
        ${karsaSupportAssets.map(renderShot).join("")}
      </div>
    </div>
  </div>

  <div class="panel glass ppcSection" id="sklik-results">
    <span class="pill orange systemPill">${SystemLogo({ system: "seznamSklik", label: "Seznam / Sklik", className: "channelLogo" })}Sklik výsledky</span>
    <div class="contentGrid wideLeft">
      <div>
        <h2>Sklik v červnu navýšil objem a snížil CPC.</h2>
        <p class="sectionLead">Sklik přinesl meziročně i meziměsíčně silnější objem prokliků a zobrazení. CPC klesá na 8,22 Kč, takže nárůst čerpání je spojený hlavně s vyšším rozsahem kampaní, ne s dražším klikem.</p>
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
  </div>
</section>`;
