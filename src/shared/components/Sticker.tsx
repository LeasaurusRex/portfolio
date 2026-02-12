import styles from "./Sticker.module.css";
import { Color } from "@/shared/utils/constants";

interface StickerProps {
  color: Color;
  text?: string;
  subtext?: string;
  rotation?: "left" | "right";
}
function Sticker({ color, text, subtext, rotation }: StickerProps) {
  const classes = `${styles.sticker} ${color} ${rotation === "left" ? styles.leftRotate : rotation === "right" ? styles.rightRotate : ""}`;
  return (
    <div className={classes}>
      {text !== undefined && <div className={styles.text}>{text}</div>}
      {subtext && <div className={styles.subtext}>{subtext}</div>}
    </div>
  );
}

export default Sticker;
