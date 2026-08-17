"use client";

import Link from "next/link";
import { useId } from "react";

import { cn } from "@/lib/utils";

type LiquidMorphButtonProps = {
  blobBottomOffset?: number;
  blobColor?: string;
  blobRise?: number;
  blobScale?: number;
  blobSize?: number;
  blobSpacing?: number;
  blobTransitionDuration?: number;
  className?: string;
  hoverDelayStep?: number;
  hoverTextColor?: string;
  href: string;
  label: string;
  stdDeviation?: number;
  transitionDuration?: number;
};

/**
 * Port of the Framer "LiquidMorphButton" component: gooey blobs rise behind the
 * label on hover and morph into a solid fill through an SVG goo filter.
 */
export function LiquidMorphButton({
  blobBottomOffset = 24,
  blobColor = "var(--totem-navy)",
  blobRise = 135,
  blobScale = 4.6,
  blobSize = 24,
  blobSpacing = 60,
  blobTransitionDuration = 700,
  className,
  hoverDelayStep = 50,
  hoverTextColor = "var(--totem-action)",
  href,
  label,
  stdDeviation = 10,
  transitionDuration = 500,
}: LiquidMorphButtonProps) {
  const instanceId = useId().replace(/:/g, "");
  const rootClass = `lmb_${instanceId}`;
  const filterId = `goo_${instanceId}`;

  const css = `
.${rootClass} .lmb_label {
  position: relative;
  z-index: 2;
  transition: color ${transitionDuration}ms cubic-bezier(0.23, 1, 0.32, 1);
}
.${rootClass} .lmb_bg {
  position: absolute;
  inset: 0;
  z-index: 1;
  filter: url(#${filterId});
  pointer-events: none;
}
.${rootClass} .lmb_blob {
  position: absolute;
  width: ${blobSize}px;
  height: ${blobSize}px;
  border-radius: 999px;
  background: ${blobColor};
  bottom: ${-Math.abs(blobBottomOffset)}px;
  transition: transform ${blobTransitionDuration}ms cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform;
}
.${rootClass} .lmb_blob:nth-child(1) { left: calc(50% - ${blobSpacing}px); transition-delay: 0ms; transform: translateX(-50%) translateY(0) scale(0); }
.${rootClass} .lmb_blob:nth-child(2) { left: 50%; transition-delay: ${hoverDelayStep}ms; transform: translateX(-50%) translateY(0) scale(0); }
.${rootClass} .lmb_blob:nth-child(3) { left: calc(50% + ${blobSpacing}px); transition-delay: ${hoverDelayStep * 2}ms; transform: translateX(-50%) translateY(0) scale(0); }

@media (hover: hover) and (pointer: fine) {
  .${rootClass}:hover .lmb_label { color: ${hoverTextColor}; }
  .${rootClass}:hover .lmb_blob {
    transform: translateX(-50%) translateY(-${blobRise}%) scale(${blobScale});
  }
}
.${rootClass}:focus-visible .lmb_label { color: ${hoverTextColor}; }
.${rootClass}:focus-visible .lmb_blob {
  transform: translateX(-50%) translateY(-${blobRise}%) scale(${blobScale});
}

@media (prefers-reduced-motion: reduce) {
  .${rootClass} .lmb_label, .${rootClass} .lmb_blob { transition: none !important; }
}
`;

  return (
    <Link
      className={cn(
        rootClass,
        "relative isolate inline-flex items-center justify-center overflow-hidden rounded-full bg-totem-action text-totem-action-text transition-transform duration-150 ease-out select-none active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-totem-focus",
        className,
      )}
      href={href}
    >
      <style>{css}</style>
      <svg
        aria-hidden="true"
        className="absolute h-0 w-0 overflow-hidden"
        focusable="false"
        height="0"
        width="0"
      >
        <defs>
          <filter
            colorInterpolationFilters="sRGB"
            height="400%"
            id={filterId}
            width="400%"
            x="-150%"
            y="-150%"
          >
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation={stdDeviation}
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              result="goo"
              values=" 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 18 -8"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <span aria-hidden="true" className="lmb_bg">
        <span className="lmb_blob" />
        <span className="lmb_blob" />
        <span className="lmb_blob" />
      </span>

      <span className="lmb_label">{label}</span>
    </Link>
  );
}
