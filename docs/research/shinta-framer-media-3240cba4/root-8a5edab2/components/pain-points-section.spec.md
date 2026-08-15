# PainPointsSection Specification

## Overview
- Target file: src/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/PainPointsSection.tsx
- Screenshot: docs/design-references/shinta-framer-media-3240cba4/root-8a5edab2/original-desktop-03-pain-01.png
- Interaction model: scroll-driven

## DOM Structure
- Container: section with source name Pain point
- Sticky section — div, 1385x900px; display flex, position sticky — Social media feels harder than it should be
- Scroll — div, 1280x2250px; display flex, position relative — Influencer collaborations that bring views but no resultsPosting consistently but getting 
- Spacer — div, 1385x450px; display block, position relative

## Computed Styles (exact desktop values)

### Container
- fontSize: 12px
- fontWeight: 400
- fontFamily: sans-serif
- color: rgb(0, 0, 0)
- padding: 0px 20px
- width: 1424.8px
- height: 3600px
- display: flex
- flexDirection: column
- justifyContent: center
- alignItems: center
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

### First h5
- fontSize: 24px
- fontWeight: 700
- fontFamily: "Open Sauce One", "Open Sauce One Placeholder", sans-serif
- lineHeight: 33.6px
- letterSpacing: -0.96px
- color: rgb(244, 244, 243)
- transition: all
- objectFit: fill

## States & Behaviors
A 900px-tall inner panel is position sticky with top 0 inside a 3600px section. The five problem statements advance as scrolling crosses successive portions of the sticky range. Text and doodle emphasis update without clicks.

## Assets
- N/A

## Links
- N/A

## Text Content (verbatim)
Social media feels harder than it should beInfluencer collaborations that bring views but no resultsPosting consistently but getting low engagementContent looks “nice” but doesn’t performCampaigns feel forced and salesyNo clear content direction or strategy

## Responsive Behavior
- Desktop 1440x900: 1425x3600px; y 994px; heading 64px.
- Tablet 768x900: 753x3600px; heading 28px.
- Mobile 390x844: 375x3376px; heading 28px.
- Breakpoint evidence: composition changes by 768px; 390px and 768px variants use stacked content.

