# Behavior contract

## Navigation

The 76px dark pill is fixed 20px from the desktop edges. It slides to `translateY(-76px)` while scrolling down and returns when the user scrolls upward. Link labels use a two-copy vertical hover swap. Compact layouts retain the full navigation at 768px and use the stacked variant at 390px.

## Hero media

Three portrait MP4 files are visually stacked with roughly 16px offsets. They load muted and paused. The 70px play control starts or pauses only the front video. The service wording follows a curved pink path and moves continuously.

## Scroll choreography

Pain points place a 900px sticky stage in a 3600px track and advance five messages from scroll progress. Services contain four separate sticky panels whose top positions are 0, 900, 1800, and 2700px within a 3600px track. The rest of the page remains normal-flow content.

## Media and marquees

The two feature videos and the contact phone video autoplay, loop, and stay muted with `playsInline`. The logo strip uses a seamless linear marquee. Reduced-motion users see static media positions and no marquee travel.

## Pricing and FAQ

The pricing toggle changes the active label treatment over about 350ms; the captured source keeps the same displayed prices in both states. FAQ is single-open. The selected answer is relatively positioned and opaque while inactive answers are absolutely positioned and hidden; the observed transition settles in roughly 1.5s.

## Links

Internal links use local routes where those pages exist; this one-page clone keeps source project/contact/blog destinations as normal hrefs. External destinations open normally and retain keyboard focus visibility.
