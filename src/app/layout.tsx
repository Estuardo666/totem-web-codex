import type { Metadata } from "next";
import "lenis/dist/lenis.css";
import "./globals.css";

import { SmoothScroll } from "@/components/sites/shinta-framer-media-3240cba4/shared/SmoothScroll";

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

export const metadata: Metadata = {
  title: "Tótem Mass Media — Producción audiovisual, marketing y web",
  description:
    "Tótem Mass Media es una agencia creativa y digital de Loja, Ecuador. Producción audiovisual, marketing digital, estrategia de contenido y diseño y desarrollo web.",
  icons: {
    icon: "/brand/favicon.png",
    apple: "/brand/favicon.png",
  },
  openGraph: {
    images: [
      "/sites/shinta-framer-media-3240cba4/root-8a5edab2/seo/opengraph.jpg",
    ],
  },
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
      </head>
      <body className="flex min-h-full flex-col">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
