import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <p className={styles.footerTitle}>leapauly.dev</p>
      <div className={styles.footerLinksContainer}>
        <a
          className={styles.footerLink}
          href="https://www.linkedin.com/in/leapauly/"
          target="_blank"
        >
          LinkedIn →
        </a>
        <a
          className={styles.footerLink}
          href="https://github.com/LeasaurusRex"
          target="_blank"
        >
          GitHub →
        </a>
      </div>
      <p className={styles.footerSignature}>
        © 2026 — Fait avec ♥ et des litres de chicorée
      </p>
    </footer>
  );
}

export default Footer;
