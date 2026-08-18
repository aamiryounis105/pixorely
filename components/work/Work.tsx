"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedButton from "@/components/ui/AnimatedButton";

import Container from "@/components/ui/Container";

import WorkGrid from "./WorkGrid";

export default function Work() {
  return (
    <section
      id="work"
      className="
        section
        relative
        overflow-hidden
        bg-transparent
      "
    >
      <Container>
        {/* ==========================================
            HEADER
        =========================================== */}

        <div
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
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
            className="max-w-[760px]"
          >
            {/* Badge */}

            <span className="badge">
              Featured Work
            </span>

            {/* Heading */}

            <h2
              className="
                heading-1
                mt-6
                text-[var(--foreground)]
              "
            >
              Real projects,
              <span className="text-[var(--primary)]">
                {" "}real results.
              </span>
            </h2>

            {/* Description */}

            <p
              className="
                body-lg
                mt-6
                max-w-[680px]
                text-[var(--muted)]
              "
            >
              A selection of digital experiences built around
              strong design, clean development, better
              performance, and measurable business goals.
            </p>
          </motion.div>

          {/* View All */}

          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-fit shrink-0"
          >
            <AnimatedButton
              href="#contact"
              variant="inverted"
              onlineEffect={true}
            >
              Start Your Project
            </AnimatedButton>
          </motion.div>
        </div>

        {/* ==========================================
            PROJECT GRID
        =========================================== */}

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <WorkGrid />
        </div>
      </Container>
    </section>
  );
}