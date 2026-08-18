"use client";

import { useCallback, useEffect, useState } from "react";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import Navigation from "./Navigation";
import ReviewCard from "./ReviewCard";
import { testimonials } from "./testimonials.data";

export default function ReviewsCarousel() {
  const autoplay = Autoplay({
    delay: 5000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [autoplay]
  );

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;

    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect();

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="flex flex-col gap-8">
      {/* Carousel */}

      <div
        className="overflow-hidden"
        ref={emblaRef}
      >
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="
                min-w-0
                flex-[0_0_100%]

                md:flex-[0_0_50%]

                xl:flex-[0_0_33.333%]

                px-3
              "
            >
              <ReviewCard
                testimonial={testimonial}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}

      <div className="flex justify-end">
        <Navigation
          canScrollNext={canNext}
          canScrollPrev={canPrev}
          onNext={() => emblaApi?.scrollNext()}
          onPrev={() => emblaApi?.scrollPrev()}
        />
      </div>
    </div>
  );
}