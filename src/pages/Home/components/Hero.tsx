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
              Développeuse Full-Stack <span className="text-mint-deep">✦ </span>
              <span className="bold">Disponible</span>{" "}
              <span>📍 Rennes, FR</span>
            </p>
          </Badge>

          <p className="mono bold">Angular · NestJS · React</p>
        </div>
        <h1 className={styles.title}>
          <span className={styles.titleOutline}>EXPLORER.</span>
          <span className={styles.titleOutline}>INCLURE.</span>
          <span className={styles.titleFilled}>CRÉER.</span>
        </h1>
        <p className={styles.heroDesc}>
          Reconvertie en 2022, je conçois des apps web{" "}
          <span className="bold">du front au back</span> avec une passion pour{" "}
          <span className="bold">l'accessibilité</span> et les interfaces qui
          ont du caractère. <br />
        </p>
        <div className={styles.heroActions}>
          <Button variant="pink">✦ Voir mes projets</Button>
          <Button variant="white">GitHub →</Button>
        </div>
      </div>
    </article>
  );
}

export default Hero;
