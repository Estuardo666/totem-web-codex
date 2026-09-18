"use client";

import { useEffect } from "react";

const MEASUREMENT_ID = "G-VJMJC4F76Q";
const SCRIPT_SRC = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export function GoogleAnalytics() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      ((...args: unknown[]) => {
        window.dataLayer.push(args);
      });

    window.gtag("js", new Date());
    window.gtag("config", MEASUREMENT_ID);

    if (!document.querySelector(`script[src="${SCRIPT_SRC}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = SCRIPT_SRC;
      document.head.appendChild(script);
    }
  }, []);

  return null;
}
