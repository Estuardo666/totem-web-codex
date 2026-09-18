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
    {
      changeFrequency: "monthly",
      lastModified: ARTICLE_LAST_MODIFIED,
      priority: 0.9,
      url: absoluteUrl("/produccion-audiovisual-loja"),
    },
    {
      changeFrequency: "monthly",
      lastModified: ARTICLE_LAST_MODIFIED,
      priority: 0.9,
      url: absoluteUrl("/diseno-web-loja"),
    },
    {
      changeFrequency: "monthly",
      lastModified: ARTICLE_LAST_MODIFIED,
      priority: 0.9,
      url: absoluteUrl("/marketing-digital-zamora"),
    },
    {
      changeFrequency: "monthly",
      lastModified: ARTICLE_LAST_MODIFIED,
      priority: 0.9,
      url: absoluteUrl("/video-institucional-zamora"),
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date("2026-09-18T14:30:00-05:00"),
      priority: 0.8,
      url: absoluteUrl("/totemhub"),
    },
    {
      changeFrequency: "yearly",
      lastModified: new Date("2026-09-18T14:30:00-05:00"),
      priority: 0.5,
      url: absoluteUrl("/totemhub/privacidad"),
    },
  ];
}
