"use client";

import { useEffect, useState } from "react";

import AnimatedButton from "@/components/ui/AnimatedButton";
import ThemeToggle from "@/components/ui/ThemeToggle";

import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 24);

      // Always show near the top
      if (currentScrollY < 80) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down
        setHidden(true);
      } else {
        // Scrolling up
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        site-header
        transition-transform
        duration-300
        ease-out
        ${
          hidden
            ? "-translate-y-full"
            : "translate-y-0"
        }
      `}
    >
      <div>
        <nav
          className={`
            navbar-shell
            flex
            h-[80px]
            w-full
            items-center
            justify-between
            px-5
            md:px-10
            ${
              scrolled
                ? "navbar-shell--scrolled"
                : "navbar-shell--top"
            }
          `}
        >
          {/* Brand */}
          <Logo size="navbar" />

          {/* Desktop navigation */}
          <DesktopMenu />

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />

            <AnimatedButton
              href="#contact"
              onlineEffect
            >
              Get in Touch
            </AnimatedButton>
          </div>

          {/* Mobile menu */}
          <MobileMenu />
        </nav>
      </div>
    </header>
  );
}