"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import BentoGrid from "./BentoGrid";

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="
        section
        relative
        overflow-hidden
        bg-transparent
      "
    >
      <Container>
        {/* Header */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            max-w-[800px]
            text-center
          "
        >
          <span className="badge">
            Why Pixorely
          </span>

          <h2
            className="
              heading-1
              mt-6
              text-[var(--foreground)]
            "
          >
            Built for Performance.
            <span className="text-[var(--primary)]">
              {" "}Designed for Growth.
            </span>
          </h2>

          <p
            className="
              body-lg
              mx-auto
              mt-6
              max-w-[700px]
              text-[var(--muted)]
            "
          >
            We combine modern design, clean development,
            performance, SEO, and reliable support to build
            digital experiences that help businesses grow with
            confidence.
          </p>
        </motion.div>

        {/* Bento Grid */}

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <BentoGrid />
        </div>
      </Container>
    </section>
  );
}