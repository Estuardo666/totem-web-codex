"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect height="18" rx="5" ry="5" width="18" x="3" y="3" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

type TeamMemberCardProps = {
  className?: string;
  delay?: number;
  href: string;
  imageSrc: string;
  kind: "instagram" | "web";
  name: string;
  role: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { damping: 24, stiffness: 180, type: "spring" },
  },
};

export function TeamMemberCard({
  className,
  delay = 0,
  href,
  imageSrc,
  kind,
  name,
  role,
}: TeamMemberCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "flex flex-col justify-center gap-2.5 rounded-[24px] bg-white p-2",
        className,
      )}
      initial={reduceMotion ? undefined : "hidden"}
      transition={{ delay: reduceMotion ? 0 : delay }}
      variants={cardVariants}
      viewport={{ amount: 0.3, once: true }}
      whileInView="visible"
    >
      <div className="relative aspect-[382/453] w-full overflow-hidden rounded-[16px]">
        <Image
          alt={`${name}: ${role}`}
          className="object-cover object-top"
          fill
          sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={imageSrc}
          unoptimized
        />

        <a
          aria-label={
            kind === "instagram"
              ? `${name} en Instagram`
              : `Visitar el sitio web de ${name}`
          }
          className="absolute top-3 right-3 grid size-10 place-items-center rounded-full bg-shinta-ink text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink md:top-4 md:right-4 md:size-12"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          {kind === "instagram" ? (
            <InstagramIcon className="size-4" />
          ) : (
            <ArrowUpRight aria-hidden="true" className="size-5" />
          )}
        </a>
      </div>

      <div className="flex flex-col p-2">
        <h3 className="text-[24px] leading-[29px] font-bold tracking-[-0.96px] text-shinta-ink md:text-[26px] md:leading-[31px] md:tracking-[-1.04px] xl:text-[32px] xl:leading-[38.4px] xl:tracking-[-1.28px]">
          {name}
        </h3>
        <p className="text-[16px] leading-[24px] text-shinta-muted xl:text-[18px] xl:leading-[27px]">
          {role}
        </p>
      </div>
    </motion.div>
  );
}
