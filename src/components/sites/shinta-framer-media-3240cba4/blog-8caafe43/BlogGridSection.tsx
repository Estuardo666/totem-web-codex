"use client";

import { BlogPostCard, type BlogPostCardProps } from "../shared/BlogPostCard";
import { shintaAsset } from "../shared/site";

const AVATAR_KRISTANTO = shintaAsset("images/e202cc3fcb7f8b83.png");
const AVATAR_BUDI = shintaAsset("images/062febe8ad7682a7.png");
const AVATAR_KARINA = shintaAsset("images/187a0bff84102aca.png");

const BLOG_POSTS: Omit<BlogPostCardProps, "delay">[] = [
  {
    authorAvatarSrc: AVATAR_KRISTANTO,
    authorName: "Kristanto Mahera",
    coverAlt: "Why Good Copywriting Matters a Lot",
    coverSrc: shintaAsset("images/90da175d3b991e31.jpg"),
    date: "January 27, 2026",
    href: "/blog/why-good-copywriting-matters",
    title: "Why Good Copywriting Matters a Lot",
  },
  {
    authorAvatarSrc: AVATAR_BUDI,
    authorName: "Budi Pandu",
    coverAlt: "Turning Social Media Ideas Into Content Plans",
    coverSrc: shintaAsset("images/d8288cb19a756a51.jpg"),
    date: "January 27, 2026",
    href: "/blog/turning-social-media-ideas-into-clear-content-plans",
    title: "Turning Social Media Ideas Into Content Plans",
  },
  {
    authorAvatarSrc: AVATAR_KARINA,
    authorName: "Karina Kumala",
    coverAlt: "Why Social Media Is Never a One Person Job",
    coverSrc: shintaAsset("images/01c3e56a4e3063a0.jpg"),
    date: "January 27, 2026",
    href: "/blog/why-great-social-media-is-never-a-one-person-job",
    title: "Why Social Media Is Never a One Person Job",
  },
  {
    authorAvatarSrc: AVATAR_KRISTANTO,
    authorName: "Kristanto Mahera",
    coverAlt: "How a Social Media Agency Helps Brands",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-agency-helps-brands.jpg",
    date: "January 27, 2026",
    href: "/blog/how-a-social-media-agency-helps-brands-grow-faster",
    title: "How a Social Media Agency Helps Brands",
  },
  {
    authorAvatarSrc: AVATAR_BUDI,
    authorName: "Budi Pandu",
    coverAlt: "How to Improve Social Media Content Quality",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-improve-content-quality.jpg",
    date: "January 27, 2026",
    href: "/blog/why-video-calls-improve-social-media-content-quality",
    title: "How to Improve Social Media Content Quality",
  },
  {
    authorAvatarSrc: AVATAR_KARINA,
    authorName: "Karina Kumala",
    coverAlt: "How Podcasts Help Brands Build Trust",
    coverSrc:
      "/sites/shinta-framer-media-3240cba4/blog-8caafe43/images/post-podcasts-build-trust.jpg",
    date: "January 27, 2026",
    href: "/blog/how-podcasts-help-brands-build-trust-on-social-media",
    title: "How Podcasts Help Brands Build Trust",
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
