"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";

import { cn } from "@/lib/utils";

import { LiquidMorphButton } from "./LiquidMorphButton";
import { ThemeSwitch } from "./ThemeSwitch";

const navigationLinks = [
  { href: "/#projects", label: "Proyectos" },
  { href: "/about-us", label: "Tótem" },
  { href: "/blog", label: "Capacidades" },
  { href: "/contact", label: "Contacto" },
] as const;

type NavLinkProps = {
  href: string;
  label: string;
};

// Mirrors shinta.framer.media: a blurred pill scales in from scale(0.3)
// rotate(-35deg) while the resting label drops away and a second copy rises
// into place from rotate(-15deg) scale(0.9).
//
// Driven by React state and inline styles rather than Tailwind classes or
// Framer variants: the colours resolve from CSS variables that exist in every
// build, and plain CSS transitions do not depend on the animation frame loop.
const NAV_EASE = "cubic-bezier(0.23, 1, 0.32, 1)";

function NavLink({ href, label }: NavLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isActive, setIsActive] = useState(false);
  const duration = shouldReduceMotion ? "0ms" : "320ms";

  return (
    <span
      className="relative inline-flex"
      onBlur={() => setIsActive(false)}
      onFocus={() => setIsActive(true)}
      onPointerEnter={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-x-1 inset-y-0 rounded-full"
        style={{
          backgroundColor: "var(--totem-off-white)",
          filter: isActive ? "blur(0px)" : "blur(5px)",
          opacity: isActive ? 1 : 0,
          transform: isActive
            ? "scale(1) rotate(0deg)"
            : "scale(0.3) rotate(-35deg)",
          transition: `opacity ${duration} ${NAV_EASE}, transform ${duration} ${NAV_EASE}, filter ${duration} ${NAV_EASE}`,
        }}
      />
      <Link
        className="relative rounded-full px-2 py-1 text-[16px] font-semibold tracking-[-0.64px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-totem-focus"
        href={href}
      >
        <span className="relative block">
          <span
            className="block"
            style={{
              color: "var(--totem-text-on-dark)",
              opacity: isActive ? 0 : 1,
              transform: isActive
                ? "translateY(14px) rotate(12deg) scale(0.9)"
                : "translateY(0px) rotate(0deg) scale(1)",
              transition: `opacity ${duration} ${NAV_EASE}, transform ${duration} ${NAV_EASE}`,
            }}
          >
            {label}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 block"
            style={{
              color: "var(--totem-navy)",
              opacity: isActive ? 1 : 0,
              transform: isActive
                ? "translateY(0px) rotate(0deg) scale(1)"
                : "translateY(14px) rotate(-15deg) scale(0.9)",
              transition: `opacity ${duration} ${NAV_EASE}, transform ${duration} ${NAV_EASE}`,
            }}
          >
            {label}
          </span>
        </span>
      </Link>
    </span>
  );
}

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const closeMenuOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeMenuOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeMenuOnDesktop);
  }, []);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    let frame = 0;

    const handleScroll = () => {
      if (frame !== 0) return;

      frame = window.requestAnimationFrame(() => {
        const currentScrollY = Math.max(window.scrollY, 0);
        const scrollDelta = currentScrollY - lastScrollY.current;

        if (currentScrollY <= 24) {
          setIsVisible(true);
        } else if (scrollDelta > 5) {
          setIsVisible(false);
          setIsMenuOpen(false);
        } else if (scrollDelta < -5) {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        frame = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <nav
      aria-label="Navegación principal"
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex h-[76px] justify-center px-[15px] py-[10px] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-md:h-[72px] max-md:px-[10px] max-md:py-2",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <motion.div
        animate={isMenuOpen ? "open" : "closed"}
        className="relative flex w-full max-w-[1280px] flex-col gap-2 overflow-hidden rounded-[32px] bg-shinta-ink px-2 shadow-[0_1px_0_rgba(255,255,255,0.08)] md:h-14 md:flex-row md:items-center md:justify-between md:overflow-visible md:px-[14px] md:py-0"
        initial={false}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { type: "spring", duration: 0.48, bounce: 0.08 }
        }
        variants={{
          closed: { height: 56, paddingTop: 8, paddingBottom: 8 },
          open: { height: 388, paddingTop: 16, paddingBottom: 8 },
        }}
      >
        <div className="relative z-10 flex h-10 shrink-0 items-center justify-between px-2 md:contents">
          <Link
      aria-label="Inicio de Tótem Mass Media"
            className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-pink"
            href="/"
            onClick={() => setIsMenuOpen(false)}
          >
            <Image
              alt="Tótem Mass Media"
              className="h-10 w-auto max-w-[116px] object-contain md:max-w-[52px]"
              height={417}
              priority
              src="/brand/logo-dark.png"
              unoptimized
              width={621}
            />
          </Link>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[43px] md:flex">
            {navigationLinks.map((link) => (
              <NavLink href={link.href} key={link.href} label={link.label} />
            ))}
          </div>

          <div className="flex shrink-0 items-center justify-end gap-2 md:static md:w-auto">
            <span className="hidden md:block">
              <ThemeSwitch />
            </span>

            <LiquidMorphButton
              className="hidden h-10 px-5 text-[16px] font-semibold leading-4 tracking-[-0.64px] whitespace-nowrap md:inline-flex"
              href="/contact"
              label="Cuéntanos tu proyecto"
            />

            <button
              aria-controls="shinta-mobile-navigation"
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
              className="relative grid size-10 place-items-center rounded-full bg-shinta-pink text-shinta-ink transition-transform duration-150 active:scale-[0.96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-pink md:hidden"
              onClick={() => setIsMenuOpen((current) => !current)}
              type="button"
            >
              <span className="sr-only">{isMenuOpen ? "Cerrar" : "Abrir"}</span>
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-0.5 w-4 rounded-full bg-current transition-[transform,top] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                  isMenuOpen ? "top-[19px] rotate-45" : "top-[13px] rotate-0",
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-[19px] h-0.5 w-4 rounded-full bg-current transition-opacity duration-200",
                  isMenuOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                aria-hidden="true"
                className={cn(
                  "absolute h-0.5 w-4 rounded-full bg-current transition-[transform,top] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]",
                  isMenuOpen ? "top-[19px] -rotate-45" : "top-[25px] rotate-0",
                )}
              />
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMenuOpen && (
            <motion.div
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              className="flex min-h-0 flex-1 flex-col gap-2 md:hidden"
              exit={{ opacity: 0, transform: "translateY(-6px)" }}
              id="shinta-mobile-navigation"
              initial={{ opacity: 0, transform: "translateY(-8px)" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 0.2, ease: [0.23, 1, 0.32, 1] }
              }
            >
              <div className="flex flex-1 flex-col justify-between rounded-[24px] bg-shinta-canvas px-6 py-8 text-shinta-ink">
                {navigationLinks.map((link) => (
                  <Link
                    className="overflow-hidden rounded-sm text-[24px] font-semibold leading-[1.2] tracking-[-0.72px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-pink"
                    href={link.href}
                    key={link.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <Link
                className="group flex h-[57px] shrink-0 items-center gap-0 rounded-full text-[18px] font-semibold tracking-[-0.54px] text-shinta-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-pink"
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="flex h-full min-w-0 flex-1 items-center rounded-full bg-shinta-canvas px-6">
                  Cuéntanos tu proyecto
                </span>
                <span className="grid size-[57px] shrink-0 place-items-center rounded-full bg-shinta-pink transition-transform duration-200 group-active:scale-[0.96]">
                  <ArrowUpRight
                    aria-hidden="true"
                    className="size-6"
                    strokeWidth={1.8}
                  />
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
}
