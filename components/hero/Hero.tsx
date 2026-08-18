"use client";

import HeroActions from "./HeroActions";
import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import ServiceMarquee from "./ServiceMarquee";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        isolate
        min-h-[100svh]
        overflow-hidden
        py-6
        sm:py-8
        lg:py-10
      "
    >

      <Container
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          justify-center
          text-center
        "
      >
        {/* Main hero content */}

        <div
          className="
            mx-auto
            flex
            w-full
            max-w-[1180px]
            flex-col
            items-center
          "
        >
          <HeroBadge />

          <HeroHeading />

          <HeroActions />

          <ServiceMarquee />

        </div>
      </Container>

    </section>
  );
}