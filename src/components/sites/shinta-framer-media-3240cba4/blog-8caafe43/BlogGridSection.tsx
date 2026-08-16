"use client";

import { BlogPostCard, type BlogPostCardProps } from "../shared/BlogPostCard";
import { shintaAsset } from "../shared/site";

const AVATAR_KRISTANTO = shintaAsset("images/e202cc3fcb7f8b83.png");
const AVATAR_BUDI = shintaAsset("images/062febe8ad7682a7.png");
const AVATAR_KARINA = shintaAsset("images/187a0bff84102aca.png");

const BLOG_POSTS: Omit<BlogPostCardProps, "delay">[] = [
  {
    authorAvatarSrc: AVATAR_KRISTANTO,
    authorName: "Kristanto Mahera",
    coverAlt: "Por qué un buen copywriting importa tanto",
    coverSrc: shintaAsset("images/90da175d3b991e31.jpg"),
    date: "27 de enero de 2026",
    href: "/blog/why-good-copywriting-matters",
    title: "Por qué un buen copywriting importa tanto",
  },
  {
    authorAvatarSrc: AVATAR_BUDI,
    authorName: "Budi Pandu",
    coverAlt: "Cómo convertir ideas para redes sociales en planes de contenido",
    coverSrc: shintaAsset("images/d8288cb19a756a51.jpg"),
    date: "27 de enero de 2026",
    href: "/blog/turning-social-media-ideas-into-clear-content-plans",
    title: "Cómo convertir ideas para redes sociales en planes de contenido",
  },
  {
    authorAvatarSrc: AVATAR_KARINA,
    authorName: "Karina Kumala",
    coverAlt: "Por qué las redes sociales nunca son trabajo de una sola persona",
    coverSrc: shintaAsset("images/01c3e56a4e3063a0.jpg"),
    date: "27 de enero de 2026",
    href: "/blog/why-great-social-media-is-never-a-one-person-job",
    title: "Por qué las redes sociales nunca son trabajo de una sola persona",
  },
  {
    authorAvatarSrc: AVATAR_KRISTANTO,
    authorName: "Kristanto Mahera",
    coverAlt: "Cómo una agencia de redes sociales ayuda a las marcas",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-agency-helps-brands.jpg",
    date: "27 de enero de 2026",
    href: "/blog/how-a-social-media-agency-helps-brands-grow-faster",
    title: "Cómo una agencia de redes sociales ayuda a las marcas",
  },
  {
    authorAvatarSrc: AVATAR_BUDI,
    authorName: "Budi Pandu",
    coverAlt: "Cómo mejorar la calidad del contenido para redes sociales",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-improve-content-quality.jpg",
    date: "27 de enero de 2026",
    href: "/blog/why-video-calls-improve-social-media-content-quality",
    title: "Cómo mejorar la calidad del contenido para redes sociales",
  },
  {
    authorAvatarSrc: AVATAR_KARINA,
    authorName: "Karina Kumala",
    coverAlt: "Cómo los pódcasts ayudan a las marcas a generar confianza",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-podcasts-build-trust.jpg",
    date: "27 de enero de 2026",
    href: "/blog/how-podcasts-help-brands-build-trust-on-social-media",
    title: "Cómo los pódcasts ayudan a las marcas a generar confianza",
  },
];

export function BlogGridSection() {
  return (
    <section className="flex justify-center px-5 pt-12 pb-[72px] xl:pt-16 xl:pb-[120px]">
      <div className="flex w-full max-w-[1280px] flex-col gap-6 xl:gap-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-5 md:gap-y-14 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-[72px]">
          {BLOG_POSTS.map((post, index) => (
            <BlogPostCard key={post.href} {...post} delay={index * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
