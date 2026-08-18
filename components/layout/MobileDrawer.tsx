"use client";

import {
  useEffect,
  useState,
} from "react";

import { createPortal } from "react-dom";
import Link from "next/link";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  ArrowRight,
  Mail,
  X,
} from "lucide-react";

import {
  FaWhatsapp,
} from "react-icons/fa6";

import Button from "@/components/ui/Button";
import ThemeToggle from "@/components/ui/ThemeToggle";

import { navigation } from "@/lib/navigation";
import { socials } from "@/lib/socials";

interface MobileDrawerProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileDrawer({
  open,
  onClose,
}: MobileDrawerProps) {
  const [mounted, setMounted] =
    useState(false);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open, onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.aside
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{
            opacity: 0,
            x: "100%",
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: "100%",
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999999,
            width: "100%",
            height: "100dvh",
          }}
          className="
            flex
            flex-col
            overflow-hidden
            bg-[var(--background)]
            text-[var(--foreground)]
            lg:hidden
          "
        >
          {/* Ambient glow */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-[var(--primary)]
              opacity-[0.08]
              blur-[100px]
            "
          />

          {/* Header */}

          <header
            className="
              relative
              z-10
              flex
              shrink-0
              items-center
              justify-between
              border-b
              border-[var(--border)]
              px-5
              py-5
            "
          >
            <div>
              <p className="text-xl font-semibold uppercase tracking-[0.20em] text-[var(--primary)]">
                Menu
              </p>

              <p className="text-sm text-[var(--muted)]">
                Explore Pixorely
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close mobile menu"
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-[var(--border)]
                bg-[var(--card)]
                transition-all
                duration-300
                hover:rotate-90
                hover:border-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-white
                active:scale-95
              "
            >
              <X size={19} />
            </button>
          </header>

          {/* Drawer scrollbar only */}

          <div
            data-lenis-prevent
            data-lenis-prevent-wheel
            data-lenis-prevent-touch
            className="
              relative
              z-10
              min-h-0
              flex-1
              overflow-y-auto
              overscroll-contain
              px-5
              py-6
              [-webkit-overflow-scrolling:touch]
            "
          >
            {/* Navigation */}

            <nav aria-label="Mobile navigation">
              <ul className="space-y-2">
                {navigation.map(
                  (item, index) => (
                    <motion.li
                      key={item.id}
                      initial={{
                        opacity: 0,
                        x: 24,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        delay:
                          0.08 +
                          index * 0.05,
                        ease: [
                          0.22,
                          1,
                          0.36,
                          1,
                        ],
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="
                          group
                          flex
                          w-full
                          items-center
                          justify-between
                          rounded-2xl
                          border
                          border-transparent
                          px-4
                          py-4
                          text-xl
                          font-semibold
                          transition-all
                          duration-300
                          hover:border-[var(--primary)]
                          hover:text-[var(--primary)]
                        "
                      >
                        <span>
                          {item.name}
                        </span>

                        <ArrowRight
                          size={18}
                          className="
                            text-[var(--muted)]
                            transition-all
                            duration-300
                            group-hover:translate-x-1
                            group-hover:text-[var(--primary)]
                          "
                        />
                      </Link>
                    </motion.li>
                  )
                )}
              </ul>
            </nav>

            {/* Contact */}

            <section className="mt-8 border-t border-[var(--border)] pt-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)]">
                Contact
              </p>

              <div className="mt-5 space-y-3">
                <a
                  href="https://wa.me/923154716105"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-green-500/20
                    bg-green-500/[0.06]
                    p-3.5
                    transition-all
                    duration-300
                    hover:border-green-500/50
                    hover:bg-green-500/10
                  "
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-green-500
                      text-white
                    "
                  >
                    <FaWhatsapp size={17} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      WhatsApp
                    </p>

                    <p className="text-xs text-[var(--muted)]">
                      +92 315 4716105
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="
                      shrink-0
                      text-[var(--muted)]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>

                <a
                  href="mailto:hello@pixorely.com"
                  className="
                    group
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-[var(--border)]
                    bg-[var(--card)]
                    p-3.5
                    transition-all
                    duration-300
                    hover:border-[var(--primary)]
                  "
                >
                  <span
                    className="
                      flex
                      h-10
                      w-10
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[var(--primary-light)]
                      text-[var(--primary)]
                    "
                  >
                    <Mail size={17} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-[var(--foreground)]">
                      Email
                    </p>

                    <p className="truncate text-xs text-[var(--muted)]">
                      hello@pixorely.com
                    </p>
                  </div>

                  <ArrowRight
                    size={16}
                    className="
                      shrink-0
                      text-[var(--muted)]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />
                </a>
              </div>
            </section>

            {/* Theme and socials */}

            <section className="mt-8 border-t border-[var(--border)] pt-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold">
                    Appearance
                  </p>

                  <p className="mt-1 text-xs text-[var(--muted)]">
                    Light or dark mode
                  </p>
                </div>

                <ThemeToggle />
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {socials.map(
                  (social) => {
                    const Icon =
                      social.icon;

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={
                          social.name
                        }
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[var(--border)]
                          bg-[var(--card)]
                          text-[var(--muted)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                          hover:border-[var(--primary)]
                          hover:bg-[var(--primary)]
                          hover:text-white
                        "
                      >
                        <Icon size={13} />
                      </a>
                    );
                  }
                )}
              </div>
            </section>
          </div>

          {/* Fixed drawer CTA */}

          <footer
            className="
              relative
              z-10
              shrink-0
              border-t
              border-[var(--border)]
              bg-[var(--background)]/95
              px-5
              py-4
              backdrop-blur-xl
            "
          >
            <Button
              href="#contact"
              fullWidth
              onClick={onClose}
            >
              Get in Touch
            </Button>
          </footer>
        </motion.aside>
      )}
    </AnimatePresence>,
    document.body
  );
}