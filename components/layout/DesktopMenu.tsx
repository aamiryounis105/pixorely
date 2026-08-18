"use client";

import Link from "next/link";

import { navigation } from "@/lib/navigation";

export default function DesktopMenu() {
  return (
    <nav
      aria-label="Primary navigation"
      className="hidden items-center gap-1 lg:flex"
    >
      {navigation.map((item) => (
        <Link
          key={item.id}
          href={item.href}
          className="
            group
            relative
            px-4
            py-2

            text-[15px]
            font-medium

            text-[var(--muted)]

            transition-colors
            duration-300

            hover:text-[var(--foreground)]
          "
        >
          {item.name}

          {/* Underline */}

          <span
            className="
              absolute
              bottom-0
              left-4
              right-4

              h-[2px]

              origin-right
              scale-x-0

              rounded-full

              bg-[var(--primary)]

              transition-transform
              duration-600
              ease-[cubic-bezier(.22,1,.36,1)]

              group-hover:origin-left
              group-hover:scale-x-100
            "
          />
        </Link>
      ))}
    </nav>
  );
}