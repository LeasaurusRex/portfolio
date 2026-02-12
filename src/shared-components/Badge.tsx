import styles from "./Badge.module.css";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "pink" | "mint" | "lavender" | "yellow" | "peach" | "sky";
  withShadow?: boolean;
  fontSize?: "xs" | "s" | "base" | "l" | "xl";
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
