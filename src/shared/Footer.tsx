import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.footerTitle}>leapauly.dev</p>
      <div className={styles.footerLinksContainer}>
        <a className={styles.footerLink} href="">
          LinkedIn →
        </a>
        <a className={styles.footerLink} href="">
          GitHub →
        </a>
        <a className={styles.footerLink} href="">
          lea.pauly@hotmail.fr
        </a>
      </div>
      <p className={styles.footerSignature}>
        © 2026 — Fait avec ♥ et des litres de chicorée
      </p>
    </footer>
  );
}

export default Footer;
