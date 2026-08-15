# Layout architecture

The page uses a light full-width canvas and a repeated 20px desktop gutter. Hero, mission, features, projects, comparison, process, testimonials, team, pricing, blog, FAQ, CTA, and footer are normal-flow editorial bands. Pain points and services are tall scroll tracks with viewport-height sticky children.

Desktop is art-directed around 1440×900. At 768px, cards move into one- or two-column tablet arrangements and display typography drops to 28–32px. At 390px, all structural groups use a 16px gutter and a single-column reading order. Desktop-only overlap is removed instead of squeezed.

Media uses fixed aspect-ratio wrappers with `object-cover`. Overflow is clipped on decorative card shells and exposed only where layered portrait cards intentionally peek from behind one another.
