import type { Metadata } from "next";

export const SITE_URL = "https://totemmassmedia.com";

export const SITE_NAME = "Tótem Mass Media";

export const SITE_LOCALE = "es_EC";

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/totem.massmedia/",
  "https://www.facebook.com/totem.massmedia/",
] as const;

export const OG_IMAGE = {
  alt: "Tótem Mass Media — agencia creativa y digital",
  height: 630,
  url: "/sites/shinta-framer-media-3240cba4/root-8a5edab2/seo/opengraph.jpg",
  width: 1200,
} as const;

export const absoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

type PageMetadataInput = {
  description: string;
  path: string;
  title: string;
  type?: "article" | "website";
};

/**
 * Next.js replaces the whole `openGraph`/`twitter` object when a page declares
 * one, so every page has to restate the shared image, locale and card type.
 */
export const buildPageMetadata = ({
  description,
  path,
  title,
  type = "website",
}: PageMetadataInput): Metadata => ({
  alternates: {
    canonical: path,
  },
  description,
  openGraph: {
    description,
    images: [OG_IMAGE],
    locale: SITE_LOCALE,
    siteName: SITE_NAME,
    title,
    type,
    url: path,
  },
  title,
  twitter: {
    card: "summary_large_image",
    description,
    images: [OG_IMAGE.url],
    title,
  },
});

export const BUSINESS = {
  /** Loja, Ecuador. Used for the `geo` property no local competitor publishes. */
  geo: {
    latitude: -3.9809834653396536,
    longitude: -79.20593553292579,
  },
  addressLocality: "Loja",
  addressRegion: "Loja",
  addressCountry: "EC",
  streetAddress: "Jorge H. Rengel y Fco. Montero",
  telephone: "+593998813559",
  /** Displayed as typed by the business for local callers. */
  telephoneLocal: "0998813559",
  opens: "09:00",
  closes: "19:00",
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
} as const;
