# FaqSection Specification

## Overview
- Target file: src/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/FaqSection.tsx
- Screenshot: docs/design-references/shinta-framer-media-3240cba4/root-8a5edab2/original-desktop-faq-open-second.png
- Interaction model: click-driven

## DOM Structure
- Container: section with source name Sections/FAQ
- Container — div, 630x590px; display flex, position relative — FAQWhat does your social media agency do?We help brands grow on social media. We plan cont

## Computed Styles (exact desktop values)

### Container
- fontSize: 12px
- fontWeight: 400
- fontFamily: sans-serif
- color: rgb(0, 0, 0)
- padding: 120px 20px
- width: 1424.8px
- height: 830.4px
- display: flex
- flexDirection: row
- justifyContent: center
- alignItems: center
- gap: 10px
- border: 0px none rgb(0, 0, 0)
- overflow: clip
- position: relative
- opacity: 1
- transition: all
- objectFit: fill

### First h2
- fontSize: 64px
- fontWeight: 700
- fontFamily: "Open Sauce One", "Open Sauce One Placeholder", sans-serif
- lineHeight: 70.4px
- letterSpacing: -2.56px
- color: rgb(28, 25, 23)
- transition: all
- objectFit: fill

### First h6
- fontSize: 18px
- fontWeight: 700
- fontFamily: "Open Sauce One", "Open Sauce One Placeholder", sans-serif
- lineHeight: 25.2px
- letterSpacing: -0.36px
- color: rgb(28, 25, 23)
- transition: all
- objectFit: fill

### First p
- fontSize: 18px
- fontWeight: 400
- fontFamily: "Open Sauce One", "Open Sauce One Placeholder", sans-serif
- lineHeight: 27px
- color: rgb(68, 64, 60)
- transition: all
- objectFit: fill

## States & Behaviors
Single-open accordion. The default first answer is open. Clicking another question makes that answer position relative and opacity 1, while other answers become position absolute and opacity 0. The transition settles in about 1.5 seconds.

## Assets
- N/A

## Links
- N/A

## Text Content (verbatim)
FAQWhat does your social media agency do?We help brands grow on social media. We plan content, design posts, write captions, and manage accounts. Our goal is to help you get more attention, more engagement, and more leads.Which social media platforms do you manage?We manage Instagram, TikTok, X, LinkedIn, and Facebook. If your audience hangs out there, we can help you show up the right way.Do you create the content or do we need to provide it?We handle everything. Strategy, ideas, visuals, captions, and posting. If you already have content, we can also optimize and improve it.How long does it take to see results?Most clients see early growth in the first one to three months. Real results come from consistency, testing, and learning what your audience loves.Who is this service best for?This is perfect for founders, startups, and brands that want to grow online but do not have time to manage social media daily.

## Responsive Behavior
- Desktop 1440x900: 1425x830px; y 19071px; heading 64px.
- Tablet 768x900: 753x679px; heading 28px.
- Mobile 390x844: 375x833px; heading 28px.
- Breakpoint evidence: composition changes by 768px; 390px and 768px variants use stacked content.

