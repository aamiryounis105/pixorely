"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

const LENIS_STOP_EVENT = "pixorely:lenis-stop";
const LENIS_START_EVENT = "pixorely:lenis-start";

export default function SmoothScroll({
  children,
}: SmoothScrollProps) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      touchMultiplier: 1.5,

      anchors: {
        offset: 110,
        duration: 1.2,
      },
    });

    let animationFrameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);

      animationFrameId =
        window.requestAnimationFrame(raf);
    };

    const stopLenis = () => {
      lenis.stop();
    };

    const startLenis = () => {
      lenis.start();
    };

    window.addEventListener(
      LENIS_STOP_EVENT,
      stopLenis
    );

    window.addEventListener(
      LENIS_START_EVENT,
      startLenis
    );

    animationFrameId =
      window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(
        animationFrameId
      );

      window.removeEventListener(
        LENIS_STOP_EVENT,
        stopLenis
      );

      window.removeEventListener(
        LENIS_START_EVENT,
        startLenis
      );

      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}