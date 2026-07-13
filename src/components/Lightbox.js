export function Lightbox() {
  return `
    <div class="lightbox" id="imageLightbox" aria-hidden="true">
      <div class="lightboxInner">
        <button class="lightboxClose" type="button" aria-label="Zavřít náhled">×</button>
        <img alt="Zvětšený náhled kreativy" loading="lazy" decoding="async">
      </div>
    </div>
  `;
}

export function initLightbox() {
  const lightbox = document.getElementById("imageLightbox");
  const lightboxImg = lightbox?.querySelector("img");
  const lightboxClose = lightbox?.querySelector(".lightboxClose");
  const triggers = document.querySelectorAll("a.creativeThumb, a.visualItem");

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.removeAttribute("src");
  }

  triggers.forEach((trigger) => {
    trigger.removeAttribute("target");
    trigger.addEventListener("click", (event) => {
      const src = trigger.getAttribute("href") || trigger.querySelector("img")?.src;
      if (!src || !lightbox || !lightboxImg) return;

      event.preventDefault();
      lightboxImg.src = src;
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
    });
  });

  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeLightbox();
  });
}
