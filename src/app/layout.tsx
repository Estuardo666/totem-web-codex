import type { Metadata } from "next";
import "./globals.css";

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
  title: "Tótem Mass Media — Estrategia, creatividad y tecnología",
  description:
    "Tótem Mass Media es una agencia creativa y tecnológica de Loja, Ecuador. Desarrollamos marcas, contenido, experiencias digitales, plataformas, software y automatizaciones.",
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
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
