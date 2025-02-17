/* eslint css-modules/no-unused-class: [2, {camelCase: true, markAsUsed: [
  'is-secondary', 'align-center', 'width-xsmall', 'width-small', 'height-readable', 'height-full',
  'space-none', 'space-small', 'space-large', 'space-horizontal'
]}] */

import { clsx } from "clsx";
import styles from "./container.module.css";

const spacingOptions = ["none", "small", "medium", "large", "horizontal"];

interface ContainerProps {
  spacing?: (typeof spacingOptions)[number];
  children: React.ReactNode;
  align?: "center" | "left" | "right";
  className?: string;
  variant?: "basic" | "secondary";
  width?: "xsmall" | "small" | "medium" | "large" | "xlarge";
  height?: "readable" | "full";
}

export default function Container({
  spacing = "medium",
  children,
  align,
  className,
  variant = "basic",
  width,
  height,
  ...props
}: ContainerProps) {
  return (
    <div
      className={clsx(
        styles.container,
        styles[`space-${spacing}`],
        styles[`is-${variant}`],
        {
          [styles[`align-${align}`]]: align,
          [styles[`width-${width}`]]: width,
          [styles[`height-${height}`]]: height,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
