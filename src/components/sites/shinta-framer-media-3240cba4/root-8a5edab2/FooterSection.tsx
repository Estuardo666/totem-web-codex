"use client";

import Image from "next/image";
import Link from "next/link";
import type { FormEvent, ReactNode } from "react";

import { SectionEyebrow } from "@/components/sites/shinta-framer-media-3240cba4/shared/ShintaPrimitives";
import { shintaAsset } from "@/components/sites/shinta-framer-media-3240cba4/shared/site";

const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/#projects", label: "Projects" },
  { href: "/#blog", label: "Blog" },
  { href: "/#about-us", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/404", label: "404" },
] as const;

const legalLinks = [
  { href: "/legal/privacy-policy", label: "Privacy Policy" },
  { href: "/legal/terms-of-service", label: "Terms & Condition" },
] as const;

type FooterPillLinkProps = {
  href: string;
  label: string;
};

function FooterPillLink({ href, label }: FooterPillLinkProps) {
  return (
    <Link
      className="group inline-flex w-fit rounded-full border border-shinta-ink px-3 text-[24px] leading-[30px] font-bold tracking-[-0.96px] text-shinta-ink focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink lg:text-[32px] lg:leading-[38.4px] lg:tracking-[-1.28px]"
      href={href}
    >
      <span className="block h-[30px] overflow-hidden lg:h-[38.4px]">
        <span className="flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-1/2 group-focus-visible:-translate-y-1/2">
          <span>{label}</span>
          <span aria-hidden="true" className="text-shinta-stone">
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
      <SectionEyebrow className="mb-3 text-shinta-stone">{label}</SectionEyebrow>
      {children}
    </div>
  );
}

function NewsletterCard() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="w-full self-end rounded-[24px] bg-shinta-canvas p-6 text-shinta-ink lg:max-w-[300px]">
      <h2 className="text-[40px] leading-12 font-bold tracking-[-1.6px] max-lg:text-[28px] max-lg:leading-8 max-lg:tracking-[-1.12px]">
        Newsletter
      </h2>
      <p className="mt-2 text-[14px] leading-[19.6px] text-shinta-muted">
        Sign up for our newsletter to stay up to date with the latest motion design &amp;
        studio news
      </p>
      <form className="mt-4" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="shinta-newsletter-email">
          Email address
        </label>
        <input
          className="h-14 w-full rounded-[14px] bg-white px-4 text-[16px] text-shinta-ink placeholder:text-shinta-muted focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink"
          id="shinta-newsletter-email"
          name="email"
          placeholder="Email address"
          type="email"
        />
        <button
          className="mt-3 h-14 w-full rounded-full bg-shinta-ink px-5 text-left text-[18px] font-bold tracking-[-0.36px] text-shinta-canvas transition-colors hover:bg-shinta-stone focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

export function FooterSection() {
  return (
    <footer className="relative min-h-[1464px] overflow-hidden bg-shinta-pink px-[19px] pt-16 text-shinta-ink md:min-h-[1494px] md:px-5 lg:min-h-[970px] lg:pt-20">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -right-[340px] top-[90px] h-[980px] w-[900px] text-shinta-lavender max-lg:-right-[440px] max-lg:top-[700px]"
        fill="none"
        viewBox="0 0 900 980"
      >
        <path
          d="M880 38C606 7 502 137 543 309c45 188 257 128 243-36-17-203-289-139-407 72-139 248-32 457-334 624"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="24"
        />
      </svg>

      <div className="relative z-10 mx-auto flex min-h-[1400px] max-w-[1280px] flex-col gap-8 md:min-h-[1414px] lg:grid lg:h-[890px] lg:min-h-0 lg:grid-cols-[1.2fr_1fr_.65fr] lg:grid-rows-[300px_220px_310px_60px] lg:gap-0">
        <h2 className="order-1 max-w-[470px] text-[28px] leading-8 font-bold tracking-[-1.12px] lg:col-start-1 lg:row-start-1 lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]">
          UGC that grows your brand.
        </h2>

        <FooterGroup
          className="order-2 lg:col-start-1 lg:row-start-2"
          label="Contact"
        >
          <div className="flex flex-col items-start">
            <Link
              className="text-[24px] leading-[30px] font-bold tracking-[-0.96px] underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink lg:text-[32px] lg:leading-[38.4px] lg:tracking-[-1.28px]"
              href="mailto:contact@shinta.com"
            >
              contact@shinta.com
            </Link>
            <Link
              className="text-[24px] leading-[30px] font-bold tracking-[-0.96px] underline-offset-4 hover:underline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href="tel:+12345678"
            >
              +12 345 678
            </Link>
          </div>
        </FooterGroup>

        <FooterGroup
          className="order-3 lg:col-start-2 lg:row-start-1"
          label="Navivgation"
        >
          <nav aria-label="Footer navigation" className="flex flex-col items-start gap-1.5">
            {navigationLinks.map((link) => (
              <FooterPillLink href={link.href} key={link.href} label={link.label} />
            ))}
          </nav>
        </FooterGroup>

        <FooterGroup className="order-4 lg:col-start-2 lg:row-start-2" label="Legal">
          <div className="flex flex-col items-start gap-2">
            {legalLinks.map((link) => (
              <FooterPillLink href={link.href} key={link.href} label={link.label} />
            ))}
          </div>
        </FooterGroup>

        <FooterGroup
          className="order-5 lg:col-start-3 lg:row-start-1"
          label="Follow Us"
        >
          <div className="flex items-center gap-1.5">
            <Link
              aria-label="Shinta on Facebook"
              className="grid size-12 place-items-center rounded-full bg-shinta-ink text-shinta-canvas transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href="https://facebook.com/"
            >
              <svg aria-hidden="true" className="size-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5H17V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H8v3h2.6v8h3.1Z" />
              </svg>
            </Link>
            <Link
              aria-label="Shinta on X"
              className="grid size-12 place-items-center rounded-full bg-shinta-ink text-[24px] font-normal text-shinta-canvas transition-transform hover:-translate-y-1 focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink"
              href="https://x.com/"
            >
              X
            </Link>
            <Link
              aria-label="Shinta on Instagram"
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
            alt="Shinta"
            className="h-auto w-full max-w-[900px]"
            height={267}
            sizes="(min-width: 1024px) 900px, calc(100vw - 38px)"
            src={shintaAsset("images/e7fb2951cde42e9a.png")}
            unoptimized
            width={1000}
          />
        </div>

        <div className="order-8 flex flex-col gap-2 pb-5 text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] uppercase sm:flex-row sm:items-center sm:justify-between lg:col-start-1 lg:col-end-4 lg:row-start-4 lg:self-end">
          <p>© 2026 Shinta. All Rights Reserved.</p>
          <p>
            Made by{" "}
            <Link
              className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink"
              href="https://veloxthemes.com/"
            >
              Velox Themes
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
