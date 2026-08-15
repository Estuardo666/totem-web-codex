"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const painPoints = [
  "Influencer collaborations that bring views but no results",
  "Posting consistently but getting low engagement",
  "Content looks “nice” but doesn’t perform",
  "Campaigns feel forced and salesy",
  "No clear content direction or strategy",
] as const;

const cardPositions = [
  "left-[6%] w-[380px] max-md:left-[5%] max-md:w-[270px]",
  "right-[6%] w-[318px] max-md:right-auto max-md:left-[5%] max-md:w-[270px]",
  "left-1/2 w-[282px] -translate-x-1/2 max-md:left-auto max-md:right-[12%] max-md:w-[270px] max-md:translate-x-0",
  "left-[14%] w-[245px] max-md:left-[28%] max-md:w-[270px]",
  "right-[14%] w-[290px] max-md:right-auto max-md:left-[7%] max-md:w-[270px]",
] as const;

const cardStartPhases = [1, 2, 3, 5, 6] as const;

const verticalSteps = {
  below: "translate-y-[430px] opacity-0",
  bottom: "translate-y-[245px] opacity-100 max-md:translate-y-[225px]",
  middle: "translate-y-[30px] opacity-100 max-md:translate-y-[20px]",
  top: "-translate-y-[250px] opacity-100 max-md:-translate-y-[225px]",
  gone: "-translate-y-[430px] opacity-0",
} as const;

function cardMotion(index: number, phase: number) {
  const localPhase = phase - cardStartPhases[index] + 1;

  if (localPhase <= 0) return verticalSteps.below;
  if (localPhase === 1) return verticalSteps.bottom;
  if (localPhase === 2) return verticalSteps.middle;
  if (localPhase <= 4) return verticalSteps.top;
  return verticalSteps.gone;
}

export function PainPointsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let currentPhase = -1;

    const update = () => {
      animationFrame = 0;

      if (reducedMotion.matches) {
        if (currentPhase !== 4) {
          currentPhase = 4;
          setPhase(4);
        }
        return;
      }

      const rect = section.getBoundingClientRect();
      const scrollDistance = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
      const nextPhase = Math.min(Math.floor(progress * 10), 10);

      if (nextPhase !== currentPhase) {
        currentPhase = nextPhase;
        setPhase(nextPhase);
      }
    };

    const requestUpdate = () => {
      if (animationFrame === 0) {
        animationFrame = window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (animationFrame !== 0) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const isDark = phase >= 7;

  return (
    <section
      className="relative h-[3600px] overflow-clip px-5 max-[480px]:h-[3376px] max-[480px]:px-0"
      ref={sectionRef}
    >
      <div
        className={cn(
          "sticky top-0 h-screen min-h-[900px] overflow-hidden transition-colors duration-700 max-md:min-h-[650px]",
          isDark ? "bg-shinta-ink" : "bg-shinta-canvas",
        )}
      >
        <h2
          className={cn(
            "absolute top-1/2 left-1/2 z-10 w-[690px] -translate-x-1/2 -translate-y-1/2 text-center text-[64px] leading-[70.4px] font-bold tracking-[-2.56px] transition-colors duration-700 max-md:w-[340px] max-md:text-[28px] max-md:leading-8 max-md:tracking-[-1.12px]",
            isDark ? "text-shinta-canvas" : "text-shinta-ink",
          )}
        >
          Social media feels harder than it should be
        </h2>

        <ul className="absolute inset-0 z-20 list-none" aria-label="Common social media problems">
          {painPoints.map((painPoint, index) => (
            <li
              className={cn(
                "absolute top-1/2 rounded-[14px] bg-shinta-stone px-6 py-6 text-shinta-canvas transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] max-md:px-6 max-md:py-6",
                cardPositions[index],
                cardMotion(index, phase),
              )}
              key={painPoint}
            >
              <span
                aria-hidden="true"
                className="mb-3 grid size-8 place-items-center rounded-full bg-shinta-orange text-[25px] leading-none font-normal text-shinta-stone"
              >
                ×
              </span>
              <p className="text-[24px] leading-[33.6px] font-bold tracking-[-0.96px]">
                {painPoint}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
