import Image from "next/image";
import Link from "next/link";

import { ShiftButtonContent } from "./ShintaPrimitives";
import { shintaAsset } from "./site";
import { ImageReveal } from "@/components/sites/shinta-framer-media-3240cba4/shared/ImageReveal";

export function ContactCtaSection() {
  return (
    <section
      className="h-[909px] overflow-hidden bg-shinta-canvas px-5 py-[12px] text-shinta-ink md:h-[1163px] md:py-[80px] xl:h-[797px] xl:py-[80px]"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid h-full max-w-[1280px] grid-rows-[483px_1fr] gap-[12px] md:grid-rows-[430px_1fr] md:gap-[16px] xl:grid-cols-[420px_1fr] xl:grid-rows-1 xl:gap-[18px]">
        <div className="relative flex overflow-hidden rounded-[32px] bg-shinta-ink px-[30px] py-[34px] text-shinta-canvas md:px-[42px] md:py-[42px] xl:rounded-[34px] xl:px-[34px] xl:py-[36px]">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute top-[-11px] left-[-9px] h-[150px] w-[340px] text-shinta-pink md:w-[430px] xl:top-[-7px] xl:left-[-2px] xl:h-[170px] xl:w-[430px]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 430 170"
          >
            <path
              d="M-45 91C46 119 150 111 119 58c-29-49-112 5-58 51 51 43 167 12 249-4 60-12 91-47 140-100"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="7"
            />
          </svg>

          <div className="relative z-10 mt-auto w-full">
            <h2
              id="contact-heading"
              className="max-w-[330px] text-[28px] leading-[31px] font-bold tracking-[-1.12px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
            >
              Construimos presencia digital que crece.
            </h2>
            <p className="mt-[24px] max-w-[340px] text-[18px] leading-[27px] font-normal tracking-[-0.36px] text-totem-text-on-dark-secondary xl:mt-[28px]">
Producción audiovisual, marketing digital, estrategia de contenido y desarrollo web para resolver necesidades reales de comunicación y crecimiento.
            </p>

            <Link
              className="shift-button group mt-[30px] flex h-[56px] w-full items-center rounded-full text-[16px] font-semibold text-shinta-ink focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-shinta-pink xl:mt-[38px] xl:h-[52px]"
              href="/contact"
            >
              <ShiftButtonContent
              tone="onDark"
                className="[--shift-button-icon-size:56px] xl:[--shift-button-icon-size:52px]"
                labelClassName="flex h-[56px] items-center rounded-full bg-totem-action px-[22px] xl:h-[52px]"
              >
                Cuéntanos tu proyecto
              </ShiftButtonContent>
            </Link>
          </div>
        </div>

        <ImageReveal className="relative overflow-hidden rounded-[32px] bg-totem-surface-secondary xl:rounded-[34px]">
          <div className="shinta-float absolute -inset-[12px] motion-reduce:transform-none">
            <Image
              alt="Contenido audiovisual para un negocio"
              className="object-cover"
              fill
              priority={false}
              sizes="(min-width: 1280px) 842px, calc(100vw - 40px)"
              src={shintaAsset("images/d72f6236d901e924.png")}
              unoptimized
            />
          </div>
        </ImageReveal>
      </div>
    </section>
  );
}
