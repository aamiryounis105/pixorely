"use client";

import { motion } from "framer-motion";

import AnimatedButton from "@/components/ui/AnimatedButton";

export default function HeroActions() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.75,
        delay: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        mt-10
        flex
        flex-col
        items-center
        justify-center
        gap-4
        sm:flex-row
      "
    >
      {/* Primary CTA */}

      <AnimatedButton
      href="#contact"
      onlineEffect
      >
        Let's Build Together
      </AnimatedButton>

      {/* Secondary CTA */}

      <AnimatedButton
        href="#work"
        variant="inverted"
        onlineEffect
      >
        View Our Work
      </AnimatedButton>
    </motion.div>
  );
}