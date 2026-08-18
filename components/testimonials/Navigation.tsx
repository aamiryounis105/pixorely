"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationProps {
  onPrev: () => void;
  onNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
}

export default function Navigation({
  onPrev,
  onNext,
  canScrollPrev,
  canScrollNext,
}: NavigationProps) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
      "
    >
      <button
        type="button"
        onClick={onPrev}
        disabled={!canScrollPrev}
        aria-label="Previous reviews"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--card)]
          text-[var(--foreground)]
          transition-all
          duration-300

          hover:border-[var(--primary)]
          hover:bg-[var(--primary)]
          hover:text-white

          disabled:cursor-not-allowed
          disabled:opacity-35
          disabled:hover:border-[var(--border)]
          disabled:hover:bg-[var(--card)]
          disabled:hover:text-[var(--foreground)]
        "
      >
        <ArrowLeft
          size={18}
          strokeWidth={2}
        />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={!canScrollNext}
        aria-label="Next reviews"
        className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          border
          border-[var(--border)]
          bg-[var(--card)]
          text-[var(--foreground)]
          transition-all
          duration-300

          hover:border-[var(--primary)]
          hover:bg-[var(--primary)]
          hover:text-white

          disabled:cursor-not-allowed
          disabled:opacity-35
          disabled:hover:border-[var(--border)]
          disabled:hover:bg-[var(--card)]
          disabled:hover:text-[var(--foreground)]
        "
      >
        <ArrowRight
          size={18}
          strokeWidth={2}
        />
      </button>
    </div>
  );
}