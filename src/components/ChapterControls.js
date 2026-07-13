export function ChapterControls() {
  return `
    <div class="chapterControls glass" aria-label="Ovládání kapitol">
      <span>Zobrazení reportu</span>
      <div>
        <button type="button" data-chapter-action="expand">Rozbalit vše</button>
        <button type="button" data-chapter-action="collapse">Sbalit vše</button>
      </div>
    </div>
  `;
}
