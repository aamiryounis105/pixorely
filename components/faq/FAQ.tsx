"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import FAQList from "./FAQList";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section relative overflow-hidden"
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
            duration: 0.6,
          }}
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          <span className="badge">
            Frequently Asked Questions
          </span>

          <h2 className="heading-1 mt-6">
            Everything You Need
            <span className="text-[var(--primary)]">
              {" "}to Know
            </span>
          </h2>

          <p
            className="
              body-lg
              mx-auto
              mt-6
              max-w-2xl
              text-[var(--muted)]
            "
          >
            Have questions about our services, process,
            pricing, or timelines? Here are the answers to
            the questions we receive most often.
          </p>
        </motion.div>

        {/* Accordion */}

        <div
          className="
            mx-auto
            w-full
          "
        >
          <FAQList />
        </div>

      </Container>
    </section>
  );
}