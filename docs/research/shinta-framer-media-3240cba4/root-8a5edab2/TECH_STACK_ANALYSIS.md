# Source and clone stack

The source is a Framer site with generated React components, inline SVG artwork, self-hosted Open Sauce One, MP4 media from Framer's CDN, and Lenis-style smooth scrolling. Its responsive output contains hydrated component variants, which explains the temporary server-rendered hamburger observed before the desktop navigation settles.

The clone uses Next.js 16 App Router, React 19, strict TypeScript, Tailwind CSS v4, localized static assets, and Framer Motion where stateful motion benefits from declarative transitions. Semantic HTML and native controls replace generated Framer wrappers while preserving the rendered geometry and behavior.
