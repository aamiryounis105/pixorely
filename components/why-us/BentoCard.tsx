"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import Counter from "./CountUp";
import type { Reason } from "./why.types";

interface BentoCardProps {
  reason: Reason;
  index: number;
}

export default function BentoCard({
  reason,
  index,
}: BentoCardProps) {
  const Icon = reason.icon;

  const sizeClasses =
    reason.size === "large-horizontal"
      ? "md:col-span-2"
      : reason.size === "large-vertical"
        ? "md:row-span-2"
        : "";

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 28,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -6,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        p-7
        shadow-sm
        transition-all
        duration-300
        hover:border-[var(--primary)]
        hover:shadow-xl
        sm:p-8
        ${sizeClasses}
      `}
    >
      {/* Background Icon */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-6
          -top-6
          text-[var(--primary)]
          opacity-[0.045]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:opacity-[0.075]
        "
      >
        <Icon
          size={150}
          strokeWidth={1.2}
        />
      </div>

      {/* Glow */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-[var(--primary)]
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-10
        "
      />

      {/* Content */}

      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}

        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-[var(--border)]
            bg-[var(--secondary)]
            text-[var(--primary)]
            transition-transform
            duration-300
            group-hover:rotate-6
            group-hover:scale-105
          "
        >
          <Icon
            size={27}
            strokeWidth={1.8}
          />
        </div>

        {/* Text */}

        <div className="mt-7">
          <h3
            className="
              text-2xl
              font-bold
              tracking-tight
              text-[var(--foreground)]
            "
          >
            {reason.title}
          </h3>

          <p
            className="
              mt-4
              max-w-xl
              leading-7
              text-[var(--muted)]
            "
          >
            {reason.description}
          </p>
        </div>

        {/* Highlights */}

        <div
          className="
            mt-7
            flex
            flex-wrap
            gap-2
          "
        >
          {reason.highlights.map((highlight) => (
            <span
              key={highlight}
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border
                border-[var(--border)]
                bg-[var(--secondary)]
                px-3
                py-1.5
                text-xs
                font-semibold
                text-[var(--foreground)]
              "
            >
              <Check
                size={13}
                className="text-[var(--primary)]"
              />

              {highlight}
            </span>
          ))}
        </div>

        {/* Counter */}

        <div
          className="
            mt-auto
            pt-8
          "
        >
          <div
            className="
              flex
              items-end
              justify-between
              gap-5
              border-t
              border-[var(--border)]
              pt-6
            "
          >
            <div>
              <div
                className="
                  text-3xl
                  font-bold
                  tracking-tight
                  text-[var(--primary)]
                  sm:text-4xl
                "
              >
                <Counter
                  end={reason.stat.value}
                  prefix={reason.stat.prefix}
                  suffix={reason.stat.suffix}
                />
              </div>

              <p
                className="
                  mt-1
                  text-sm
                  font-medium
                  text-[var(--muted)]
                "
              >
                {reason.stat.label}
              </p>
            </div>

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[var(--primary)]
                shadow-[0_0_18px_rgba(255,106,0,.7)]
              "
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}