import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <div
      className="
        mx-auto
        flex
        max-w-5xl
        flex-col
        items-center
        gap-8
        text-center
      "
    >
      <div
        className="
          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-[var(--border)]

          bg-[var(--card)]

          px-5
          py-2.5

          text-sm
          font-medium

          shadow-card
        "
      >
        <Sparkles
          size={16}
          className="text-[var(--primary)]"
        />

        Digital solutions that drive growth
      </div>
    </div>
  );
}