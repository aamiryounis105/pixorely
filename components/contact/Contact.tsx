"use client";

import { motion } from "framer-motion";

import Container from "@/components/ui/Container";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden"
    >
      <Container>
        {/* Section Header */}

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
            Get In Touch
          </span>

          <h2 className="heading-1 mt-6">
            Let&apos;s Build Something
            <span className="text-[var(--primary)]">
              {" "}Exceptional Together
            </span>
          </h2>

          <p
            className="
              body-lg
              mx-auto
              mt-6
              max-w-[680px]
              text-[var(--muted)]
            "
          >
            Have a project in mind? Tell us what you&apos;re
            building and we&apos;ll help you find the right
            strategy, technology, and solution.
          </p>
        </motion.div>

        {/* Contact Panel */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[32px]
            border
            border-[var(--border)]
            bg-[var(--card)]
            shadow-[0_24px_80px_rgba(0,0,0,0.06)]

            sm:mt-16
            lg:mt-20
          "
        >
          {/* Ambient Glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -left-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-[var(--primary)]
              opacity-[0.07]
              blur-3xl
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -bottom-28
              -right-24
              h-80
              w-80
              rounded-full
              bg-[var(--primary)]
              opacity-[0.05]
              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10
              grid
              grid-cols-1

              lg:grid-cols-[0.82fr_1.18fr]
            "
          >
            <ContactInfo />

            <ContactForm />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}