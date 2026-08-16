"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";

import { ThemeSwitch } from "./ThemeSwitch";

const navigationLinks = [
  { href: "/#projects", label: "Proyectos" },
  { href: "/about-us", label: "Sobre nosotros" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacto" },
] as const;

type StackedNavLabelProps = {
  label: string;
};

function StackedNavLabel({ label }: StackedNavLabelProps) {
  return (
    <span className="relative block h-4 overflow-hidden">
      <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-4 group-focus-visible:-translate-y-4">
        <span className="h-4 leading-4 text-shinta-canvas">{label}</span>
        <span aria-hidden="true" className="h-4 leading-4 text-shinta-pink">
          {label}
        </span>
      </span>
    </span>
  );
}

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

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
      <div className="relative flex h-14 w-full max-w-[1280px] items-center justify-between rounded-full bg-shinta-ink px-[14px] shadow-[0_1px_0_rgba(255,255,255,0.08)]">
        <Link
          aria-label="Inicio de Shinta"
          className="rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-pink"
          href="/"
          onClick={() => setIsMenuOpen(false)}
        >
          <Image
            alt="Shinta"
            className="h-10 w-auto max-w-[52px] object-contain"
            height={417}
            priority
            src="/brand/logo-dark.png"
            unoptimized
            width={621}
          />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-[43px] md:flex">
          {navigationLinks.map((link) => (
            <Link
              className="group rounded-sm text-[16px] font-semibold tracking-[-0.64px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-pink"
              href={link.href}
              key={link.href}
            >
              <StackedNavLabel label={link.label} />
            </Link>
          ))}
        </div>

        <div className="absolute right-[14px] flex w-[84px] shrink-0 items-center justify-end gap-2 sm:static sm:w-auto">
          <ThemeSwitch />

          <Link
            className="group hidden h-10 items-center rounded-full bg-totem-action px-5 text-[16px] font-semibold leading-4 tracking-[-0.64px] text-totem-action-text transition-colors duration-300 hover:bg-totem-tech focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-totem-focus md:flex"
            href="https://cal.com/"
          >
            Agenda una llamada
          </Link>

          <button
            aria-controls="shinta-mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            className="grid size-10 place-items-center rounded-full bg-shinta-canvas text-shinta-ink transition-colors hover:bg-shinta-pink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-pink md:hidden"
            onClick={() => setIsMenuOpen((current) => !current)}
            type="button"
          >
            {isMenuOpen ? (
              <X aria-hidden="true" className="size-5" strokeWidth={2.2} />
            ) : (
              <Menu aria-hidden="true" className="size-5" strokeWidth={2.2} />
            )}
          </button>
        </div>

        <div
          className={cn(
            "absolute inset-x-0 top-[64px] overflow-hidden rounded-[24px] bg-shinta-ink px-5 text-shinta-canvas shadow-xl transition-[opacity,transform,visibility] duration-300 md:hidden",
            isMenuOpen
              ? "visible translate-y-0 py-4 opacity-100"
              : "invisible -translate-y-2 py-0 opacity-0",
          )}
          id="shinta-mobile-navigation"
        >
          <div className="flex flex-col">
            {navigationLinks.map((link) => (
              <Link
                className="border-b border-white/15 py-3 text-[16px] font-semibold tracking-[-0.64px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-pink"
                href={link.href}
                key={link.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="mt-4 flex h-11 items-center justify-center rounded-full bg-totem-action text-[16px] font-semibold tracking-[-0.64px] text-totem-action-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-totem-focus"
              href="https://cal.com/"
              onClick={() => setIsMenuOpen(false)}
            >
              Agenda una llamada
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
