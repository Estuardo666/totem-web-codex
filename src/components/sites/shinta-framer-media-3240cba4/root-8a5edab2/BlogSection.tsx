import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import {
  SectionEyebrow,
  ShiftButtonContent,
} from "../shared/ShintaPrimitives";
import { shintaAsset } from "../shared/site";

const articles = [
  {
    author: "Tótem Mass Media",
    authorHeight: 1200,
    authorImage: "/brand/logo-light.png",
    authorWidth: 1200,
    href: "/#projects",
    image: "images/90da175d3b991e31.jpg",
    imageAlt: "Proyecto TransCity",
    title: "TransCity: plataformas, integraciones y automatización",
  },
  {
    author: "Tótem Mass Media",
    authorHeight: 800,
    authorImage: "/brand/logo-light.png",
    authorWidth: 800,
    href: "/about-us",
    image: "images/d8288cb19a756a51.jpg",
    imageAlt: "Estrategia, creatividad y tecnología",
    title: "Estrategia, creatividad y tecnología para transformar negocios",
  },
  {
    author: "Tótem Mass Media",
    authorHeight: 1032,
    authorImage: "/brand/logo-light.png",
    authorWidth: 1032,
    href: "/contact",
    image: "images/01c3e56a4e3063a0.jpg",
    imageAlt: "Experiencia digital para una organización",
    title: "La web como herramienta de negocio",
  },
] as const;

export function BlogSection() {
  return (
    <section
      aria-labelledby="shinta-blog-heading"
      className="relative z-[3] h-[1642px] w-full overflow-hidden bg-shinta-canvas px-5 py-[100px] md:h-[2404px] md:py-[120px] lg:h-[897px]"
      id="blog"
    >
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-[440px] w-full text-stone-200/80"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 440"
      >
        <path
          d="M-70 125C180 18 355 53 528 250C642 380 711 401 797 248C885 91 1065 89 1190 225C1282 325 1397 292 1500 169"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="9"
        />
      </svg>

      <div className="relative mx-auto flex h-full w-full max-w-[1280px] flex-col gap-9 md:gap-12 lg:gap-10">
        <header className="flex shrink-0 items-end justify-between gap-4">
          <div className="flex flex-col items-start gap-3 lg:gap-4">
            <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-2.5 py-1 text-shinta-ink">
              proyectos y capacidades
            </SectionEyebrow>
            <h2
              className="max-w-[190px] text-[28px] leading-[1.08] font-bold tracking-[-1.12px] text-shinta-ink sm:max-w-none lg:text-[64px] lg:leading-[70.4px] lg:tracking-[-2.56px]"
              id="shinta-blog-heading"
            >
              Lo que construimos demuestra la capacidad
            </h2>
          </div>

          <Link
            className="shift-button group inline-flex w-[142px] shrink-0 items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-ink sm:w-[168px] lg:w-[185px]"
            href="/#blog"
          >
            <ShiftButtonContent
              className="[--shift-button-icon-size:44px] sm:[--shift-button-icon-size:48px] lg:[--shift-button-icon-size:52px]"
              iconClassName="bg-totem-action text-totem-action-text"
              iconStrokeWidth={2.25}
              labelClassName="inline-flex h-11 items-center justify-center rounded-full bg-totem-action px-4 text-[12px] font-semibold text-totem-action-text sm:h-12 sm:px-5 sm:text-[14px] lg:h-[52px] lg:px-6"
            >
              Ver proyectos
            </ShiftButtonContent>
          </Link>
        </header>

        <div className="grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6">
          {articles.map((article, index) => (
            <article className="min-h-0" key={article.href}>
              <Link
                className="group flex h-full flex-col rounded-[24px] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-ink"
                href={article.href}
              >
                <div className="relative aspect-[822/616] w-full shrink-0 overflow-hidden rounded-[24px] bg-stone-200">
                  <Image
                    alt={article.imageAlt}
                    className="size-full object-cover transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-[1.04] group-focus-visible:-translate-y-1 group-focus-visible:scale-[1.04]"
                    height={616}
                    priority={index === 0}
                    src={shintaAsset(article.image)}
                    unoptimized
                    width={822}
                  />
                  <span className="absolute top-4 right-4 grid size-10 translate-y-2 place-items-center rounded-full bg-white text-shinta-ink opacity-0 shadow-sm transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    <ArrowUpRight aria-hidden="true" className="size-5" />
                  </span>
                </div>

                <time
                  className="mt-5 text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] text-shinta-muted uppercase"
                  dateTime="2026-01-27"
                >
                  Capacidades demostradas
                </time>
                <h3 className="mt-2 text-[24px] leading-[1.15] font-bold tracking-[-0.96px] text-shinta-ink md:text-[32px] md:leading-[38.4px] md:tracking-[-1.28px]">
                  {article.title}
                </h3>

                <footer className="mt-auto flex items-center gap-3 pt-5">
                  <Image
                    alt=""
                    className="size-10 rounded-full object-cover"
                    height={article.authorHeight}
                    src={article.authorImage}
                    unoptimized
                    width={article.authorWidth}
                  />
                  <p className="text-[16px] leading-[22px] text-shinta-stone lg:text-[18px] lg:leading-[25px]">
                    Por {article.author}
                  </p>
                </footer>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
