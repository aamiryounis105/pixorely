"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import type { Testimonial } from "./testimonials.types";

interface ReviewCardProps {
  testimonial: Testimonial;
  index: number;
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function ReviewCard({
  testimonial,
  index,
}: ReviewCardProps) {
  return (
    <motion.article
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
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
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
      "
    >
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

      {/* Top Row */}

      <div
        className="
          relative
          z-10
          flex
          items-start
          justify-between
          gap-5
        "
      >
        {/* Stars */}

        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={17}
              className={
                i < testimonial.rating
                  ? "fill-[var(--primary)] text-[var(--primary)]"
                  : "text-[var(--border)]"
              }
            />
          ))}
        </div>

        <Quote
          size={30}
          strokeWidth={1.4}
          className="text-[var(--primary)] opacity-35"
        />
      </div>

      {/* Review */}

      <p
        className="
          relative
          z-10
          my-6
          flex-1
          text-[15px]
          leading-7
          text-[var(--foreground)]
          sm:text-base
        "
      >
        “{testimonial.review}”
      </p>

      {/* Client */}

      <div
        className="
          relative
          z-10
          flex
          items-center
          gap-4
          border-t
          border-[var(--border)]
          pt-6
        "
      >
        {/* Avatar / Initials */}

        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="
              h-12
              w-12
              shrink-0
              rounded-full
              object-cover
              ring-1
              ring-[var(--border)]
            "
          />
        ) : (
          <div
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[var(--primary-light)]
              text-sm
              font-bold
              text-[var(--primary)]
              ring-1
              ring-[var(--border)]
            "
          >
            {getInitials(testimonial.name)}
          </div>
        )}

        <div className="min-w-0">
          <p
            className="
              truncate
              font-semibold
              text-[var(--foreground)]
            "
          >
            {testimonial.name}
          </p>

          <p
            className="
              mt-1
              truncate
              text-sm
              text-[var(--muted)]
            "
          >
            {testimonial.role}
            {testimonial.company
              ? ` • ${testimonial.company}`
              : ""}
          </p>
        </div>
      </div>

      {/* Source */}

      <div
        className="
          relative
          z-10
          mt-5
          flex
          items-center
          justify-between
          gap-4
        "
      >
        <span
          className="
            inline-flex
            items-center
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--secondary)]
            px-3
            py-1
            text-[9px]
            font-semibold
            text-[var(--foreground)]
          "
        >
          {testimonial.source} Review
        </span>

        <span
          className="
            text-[9px]
            text-[var(--muted)]
          "
        >
          {testimonial.date}
        </span>
      </div>
    </motion.article>
  );
}