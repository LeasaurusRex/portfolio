import { Color } from "@/shared/utils/constants";
import styles from "./Skillbar.module.css";

interface SkillbarProps {
  width: string;
  color: Color;
}

function Skillbar({ width, color }: SkillbarProps) {
  return (
    <div className={styles.barBg}>
      <div
        className={styles.barFill}
        role="progressbar"
        aria-valuenow={parseInt(width)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Niveau : ${width}`}
        style={{ width, background: `var(--${color})` }}
      ></div>
    </div>
  );
}

export default Skillbar;
