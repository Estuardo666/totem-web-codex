"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent, ReactNode } from "react";

import {
  SectionEyebrow,
  ShiftButtonContent,
} from "@/components/sites/shinta-framer-media-3240cba4/shared/ShintaPrimitives";

const navigationLinks = [
  { href: "/", label: "Inicio" },
  { href: "/#projects", label: "Proyectos" },
  { href: "/#blog", label: "Servicios" },
  { href: "/about-us", label: "Nosotros" },
  { href: "/#contact", label: "Contacto" },
  { href: "/contact", label: "Cuéntanos tu proyecto" },
] as const;

const approachLinks = [
  { href: "/about-us", label: "Cómo trabajamos" },
  { href: "/#projects", label: "Proyectos" },
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

function NewsletterCard() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="w-full self-end rounded-[24px] bg-shinta-canvas p-6 text-shinta-ink lg:max-w-[320px]">
      <h2 className="text-[40px] leading-12 font-bold tracking-[-1.6px] max-lg:text-[28px] max-lg:leading-8 max-lg:tracking-[-1.12px]">
        Crecimiento
      </h2>
      <p className="mt-2 text-[14px] leading-[19.6px] text-shinta-muted">
        Producción, marketing y web trabajando sobre el mismo objetivo.
      </p>
      <form className="mt-4" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="shinta-newsletter-email">
          Correo electrónico
        </label>
        <input
          className="h-14 w-full rounded-[14px] bg-white px-4 text-[16px] text-shinta-ink placeholder:text-shinta-muted focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink"
          id="shinta-newsletter-email"
          name="email"
          placeholder="Tu correo electrónico"
          type="email"
        />
        <button
          className="shift-button mt-3 flex h-14 w-full items-center rounded-full text-left text-[16px] font-bold tracking-[-0.4px] text-shinta-canvas focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink"
          type="submit"
        >
          <ShiftButtonContent
              tone="onInk"
            className="[--shift-button-icon-size:48px]"
            labelClassName="flex h-14 items-center rounded-full px-4 bg-[var(--shift-label-bg)] text-[var(--shift-label-fg)]"
          >
            Cuéntanos tu proyecto
          </ShiftButtonContent>
        </button>
      </form>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="relative min-h-[1464px] overflow-hidden bg-shinta-pink px-[19px] pt-16 text-shinta-ink md:min-h-[1494px] md:px-5 lg:min-h-[970px] lg:pt-20">
      <div className="relative z-10 mx-auto flex min-h-[1400px] max-w-[1280px] flex-col gap-8 md:min-h-[1414px] lg:grid lg:h-[890px] lg:min-h-0 lg:grid-cols-[1.2fr_1fr_.65fr] lg:grid-rows-[300px_220px_310px_60px] lg:gap-0">
        <h2 className="order-1 max-w-[470px] text-[28px] leading-8 font-bold tracking-[-1.12px] lg:col-start-1 lg:row-start-1 lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]">
          De la idea al contenido que la hace crecer.
        </h2>

        <FooterGroup
          className="order-2 lg:col-start-1 lg:row-start-2"
          label="Contacto"
        >
          <div className="flex flex-col items-start">
            <Link
              className="text-[24px] leading-[30px] font-bold tracking-[-0.96px] underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href="/contact"
            >
              Cuéntanos tu proyecto
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
          className="order-5 lg:col-start-3 lg:row-start-1"
          label="Síguenos"
        >
          <div className="flex items-center gap-1.5">
            <Link
              aria-label="Tótem Mass Media en Facebook"
              className="grid size-12 place-items-center rounded-full bg-shinta-ink text-shinta-canvas transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href="https://facebook.com/"
            >
              <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z" />
              </svg>
            </Link>
            <Link
              aria-label="Tótem Mass Media en X"
              className="grid size-12 place-items-center rounded-full bg-shinta-ink text-[24px] font-normal text-shinta-canvas transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href="https://x.com/"
            >
              X
            </Link>
            <Link
              aria-label="Tótem Mass Media en Instagram"
              className="grid size-12 place-items-center rounded-full bg-shinta-ink text-shinta-canvas transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href="https://instagram.com/"
            >
              <svg aria-hidden="true" className="size-6" fill="none" viewBox="0 0 24 24">
                <rect height="17" rx="5" stroke="currentColor" strokeWidth="2" width="17" x="3.5" y="3.5" />
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
                <circle cx="17.4" cy="6.8" fill="currentColor" r="1.2" />
              </svg>
            </Link>
          </div>
        </FooterGroup>

        <div className="order-6 lg:col-start-3 lg:row-start-2 lg:row-end-4 lg:self-end">
          <NewsletterCard />
        </div>

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
          <p>Loja, Ecuador</p>
        </div>
      </div>
    </footer>
  );
}
