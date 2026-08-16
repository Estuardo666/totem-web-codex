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
    date: "Capacidades demostradas",
    href: "/#projects",
    title: "TransCity: plataformas e integraciones",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto Terra Viva",
    coverSrc: shintaAsset("images/d8288cb19a756a51.jpg"),
    date: "Capacidades demostradas",
    href: "/about-us",
    title: "Terra Viva: branding y desarrollo web",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Proyecto PlayHouse",
    coverSrc: shintaAsset("images/01c3e56a4e3063a0.jpg"),
    date: "Capacidades demostradas",
    href: "/contact",
    title: "PlayHouse: producción audiovisual",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Producto FocusGuard",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-agency-helps-brands.jpg",
    date: "Capacidades demostradas",
    href: "/#projects-focusguard",
    title: "FocusGuard: software de productividad",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Totem OS y TotemHub",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-improve-content-quality.jpg",
    date: "Capacidades demostradas",
    href: "/#projects-totem-os",
    title: "Totem OS y TotemHub: sistemas internos",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: "Totem Auto Edit",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-podcasts-build-trust.jpg",
    date: "Capacidades demostradas",
    href: "/#projects-auto-edit",
    title: "Totem Auto Edit: automatización audiovisual",
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
