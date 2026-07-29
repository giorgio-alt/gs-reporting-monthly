import "./styles/variables.css";
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/tables.css";
import "./styles/lightbox.css";

import { renderApp } from "./components/App.js";
import { initChapterCards } from "./components/ChapterCard.js";
import { initNavigation } from "./components/Navigation.js";
import { initLightbox } from "./components/Lightbox.js";
import { initYoYTables } from "./components/DataTable.js";
import { initFunnelTrendToggles } from "./components/FunnelTrend.js";
import { initDetailsEnhancements } from "./components/DetailsEnhancements.js";
import { initSklikCharts } from "./components/SklikCharts.js";

const root = document.querySelector("#app");

root.innerHTML = renderApp();
initChapterCards();
initNavigation();
initYoYTables();
initLightbox();
initFunnelTrendToggles();
initDetailsEnhancements();
initSklikCharts();
