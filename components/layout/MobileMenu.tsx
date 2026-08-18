"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

import MobileDrawer from "./MobileDrawer";

const LENIS_STOP_EVENT = "pixorely:lenis-stop";
const LENIS_START_EVENT = "pixorely:lenis-start";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow =
      html.style.overflow;

    const previousBodyOverflow =
      body.style.overflow;

    const previousBodyOverscroll =
      body.style.overscrollBehavior;

    /*
     * Pause Lenis without storing its instance
     * on the global window object.
     */
    window.dispatchEvent(
      new Event(LENIS_STOP_EVENT)
    );

    /*
     * Hide the main website scrollbar.
     * The drawer keeps its own scrollbar.
     */
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.overscrollBehavior = "none";

    return () => {
      html.style.overflow =
        previousHtmlOverflow;

      body.style.overflow =
        previousBodyOverflow;

      body.style.overscrollBehavior =
        previousBodyOverscroll;

      window.dispatchEvent(
        new Event(LENIS_START_EVENT)
      );
    };
  }, [open]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    window.addEventListener(
      "resize",
      closeOnDesktop
    );

    return () => {
      window.removeEventListener(
        "resize",
        closeOnDesktop
      );
    };
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open mobile menu"
        aria-expanded={open}
        aria-controls="mobile-navigation-drawer"
        className="
          group
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
          text-[var(--foreground)]
          transition-all
          duration-300
          hover:border-[var(--primary)]
          hover:bg-[var(--primary)]
          hover:text-white
          active:scale-95
        "
      >
        <Menu
          size={20}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover:scale-90
          "
        />
      </button>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}