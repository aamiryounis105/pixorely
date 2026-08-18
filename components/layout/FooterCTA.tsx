"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import AnimatedButton from "@/components/ui/AnimatedButton";

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden py-12 lg:py-16">
      {/* Orange Glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10

          h-64
          w-64

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          opacity-10

          blur-3xl
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
          mx-auto

          flex
          max-w-5xl
          flex-col
          items-center
          gap-8

          text-center
        "
      >
        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2

            rounded-full

            border
            border-[var(--border)]

            bg-[var(--card)]

            px-5
            py-2.5

            text-sm
            font-medium

            shadow-card
          "
        >
          <Sparkles size={16} className="text-[var(--primary)]" />
          Let's Build Something Amazing
        </div>

        {/* Heading */}

        <h2
          className="
            max-w-4xl

            text-4xl
            font-bold
            leading-[1.05]

            tracking-tight

            md:text-6xl
            lg:text-7xl
          "
        >
          Ready to grow
          <span
            className="
              mt-3
              block

              text-[var(--primary)]
            "
          >
            your business online?
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            max-w-3xl

            text-lg
            leading-9

            text-[var(--muted)]

            lg:text-xl
          "
        >
          Whether you need a custom website, Shopify store, WordPress
          development, digital marketing, HTML email templates, or professional
          email signatures, our team is ready to build a fast, modern, and
          conversion-focused solution tailored to your business.
        </p>

        {/* Button */}
        <AnimatedButton href="#contact"
        onlineEffect
        >
          Start Your Project
        </AnimatedButton>
      </motion.div>
    </section>
  );
}
