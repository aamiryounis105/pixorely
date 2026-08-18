import Badge from "./Badge";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const textAlign = align === "left" ? "text-left" : "text-center";

  return (
    <div
      className={`max-w-3xl ${align === "center" ? "mx-auto" : ""} ${textAlign}`}
    >
      <Badge>{badge}</Badge>

      <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-8 text-muted">{description}</p>
      )}
    </div>
  );
}
