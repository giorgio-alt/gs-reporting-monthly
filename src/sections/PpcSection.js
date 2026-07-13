import { ppcSectionHtml } from "../data/ppc.js";
import { reportMeta } from "../data/report-meta.js";
import { ChapterCard, getSectionBody } from "../components/ChapterCard.js";

export function PpcSection() {
  return ChapterCard({
    chapter: reportMeta.chapters.find((chapter) => chapter.id === "ppc"),
    contentHtml: getSectionBody(ppcSectionHtml)
  });
}
