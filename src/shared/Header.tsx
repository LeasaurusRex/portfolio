import leasaur from "@/assets/leasaur.png";
import Button from "@/shared/Button.tsx";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo} onClick={closeMenu}>
        <img
          src={leasaur}
          alt=""
          className={styles.logoIcon}
          aria-hidden="true"
        />
        <span className={styles.logoTitle}>leapauly.dev</span>
      </Link>
      <nav className={styles.nav} aria-label="Navigation principale">
        <ul
          className={`${styles.navList} ${isMenuOpen ? styles.navListOpen : ""}`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to="/"
              onClick={closeMenu}
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
              onClick={closeMenu}
            >
              à propos
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${styles.link} ${isActive ? styles.active : ""}`
              }
              to="/realisations"
              onClick={closeMenu}
            >
              réalisations
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={styles.navCtaDesktop}>
        <Button
          variant="yellow"
          size="md"
          children="✦ Me contacter"
          href="https://www.linkedin.com/in/leapauly/"
          aria-label="Aller sur mon profil LinkedIn (nouvel onglet)"
        />
      </div>
      {/* Burger button for mobile and tablet display */}
      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-controls="mobile-menu"
      >
        <span
          className={`${styles.burgerLine} ${isMenuOpen ? styles.burgerLineOpen : ""}`}
        ></span>
        <span
          className={`${styles.burgerLine} ${isMenuOpen ? styles.burgerLineOpen : ""}`}
        ></span>
        <span
          className={`${styles.burgerLine} ${isMenuOpen ? styles.burgerLineOpen : ""}`}
        ></span>
      </button>
    </header>
  );
}

export default Header;
