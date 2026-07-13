import { productsSectionHtml } from "../data/products.js";
import { reportMeta } from "../data/report-meta.js";
import { ChapterCard, getSectionBody } from "../components/ChapterCard.js";

export function ProductsSection() {
  return ChapterCard({
    chapter: reportMeta.chapters.find((chapter) => chapter.id === "produkty"),
    contentHtml: getSectionBody(productsSectionHtml)
  });
}
