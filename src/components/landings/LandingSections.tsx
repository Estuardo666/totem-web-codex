import Image from "next/image";
import { Check } from "lucide-react";

import {
  PillLink,
  SectionEyebrow,
} from "@/components/sites/shinta-framer-media-3240cba4/shared/ShintaPrimitives";
import { shintaAsset } from "@/components/sites/shinta-framer-media-3240cba4/shared/site";
import { cn } from "@/lib/utils";

const SHELL = "mx-auto w-full max-w-[1280px] px-5";

type HeroProps = {
  eyebrow: string;
  heading: string;
  lead: string;
};

export function LandingHero({ eyebrow, heading, lead }: HeroProps) {
  return (
    <section
      aria-labelledby="landing-heading"
      className="bg-shinta-canvas pt-4 pb-14 md:pb-20"
    >
      <div className={cn(SHELL, "flex flex-col gap-6")}>
        <SectionEyebrow className="inline-flex w-max rounded-full bg-shinta-pink px-2 py-1 text-shinta-ink">
          {eyebrow}
        </SectionEyebrow>

        <h1
          className="max-w-[900px] text-[40px] leading-[42px] font-bold tracking-[-1.6px] text-shinta-ink md:text-[56px] md:leading-[56px] md:tracking-[-2.24px] xl:text-[68px] xl:leading-[68px] xl:tracking-[-2.72px]"
          id="landing-heading"
        >
          {heading}
        </h1>

        <p className="max-w-[640px] text-[17px] leading-[26px] text-shinta-stone xl:text-[19px] xl:leading-[29px]">
          {lead}
        </p>

        <PillLink className="w-max" href="/contact">
          Cuéntanos tu proyecto
        </PillLink>
      </div>
    </section>
  );
}

type ProseBlock = {
  body: string;
  title: string;
};

type ProseProps = {
  blocks: readonly ProseBlock[];
  eyebrow: string;
  heading: string;
};

export function LandingProse({ blocks, eyebrow, heading }: ProseProps) {
  return (
    <section className="bg-shinta-canvas py-14 md:py-20">
      <div className={cn(SHELL, "flex flex-col gap-10")}>
        <div className="flex flex-col gap-3">
          <SectionEyebrow className="text-totem-creative-ink">
            {eyebrow}
          </SectionEyebrow>
          <h2 className="max-w-[760px] text-[30px] leading-[34px] font-bold tracking-[-1.2px] text-shinta-ink md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
            {heading}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:gap-10">
          {blocks.map((block) => (
            <div className="flex flex-col gap-2" key={block.title}>
              <h3 className="text-[19px] leading-[26px] font-semibold tracking-[-0.4px] text-shinta-ink">
                {block.title}
              </h3>
              <p className="text-[16px] leading-[25px] text-shinta-stone">
                {block.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

type IncludesProps = {
  heading: string;
  items: readonly string[];
};

export function LandingIncludes({ heading, items }: IncludesProps) {
  return (
    <section className="bg-shinta-canvas py-14 md:py-20">
      <div className={cn(SHELL, "flex flex-col gap-8")}>
        <h2 className="max-w-[700px] text-[30px] leading-[34px] font-bold tracking-[-1.2px] text-shinta-ink md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
          {heading}
        </h2>

        <ul className="grid gap-x-10 gap-y-4 md:grid-cols-2">
          {items.map((item) => (
            <li
              className="flex items-start gap-3 text-[16px] leading-[25px] text-shinta-ink"
              key={item}
            >
              <span
                aria-hidden="true"
                className="mt-[3px] grid size-[20px] shrink-0 place-items-center rounded-full bg-totem-tech text-totem-navy"
              >
                <Check className="size-3" strokeWidth={3} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export type LandingProject = {
  image: string;
  label: string;
  name: string;
  note: string;
};

type ProjectsProps = {
  heading: string;
  projects: readonly LandingProject[];
};

export function LandingProjects({ heading, projects }: ProjectsProps) {
  return (
    <section className="bg-shinta-canvas py-14 md:py-20">
      <div className={cn(SHELL, "flex flex-col gap-8")}>
        <h2 className="max-w-[700px] text-[30px] leading-[34px] font-bold tracking-[-1.2px] text-shinta-ink md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
          {heading}
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article className="flex flex-col gap-3" key={project.name}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-totem-surface-secondary">
                <Image
                  alt={`Proyecto ${project.name}: ${project.label}`}
                  className="object-cover"
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, calc(100vw - 40px)"
                  src={shintaAsset(project.image)}
                  unoptimized
                />
              </div>
              <h3 className="text-[18px] leading-[24px] font-semibold tracking-[-0.4px] text-shinta-ink">
                {project.name}
              </h3>
              <p className="text-[15px] leading-[23px] text-shinta-stone">
                {project.note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export type LandingFaqItem = {
  answer: string;
  question: string;
};

type FaqProps = {
  heading: string;
  items: readonly LandingFaqItem[];
};

export function LandingFaq({ heading, items }: FaqProps) {
  return (
    <section className="bg-shinta-canvas py-14 md:py-20">
      <div className={cn(SHELL, "flex flex-col gap-8")}>
        <h2 className="max-w-[700px] text-[30px] leading-[34px] font-bold tracking-[-1.2px] text-shinta-ink md:text-[40px] md:leading-[44px] md:tracking-[-1.6px]">
          {heading}
        </h2>

        <div className="flex flex-col divide-y divide-shinta-ink/10 border-y border-shinta-ink/10">
          {items.map((item) => (
            <details className="group py-5" key={item.question}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[17px] leading-[24px] font-semibold text-shinta-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-totem-focus">
                <h3 className="text-[17px] leading-[24px] font-semibold">
                  {item.question}
                </h3>
                <span
                  aria-hidden="true"
                  className="grid size-7 shrink-0 place-items-center rounded-full bg-totem-off-white text-totem-navy transition-transform duration-300 group-open:rotate-45 dark:bg-totem-tech"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[820px] text-[16px] leading-[25px] text-shinta-stone">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

type CredentialProps = {
  body: string;
  eyebrow: string;
  name: string;
};

/**
 * A single named client stated in words. Used where the work is real but no
 * image asset has been cleared for publication yet.
 */
export function LandingCredential({ body, eyebrow, name }: CredentialProps) {
  return (
    <section className="bg-shinta-canvas py-14 md:py-20">
      <div className={SHELL}>
        <div className="flex flex-col gap-4 rounded-[28px] bg-totem-surface-secondary px-6 py-8 md:px-10 md:py-12">
          <SectionEyebrow className="text-totem-creative-ink">
            {eyebrow}
          </SectionEyebrow>
          <h2 className="text-[28px] leading-[32px] font-bold tracking-[-1.1px] text-shinta-ink md:text-[36px] md:leading-[40px] md:tracking-[-1.44px]">
            {name}
          </h2>
          <p className="max-w-[720px] text-[16px] leading-[25px] text-shinta-stone xl:text-[17px] xl:leading-[27px]">
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
