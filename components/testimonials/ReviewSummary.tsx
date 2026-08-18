"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";

import Counter from "@/components/why-us/CountUp";

export default function ReviewSummary() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-3xl

        border
        border-[var(--border)]

        bg-[var(--card)]

        p-8

        shadow-sm
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          -top-20

          h-56
          w-56

          rounded-full

          bg-[var(--primary)]

          opacity-0

          blur-3xl

          transition-opacity
          duration-500

          group-hover:opacity-10
        "
      />

      {/* Google */}

      <div className="relative z-10 flex items-center gap-4">
        <img
          src="/images/google-icon.svg"
          alt="Google"
          className="h-10 w-10"
        />

        <div>
          <p className="text-lg font-semibold text-[var(--foreground)]">
            Google Reviews
          </p>

          <p className="text-sm text-[var(--muted)]">
            Trusted by clients worldwide
          </p>
        </div>
      </div>

      {/* Stars */}

      <div className="relative z-10 mt-8 flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={22}
            className="
              fill-[var(--primary)]
              text-[var(--primary)]
            "
          />
        ))}
      </div>

      {/* Rating */}

      <div className="relative z-10 mt-5">
        <h2 className="text-5xl font-bold tracking-tight text-[var(--foreground)]">
          <Counter
            end={5}
            decimals={1}
          />
        </h2>

        <p className="mt-2 text-[var(--muted)]">
          Average Google Rating
        </p>
      </div>

      {/* Stats */}

      <div className="relative z-10 mt-10 grid grid-cols-2 gap-6">
        <div>
          <h3 className="text-3xl font-bold text-[var(--primary)]">
            <Counter
              end={300}
              suffix="+"
            />
          </h3>

          <p className="mt-1 text-sm text-[var(--muted)]">
            Projects Delivered
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-[var(--primary)]">
            <Counter
              end={99}
              suffix="%"
            />
          </h3>

          <p className="mt-1 text-sm text-[var(--muted)]">
            Client Satisfaction
          </p>
        </div>
      </div>

      {/* Button */}

      <a
        href="https://g.page/r/CTgfDpuVSXXBEBM/review"
        target="_blank"
        rel="noopener noreferrer"
        className="
          relative
          z-10

          mt-10

          inline-flex
          items-center
          gap-2

          rounded-full

          bg-[var(--primary)]

          px-6
          py-3

          font-semibold

          text-white

          transition-all
          duration-300

          hover:gap-3
        "
      >
        View Google Reviews

        <ArrowUpRight size={18} />
      </a>
    </motion.div>
  );
}