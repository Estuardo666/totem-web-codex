/**
 * Service-and-city landings, shared by the navbar and the footer so the two
 * never drift apart. These pages are only reachable through these links and
 * the sitemap, so dropping one here effectively orphans it.
 */
export const SERVICE_LANDINGS = [
  {
    href: "/produccion-audiovisual-loja",
    label: "Producción audiovisual en Loja",
    short: "Audiovisual · Loja",
  },
  {
    href: "/diseno-web-loja",
    label: "Diseño y desarrollo web en Loja",
    short: "Web · Loja",
  },
  {
    href: "/marketing-digital-zamora",
    label: "Marketing digital en Zamora",
    short: "Marketing · Zamora",
  },
  {
    href: "/video-institucional-zamora",
    label: "Video institucional en Zamora",
    short: "Institucional · Zamora",
  },
] as const;
