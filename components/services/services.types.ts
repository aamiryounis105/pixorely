import type { ComponentType } from "react";

export interface ServiceIconProps {
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export interface Service {
  id: string;

  title: string;

  description: string;

  icon: ComponentType<ServiceIconProps>;

  features: string[];
}