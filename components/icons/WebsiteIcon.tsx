interface Props {
  className?: string;
}

export default function WebsiteDesignIcon({
  className = "w-8 h-8",
}: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="8"
        y="10"
        width="48"
        height="40"
        rx="8"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <line
        x1="8"
        y1="20"
        x2="56"
        y2="20"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <circle
        cx="15"
        cy="15"
        r="1.5"
        fill="currentColor"
      />

      <circle
        cx="21"
        cy="15"
        r="1.5"
        fill="currentColor"
      />

      <circle
        cx="27"
        cy="15"
        r="1.5"
        fill="currentColor"
      />
    </svg>
  );
}