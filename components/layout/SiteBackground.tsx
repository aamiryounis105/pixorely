"use client";

import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";

/* ==========================================================
   FLOATING PARTICLES
========================================================== */

const particles = [
  { left: 5, top: 12, size: 2, duration: 8, delay: 0.2 },
  { left: 11, top: 32, size: 3, duration: 10, delay: 1.4 },
  { left: 18, top: 68, size: 2, duration: 9, delay: 2.1 },
  { left: 24, top: 18, size: 2.5, duration: 11, delay: 0.8 },
  { left: 30, top: 49, size: 2, duration: 8.5, delay: 3.2 },
  { left: 36, top: 82, size: 3, duration: 12, delay: 1.1 },
  { left: 42, top: 24, size: 2, duration: 9.5, delay: 2.8 },
  { left: 48, top: 62, size: 2.5, duration: 10.5, delay: 0.4 },
  { left: 54, top: 10, size: 2, duration: 8.8, delay: 1.7 },
  { left: 60, top: 43, size: 3, duration: 11.5, delay: 3.5 },
  { left: 66, top: 76, size: 2, duration: 9.3, delay: 0.9 },
  { left: 72, top: 28, size: 2.5, duration: 10.8, delay: 2.2 },
  { left: 78, top: 57, size: 2, duration: 12.2, delay: 1.2 },
  { left: 84, top: 14, size: 3, duration: 9.8, delay: 3.1 },
  { left: 90, top: 38, size: 2, duration: 10.2, delay: 0.6 },
  { left: 95, top: 72, size: 2.5, duration: 11.8, delay: 2.5 },

  { left: 8, top: 88, size: 2, duration: 10.4, delay: 3.4 },
  { left: 15, top: 51, size: 2.5, duration: 9.1, delay: 1.8 },
  { left: 22, top: 73, size: 2, duration: 11.3, delay: 0.3 },
  { left: 28, top: 6, size: 3, duration: 10.7, delay: 2.7 },
  { left: 34, top: 35, size: 2, duration: 8.9, delay: 1.5 },
  { left: 40, top: 91, size: 2.5, duration: 12.5, delay: 3.7 },
  { left: 46, top: 17, size: 2, duration: 9.6, delay: 0.7 },
  { left: 52, top: 85, size: 3, duration: 11.1, delay: 2.4 },
  { left: 58, top: 31, size: 2, duration: 10.9, delay: 1.3 },
  { left: 64, top: 58, size: 2.5, duration: 9.7, delay: 3.3 },
  { left: 70, top: 7, size: 2, duration: 11.7, delay: 0.5 },
  { left: 76, top: 88, size: 3, duration: 10.1, delay: 2.9 },
  { left: 82, top: 46, size: 2, duration: 12.1, delay: 1.6 },
  { left: 88, top: 64, size: 2.5, duration: 9.4, delay: 3.6 },
  { left: 93, top: 21, size: 2, duration: 10.6, delay: 0.1 },
  { left: 97, top: 52, size: 3, duration: 11.4, delay: 2.3 },
];

/* ==========================================================
   TWINKLING STARS
========================================================== */

const stars = [
  { left: 7, top: 20, duration: 3.5, delay: 0 },
  { left: 14, top: 61, duration: 4.2, delay: 1.1 },
  { left: 21, top: 39, duration: 3.8, delay: 2.1 },
  { left: 27, top: 84, duration: 4.6, delay: 0.7 },
  { left: 35, top: 14, duration: 3.2, delay: 1.8 },
  { left: 43, top: 54, duration: 4.4, delay: 2.8 },
  { left: 50, top: 28, duration: 3.9, delay: 0.4 },
  { left: 57, top: 79, duration: 4.8, delay: 1.5 },
  { left: 63, top: 17, duration: 3.4, delay: 2.4 },
  { left: 69, top: 67, duration: 4.1, delay: 0.9 },
  { left: 75, top: 37, duration: 3.7, delay: 1.9 },
  { left: 81, top: 82, duration: 4.5, delay: 2.7 },
  { left: 87, top: 23, duration: 3.3, delay: 0.5 },
  { left: 92, top: 57, duration: 4.7, delay: 1.3 },
  { left: 97, top: 11, duration: 3.6, delay: 2.2 },
];

