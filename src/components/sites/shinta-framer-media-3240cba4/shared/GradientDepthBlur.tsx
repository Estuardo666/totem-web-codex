import { cn } from "@/lib/utils";

type Direction = "bottomToTop" | "topToBottom" | "leftToRight" | "rightToLeft";

type GradientDepthBlurProps = {
  backgroundColor?: string;
  backgroundOpacity?: number;
  blurMax?: number;
  className?: string;
  direction?: Direction;
  enableNoise?: boolean;
  maxBlurAt?: number;
  noiseOpacity?: number;
  saturation?: number;
};

const directions: Record<Direction, string> = {
  bottomToTop: "to top",
  leftToRight: "to right",
  rightToLeft: "to left",
  topToBottom: "to bottom",
};

const LAYER_COUNT = 8;

/**
 * Port of the Framer "GradientDepthBlur" component: eight stacked
 * backdrop-filter layers with staggered masks build a progressive
 * (Apple-style) blur ramp instead of a single hard blur edge.
 */
export function GradientDepthBlur({
  backgroundColor = "var(--shinta-canvas, #f5f5f3)",
  backgroundOpacity = 0,
  blurMax = 30,
  className,
  direction = "rightToLeft",
  enableNoise = false,
  maxBlurAt = 87,
  noiseOpacity = 0.05,
  saturation = 180,
}: GradientDepthBlurProps) {
  const cssDirection = directions[direction];
  const p = Math.max(0, Math.min(100, maxBlurAt));
  const opacity = Math.max(0, Math.min(1, backgroundOpacity));

  const stops: string[] = [];
  const stopsCount = 32;
  for (let i = 0; i <= stopsCount; i += 1) {
    const t = i / stopsCount;
    const alpha = -(Math.cos(Math.PI * t) - 1) / 2;
    stops.push(`rgba(0,0,0,${alpha.toFixed(4)}) ${(t * p).toFixed(2)}%`);
  }
  stops.push(`rgba(0,0,0,1) ${p < 100 ? "100%" : "101%"}`);
  const globalMaskImage = `linear-gradient(${cssDirection}, ${stops.join(", ")})`;

  const layers = Array.from({ length: LAYER_COUNT }, (_, index) => {
    const i = index + 1;
    const progress = i / LAYER_COUNT;
    const layerBlur = progress ** 2 * blurMax;
    const stopStart = Math.max(0, ((i - 1) / LAYER_COUNT) * p);
    const stopEnd = (i / LAYER_COUNT) * p;
    const mask = `linear-gradient(${cssDirection}, transparent 0%, transparent ${stopStart.toFixed(2)}%, black ${stopEnd.toFixed(2)}%, black 100%)`;

    return (
      <div
        aria-hidden="true"
        key={i}
        style={{
          backdropFilter: `blur(${layerBlur.toFixed(1)}px) saturate(${saturation}%)`,
          inset: 0,
          maskImage: mask,
          pointerEvents: "none",
          position: "absolute",
          WebkitBackdropFilter: `blur(${layerBlur.toFixed(1)}px) saturate(${saturation}%)`,
          WebkitMaskImage: mask,
        }}
      />
    );
  });

  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none relative overflow-hidden", className)}
      style={{ transform: "translateZ(0)" }}
    >
      {layers}
      {enableNoise ? (
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            inset: 0,
            maskImage: globalMaskImage,
            opacity: noiseOpacity,
            pointerEvents: "none",
            position: "absolute",
            WebkitMaskImage: globalMaskImage,
          }}
        />
      ) : null}
      {opacity > 0 ? (
        <div
          style={{
            background: backgroundColor,
            inset: 0,
            maskImage: globalMaskImage,
            opacity,
            pointerEvents: "none",
            position: "absolute",
            WebkitMaskImage: globalMaskImage,
          }}
        />
      ) : null}
    </div>
  );
}
