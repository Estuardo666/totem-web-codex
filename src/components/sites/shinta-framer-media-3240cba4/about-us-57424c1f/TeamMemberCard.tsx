"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

import { shintaAsset } from "../shared/site";

function XIcon({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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
  imageSrc: string;
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
  imageSrc,
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
          className="object-cover"
          fill
          sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={shintaAsset(`images/${imageSrc}`)}
          unoptimized
        />

        <div className="absolute top-3 right-3 flex h-10 w-[84px] items-center justify-center gap-1 md:top-4 md:right-4 md:h-12 md:w-[100px]">
          <a
            aria-label={`${name} on X`}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-shinta-ink text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink md:size-12"
            href="https://x.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <XIcon className="size-4" />
          </a>
          <a
            aria-label={`${name} on Instagram`}
            className="grid size-10 shrink-0 place-items-center rounded-full bg-shinta-ink text-white transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shinta-ink md:size-12"
            href="https://instagram.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            <InstagramIcon className="size-4" />
          </a>
        </div>
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
