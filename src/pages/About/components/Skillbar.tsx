import styles from "./Skillbar.module.css";
import { Color } from "@/shared/utils/constants";

interface SkillbarProps {
  width: string;
  color: Color;
}

function Skillbar({ width, color }: SkillbarProps) {
  return (
    <div className={styles.barBg}>
      <div
        className={styles.barFill}
        style={{ width, background: `var(--${color})` }}
      ></div>
    </div>
  );
}

export default Skillbar;
