import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { devices } from "@/lib/data/devices";
import { services } from "@/lib/data/services";
import { blogPosts } from "@/lib/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/our-app",
    "/devices",
    "/services",
    "/about",
    "/contact",
    "/pricing",
    "/demo",
    "/blog",
    "/privacy",
    "/terms",
  ];

  const now = new Date();

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteConfig.url}${route}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...devices.map((d) => ({
      url: `${siteConfig.url}/devices/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...services.map((s) => ({
      url: `${siteConfig.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...blogPosts.map((p) => ({
      url: `${siteConfig.url}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
