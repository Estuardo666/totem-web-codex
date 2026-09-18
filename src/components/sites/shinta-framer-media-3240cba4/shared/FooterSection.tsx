"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { SectionEyebrow } from "@/components/sites/shinta-framer-media-3240cba4/shared/ShintaPrimitives";
import { CONTACT_EMAIL, mailtoUrl, whatsappUrl } from "@/lib/contact";
import { SERVICE_LANDINGS } from "@/lib/navigation";
import { SOCIAL_PROFILES } from "@/lib/seo";

const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/#blog", label: "Servicios" },
  { href: "/about-us", label: "Nosotros" },
  { href: "/#contact", label: "Contacto" },
] as const;

const approachLinks = [
  { href: "/about-us", label: "Cómo trabajamos" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/totemhub", label: "TotemHub" },
] as const;

type FooterPillLinkProps = {
  href: string;
  label: string;
};

function FooterPillLink({ href, label }: FooterPillLinkProps) {
  return (
    <Link
      className="group inline-flex w-fit rounded-full border border-shinta-ink px-3 text-[24px] leading-[30px] font-bold tracking-[-0.96px] text-shinta-ink transition-colors duration-300 ease-out hover:border-totem-brand hover:bg-totem-brand focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink lg:text-[32px] lg:leading-[38.4px] lg:tracking-[-1.28px]"
      href={href}
    >
      <span className="block h-[30px] overflow-hidden lg:h-[38.4px]">
        <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
          <span>{label}</span>
          <span aria-hidden="true" className="text-totem-action">
            {label}
          </span>
        </span>
      </span>
    </Link>
  );
}

type FooterGroupProps = {
  children: ReactNode;
  className?: string;
  label: string;
};

function FooterGroup({ children, className, label }: FooterGroupProps) {
  return (
    <div className={className}>
      <SectionEyebrow className="mb-3 text-shinta-ink/70">{label}</SectionEyebrow>
      {children}
    </div>
  );
}

export function FooterSection() {
  return (
    <footer className="relative min-h-[1180px] overflow-hidden bg-shinta-pink px-[19px] pt-16 text-shinta-ink md:min-h-[1210px] md:px-5 lg:min-h-[770px] lg:pt-20">
      <div className="relative z-10 mx-auto flex min-h-[1120px] max-w-[1280px] flex-col gap-8 md:min-h-[1140px] lg:grid lg:h-[810px] lg:min-h-0 lg:grid-cols-[1.2fr_1fr_.65fr] lg:grid-rows-[260px_230px_260px_60px] lg:gap-0">
        <h2 className="order-1 max-w-[470px] text-[28px] leading-8 font-bold tracking-[-1.12px] lg:col-start-1 lg:row-start-1 lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]">
          De la idea al contenido que la hace crecer.
        </h2>

        <FooterGroup
          className="order-2 lg:col-start-1 lg:row-start-2"
          label="Contacto"
        >
          <div className="flex flex-col items-start gap-2">
            <Link
              className="text-[24px] leading-[30px] font-bold tracking-[-0.96px] underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href={whatsappUrl()}
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp 099 881 3559
            </Link>
            <Link
              className="text-[18px] leading-[24px] font-semibold tracking-[-0.4px] underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href={mailtoUrl()}
            >
              {CONTACT_EMAIL}
            </Link>
          </div>
        </FooterGroup>

        <FooterGroup
          className="order-3 lg:col-start-2 lg:row-start-1"
          label="Navegación"
        >
          <nav aria-label="Navegación del pie de página" className="flex flex-col items-start gap-1.5">
            {navigationLinks.map((link) => (
              <FooterPillLink href={link.href} key={link.href} label={link.label} />
            ))}
          </nav>
        </FooterGroup>

        <FooterGroup className="order-4 lg:col-start-2 lg:row-start-2" label="Nuestro enfoque">
          <div className="flex flex-col items-start gap-2">
            {approachLinks.map((link) => (
              <FooterPillLink href={link.href} key={link.href} label={link.label} />
            ))}
          </div>
        </FooterGroup>

        <FooterGroup
          className="order-4 lg:col-start-3 lg:row-start-2 lg:self-start"
          label="Servicios por ciudad"
        >
          <nav
            aria-label="Servicios por ciudad"
            className="flex flex-col items-start gap-1.5"
          >
            {SERVICE_LANDINGS.map((landing) => (
              <Link
                className="text-[16px] leading-[22px] font-semibold tracking-[-0.3px] text-shinta-ink underline-offset-4 transition-opacity duration-200 hover:underline hover:opacity-80 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
                href={landing.href}
                key={landing.href}
              >
                {landing.label}
              </Link>
            ))}
          </nav>
        </FooterGroup>

        <FooterGroup
          className="order-5 lg:col-start-3 lg:row-start-1"
          label="Síguenos"
        >
          <div className="flex items-center gap-1.5">
            <Link
              aria-label="Tótem Mass Media en Facebook"
              className="grid size-12 place-items-center rounded-full bg-shinta-ink text-shinta-canvas transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href={SOCIAL_PROFILES[1]}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z" />
              </svg>
            </Link>
            <Link
              aria-label="Tótem Mass Media en Instagram"
              className="grid size-12 place-items-center rounded-full bg-shinta-ink text-shinta-canvas transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href={SOCIAL_PROFILES[0]}
              rel="noopener noreferrer"
              target="_blank"
            >
              <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
                <rect height="17" rx="5" stroke="currentColor" strokeWidth="2" width="17" x="3.5" y="3.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.4" cy="6.8" fill="currentColor" r="1.2" />
              </svg>
            </Link>
          </div>
        </FooterGroup>

        <div className="order-7 mt-auto lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:mt-0 lg:self-end">
          <Image
            alt="Tótem Mass Media"
            className="h-auto w-full max-w-[260px] object-contain lg:max-w-[320px]"
            height={419}
            sizes="(min-width: 1024px) 320px, 260px"
            src="/brand/logo-light.png"
            unoptimized
            width={621}
          />
        </div>

        <div className="order-8 flex flex-col gap-2 pb-5 text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] uppercase sm:flex-row sm:items-center sm:justify-between lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:self-end">
          <p>© 2026 Tótem Mass Media. Todos los derechos reservados.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link
              className="underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href="/totemhub/privacidad"
            >
              Privacidad de TotemHub
            </Link>
            <p>Loja, Ecuador</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
