interface Props {
  className?: string;
}

export default function EmailTemplateIcon({
  className = "w-8 h-8",
}: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
    >
      <rect
        x="10"
        y="14"
        width="44"
        height="36"
        rx="6"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <polyline
        points="10 18 32 34 54 18"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <text
        x="32"
        y="48"
        textAnchor="middle"
        fontSize="10"
        fill="currentColor"
      >
        &lt;/&gt;
      </text>
    </svg>
  );
}