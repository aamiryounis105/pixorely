interface Props {
  className?: string;
}

export default function ShopifyIcon({
  className = "w-8 h-8",
}: Props) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
    >
      <path
        d="M18 24H46L43 50H21L18 24Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      <path
        d="M24 24C24 18 28 14 32 14C36 14 40 18 40 24"
        stroke="currentColor"
        strokeWidth="2.5"
      />
    </svg>
  );
}