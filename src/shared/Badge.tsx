import { Color, FontSize } from "@/shared/utils/constants";
import styles from "./Badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
  variant?: Color;
  withShadow?: boolean;
  fontSize?: FontSize;
}

function Badge({
  children,
  variant = "pink",
  withShadow = false,
  fontSize = "xs",
}: BadgeProps) {
  const classes = `${variant} ${styles.badge} ${withShadow ? styles.shadow : ""} font-${fontSize}`;

  return <span className={classes}>{children}</span>;
}

export default Badge;
