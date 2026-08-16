"use client";

import { Moon, Sun } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const THEME_STORAGE_KEY = "totem-theme";
const THEME_CHANGE_EVENT = "totem-theme-change";

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

export function ThemeSwitch() {
  const reduceMotion = useReducedMotion();
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const isDark = theme === "dark";

  const toggleTheme = () => {
    const nextTheme = isDark ? "light" : "dark";
    applyTheme(nextTheme);
  };

  return (
    <motion.button
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      aria-pressed={isDark}
      className="relative grid size-9 shrink-0 grid-cols-1 items-center rounded-full border border-white/15 bg-totem-night-alt p-1 text-totem-text-on-dark shadow-[0_3px_12px_rgb(3_33_67_/_0.24)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-totem-focus sm:h-9 sm:w-[68px] sm:grid-cols-2"
      onClick={toggleTheme}
      transition={{ duration: 0.14, ease: [0.23, 1, 0.32, 1] }}
      type="button"
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
    >
      <motion.span
        aria-hidden="true"
        animate={{ transform: isDark ? "translateX(var(--theme-switch-travel))" : "translateX(0px)" }}
        className="absolute top-[3px] left-[3px] size-7 rounded-full bg-totem-action shadow-[0_3px_10px_rgb(3_33_67_/_0.24)] [--theme-switch-travel:0px] sm:[--theme-switch-travel:32px]"
        initial={false}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { bounce: 0.08, duration: 0.32, type: "spring" }
        }
      />

      <Sun
        aria-hidden="true"
        className={isDark ? "relative z-10 hidden size-4 text-totem-text-on-dark-secondary sm:block" : "relative z-10 size-4 text-totem-action-text"}
        strokeWidth={2}
      />
      <Moon
        aria-hidden="true"
        className={isDark ? "relative z-10 size-4 text-totem-action-text" : "relative z-10 hidden size-4 text-totem-text-on-dark-secondary sm:block"}
        strokeWidth={2}
      />
    </motion.button>
  );
}
