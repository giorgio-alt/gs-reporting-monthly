import { reportMeta } from "../data/report-meta.js";
import { Header } from "./Header.js";
import { Navigation } from "./Navigation.js";
import { ChapterControls } from "./ChapterControls.js";
import { Lightbox } from "./Lightbox.js";
import { HeroSection } from "../sections/HeroSection.js";
import { DashboardSection } from "../sections/DashboardSection.js";
import { ProductsSection } from "../sections/ProductsSection.js";
import { PpcSection } from "../sections/PpcSection.js";
import { MetaSection } from "../sections/MetaSection.js";
import { ProjectsSection } from "../sections/ProjectsSection.js";

export function renderApp() {
  return `
    <div class="container">
      ${Header(reportMeta)}
      ${Navigation(reportMeta.navigation)}
      ${ChapterControls()}
      ${HeroSection()}
      ${DashboardSection()}
      ${ProductsSection()}
      ${PpcSection()}
      ${MetaSection()}
      ${ProjectsSection()}
      ${Footer(reportMeta)}
    </div>
    ${Lightbox()}
  `;
}

function Footer(meta) {
  return `
    <footer class="footer glass">
      <div class="footerText">${meta.footer}</div>
      <img class="footerAgencyLogo" src="${meta.agencyLogo}" alt="deserved" loading="eager" decoding="async">
    </footer>
  `;
}
