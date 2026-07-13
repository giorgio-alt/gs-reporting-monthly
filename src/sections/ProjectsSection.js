import { projectsSectionHtml } from "../data/projects.js";
import { reportMeta } from "../data/report-meta.js";
import { ChapterCard, getSectionBody } from "../components/ChapterCard.js";

export function ProjectsSection() {
  return ChapterCard({
    chapter: reportMeta.chapters.find((chapter) => chapter.id === "projekty"),
    contentHtml: getSectionBody(projectsSectionHtml)
  });
}
