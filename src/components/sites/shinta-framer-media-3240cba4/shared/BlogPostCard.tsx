"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { SectionEyebrow } from "./ShintaPrimitives";

export type BlogPostCardProps = {
  authorAvatarSrc: string;
  authorName: string;
  coverAlt: string;
  coverSrc: string;
  date: string;
  delay?: number;
  href: string;
  title: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0.001, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { damping: 24, stiffness: 180, type: "spring" },
  },
};

export function BlogPostCard({
  authorAvatarSrc,
  authorName,
  coverAlt,
  coverSrc,
  date,
  delay = 0,
  href,
  title,
}: BlogPostCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="min-w-0"
      initial={reduceMotion ? undefined : "hidden"}
      transition={{ delay: reduceMotion ? 0 : delay }}
      variants={cardVariants}
      viewport={{ amount: 0.2, once: true }}
      whileInView="visible"
    >
      <Link
      className="flex min-w-0 flex-col gap-6 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-shinta-ink"
        href={href}
      >
        <div className="relative aspect-[1.33442] w-full overflow-hidden rounded-[24px]">
          <Image
            alt={coverAlt}
            className="object-cover"
            fill
            sizes="(min-width: 1200px) 33vw, (min-width: 768px) 50vw, 100vw"
            src={coverSrc}
            unoptimized
          />
        </div>

        <div className="flex flex-col gap-2">
          <SectionEyebrow className="text-shinta-muted">{date}</SectionEyebrow>
          <h3 className="max-w-full break-words text-[24px] leading-[29px] font-bold tracking-[-0.96px] text-shinta-ink md:text-[26px] md:leading-[31px] md:tracking-[-1.04px] xl:text-[32px] xl:leading-[38.4px] xl:tracking-[-1.28px]">
            {title}
          </h3>
        </div>

        <div className="flex h-10 items-center gap-2">
          <div className="relative size-10 shrink-0 overflow-hidden rounded-full">
            <Image
              alt={`Identidad visual de ${authorName}`}
              className="object-cover"
              fill
              sizes="40px"
              src={authorAvatarSrc}
              unoptimized
            />
          </div>
          <p className="text-[16px] leading-[22.4px] text-shinta-muted">
            Por <span className="text-[18px] leading-[27px] text-shinta-ink">{authorName}</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
