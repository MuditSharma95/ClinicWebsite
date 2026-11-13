import type { MetadataRoute } from "next";
import { treatments } from "@/lib/treatments";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = ["", "/about", "/treatments"];
  const pages = ["en", "hi"].flatMap((locale) =>
    basePages.map((path) => ({
      url: absoluteUrl(`/${locale}${path}`),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/treatments" ? 0.8 : 0.7,
    }))
  );
  const treatmentPages = ["en", "hi"].flatMap((locale) =>
    treatments.map((item) => ({
      url: absoluteUrl(`/${locale}/treatments/${item.slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))
  );
  return [...pages, ...treatmentPages];
}