/* ==========================================================
   FLOATING ORBS
========================================================== */

const smallOrbs = [
  {
    left: "12%",
    top: "20%",
    size: 80,
    duration: 9,
    delay: 0,
  },
  {
    left: "82%",
    top: "25%",
    size: 72,
    duration: 11,
    delay: 1.2,
  },
  {
    left: "22%",
    top: "74%",
    size: 64,
    duration: 12,
    delay: 2,
  },
  {
    left: "74%",
    top: "72%",
    size: 90,
    duration: 10,
    delay: 0.8,
  },
];

export default function SiteBackground() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, {
    stiffness: 60,
    damping: 22,
  });

  const smoothY = useSpring(y, {
    stiffness: 60,
    damping: 22,
  });

  useEffect(() => {
    const handleMove = (
      event: PointerEvent,
    ) => {
      const centerX =
        window.innerWidth / 2;

      const centerY =
        window.innerHeight / 2;

      x.set(
        (event.clientX - centerX) *
          0.02,
      );

      y.set(
        (event.clientY - centerY) *
          0.02,
      );
    };

    window.addEventListener(
      "pointermove",
      handleMove,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "pointermove",
        handleMove,
      );
    };
  }, [x, y]);

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        overflow-hidden
      "
    >
      {/* ==========================================
          BASE
      =========================================== */}

      <div className="site-bg" />

      {/* ==========================================
          GRID
      =========================================== */}

      <div className="site-grid" />

      {/* ==========================================
          MAIN GLOW
      =========================================== */}

      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="site-glow"
      />

      {/* ==========================================
          RIGHT GLOW
      =========================================== */}

      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -20, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="site-glow-secondary"
      />

      {/* ==========================================
          LEFT GLOW
      =========================================== */}

      <motion.div
        animate={{
          x: [0, 26, 0],
          y: [0, 18, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="site-glow-left"
      />

      {/* ==========================================
          FLOATING ORBS
      =========================================== */}

      {smallOrbs.map((orb, index) => (
        <motion.span
          key={`orb-${index}`}
          animate={{
            x: [0, 18, -7, 0],
            y: [0, -16, 8, 0],

            scale: [
              1,
              1.18,
              0.96,
              1,
            ],

            opacity: [
              0.08,
              0.2,
              0.1,
              0.08,
            ],
          }}
          transition={{
            duration: orb.duration,
            delay: orb.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="site-floating-orb"
          style={{
            left: orb.left,
            top: orb.top,
            width: orb.size,
            height: orb.size,
          }}
        />
      ))}

      {/* ==========================================
          PARTICLES
      =========================================== */}

      {particles.map((particle) => (
        <motion.span
          key={`particle-${particle.left}-${particle.top}`}
          animate={{
            y: [0, -16, 0],
            x: [0, 3, 0],

            opacity: [
              0.12,
              0.72,
              0.12,
            ],

            scale: [
              1,
              1.45,
              1,
            ],
          }}
          transition={{
            duration:
              particle.duration,

            delay:
              particle.delay,

            repeat: Infinity,

            ease: "easeInOut",
          }}
          className="site-particle"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,

            width: particle.size,
            height: particle.size,
          }}
        />
      ))}

      {/* ==========================================
          STARS
      =========================================== */}

      {stars.map((star) => (
        <motion.span
          key={`star-${star.left}-${star.top}`}
          animate={{
            opacity: [
              0.05,
              0.65,
              0.05,
            ],

            scale: [
              0.8,
              1.7,
              0.8,
            ],
          }}
          transition={{
            duration:
              star.duration,

            delay:
              star.delay,

            repeat: Infinity,

            ease: "easeInOut",
          }}
          className="site-star"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
          }}
        />
      ))}

      {/* ==========================================
          TEXTURE
      =========================================== */}

      <div className="site-noise" />

      {/* ==========================================
          VIGNETTE
      =========================================== */}

      <div className="site-vignette" />
    </div>
  );
}