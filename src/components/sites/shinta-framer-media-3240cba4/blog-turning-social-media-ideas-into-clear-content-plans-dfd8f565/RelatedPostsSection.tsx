"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";

import { BlogPostCard } from "../shared/BlogPostCard";
import {
  SectionEyebrow,
  ShiftButtonContent,
} from "../shared/ShintaPrimitives";
import { shintaAsset } from "../shared/site";

const STROKE_PATH_LENGTH = 2124.1;
const STROKE_PATH_D =
  "M 0 60.513 C 475.401 -182.756 521.461 396.277 880.344 242.812 C 1039.017 187.021 1033.094 70.262 936 60.511 C 864.476 53.329 800.556 96.75 762.531 170.2 C 715 262.012 710.754 555.991 1178 425.513";

const headerVariants: Variants = {
  hidden: { opacity: 0.001, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { damping: 24, stiffness: 180, type: "spring" },
  },
};

const posts = [
  {
    authorAvatarSrc: "/brand/logo-light.png",
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto Terra Viva",
    coverSrc: shintaAsset("images/90da175d3b991e31.jpg"),
    date: "Desarrollo web y contenido",
    href: "/about-us",
    title: "Terra Viva: presencia digital de cero",
  },
  {
    authorAvatarSrc: "/brand/logo-light.png",
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto PlayHouse",
    coverSrc: shintaAsset("images/01c3e56a4e3063a0.jpg"),
    date: "Producción audiovisual",
    href: "/contact",
    title: "PlayHouse: fotografía, video y redes",
  },
  {
    authorAvatarSrc: "/brand/logo-light.png",
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto Aprendiendo Juntos",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-agency-helps-brands.jpg",
    date: "UX/UI, web y SEO",
    href: "/#projects",
    title: "Aprendiendo Juntos: web orientada a conversión",
  },
];

export function RelatedPostsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="flex justify-center px-5 py-[72px] md:py-24 xl:py-[120px]">
      <div className="relative flex w-full max-w-[1280px] flex-col gap-8 md:gap-10 xl:gap-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-[-150px] left-[-102px] z-0 hidden h-[653.15px] w-[1446.4px] place-items-center xl:grid"
        >
          <svg
            className="h-[1446px] w-[1446px]"
            fill="none"
            viewBox="0 0 1170 1170"
          >
            <motion.path
              d={STROKE_PATH_D}
              initial={{
                strokeDashoffset: reduceMotion ? 0 : STROKE_PATH_LENGTH,
              }}
              stroke="var(--totem-border)"
              strokeDasharray={STROKE_PATH_LENGTH}
              strokeLinecap="butt"
              strokeWidth="10"
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      delay: 0.2,
                      duration: 1.6,
                      ease: [0.22, 1, 0.36, 1],
                    }
              }
              viewport={{ once: true, amount: 0.2 }}
              whileInView={reduceMotion ? undefined : { strokeDashoffset: 0 }}
            />
          </svg>
        </div>

        <motion.div
          className="relative z-10 flex w-full flex-col items-start gap-5 md:flex-row md:items-end md:justify-between xl:flex-row xl:items-end xl:justify-between"
          initial={reduceMotion ? undefined : "hidden"}
          variants={headerVariants}
          viewport={{ amount: 0.2, once: true }}
          whileInView="visible"
        >
          <div className="flex flex-col gap-2">
            <div className="flex">
              <SectionEyebrow className="inline-flex rounded-[40px] bg-shinta-pink px-2 py-1 text-shinta-ink">
                PROYECTOS
              </SectionEyebrow>
            </div>
            <h2 className="text-[34px] leading-[38px] font-bold tracking-[-1.36px] text-shinta-ink md:text-[44px] md:leading-[48px] md:tracking-[-1.76px] xl:text-[64px] xl:leading-[70.4px] xl:tracking-[-2.56px]">
              Proyectos que demuestran el trabajo
            </h2>
          </div>

          <Link
            className="shift-button group flex h-[57.2px] w-full items-center focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-shinta-ink md:w-[230px]"
            href="/blog"
          >
            <ShiftButtonContent
              className="[--shift-button-icon-size:57px]"
              labelClassName="flex h-[57px] items-center justify-center rounded-[44px] bg-totem-action px-6 py-4 text-[16px] font-bold text-totem-action-text"
            >
              Ver proyectos
            </ShiftButtonContent>
          </Link>
        </motion.div>

        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-3 xl:gap-6">
          {posts.map((post, index) => (
            <BlogPostCard
              key={post.title}
              authorAvatarSrc={post.authorAvatarSrc}
              authorName={post.authorName}
              coverAlt={post.coverAlt}
              coverSrc={post.coverSrc}
              date={post.date}
              delay={index * 0.09}
              href={post.href}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
