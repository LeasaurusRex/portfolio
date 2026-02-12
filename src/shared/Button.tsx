import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "pink" | "white" | "yellow";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  icon?: React.ReactNode;
  href?: string;
}

function Button({
  children,
  variant = "pink",
  size = "md",
  onClick,
  icon,
  href,
}: ButtonProps) {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

export default Button;
