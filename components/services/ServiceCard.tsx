"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

import type { Service } from "./services.types";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -8,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
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
        lg:p-8

        shadow-sm

        transition-all
        duration-300

        hover:border-[var(--primary)]
        hover:shadow-xl
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-24
          -top-24
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

      {/* Top */}

      <div className="relative z-10 flex items-start justify-between">
        <div
          className="
            flex
            h-16
            w-16
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
          <Icon size={30} />
        </div>

        <div
          className="
            flex
            h-11
            w-11
            items-center
            justify-center

            rounded-full

            border
            border-[var(--border)]

            bg-[var(--background)]

            text-[var(--muted)]

            transition-all
            duration-300

            group-hover:border-[var(--primary)]
            group-hover:bg-[var(--primary)]
            group-hover:text-white
          "
        >
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Content */}

      <div className="relative z-10 mt-8">
        <h3
          className="
            text-2xl
            font-bold
            tracking-tight
            text-[var(--foreground)]
          "
        >
          {service.title}
        </h3>

        <p
          className="
            mt-4

            leading-7

            text-[var(--muted)]
          "
        >
          {service.description}
        </p>
      </div>

      {/* Features */}

      <ul
        className="
          relative
          z-10

          mt-8

          space-y-4

          border-t
          border-[var(--border)]

          pt-7
        "
      >
        {service.features.map((feature) => (
          <li
            key={feature}
            className="
              flex
              items-center
              gap-3
            "
          >
            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center

                rounded-full

                bg-[var(--primary-light)]

                text-[var(--primary)]
              "
            >
              <Check
                size={14}
                strokeWidth={3}
              />
            </span>

            <span
              className="
                text-sm
                font-medium

                text-[var(--foreground)]
              "
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* Footer */}

      <div className="relative z-10 mt-auto pt-8">
        <a
          href="#contact"
          className="
            inline-flex
            items-center
            gap-2
            font-semibold
            text-sm
            text-[var(--primary)]

            transition-all
            duration-300

            hover:gap-3
          "
        >
          Start Your Project

          <ArrowUpRight
            size={16}
          />
        </a>
      </div>
    </motion.article>
  );
}