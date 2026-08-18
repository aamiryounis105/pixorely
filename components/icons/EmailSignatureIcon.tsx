interface Props {
  className?: string;
}

export default function EmailSignatureIcon({
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
        y="12"
        width="44"
        height="40"
        rx="6"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M18 40H46"
        stroke="currentColor"
        strokeWidth="2.5"
      />

      <path
        d="M22 32C28 26 36 42 42 28"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}