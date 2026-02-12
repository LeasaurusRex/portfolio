import styles from "./Badge.module.css";
import { Color, FontSize } from "@/shared/utils/constants";

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

  return <div className={classes}>{children}</div>;
}

export default Badge;
