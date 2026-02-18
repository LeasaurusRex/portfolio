import styles from "./Hero.module.css";
import Badge from "@/shared/Badge";
import Button from "@/shared/Button";

function Hero() {
  return (
    <article>
      <div className={styles.heroContent}>
        <div className={styles.heroEyebrow}>
          <Badge variant="mint" withShadow fontSize="s">
            <p>
              <span className={styles.star}>✦</span>{" "}
              <span className="bold">Disponible</span>{" "}
              <span>📍 Rennes, FR</span>
            </p>
          </Badge>

          <p className="mono bold">Angular · NestJS · React</p>
        </div>
        <h1 className={styles.title}>
          <span className={styles.titleOutline}>DÉVELOPPEUSE</span>
          <span className={styles.titleFilled}>FULL-STACK</span>
        </h1>
        <p className={styles.heroDesc}>
          Je conçois des apps web <span className="bold">du front au back</span>{" "}
          avec un intérêt particulier pour{" "}
          <span className="bold">l'accessibilité</span> et les interfaces qui
          ont du caractère. <br />
        </p>
        <div className={styles.heroActions}>
          <Button variant="pink" to="/realisations">
            ✦ Voir mes projets
          </Button>
          <Button variant="white" href="https://github.com/LeasaurusRex">
            GitHub →
          </Button>
        </div>
      </div>
    </article>
  );
}

export default Hero;
