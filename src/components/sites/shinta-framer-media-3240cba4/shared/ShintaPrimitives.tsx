import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ClassNameProps = {
  className?: string;
};

export function ShintaLogo({ className }: ClassNameProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-bold tracking-[-0.06em]",
        className,
      )}
        aria-label="Tótem Mass Media"
    >
      <svg
        aria-hidden="true"
        className="h-[1.15em] w-[1.15em] shrink-0"
        viewBox="0 0 36 36"
        fill="none"
      >
        <path
          d="M4 18c4.2-6.8 7.4-10.2 9.6-10.2 3.5 0-2.1 20.4 1.9 20.4 2.6 0 6.3-6.8 8.2-10.2 1.9-3.5 3.5-6.8 5.3-6.8 2.2 0-.4 6.2 3 6.8"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
      </svg>
        <span>Tótem</span>
    </span>
  );
}

export function SectionEyebrow({
  children,
  className,
}: ClassNameProps & { children: ReactNode }) {
  return (
    <p
      className={cn(
        "text-[12px] leading-[16.8px] font-semibold tracking-[0.96px] uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

type PillLinkProps = {
  children: ReactNode;
  className?: string;
  href: string;
};

type ShiftButtonContentProps = {
  children: ReactNode;
  className?: string;
  /** Shared on both arrow circles. */
  iconClassName?: string;
  iconSizeClassName?: string;
  iconStrokeWidth?: number;
  labelClassName?: string;
  /** Arrow circle shown on hover, on the left. */
  hoverIconClassName?: string;
  /** Arrow circle shown at rest, on the right. */
  restIconClassName?: string;
};

export function ShiftButtonContent({
  children,
  className,
  hoverIconClassName = "bg-totem-tech text-totem-brand",
  iconClassName,
  iconSizeClassName = "size-5",
  iconStrokeWidth = 2.2,
  labelClassName,
  restIconClassName = "bg-totem-brand text-totem-action",
}: ShiftButtonContentProps) {
  const icon = (
    <ArrowUpRight
      aria-hidden="true"
      className={iconSizeClassName}
      strokeWidth={iconStrokeWidth}
    />
  );

  return (
    <span className={cn("shift-button__content", className)}>
      <span
        aria-hidden="true"
        className={cn(
          "shift-button__icon shift-button__icon--leading",
          iconClassName,
          hoverIconClassName,
        )}
      >
        {icon}
      </span>
      <span className={cn("shift-button__label whitespace-nowrap", labelClassName)}>
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "shift-button__icon shift-button__icon--trailing",
          iconClassName,
          restIconClassName,
        )}
      >
        {icon}
      </span>
    </span>
  );
}

export function PillLink({ children, className, href }: PillLinkProps) {
  return (
    <Link
      className={cn(
        "shift-button group inline-flex h-12 items-center rounded-full text-[14px] font-semibold text-totem-action-text focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-totem-focus",
        className,
      )}
      href={href}
    >
      <ShiftButtonContent
        className="[--shift-button-icon-size:28px]"
        iconSizeClassName="size-4"
        iconStrokeWidth={2.25}
        labelClassName="flex h-12 items-center rounded-full bg-totem-action px-5"
      >
        {children}
      </ShiftButtonContent>
    </Link>
  );
}

export function FlowerMark({ className }: ClassNameProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("size-10", className)}
      viewBox="0 0 48 48"
      fill="none"
    >
      <path
        d="M24 3c4.2 0 6.2 8.2 8.9 9.3 2.8 1.2 10-3.1 12.7-.4 2.7 2.7-1.6 9.9-.4 12.7C46.3 27.3 48 29.8 48 34c0 4.2-8.2 6.2-9.3 8.9C37.5 45.7 41.8 53 39.1 55.6c-2.7 2.7-9.9-1.6-12.7-.4C23.7 56.3 21.2 58 17 58c-4.2 0-6.2-8.2-8.9-9.3-2.8-1.2-10 3.1-12.7.4-2.7-2.7 1.6-9.9.4-12.7C-4.3 33.7-6 31.2-6 27c0-4.2 8.2-6.2 9.3-8.9C4.5 15.3.2 8 2.9 5.4c2.7-2.7 9.9 1.6 12.7.4C18.3 4.7 20.8 3 24 3Z"
        fill="currentColor"
        transform="translate(3 -6) scale(.75)"
      />
      <circle cx="24" cy="24" r="5" fill="var(--totem-off-white)" />
    </svg>
  );
}
