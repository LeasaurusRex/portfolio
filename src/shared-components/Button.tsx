import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "pink" | "white" | "yellow";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  icon?: React.ReactNode;
}

function Button({
  children,
  variant = "pink",
  size = "md",
  onClick,
  icon,
}: ButtonProps) {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]}`;

  // Si c'est un bouton
  return (
    <button className={classes} onClick={onClick}>
      {children}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
}

export default Button;
