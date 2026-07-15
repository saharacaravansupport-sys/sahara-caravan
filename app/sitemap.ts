import type { MetadataRoute } from "next";
import { desertExperiences, navItems, siteConfig } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const topLevelPages = navItems
    .filter((item) => !item.href.includes("#"))
    .map((item) => ({
      url: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: item.href === "/" ? 1 : 0.8
    }));

  const experiencePages = desertExperiences.map((experience) => ({
    url: `${siteConfig.url}/experiences/${experience.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...topLevelPages, ...experiencePages];
}
