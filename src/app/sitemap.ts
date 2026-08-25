import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

const routes = ["", "/learn", "/support", "/schools", "/about", "/growth", "/get-involved"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));
}
