export function ChapterCard({ chapter, contentHtml }) {
  const open = chapter.defaultOpen ? "true" : "false";

  return `
    <section class="chapter chapterCard" id="${chapter.id}" data-open="${open}">
      <div class="chapterCardShell glass">
        <header class="chapterCardHeader">
          <div class="chapterCardMain">
            <div class="chapterCardNo">${chapter.number}</div>
            <div>
              <h2>${chapter.title}</h2>
              <p>${chapter.description}</p>
            </div>
          </div>
          <div class="chapterCardSide">
            <div class="chapterChips">
              ${chapter.chips.map((chip) => `<span>${chip}</span>`).join("")}
            </div>
            <button class="chapterToggle" type="button" aria-expanded="${open}" aria-controls="${chapter.id}-body">
              <span class="chapterToggleText">${chapter.defaultOpen ? "Collapse" : "Expand"}</span>
              <span class="chapterToggleIcon" aria-hidden="true"></span>
            </button>
          </div>
        </header>
        <div class="chapterCardBody" id="${chapter.id}-body">
          <div class="chapterCardContent">${contentHtml}</div>
        </div>
      </div>
    </section>
  `;
}

export function getSectionBody(sectionHtml) {
  const template = document.createElement("template");
  template.innerHTML = sectionHtml.trim();
  const section = template.content.querySelector(".chapter");
  if (!section) return sectionHtml;

  section.querySelector(".chapterHead")?.remove();
  return section.innerHTML.trim();
}

export function initChapterCards() {
  const cards = [...document.querySelectorAll(".chapterCard")];
  const expandAll = document.querySelector("[data-chapter-action='expand']");
  const collapseAll = document.querySelector("[data-chapter-action='collapse']");

  cards.forEach((card) => {
    const button = card.querySelector(".chapterToggle");
    const body = card.querySelector(".chapterCardBody");
    if (!button || !body) return;

    setChapterOpen(card, card.dataset.open === "true", false);
    button.addEventListener("click", () => {
      setChapterOpen(card, card.dataset.open !== "true", true);
    });
  });

  expandAll?.addEventListener("click", () => {
    cards.forEach((card) => setChapterOpen(card, true, true));
  });

  collapseAll?.addEventListener("click", () => {
    cards.forEach((card) => setChapterOpen(card, false, true));
  });
}

function setChapterOpen(card, isOpen, animate) {
  const body = card.querySelector(".chapterCardBody");
  const button = card.querySelector(".chapterToggle");
  const label = card.querySelector(".chapterToggleText");
  if (!body || !button || !label) return;

  card.dataset.open = String(isOpen);
  button.setAttribute("aria-expanded", String(isOpen));
  label.textContent = isOpen ? "Collapse" : "Expand";

  if (!animate) {
    body.style.transition = "none";
    body.style.maxHeight = isOpen ? "none" : "0px";
    body.style.opacity = isOpen ? "1" : "0";
    body.offsetHeight;
    body.style.transition = "";
    return;
  }

  if (isOpen) {
    body.style.maxHeight = `${body.scrollHeight}px`;
    body.style.opacity = "1";
    window.setTimeout(() => {
      if (card.dataset.open === "true") body.style.maxHeight = "none";
    }, 420);
    return;
  }

  body.style.maxHeight = `${body.scrollHeight}px`;
  body.offsetHeight;
  body.style.maxHeight = "0px";
  body.style.opacity = "0";
}
