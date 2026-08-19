"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import ServiceGrid from "./ServiceGrid";

export default function Services() {
  return (
    <section
      id="services"
      className="
        section
        relative
        overflow-hidden
        bg-transparent
      "
    >
      <Container>
        {/* ==========================================
            SECTION HEADER
        =========================================== */}

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
            max-w-[820px]
            text-center
          "
        >
          {/* Badge */}

          <span className="badge">
            Our Services
          </span>

          {/* Heading */}

          <h2
            className="
              heading-1
              mt-6
              text-foreground
            "
          >
            Digital Solutions Built to
            <br className="hidden sm:block" />
            <span className="text-[var(--primary)]">
              &nbsp;Grow Your Business
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              body-lg
              text-muted
              mx-auto
              mt-6
              max-w-[720px]
            "
          >
            From custom websites and eCommerce to SEO,
            digital marketing, and professional email
            solutions, we create high-quality digital
            experiences designed to help businesses
            grow with confidence.
          </p>
        </motion.div>

        {/* ==========================================
            SERVICES GRID
        =========================================== */}

        <div className="mt-14 sm:mt-16 lg:mt-20">
          <ServiceGrid />
        </div>
      </Container>
    </section>
  );
}