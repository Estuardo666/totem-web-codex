import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shinta - Social Media Marketing Agency",
  description:
    "Shinta is a social media marketing agency template built to showcase your work, attract clients and support long term brand growth.",
  icons: {
    apple:
      "/sites/shinta-framer-media-3240cba4/root-8a5edab2/seo/apple-touch-icon.png",
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
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
