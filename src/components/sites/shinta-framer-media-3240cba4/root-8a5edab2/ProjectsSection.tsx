"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { SectionEyebrow } from "@/components/sites/shinta-framer-media-3240cba4/shared/ShintaPrimitives";
import { shintaAsset } from "@/components/sites/shinta-framer-media-3240cba4/shared/site";

const projects = [
  {
    image: "images/d929f58f46477773.jpg",
    label: "Follower growth",
    metric: "100%",
    name: "Rama",
    href: "/projects/rama",
    layout: "order-1 lg:col-span-2",
  },
  {
    image: "images/f8f2222b4c112435.jpg",
    label: "Follower growth",
    metric: "150%",
    name: "Pandawa",
    href: "/projects/pandawa",
    layout: "order-2",
  },
  {
    image: "images/f6ccd8159b64601e.jpg",
    label: "Increase Leads",
    metric: "2×",
    name: "Sadewa",
    href: "/projects/sadewa",
    layout: "order-4",
  },
  {
    image: "images/25d6efcc673140d3.jpg",
    label: "Conversion Rate",
    metric: "+75%",
    name: "Kresna",
    href: "/projects/kresna",
    layout: "order-3",
  },
  {
    image: "images/f9924a626b8f6cfa.jpg",
    label: "Follower growth",
    metric: "100%",
    name: "Bima",
    href: "/projects/bima",
    layout: "order-5",
  },
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
      aria-label={`View ${project.name} project: ${project.metric} ${project.label}`}
      className={cn(
        "group relative block aspect-[0.93/1] overflow-hidden rounded-[30px] bg-[#dededc] transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-shinta-pink motion-reduce:translate-y-0 motion-reduce:transition-none md:aspect-[0.96/1] lg:aspect-[0.94/1] lg:rounded-[28px]",
        project.layout,
        revealDelays[index],
        revealed ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0",
      )}
      href={project.href}
    >
      <Image
        alt={`${project.name} campaign project`}
        className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.025] motion-reduce:transition-none"
        fill
        sizes={
          isLead
            ? "(min-width: 1024px) 860px, (min-width: 768px) calc(100vw - 40px), calc(100vw - 38px)"
            : "(min-width: 1024px) 422px, (min-width: 768px) calc(100vw - 40px), calc(100vw - 38px)"
        }
        src={shintaAsset(project.image)}
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
            <span>{project.label}</span>
          </span>
        </span>
        <span className="grid size-14 shrink-0 place-items-center rounded-full bg-shinta-canvas text-shinta-ink transition-transform duration-300 group-hover:rotate-45 group-hover:bg-shinta-pink lg:size-8">
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
            featured projects
          </SectionEyebrow>
          <h2 className="max-w-[620px] text-[64px] leading-[70.4px] font-bold tracking-[-2.56px] text-shinta-ink max-lg:text-[28px] max-lg:leading-8 max-lg:tracking-[-1.12px]">
            <span className="lg:block">Work We’re </span>
            <span className="lg:block">Proud Of</span>
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
