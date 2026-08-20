"use client";

import { Star } from "lucide-react";

export default function HeroRating() {
  return (
    <div
      className="
        my-16
        flex
        flex-wrap
        items-center
        justify-center
        gap-x-6
        gap-y-3

        text-sm
        sm:text-base
      "
    >
      {/* Stars + Rating */}

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              size={18}
              strokeWidth={1.8}
              className="
                fill-[var(--primary)]
                text-[var(--primary)]
              "
            />
          ))}
        </div>

        <span
          className="
            font-semibold
            text-[var(--foreground)]
          "
        >
          4.9 Rating
        </span>
      </div>

      {/* Divider */}

      <span
        aria-hidden="true"
        className="
          hidden
          h-1.5
          w-1.5
          rounded-full
          bg-[var(--border)]
          sm:block
        "
      />

      {/* Trusted Text */}

      <p
        className="
          m-0
          text-[var(--muted)]
        "
      >
        Trusted by 300+ clients worldwide
      </p>
    </div>
  );
}