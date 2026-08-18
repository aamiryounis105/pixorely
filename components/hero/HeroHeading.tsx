"use client";

import { motion } from "framer-motion";

export default function HeroHeading() {
  return (
    <div
      className="
        mx-auto
        mt-7
        flex
        w-full
        max-w-[1120px]
        flex-col
        items-center
        text-center
        sm:mt-8
      "
    >
      {/* Main heading */}

      <motion.h1
        initial={{
          opacity: 0,
          y: 28,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.85,
          delay: 0.14,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          text-[clamp(3rem,7vw,6.8rem)]
          font-extrabold
          leading-[1]
          tracking-[-0.065em]
          text-[var(--foreground)]
        "
      >
        We create digital
        <br className="hidden sm:block" />

        <span className="relative inline-block">
          <span className="text-[var(--primary)]">
            experiences that grow brands.
          </span>
        </span>
      </motion.h1>

      {/* Description */}

      <motion.p
        initial={{
          opacity: 0,
          y: 20,
          filter: "blur(6px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.75,
          delay: 0.28,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          mt-8
          max-w-[950px]
          text-base
          leading-8
          text-[var(--muted)]
          sm:text-lg
          sm:leading-9
          lg:text-xl
        "
      >
        Pixorely helps startups and growing businesses build a
        stronger digital presence through premium websites,
        WordPress, Shopify, digital marketing, and
        professional email solutions.
      </motion.p>
    </div>
  );
}