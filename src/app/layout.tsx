import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";

import { JsonLd } from "@/components/seo/JsonLd";
import { SmoothScroll } from "@/components/sites/shinta-framer-media-3240cba4/shared/SmoothScroll";
import {
  absoluteUrl,
  OG_IMAGE,
  SITE_LOCALE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_PROFILES,
} from "@/lib/seo";

const themeInitializationScript = `
  (() => {
    try {
      const savedTheme = localStorage.getItem("totem-theme");
      const theme = savedTheme === "dark" || savedTheme === "light"
        ? savedTheme
        : "light";
      document.documentElement.classList.toggle("dark", theme === "dark");
      document.documentElement.style.colorScheme = theme;
    } catch {
      document.documentElement.style.colorScheme = "light";
    }
  })();
`;

const title = "Tótem Mass Media — Producción audiovisual, marketing y web";
const description =
  "Tótem Mass Media es una agencia creativa y digital de Loja, Ecuador. Producción audiovisual, marketing digital, estrategia de contenido y diseño y desarrollo web.";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  description,
  icons: {
    apple: "/brand/favicon.png",
    icon: "/brand/favicon.png",
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    description,
    images: [OG_IMAGE],
    locale: SITE_LOCALE,
    siteName: SITE_NAME,
    title,
    type: "website",
    url: "/",
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    index: true,
  },
  title: {
    default: title,
    template: `%s — ${SITE_NAME}`,
  },
  twitter: {
    card: "summary_large_image",
    description,
    images: [OG_IMAGE.url],
    title,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@id": `${SITE_URL}/#organization`,
  "@type": "Organization",
  description,
  logo: absoluteUrl("/brand/logo-light.png"),
  name: SITE_NAME,
  sameAs: [...SOCIAL_PROFILES],
  url: SITE_URL,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@id": `${SITE_URL}/#website`,
  "@type": "WebSite",
  inLanguage: "es",
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitializationScript }} />
        <JsonLd data={[organizationSchema, websiteSchema]} />
      </head>
      <body className="flex min-h-full flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
