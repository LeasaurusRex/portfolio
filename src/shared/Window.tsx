import styles from "./Window.module.css";

interface WindowProps {
  size: string;
  title?: string;
  headerColor?: string;
  statusBadge?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

function Window({
  size,
  title,
  headerColor = "cream3",
  statusBadge,
  children,
  footer,
  className,
}: WindowProps) {
  const windowClasses =
    `${styles.window} ${styles[size]} ${className ?? ""}`.trim();
  const headerClasses = `${styles.header} ${styles[headerColor]}`;
  const redDot = `${styles.dot} ${styles.dotRed}`;
  const yellowDot = `${styles.dot} ${styles.dotYellow}`;
  const greenDot = `${styles.dot} ${styles.dotGreen}`;

  return (
    <div className={windowClasses}>
      <div className={headerClasses}>
        <div className={styles.dotsContainer}>
          <span className={redDot} />
          <span className={yellowDot} />
          <span className={greenDot} />
        </div>
        <p className={styles.title}>{title}</p>
        <div>{statusBadge}</div>
      </div>
      <div className={styles.content}>{children}</div>
      {footer && (
        <>
          <div className="hr"></div>
          <div className={styles.content}>{footer}</div>
        </>
      )}
    </div>
  );
}

export default Window;
