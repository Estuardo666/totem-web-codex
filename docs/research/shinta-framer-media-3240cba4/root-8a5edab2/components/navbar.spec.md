# Navbar Specification

## Overview
- Target file: src/components/sites/shinta-framer-media-3240cba4/root-8a5edab2/Navbar.tsx
- Screenshot: docs/design-references/shinta-framer-media-3240cba4/root-8a5edab2/original-desktop-navbar-visible.png
- Interaction model: scroll- and hover-driven

## DOM Structure
- Container: nav with source name Desktop
- Container — div, 1280x56px; display flex, position relative — ProjectsProjectsAbout UsAbout UsBlogBlogContactContactBook a Call

## Computed Styles (exact desktop values)

### Container
- fontSize: 12px
- fontWeight: 400
- fontFamily: sans-serif
- color: rgb(0, 0, 0)
- padding: 10px 15px
- width: 1424.8px
- height: 76px
- display: flex
- flexDirection: row
- justifyContent: center
- alignItems: center
- gap: 20px
- border: 0px none rgb(0, 0, 0)
- overflow: visible
- position: relative
- opacity: 0
- transform: matrix(1, 0, 0, 1, 0, -76)
- transition: all
- objectFit: fill

### First a
- fontSize: 12px
- fontWeight: 400
- fontFamily: sans-serif
- color: rgb(0, 0, 238)
- transition: all
- objectFit: fill

### First img
- fontSize: 12px
- fontWeight: 400
- fontFamily: sans-serif
- color: rgb(0, 0, 238)
- transition: all
- objectFit: contain

### First p
- fontSize: 16px
- fontWeight: 600
- fontFamily: "Open Sauce One", "Open Sauce One Placeholder", sans-serif
- lineHeight: 16px
- letterSpacing: -0.64px
- color: rgb(244, 244, 243)
- transition: all
- objectFit: fill

## States & Behaviors
Visible at the top and while scrolling upward. On downward scroll it translates from 0px to -76px while retaining a 76px height. Nav labels use two stacked copies; hover shifts both copies down about 25px so the white copy replaces the dark copy. The bar is fixed visually at y=10px with 20px side inset, a #1c1917 surface, and a pill silhouette.

## Assets
- img: /sites/shinta-framer-media-3240cba4/root-8a5edab2/images/75eebb2b07b43c9a.png (source https://framerusercontent.com/images/3J2iAobW3FSPLnwwcW1KCqr2pwM.png?width=1000&height=268)

## Links
- (icon link) -> https://shinta.framer.media/
- ProjectsProjects -> https://shinta.framer.media/projects
- About UsAbout Us -> https://shinta.framer.media/about-us
- BlogBlog -> https://shinta.framer.media/blog
- ContactContact -> https://shinta.framer.media/contact
- Book a Call -> https://cal.com/

## Text Content (verbatim)
ProjectsProjectsAbout UsAbout UsBlogBlogContactContactBook a Call

## Responsive Behavior
- Desktop 1440x900: 1425x76px; y -76px; heading N/A.
- Tablet 768x900: 753x72px; heading N/A.
- Mobile 390x844: 375x72px; heading N/A.
- Breakpoint evidence: composition changes by 768px; 390px and 768px variants use stacked content.

