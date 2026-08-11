const projects = [
  {
    icon: "☀️",
    title: "Spustili jsme letní brandové kampaně Kamzík a RED3",
    text: "V červenci jsme rozšířili podporu značek Kamzík a RED3 o letní brandovou komunikaci."
  },
  {
    icon: "🌿",
    title: "Brandová kampaň Merilin pokračuje přes léto",
    text: "Po společné dohodě pokračuje brandová podpora Merilinu také v letním období."
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
      <p>Stručný přehled aktuálních projektových témat pro červenec a navazující období.</p>
    </div>
  </div>
  <div class="projectCards">${projects.map(renderProject).join("")}</div>
  <div class="callout projectFocusCallout">
    <b>📌 Projektový fokus</b>
    <p>Letní období staví víc prostoru na brandové komunikaci. U dalších kroků je hlavní hlídat, aby podpora značek držela konzistentní zásah a zároveň dávala smysl vedle výkonnostních kampaní.</p>
  </div>
</section>`;
