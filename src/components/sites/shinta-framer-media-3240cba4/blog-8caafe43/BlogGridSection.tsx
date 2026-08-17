"use client";

import { BlogPostCard, type BlogPostCardProps } from "../shared/BlogPostCard";
import { shintaAsset } from "../shared/site";

const TOTEM_AVATAR = "/brand/logo-light.png";

const BLOG_POSTS: Omit<BlogPostCardProps, "delay">[] = [
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto TransCity",
    coverSrc: shintaAsset("images/90da175d3b991e31.jpg"),
    date: "Diseño y desarrollo web",
    href: "/#projects",
    title: "TransCity: una web que opera el negocio",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto Terra Viva",
    coverSrc: shintaAsset("images/d8288cb19a756a51.jpg"),
    date: "Desarrollo web y contenido",
    href: "/about-us",
    title: "Terra Viva: presencia digital de cero",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto PlayHouse",
    coverSrc: shintaAsset("images/01c3e56a4e3063a0.jpg"),
    date: "Producción audiovisual",
    href: "/contact",
    title: "PlayHouse: fotografía, video y redes",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto Alan",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-agency-helps-brands.jpg",
    date: "Contenido y marketing digital",
    href: "/#projects",
    title: "Alan: contenido comercial y campañas",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto Aprendiendo Juntos",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-improve-content-quality.jpg",
    date: "UX/UI, web y SEO",
    href: "/#projects",
    title: "Aprendiendo Juntos: web orientada a conversión",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Contenido mensual para redes sociales",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-podcasts-build-trust.jpg",
    date: "Estrategia y contenido",
    href: "/contact",
    title: "Contenido mensual para redes sociales",
  },
];

export function BlogGridSection() {
  return (
    <section className="flex justify-center px-5 pt-12 pb-[72px] xl:pt-16 xl:pb-[120px]">
      <div className="flex w-full max-w-[1280px] flex-col gap-6 xl:gap-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-5 md:gap-y-14 xl:grid-cols-3 xl:gap-x-6 xl:gap-y-[72px]">
          {BLOG_POSTS.map((post, index) => (
            <BlogPostCard key={post.title} {...post} delay={index * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
