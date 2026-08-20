import AnimatedButton from "@/components/ui/AnimatedButton";

export default function HeroActions() {
  return (
    <div
      className="
        mt-10
        flex
        flex-col
        items-center
        justify-center
        gap-4
        sm:flex-row
      "
    >
      {/* Primary CTA */}

      <AnimatedButton
        href="#contact"
        onlineEffect
      >
        Let's Build Together
      </AnimatedButton>

      {/* Secondary CTA */}

      <AnimatedButton
        href="#work"
        variant="inverted"
        onlineEffect
      >
        View Our Work
      </AnimatedButton>
    </div>
  );
}