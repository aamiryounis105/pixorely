"use client";

import { projects } from "./work.data";
import WorkCard from "./WorkCard";

export default function WorkGrid() {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-6

        md:grid-cols-2

        xl:grid-cols-3
      "
    >
      {projects.map((project, index) => (
        <WorkCard
          key={project.id}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}