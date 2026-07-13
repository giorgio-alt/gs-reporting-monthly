import { metaSectionHtml } from "../data/meta.js";
import { reportMeta } from "../data/report-meta.js";
import { ChapterCard, getSectionBody } from "../components/ChapterCard.js";

export function MetaSection() {
  return ChapterCard({
    chapter: reportMeta.chapters.find((chapter) => chapter.id === "meta"),
    contentHtml: getSectionBody(metaSectionHtml)
  });
}
