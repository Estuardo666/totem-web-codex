"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import {
  SectionEyebrow,
  ShiftButtonContent,
} from "../shared/ShintaPrimitives";
import { shintaAsset } from "../shared/site";

const teamMembers = [
  {
    alt: "Integrante del equipo de Shinta con sudadera rosa",
    delay: "delay-[0ms]",
    position:
      "top-[18px] left-[2px] rotate-[-7deg] md:top-[8px] md:left-[42px] xl:top-[28px] xl:left-[20px]",
    src: "79687116559292ab.jpg",
  },
  {
    alt: "Integrante del equipo de Shinta con chaqueta de cuero negra",
    delay: "delay-[90ms]",
    position:
      "top-[27px] left-[105px] rotate-[5deg] md:top-[19px] md:left-[234px] xl:top-[62px] xl:left-[166px]",
    src: "47f89ced261416df.jpg",
  },
  {
    alt: "Integrante del equipo de Shinta con blazer gris",
    delay: "delay-[180ms]",
    position:
      "top-[15px] left-[208px] rotate-[-4deg] md:top-[5px] md:left-[426px] xl:top-[16px] xl:left-[312px]",
    src: "34844c23286ab253.jpg",
  },
  {
    alt: "Integrante del equipo de Shinta con sobrecamisa a cuadros",
    delay: "delay-[270ms]",
    position:
      "top-[190px] left-[2px] rotate-[5deg] md:top-[211px] md:left-[42px] xl:top-[60px] xl:left-[458px]",
    src: "3180f8ad3e321358.jpg",
  },
  {
    alt: "Integrante del equipo de Shinta con sudadera morada",
    delay: "delay-[360ms]",
    position:
      "top-[184px] left-[105px] rotate-[-5deg] md:top-[201px] md:left-[234px] xl:top-[14px] xl:left-[604px]",
    src: "c1c60606144d1f73.jpg",
  },
  {
    alt: "Integrante del equipo de Shinta con suéter gris oscuro",
    delay: "delay-[450ms]",
    position:
      "top-[194px] left-[208px] rotate-[7deg] md:top-[212px] md:left-[426px] xl:top-[58px] xl:left-[750px]",
    src: "36db82b98440ca02.jpg",
  },
] as const;

export function TeamSection() {
  const collageRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const collage = collageRef.current;

    if (!collage) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setIsVisible(true);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -12%",
        threshold: 0.1,
      },
    );

    observer.observe(collage);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="h-[994px] overflow-hidden bg-shinta-canvas px-5 py-[80px] text-shinta-ink md:h-[967px] xl:h-[866px] xl:overflow-visible xl:py-[120px]"
      id="about-us"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-[1280px] text-center">
        <SectionEyebrow className="inline-flex rounded-full bg-shinta-pink px-[10px] py-[3px] text-[10px] leading-[13px] tracking-[0.65px]">
          nuestro equipo
        </SectionEyebrow>
        <h2
          id="team-heading"
          className="mt-[12px] text-[28px] leading-[31px] font-bold tracking-[-1.12px] xl:mt-[10px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]"
        >
          Los expertos en contenido
        </h2>

        <div
          className="relative mx-auto mt-[48px] h-[450px] max-w-[335px] md:h-[430px] md:max-w-[650px] xl:mt-[30px] xl:h-[275px] xl:max-w-[950px]"
          ref={collageRef}
        >
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute top-[145px] left-1/2 z-0 h-[165px] w-[125vw] -translate-x-1/2 text-shinta-pink md:top-[142px] md:h-[175px] xl:top-[64px] xl:h-[180px] xl:w-[100vw]"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1440 220"
          >
            <path
              d="M-80 119C54 252 129 4 273 90c130 77 184 162 318 54C724 36 798 53 927 145c122 87 221-131 374-49 67 36 120 63 219 23"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="7"
            />
          </svg>

          {teamMembers.map((member) => (
            <div
              className={cn(
                "absolute z-10 h-[160px] w-[125px] overflow-hidden rounded-[18px] bg-shinta-lavender shadow-[0_8px_18px_rgba(28,25,23,0.06)] transition-[opacity,transform] duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:scale-100 motion-reduce:opacity-100 motion-reduce:transition-none md:h-[215px] md:w-[180px] md:rounded-[20px] xl:h-[220px] xl:w-[180px] xl:rounded-[22px]",
                member.position,
                member.delay,
                isVisible
                  ? "translate-y-0 scale-100 opacity-100"
                  : "translate-y-10 scale-[0.96] opacity-0",
              )}
              key={member.src}
            >
              <Image
                alt={member.alt}
                className="object-cover"
                fill
                sizes="(min-width: 768px) 180px, 125px"
                src={shintaAsset(`images/${member.src}`)}
                unoptimized
              />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-[35px] max-w-[335px] text-[18px] leading-[25.2px] font-normal tracking-[-0.36px] text-shinta-stone md:mt-[22px] md:max-w-[450px] xl:mt-[18px] xl:max-w-[440px] xl:text-[16px] xl:leading-[22.4px] xl:tracking-[-0.32px]">
          Shinta helped us turn ideas into consistent, high-performing social
          content.
        </p>

        <Link
          className="shift-button group mx-auto mt-[24px] flex h-[56px] w-full max-w-[335px] items-center rounded-full text-left text-[16px] font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink md:max-w-[330px] xl:mt-[20px] xl:h-[52px] xl:max-w-[370px]"
          href="/#about-us"
        >
          <ShiftButtonContent
            className="[--shift-button-icon-size:56px] xl:[--shift-button-icon-size:52px]"
            iconClassName="bg-totem-action text-totem-action-text"
            labelClassName="flex h-[56px] items-center rounded-full bg-totem-action px-[23px] text-totem-action-text xl:h-[52px]"
          >
            Más sobre nosotros
          </ShiftButtonContent>
        </Link>
      </div>
    </section>
  );
}
