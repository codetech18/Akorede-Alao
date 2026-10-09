import type { MetadataRoute } from "next";
import { flagships, notes } from "@/lib/data";
import { siteOrigin } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteOrigin) return [];
  const paths = [
    "/",
    "/about",
    ...flagships.filter((project) => project.longform?.length).map((project) => `/work/${project.slug}`),
    ...notes.map((note) => `/notes/${note.slug}`),
  ];
  return paths.map((path) => ({ url: new URL(path, siteOrigin).href }));
}
