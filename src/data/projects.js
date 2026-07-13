const projects = [
  {
    icon: "📅",
    title: "Domluvit termín vyhodnocení Lead kampaně",
    text: "Krátké společné vyhodnocení výsledků, ceny za výsledek a dalšího postupu."
  },
  {
    icon: "🔁",
    title: "Výkop retenční strategie",
    text: "Nastavit směr pro opakované nákupy, CRM komunikaci a práci se zákaznickou bází."
  },
  {
    icon: "🔎",
    title: "Seznam PMAX okénko",
    text: "Projít prostor pro další práci s PMAX kampaněmi v Seznamu a navazující optimalizaci."
  },
  {
    icon: "🤖",
    title: "Karsa w/MJ",
    text: "Navázat na projektový směr ve spolupráci s MJ a propsat poznatky do další optimalizace."
  },
  {
    icon: "✉️",
    title: "Emaily",
    text: "Samostatný CRM a e-mailový směr pro rozvoj komunikace a opakovaných nákupů."
  },
  {
    icon: "🚚",
    title: "Doprava zdarma w/MJ",
    text: "Vyhodnotit roli dopravy zdarma a její dopad na objednávky, marži a promo plán."
  },
  {
    icon: "🎯",
    title: "MMV brand kampaň",
    text: "Dotáhnout vyhodnocení a převést poznatky do další práce s brandovou podporou."
  },
  {
    icon: "✈️",
    title: "Meta produktové kampaně",
    text: "Pokračovat v ladění podle PNO, počtu nákupů a prostoru pro bezpečné škálování."
  },
  {
    icon: "🌦️",
    title: "Betakaroten",
    text: "Držet rozpočty pružně podle sezónnosti, počasí a aktuální poptávky."
  }
];

const renderProject = (project) => `
  <div class="project">
    <div class="icon">${project.icon}</div>
    <h3>${project.title}</h3>
    <p>${project.text}</p>
  </div>`;

export const projectsSectionHtml = `<section class="chapter" id="projekty">
  <div class="chapterHead glass">
    <div class="chapterTitle">
      <div class="chapterNo">05 · Projekty</div>
      <h2>🧩 Projekty · další kroky</h2>
      <p>Stručný přehled priorit, návazných kroků a projektových témat pro další období.</p>
    </div>
  </div>
  <div class="projectCards">${projects.map(renderProject).join("")}</div>
  <div class="callout" style="margin-top:14px">
    <b>📌 Projektový fokus</b>
    <p>Prioritou je spojit vyhodnocení výkonu s dalšími kroky: lead kampaň, retence, Seznam PMAX a pokračující práce s kampaněmi.</p>
  </div>
</section>`;
