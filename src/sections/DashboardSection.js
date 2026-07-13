import { dashboardSectionHtml } from "../data/dashboard.js";
import { reportMeta } from "../data/report-meta.js";
import { ChapterCard, getSectionBody } from "../components/ChapterCard.js";

export function DashboardSection() {
  return ChapterCard({
    chapter: reportMeta.chapters.find((chapter) => chapter.id === "dashboard"),
    contentHtml: getSectionBody(dashboardSectionHtml)
  });
}
