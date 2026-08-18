"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "@/lib/socials";

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socials.map((social, index) => {
        const Icon = social.icon;

        return (
          <motion.div
            key={social.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.08,
              duration: 0.35,
            }}
          >
            <Link
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="
                group
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-border
                bg-card
                text-muted
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-primary/30
                hover:bg-primary
                hover:text-white
                hover:shadow-lg
                hover:shadow-primary/20
              "
            >
              <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}