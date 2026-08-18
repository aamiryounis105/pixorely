import type { ComponentType } from "react";

export interface WhyIconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export type CardSize =
  | "large-horizontal"
  | "large-vertical"
  | "small";

export interface Reason {
  id: string;

  title: string;

  description: string;

  icon: ComponentType<WhyIconProps>;

  size: CardSize;

  stat: {
    value: number;
    suffix?: string;
    prefix?: string;
    label: string;
  };

  highlights: string[];
}