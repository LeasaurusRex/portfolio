import styles from "./Header.module.css";
import leasaur from "@/assets/leasaur.png";
import Button from "@/shared/Button.tsx";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img
          src={leasaur}
          alt=""
          className={styles.logoIcon}
          aria-hidden="true"
        />
        <span className={styles.logoTitle}>leapauly.dev</span>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to="/"
            >
              accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to="/a-propos"
            >
              à propos
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to="/realisations"
            >
              réalisations
            </NavLink>
          </li> */}
        </ul>
      </nav>
      <Button
        variant="yellow"
        size="md"
        children="✦ Me contacter"
        href="https://www.linkedin.com/in/leapauly/"
      />
    </header>
  );
}

export default Header;
