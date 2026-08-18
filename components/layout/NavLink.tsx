"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

interface Props {
  item: NavItem;
}

export default function NavLink({ item }: Props) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const section = document.getElementById(item.id);

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting);
      },
      {
        threshold: 0.45,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [item.id]);

  return (
    <Link
      href={item.href}
      className="
        relative
        rounded-full
        px-5
        py-2.5
      "
    >
      {active && (
        <motion.div
          layoutId="navbar-pill"
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 32,
          }}
          className="
            absolute
            inset-0
            rounded-full
            bg-[var(--primary-light)]
            border
            border-[var(--primary)]
          "
        />
      )}

      <span
        className={`
          relative
          z-10
          text-sm
          font-medium
          transition-colors
          duration-300

          ${
            active
              ? "text-[var(--primary)]"
              : "text-[var(--foreground)] hover:text-[var(--primary)]"
          }
        `}
      >
        {item.name}
      </span>
    </Link>
  );
}