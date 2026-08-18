import Image from "next/image";

interface LogoIconProps {
  size?: number;
  className?: string;
}

export default function LogoIcon({
  size = 180,
  className,
}: LogoIconProps) {
  return (
    <Image
      src="/logo.png"
      alt="Pixorely"
      width={size}
      height={48}
      priority
      className={className}
    />
  );
}