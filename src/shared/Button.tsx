import styles from "./Button.module.css";
import { Link, type To } from "react-router-dom";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "pink" | "white" | "yellow";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  icon?: React.ReactNode;
  href?: string;
  to?: To;
}

function Button({
  children,
  variant = "pink",
  size = "md",
  onClick,
  icon,
  href,
  to,
}: ButtonProps) {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </a>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {icon && <span className={styles.icon}>{icon}</span>}
      </Link>
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
