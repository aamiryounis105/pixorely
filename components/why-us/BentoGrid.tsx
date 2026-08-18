"use client";

import { reasons } from "./why.data";
import BentoCard from "./BentoCard";

export default function BentoGrid() {
  return (
    <div
      className="
        grid
        auto-rows-fr
        grid-cols-1
        gap-6

        md:grid-cols-2

        xl:grid-cols-3
      "
    >
      {reasons.map((reason, index) => (
        <BentoCard
          key={reason.id}
          reason={reason}
          index={index}
        />
      ))}
    </div>
  );
}