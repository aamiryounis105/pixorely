"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import {
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

import type { Project } from "./work.types";

interface WorkCardProps {
  project: Project;
  index: number;
}

export default function WorkCard({
  project,
  index,
}: WorkCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow =
      document.body.style.overflow;

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow =
      "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow =
        previousOverflow;
    };
  }, [isOpen]);

  const modal =
    mounted && (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.22,
            }}
            onClick={() => setIsOpen(false)}
            className="
              fixed
              inset-0
              z-[2147483647]

              flex
              items-center
              justify-center

              bg-black/90

              p-5

              backdrop-blur-sm

              sm:p-8
            "
          >
            {/* Image Container */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 16,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.97,
                y: 8,
              }}
              transition={{
                duration: 0.3,
                ease: [
                  0.22,
                  1,
                  0.36,
                  1,
                ],
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="
                relative

                flex
                max-h-[88vh]
                max-w-[92vw]

                items-center
                justify-center
              "
            >
              {/* Full Image */}

              <img
                src={project.image}
                alt={project.title}
                className="
                  block

                  h-auto
                  max-h-[88vh]

                  w-auto
                  max-w-[92vw]

                  object-contain
                "
              />

              {/* Close */}

              <button
                type="button"
                onClick={() =>
                  setIsOpen(false)
                }
                aria-label="Close image preview"
                className="
                  absolute
                  -right-3
                  -top-3

                  z-20

                  flex
                  h-8
                  w-8
                  items-center
                  justify-center

                  rounded-full

                  border
                  border-[var(--background)]

                  bg-[var(--card)]

                  backdrop-blur-md

                  transition-colors
                  duration-300

                  hover:border-[var(--primary)]
                  hover:bg-[var(--primary)]

                  sm:-right-10
                  sm:-top-3
                "
              >
                <X
                  size={20}
                  strokeWidth={2}
                />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );

  return (
    <>
      <motion.article
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        whileHover={{
          y: -8,
        }}
        viewport={{
          once: true,
          amount: 0.25,
        }}
        transition={{
          duration: 0.6,
          delay: index * 0.08,
          ease: [
            0.22,
            1,
            0.36,
            1,
          ],
        }}
        className="
          group
          overflow-hidden

          rounded-3xl

          border
          border-[var(--border)]

          bg-[var(--card)]

          transition-all
          duration-300

          hover:border-[var(--primary)]
        "
      >
        {/* Preview */}

        <div
          className="
            relative
            aspect-[16/9]
            overflow-hidden

            bg-[var(--secondary)]
          "
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="
              object-cover

              transition-transform
              duration-700

              group-hover:scale-[1.01]
            "
          />

          <div
            className="
              pointer-events-none

              absolute
              inset-0

              bg-gradient-to-t
              from-black/20
              via-transparent
              to-transparent

              opacity-0

              transition-opacity
              duration-500

              group-hover:opacity-100
            "
          />
        </div>

        {/* Content */}

        <div className="p-7">
          {/* Category */}

          <span
            className="
              text-sm
              font-semibold

              text-[var(--primary)]
            "
          >
            {project.category}
          </span>

          {/* Title + Preview Button */}

          <div
            className="
              mt-5

              flex
              items-start
              justify-between

              gap-5
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                tracking-tight

                text-[var(--foreground)]
              "
            >
              {project.title}
            </h3>

            <button
              type="button"
              onClick={() =>
                setIsOpen(true)
              }
              aria-label={`Preview ${project.title}`}
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center

                rounded-full

                border
                border-[var(--border)]

                bg-transparent

                text-[var(--foreground)]

                transition-all
                duration-300

                hover:border-[var(--primary)]
                hover:bg-[var(--primary)]
                hover:text-white
              "
            >
              <ArrowUpRight
                size={18}
                strokeWidth={2}
              />
            </button>
          </div>

          {/* Description */}

          <p
            className="
              mt-4
              leading-7

              text-[var(--muted)]
            "
          >
            {project.description}
          </p>

          {/* Tags */}

          <div
            className="
              mt-7

              flex
              flex-wrap

              gap-2
            "
          >
            {project.tags.map(
              (tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full

                    border
                    border-[var(--border)]

                    bg-[var(--secondary)]

                    px-3
                    py-1.5

                    text-xs
                    font-semibold

                    text-[var(--foreground)]
                  "
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </motion.article>

      {/* Render outside website stacking context */}

      {mounted &&
        createPortal(
          modal,
          document.body
        )}
    </>
  );
}