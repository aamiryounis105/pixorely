"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import ReviewSummary from "./ReviewSummary";
import ReviewsCarousel from "./ReviewsCarousel";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            max-w-[780px]
            text-center
          "
        >
          <span className="badge">
            Client Reviews
          </span>

          <h2 className="heading-1 mt-6">
            Built on Trust.
            <span className="text-[var(--primary)]">
              {" "}Backed by Results.
            </span>
          </h2>

          <p
            className="
              body-lg
              mx-auto
              mt-6
              max-w-[690px]
              text-[var(--muted)]
            "
          >
            Discover what clients say about working with Pixorely,
            from communication and delivery to the quality of the
            final result.
          </p>
        </motion.div>

        {/* Reviews Layout */}

        <div
          className="
            mt-14
            grid
            grid-cols-1
            gap-8

            sm:mt-16

            lg:mt-20
            lg:grid-cols-[340px_minmax(0,1fr)]
            lg:items-start

            xl:grid-cols-[360px_minmax(0,1fr)]
          "
        >
          {/* Left Summary */}

          <div className="lg:sticky lg:top-28">
            <ReviewSummary />
          </div>

          {/* Right Carousel */}

          <div className="min-w-0">
            <ReviewsCarousel />
          </div>
        </div>
      </Container>
    </section>
  );
}