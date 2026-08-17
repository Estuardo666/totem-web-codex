"use client";

import { useSyncExternalStore } from "react";

const THEME_STORAGE_KEY = "totem-theme";
const THEME_CHANGE_EVENT = "totem-theme-change";
const ANIMATION_DURATION = 300;

type Theme = "dark" | "light";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const isDark = theme === "dark";

  root.classList.toggle("dark", isDark);
  root.style.colorScheme = theme;
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
}

function getThemeSnapshot(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeToTheme(onStoreChange: () => void) {
  const handleStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) return;

    const theme = event.newValue === "dark" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.documentElement.style.colorScheme = theme;
    onStoreChange();
  };

  window.addEventListener(THEME_CHANGE_EVENT, onStoreChange);
  window.addEventListener("storage", handleStorage);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onStoreChange);
    window.removeEventListener("storage", handleStorage);
  };
}

const ICON_SIZE = 20;

/**
 * Port of the Framer "Light / Dark Theme Switch": a single round icon button
 * where the sun and moon swap with a scale + rise crossfade. Not a track switch.
 */
export function ThemeSwitch() {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const isDark = theme === "dark";
  const transition = `transform ${ANIMATION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity ${ANIMATION_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;

  return (
    <button
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      aria-pressed={isDark}
      className="relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-full text-totem-text-on-dark opacity-100 transition-[opacity,transform] duration-150 ease-out hover:opacity-80 active:scale-[0.94] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-totem-focus"
      onClick={() => applyTheme(isDark ? "light" : "dark")}
      type="button"
    >
      <svg
        aria-hidden="true"
        className="absolute"
        fill="none"
        height={ICON_SIZE}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark
            ? "scale(0.5) translateY(20px)"
            : "scale(1) translateY(0px)",
          transition,
        }}
        viewBox="0 0 24 24"
        width={ICON_SIZE}
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>

      <svg
        aria-hidden="true"
        className="absolute"
        fill="none"
        height={ICON_SIZE}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark
            ? "scale(1) translateY(0px)"
            : "scale(0.5) translateY(20px)",
          transition,
        }}
        viewBox="0 0 24 24"
        width={ICON_SIZE}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
