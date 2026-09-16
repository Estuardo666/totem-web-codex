import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/seo";

const ARTICLE_LAST_MODIFIED = new Date("2026-08-17T02:55:48-05:00");

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "monthly",
      lastModified: ARTICLE_LAST_MODIFIED,
      priority: 1,
      url: absoluteUrl("/"),
    },
    {
      changeFrequency: "monthly",
      lastModified: ARTICLE_LAST_MODIFIED,
      priority: 0.8,
      url: absoluteUrl("/about-us"),
    },
    {
      changeFrequency: "monthly",
      lastModified: ARTICLE_LAST_MODIFIED,
      priority: 0.8,
      url: absoluteUrl("/blog"),
    },
    {
      changeFrequency: "yearly",
      lastModified: ARTICLE_LAST_MODIFIED,
      priority: 0.6,
      url: absoluteUrl(
        "/blog/turning-social-media-ideas-into-clear-content-plans",
      ),
    },
    {
      changeFrequency: "yearly",
      lastModified: ARTICLE_LAST_MODIFIED,
      priority: 0.7,
      url: absoluteUrl("/contact"),
    },
  ];
}
