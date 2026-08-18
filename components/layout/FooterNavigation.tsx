"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { navigation } from "@/lib/navigation";

export default function FooterNavigation() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
        Navigation
      </p>

      <nav
        className="mt-8"
        aria-label="Footer navigation"
      >
        <ul className="space-y-5">
          {navigation.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  text-[15px]
                  font-medium
                  text-[var(--muted)]
                  transition-all
                  duration-300
                  hover:translate-x-1
                  hover:text-[var(--primary)]
                "
              >
                <span>{item.name}</span>

                <ArrowUpRight
                  aria-hidden="true"
                  className="
                    h-3.5
                    w-3.5
                    translate-y-0.5
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}