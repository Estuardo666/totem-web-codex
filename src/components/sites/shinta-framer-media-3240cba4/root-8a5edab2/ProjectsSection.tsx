"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/sites/shinta-framer-media-3240cba4/shared/ShintaPrimitives";
import { webProjects } from "@/lib/portfolio";

const projects = [
  { ...webProjects.transcity, metric: "01", layout: "order-1 lg:col-span-2" },
  { ...webProjects.aprendiendoJuntos, metric: "02", layout: "order-2" },
  { ...webProjects.lomasVision, metric: "03", layout: "order-4" },
  { ...webProjects.dermatologika, metric: "04", layout: "order-3" },
  { ...webProjects.drLoyola, metric: "05", layout: "order-5" },
] as const;

const revealDelays = [
  "delay-0",
  "delay-100",
  "delay-200",
  "delay-300",
  "delay-500",
] as const;

type ProjectCardProps = {
  index: number;
  project: (typeof projects)[number];
  revealed: boolean;
};

function ProjectCard({ index, project, revealed }: ProjectCardProps) {
  const isLead = index === 0;

  return (
    <Link
      aria-label={`Ver el sitio de ${project.name}: ${project.category}`}
      className={cn(
        "group relative block aspect-[0.93/1] overflow-hidden rounded-[30px] bg-totem-surface-secondary transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-totem-focus motion-reduce:translate-y-0 motion-reduce:transition-none md:aspect-[0.96/1] lg:aspect-[0.94/1] lg:rounded-[28px]",
        project.layout,
        revealDelays[index],
        revealed ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
      )}
      href={project.url}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        alt={`Sitio web de ${project.name}: ${project.summary}`}
        className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transition-none"
        fill
        sizes={
          isLead
            ? "(min-width: 1024px) 860px, (min-width: 768px) calc(100vw - 40px), calc(100vw - 38px)"
            : "(min-width: 1024px) 422px, (min-width: 768px) calc(100vw - 40px), calc(100vw - 38px)"
        }
        src={project.image}
        unoptimized
      />

      <span className="absolute top-[14px] right-[14px] left-[14px] z-10 flex gap-1.5">
        <span className="flex h-14 min-w-0 flex-1 flex-col items-start justify-center rounded-full bg-shinta-canvas px-6 text-shinta-ink sm:flex-row sm:items-center sm:justify-between lg:h-8 lg:px-4">
          <span className="text-[18px] leading-none font-semibold tracking-[-0.72px] lg:text-[16px] lg:tracking-[-0.64px]">
            {project.name}
          </span>
          <span className="flex items-center gap-1.5 text-[12px] leading-[14px] font-semibold tracking-[0.72px] uppercase">
            <span>{project.metric}</span>
            <span className="hidden sm:inline" aria-hidden="true">
              /
            </span>
            <span>{project.category}</span>
          </span>
        </span>
        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-shinta-canvas text-shinta-ink transition-transform duration-300 group-hover:rotate-45 group-hover:bg-totem-action lg:size-8">
          <ArrowUpRight aria-hidden="true" className="size-5 lg:size-4" strokeWidth={2.1} />
        </span>
      </span>
    </Link>
  );
}

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="overflow-hidden px-5 py-[78px] md:py-[129px] lg:py-[120px] max-sm:px-[19px]"
      id="projects"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-[860px]">
        <header
          className={cn(
            "mb-9 flex flex-col items-center text-center transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:translate-y-0 motion-reduce:transition-none max-sm:mb-6 lg:mb-[19px]",
            revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <SectionEyebrow className="mb-3 rounded-full bg-shinta-pink px-3 py-1 text-shinta-ink">
            proyectos que lo demuestran
          </SectionEyebrow>
          <h2 className="max-w-[620px] text-[64px] leading-[70.4px] font-bold tracking-[-2.56px] text-shinta-ink max-lg:text-[28px] max-lg:leading-8 max-lg:tracking-[-1.12px]">
            <span className="lg:block">Los proyectos aportan </span>
            <span className="lg:block">la evidencia</span>
          </h2>
        </header>

        <div className="grid grid-cols-1 gap-4 md:gap-6 lg:grid-cols-2 lg:gap-4">
          {projects.map((project, index) => (
            <ProjectCard
              index={index}
              key={project.name}
              project={project}
              revealed={revealed}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
