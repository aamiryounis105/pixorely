"use client";

import { motion } from "framer-motion";
import {
  MessageSquareHeart,
  Star,
} from "lucide-react";

import Counter from "@/components/why-us/CountUp";

export default function ReviewSummary() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-[30px]

        border
        border-[var(--border)]

        bg-[var(--card)]

        p-7
        sm:p-8
      "
    >
      {/* Subtle accent */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20

          h-52
          w-52

          rounded-full

          bg-[var(--primary)]

          opacity-[0.05]

          blur-[70px]
        "
      />

      <div className="relative z-10">

        {/* ================= HEADER ================= */}

        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center

              rounded-xl

              border
              border-[var(--border)]

              bg-[var(--secondary)]

              text-[var(--primary)]
            "
          >
            <MessageSquareHeart size={20} />
          </div>

          <div>
            <p
              className="
                text-[15px]
                font-semibold

                text-[var(--foreground)]
              "
            >
              Client Reviews
            </p>

            <p
              className="
                mt-0.5
                text-sm
                text-[var(--muted)]
              "
            >
              Trusted by clients worldwide
            </p>
          </div>
        </div>

        {/* ================= RATING ================= */}

        <div className="mt-9">

          {/* Stars */}

          <div className="flex items-center gap-1.5">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={20}
                strokeWidth={1.8}
                className="
                  fill-[var(--primary)]
                  text-[var(--primary)]
                "
              />
            ))}
          </div>

          {/* Score */}

          <div className="mt-5">
            <h2
              className="
                text-6xl
                font-bold
                leading-none
                tracking-[-0.05em]

                text-[var(--foreground)]
              "
            >
              <Counter
                end={4.9}
                decimals={1}
              />
            </h2>

            <p
              className="
                mt-3
                text-sm
                font-medium

                text-[var(--muted)]
              "
            >
              Average Client Rating
            </p>
          </div>
        </div>

        {/* ================= STATS ================= */}

        <div
          className="
            mt-9

            grid
            grid-cols-2

            overflow-hidden

            rounded-2xl

            border
            border-[var(--border)]

            bg-[var(--secondary)]
          "
        >
          {/* Projects */}

          <div
            className="
              px-5
              py-5
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                tracking-tight

                text-[var(--foreground)]
              "
            >
              <Counter
                end={300}
                suffix="+"
              />
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[var(--muted)]
              "
            >
              Projects Delivered
            </p>
          </div>

          {/* Satisfaction */}

          <div
            className="
              border-l
              border-[var(--border)]

              px-5
              py-5
            "
          >
            <h3
              className="
                text-3xl
                font-bold
                tracking-tight

                text-[var(--foreground)]
              "
            >
              <Counter
                end={99}
                suffix="%"
              />
            </h3>

            <p
              className="
                mt-2
                text-sm
                text-[var(--muted)]
              "
            >
              Client Satisfaction
            </p>
          </div>
        </div>

        {/* ================= REVIEW SOURCES ================= */}

        <div
          className="
            mt-8

            border-t
            border-[var(--border)]

            pt-6
          "
        >
          <p
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.14em]

              text-[var(--muted)]
            "
          >
            Reviews across
          </p>

          <div
            className="
              mt-3

              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2

              text-sm
              font-semibold

              text-[var(--foreground)]
            "
          >
            <span>Upwork</span>

            <span
              className="
                h-1
                w-1

                rounded-full

                bg-[var(--primary)]
              "
            />

            <span>Facebook</span>

            <span
              className="
                h-1
                w-1

                rounded-full

                bg-[var(--primary)]
              "
            />

            <span>Direct Clients</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}