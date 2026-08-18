"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Clock3,
  Headphones,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Quick Response",
    description: "We usually respond within 24 hours.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "Straightforward updates throughout your project.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Delivery",
    description: "Professional execution with attention to detail.",
  },
  {
    icon: Headphones,
    title: "Ongoing Support",
    description: "Support before, during, and after launch.",
  },
];

export default function ContactInfo() {
  return (
    <div
      className="
        relative
        overflow-hidden
        border-b
        border-[var(--border)]
        bg-[var(--secondary)]
        p-7

        sm:p-9

        lg:border-b-0
        lg:border-r
        lg:p-10

        xl:p-12
      "
    >
      <div className="relative z-10">
        <p
          className="
            text-sm
            font-semibold
            uppercase
            tracking-[0.16em]
            text-[var(--primary)]
          "
        >
          Start a Conversation
        </p>

        <h3
          className="
            mt-4
            max-w-md
            text-3xl
            font-bold
            tracking-tight
            text-[var(--foreground)]
          "
        >
          Tell us about your next project.
        </h3>

        <p
          className="
            mt-4
            max-w-md
            leading-7
            text-[var(--muted)]
          "
        >
          Whether you need a new website, Shopify store,
          WordPress solution, SEO, digital marketing, or
          professional email development, we&apos;d love to
          hear what you&apos;re working on.
        </p>

        <div
          className="
            my-8
            h-px
            w-full
            bg-[var(--border)]
          "
        />

        <div className="space-y-4">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: -16,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                className="
                  group
                  flex
                  gap-4
                  rounded-2xl
                  border
                  border-transparent
                  p-3
                  transition-all
                  duration-300
                  hover:border-[var(--border)]
                  hover:bg-[var(--card)]
                "
              >
                <div
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    bg-[var(--primary-light)]
                    text-[var(--primary)]
                  "
                >
                  <Icon
                    size={20}
                    strokeWidth={1.9}
                  />
                </div>

                <div>
                  <p
                    className="
                      font-semibold
                      text-[var(--foreground)]
                    "
                  >
                    {item.title}
                  </p>

                  <p
                    className="
                      mt-1
                      text-sm
                      leading-6
                      text-[var(--muted)]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <a
          href="#services"
          className="
            group
            mt-9
            inline-flex
            items-center
            gap-2
            text-sm
            font-semibold
            text-[var(--primary)]
          "
        >
          Explore our services

          <ArrowUpRight
            size={16}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-0.5
              group-hover:-translate-y-0.5
            "
          />
        </a>
      </div>
    </div>
  );
}