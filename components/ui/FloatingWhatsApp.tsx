"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";

const whatsappNumber = "923154716105";

const whatsappMessage =
  "Hi Pixorely, I am interested in your services and would like to discuss my project.";

const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage,
)}`;

const attentionMessages = [
  "Need help with your project?",
  "Let's build something amazing!",
  "Chat with Pixorely",
];

export default function FloatingWhatsApp() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const firstMessageTimer = window.setTimeout(() => {
      setShowMessage(true);
    }, 2500);

    const hideFirstMessageTimer = window.setTimeout(() => {
      setShowMessage(false);
    }, 6000);

    const messageInterval = window.setInterval(() => {
      setMessageIndex((current) => {
        return (current + 1) % attentionMessages.length;
      });

      setShowMessage(true);

      window.setTimeout(() => {
        setShowMessage(false);
      }, 3500);
    }, 9000);

    return () => {
      window.clearTimeout(firstMessageTimer);
      window.clearTimeout(hideFirstMessageTimer);
      window.clearInterval(messageInterval);
    };
  }, []);

  return (
    <div
      className="
        fixed
        bottom-[calc(18px+env(safe-area-inset-bottom))]
        right-4
        z-[900]
        flex
        items-end
        sm:bottom-[calc(24px+env(safe-area-inset-bottom))]
        sm:right-6
      "
    >
      {/* Attention message */}

      <AnimatePresence mode="wait">
        {showMessage && (
          <motion.div
            key={attentionMessages[messageIndex]}
            initial={{
              opacity: 0,
              x: 12,
              y: 6,
              scale: 0.94,
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              x: 8,
              y: 4,
              scale: 0.96,
            }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              pointer-events-none
              absolute
              bottom-[66px]
              right-0
              w-max
              max-w-[230px]
              rounded-2xl
              border
              border-[var(--border)]
              bg-[var(--card)]/95
              px-4
              py-3
              text-sm
              font-medium
              text-[var(--foreground)]
              shadow-[0_14px_40px_rgba(0,0,0,0.14)]
              backdrop-blur-xl
            "
          >
            {attentionMessages[messageIndex]}

            <span
              aria-hidden="true"
              className="
                absolute
                -bottom-1.5
                right-6
                h-3
                w-3
                rotate-45
                border-b
                border-r
                border-[var(--border)]
                bg-[var(--card)]
              "
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Pixorely on WhatsApp"
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.9,
        }}
        animate={{
          opacity: 1,
          y: [0, 0, -5, 0],
          scale: 1,
        }}
        transition={{
          opacity: {
            duration: 0.5,
            delay: 0.5,
          },
          scale: {
            duration: 0.5,
            delay: 0.5,
          },
          y: {
            duration: 0.7,
            delay: 3,
            repeat: Infinity,
            repeatDelay: 7,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
        whileTap={{
          scale: 0.94,
        }}
        onMouseEnter={() => {
          setShowMessage(false);
        }}
        className="
          group
          relative
          inline-flex
          h-14
          w-14
          items-center
          rounded-full
          border
          border-white/20
          bg-[var(--card)]/90
          p-2
          text-[var(--foreground)]
          shadow-[0_14px_42px_rgba(0,0,0,0.18)]
          backdrop-blur-2xl

          transition-[width,background-color,border-color,box-shadow,transform]
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          hover:w-[174px]
          hover:border-green-500/35
          hover:shadow-[0_18px_55px_rgba(34,197,94,0.24)]

          dark:border-white/10
          dark:bg-[#111113]/90

          sm:h-[56px]
          sm:w-[56px]
          sm:hover:w-[184px]
        "
      >
        {/* Clipped inner background only */}

        <span
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
            rounded-full
          "
        >
          <span
            className="
              absolute
              -left-6
              top-1/2
              h-20
              w-20
              -translate-y-1/2
              rounded-full
              bg-green-500/20
              opacity-0
              blur-2xl
              transition-opacity
              duration-500
              group-hover:opacity-100
            "
          />
        </span>

        {/* Icon wrapper leaves room for status badge */}

        <span
          className="
            relative
            z-20
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
          "
        >
          {/* Green icon circle */}

          <span
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-[#25d366]
              text-white
              shadow-[0_7px_20px_rgba(37,211,102,0.35)]

              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]

              group-hover:scale-95
            "
          >
            <FaWhatsapp size={18} />
          </span>

          {/* Online indicator */}

          <span
            aria-hidden="true"
            className="
              absolute
              right-0
              top-0
              z-30
              h-3
              w-3
              rounded-full
              border-2
              border-[var(--card)]
              bg-green-400
              dark:border-[#111113]
            "
          />

          {/* Online indicator pulse */}

          <span
            aria-hidden="true"
            className="
              absolute
              right-0
              top-0
              z-20
              h-3
              w-3
              animate-ping
              rounded-full
              bg-green-400
              opacity-55
            "
          />
        </span>

        {/* Hover text */}

        <span
          className="
            relative
            z-10
            ml-2
            flex
            min-w-[106px]
            translate-x-3
            items-center
            gap-2
            whitespace-nowrap
            opacity-0

            transition-[opacity,transform]
            duration-500
            ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:translate-x-0
            group-hover:opacity-100
          "
        >
          <span className="text-[13px] font-semibold">
            Chat with us
          </span>

          <ArrowRight
            size={15}
            strokeWidth={2.2}
            className="
              shrink-0
              text-green-600
              transition-transform
              duration-500
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:translate-x-1
              dark:text-green-400
            "
          />
        </span>
      </motion.a>
    </div>
  );
}