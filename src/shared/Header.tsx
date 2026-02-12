import styles from "./Header.module.css";
import leasaur from "@/assets/leasaur.png";
import Button from "@/shared/Button.tsx";

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.logo}>
        <img
          src={leasaur}
          alt=""
          className={styles.logoIcon}
          aria-hidden="true"
        />
        <span className={styles.logoTitle}>leapauly.dev</span>
      </a>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <a className={styles.link} href="/">
              accueil
            </a>
          </li>
          <li>
            <a className={styles.link} href="/about">
              à propos
            </a>
          </li>
          <li>
            <a className={styles.link} href="/projects">
              réalisations
            </a>
          </li>
        </ul>
      </nav>
      <Button
        variant="yellow"
        size="md"
        children="✦ Me contacter"
        href="/contact"
      />
    </header>
  );
}

export default Header;
