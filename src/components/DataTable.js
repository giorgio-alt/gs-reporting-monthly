export function initYoYTables() {
  document.querySelectorAll(".toggle25").forEach((button) => {
    button.addEventListener("click", () => {
      const table = document.getElementById(button.dataset.target);
      if (!table) return;

      table.classList.toggle("show25");
      button.classList.toggle("active");
      button.textContent = table.classList.contains("show25") ? "Skrýt srovnání" : "Zobrazit 2025";
    });
  });
}
