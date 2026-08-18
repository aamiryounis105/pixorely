interface Props {
  className?: string;
}

export default function DigitalMarketingIcon({
  className = "w-8 h-8",
}: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
    >
      <polyline
        points="14 44 26 32 36 38 50 20"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <polyline
        points="42 20 50 20 50 28"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}