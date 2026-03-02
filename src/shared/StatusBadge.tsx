import styles from "./StatusBadge.module.css";
import Badge from "@/shared/Badge";

type Status = "ONLINE" | "IN_PROGRESS" | "SOON";

type StatusConfig = {
  label: string;
  variant: string;
  dot: string;
  pulse: boolean;
};

const STATUS_CONFIG: Record<Status, StatusConfig> = {
  ONLINE: {
    label: "EN LIGNE",
    variant: "mint",
    dot: styles.dotGreen,
    pulse: false,
  },
  IN_PROGRESS: {
    label: "EN COURS",
    variant: "yellow",
    dot: styles.dotYellow,
    pulse: true,
  },
  SOON: {
    label: "BIENTÔT",
    variant: "",
    dot: styles.dotGrey,
    pulse: false,
  },
};

function StatusBadge({ status }: { status: Status }) {
  const { label, variant, dot, pulse } = STATUS_CONFIG[status];
  const dotStyle = `${styles.dot} ${dot} ${pulse ? styles.pulse : ""}`.trim();
  return (
    <Badge variant={variant}>
      <span className={dotStyle}>•</span> {label}
    </Badge>
  );
}

export default StatusBadge;
