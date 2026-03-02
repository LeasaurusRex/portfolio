import styles from "./Hero.module.css";
import Badge from "@/shared/Badge";
import Button from "@/shared/Button";

function Hero() {
  return (
    <article className={styles.hero}>
      <div className={styles.eyebrow}>
        <Badge variant="mint" withShadow fontSize="s">
          <p>
            <span className={styles.star}>✦</span>{" "}
            <span className="bold">Disponible</span> <span>📍 Rennes, FR</span>
          </p>
        </Badge>

        <p className="mono bold">Angular · NestJS · React</p>
      </div>
      <h1 className={styles.title}>
        <span className={styles.titleOutline}>DÉVELOPPEUSE</span>
        <span className={styles.titleFilled}>FULL-STACK</span>
      </h1>
      <p className={styles.desc}>
        Je conçois des apps web <span className="bold">du front au back</span>{" "}
        avec un intérêt particulier pour{" "}
        <span className="bold">l'accessibilité</span> et les interfaces qui ont
        du caractère. <br />
      </p>
      <div className={styles.actionButtons}>
        <Button variant="pink" to="/realisations">
          ✦ Voir mes projets
        </Button>
        <Button variant="white" href="https://github.com/LeasaurusRex">
          GitHub →
        </Button>
      </div>
    </article>
  );
}

export default Hero;
