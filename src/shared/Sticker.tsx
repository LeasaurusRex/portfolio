import { Color } from "@/shared/utils/constants";
import styles from "./Sticker.module.css";

interface StickerProps {
  color: Color;
  text?: string;
  subtext?: string;
  rotation?: "left" | "right";
  ariaLabel?: string;
  ariaHiddenText?: boolean;
}
function Sticker({
  color,
  text,
  subtext,
  rotation,
  ariaLabel,
  ariaHiddenText,
}: StickerProps) {
  const classes = `${styles.sticker} ${color} ${rotation === "left" ? styles.leftRotate : rotation === "right" ? styles.rightRotate : ""}`;
  return (
    <div className={classes} aria-label={ariaLabel}>
      {text !== undefined && (
        <div className={styles.text} aria-hidden={ariaHiddenText ?? undefined}>
          {text}
        </div>
      )}
      {subtext && <div className={styles.subtext}>{subtext}</div>}
    </div>
  );
}

export default Sticker;
