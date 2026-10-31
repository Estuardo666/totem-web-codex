"use client";

import { BlogPostCard, type BlogPostCardProps } from "../shared/BlogPostCard";
import { socialClients, webProjects } from "@/lib/portfolio";

const TOTEM_AVATAR = "/brand/logo-light.png";

const BLOG_POSTS: Omit<BlogPostCardProps, "delay">[] = [
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: `Proyecto ${webProjects.transcity.name}`,
    coverSrc: webProjects.transcity.image,
    date: webProjects.transcity.category,
    href: webProjects.transcity.url,
    title: "TransCity Norwalk: reservas de transporte en línea",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: `Proyecto ${webProjects.aprendiendoJuntos.name}`,
    coverSrc: webProjects.aprendiendoJuntos.image,
    date: webProjects.aprendiendoJuntos.category,
    href: webProjects.aprendiendoJuntos.url,
    title: "Aprendiendo Juntos: un centro neuropsicopedagógico en Loja",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: `Proyecto ${socialClients.opticaLoja.name}`,
    coverSrc: socialClients.opticaLoja.image,
    date: socialClients.opticaLoja.category,
    href: socialClients.opticaLoja.url,
    title: "Óptica Loja: reels sobre salud visual",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: `Proyecto ${webProjects.dermatologika.name}`,
    coverSrc: webProjects.dermatologika.image,
    date: webProjects.dermatologika.category,
    href: webProjects.dermatologika.url,
    title: "Fundación Dermatológika: salud y acción social en el sur del Ecuador",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: `Proyecto ${socialClients.draClaudiaMunoz.name}`,
    coverSrc: socialClients.draClaudiaMunoz.image,
    date: socialClients.draClaudiaMunoz.category,
    href: socialClients.draClaudiaMunoz.url,
    title: "Dra. Claudia Muñoz: contenido educativo en Instagram",
  },
  {
    authorAvatarSrc: TOTEM_AVATAR,
    authorName: "Tótem Mass Media",
    coverAlt: `Proyecto ${webProjects.mujeresInquebrantables.name}`,
    coverSrc: webProjects.mujeresInquebrantables.image,
    date: webProjects.mujeresInquebrantables.category,
    href: webProjects.mujeresInquebrantables.url,
    title: "Mujeres Inquebrantables: una fundación para emprendedoras",
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
