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
  <div class="callout projectFocusCallout">
    <b>📌 Projektový fokus</b>
    <p>Prioritou je navázat na červnový výkon třemi jasnými kroky: vyhodnotit Lead kampaň, odstartovat retenci a projít prostor v Seznam PMAX.</p>
  </div>
</section>`;
