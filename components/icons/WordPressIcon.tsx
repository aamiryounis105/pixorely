interface Props {
  className?: string;
}

export default function WordPressIcon({
  className = "w-8 h-8",
}: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
    >
      <circle
        cx="32"
        cy="32"
        r="24"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <text
        x="32"
        y="40"
        textAnchor="middle"
        fontSize="22"
        fontWeight="700"
        fill="currentColor"
      >
        W
      </text>
    </svg>
  );
}