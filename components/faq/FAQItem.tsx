import { Plus } from "lucide-react";

import type { FAQItemData } from "./faq.types";

interface FAQItemProps {
  faq: FAQItemData;
}

export default function FAQItem({
  faq,
}: FAQItemProps) {
  return (
    <details
      className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-[var(--border)]
        bg-[var(--card)]
        transition-colors
        duration-300
        open:border-[var(--primary)]
      "
    >
      <summary
        className="
          flex
          cursor-pointer
          list-none
          items-center
          justify-between
          gap-6
          px-6
          py-6
          sm:px-7
          sm:py-7
        "
      >
        <span
          className="
            text-base
            font-semibold
            leading-7
            text-[var(--foreground)]
            sm:text-lg
          "
        >
          {faq.question}
        </span>

        <span
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-[var(--border)]
            bg-[var(--secondary)]
            text-[var(--primary)]
          "
        >
          <Plus
            size={18}
            strokeWidth={2}
            className="
              transition-transform
              duration-300
              group-open:rotate-45
            "
          />
        </span>
      </summary>

      <div
        className="
          border-t
          border-[var(--border)]
          px-6
          pb-6
          pt-5
          sm:px-7
          sm:pb-7
        "
      >
        <p
          className="
            leading-7
            text-[var(--muted)]
          "
        >
          {faq.answer}
        </p>
      </div>
    </details>
  );
}