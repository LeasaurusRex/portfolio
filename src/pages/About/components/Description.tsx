import styles from "./Description.module.css";

function Description() {
  return (
    <section className={styles.container}>
      <article>
        <p>
          Reconvertie en 2022 et basée à Rennes, je suis
          <span className="bold"> développeuse full-stack </span>
          depuis <span className="bold"> 3 ans</span>, et j'ai principalement
          travaillé sur la stack{" "}
          <span className="bold"> Angular / NestJS / MongoDB</span>.
        </p>
        <p>
          Au cours de mon expérience en <span className="bold">insurtech</span>,
          j'ai mis en production
          <span className="bold"> 47 fonctionnalités </span> qui ont permis
          d'économiser 40j ETP/mois pour mes collègues du service client et j'ai
          animé le groupe de travail
          <span className="bold"> accessibilité web (RGAA) </span> — un sujet
          qui me tient profondément à cœur.
        </p>
        <p>
          Actuellement en apprentissage sur
          <span className="bold"> React </span> (comme le prouve ce portfolio),
          j'ai été sélectionnée pour participer au
          <span className="bold"> Hackathon Développeurs </span> organisé par
          France Travail, Opco Atlas et Alt en mars 2026.
          <br />
        </p>
      </article>
      <article className={styles.highlight}>
        <div className={styles.highlightItem}>
          <span className={styles.highlightIcon}>🚀</span>
          <div className={styles.highlightItemText}>
            <div className={styles.highlightTitle}>Angular 16 → 19</div>
            <div className={styles.highlightSub}>
              Participation à la refonte technique
            </div>
          </div>
        </div>
        <div className={styles.highlightItem}>
          <span className={styles.highlightIcon}>♿</span>
          <div className={styles.highlightItemText}>
            <div className={styles.highlightTitle}>Accessibilité RGAA</div>
            <div className={styles.highlightSub}>
              Lead d'un groupe de travail transverse
            </div>
          </div>
        </div>
        <div className={styles.highlightItem}>
          <span className={styles.highlightIcon}>⚙️</span>
          <div className={styles.highlightItemText}>
            <div className={styles.highlightTitle}>Environnement moderne</div>
            <div className={styles.highlightSub}>
              Kubernetes · Docker · CI/CD · Microservices
            </div>
          </div>
        </div>
        <div className={styles.highlightItem}>
          <span className={styles.highlightIcon}>📦</span>
          <div className={styles.highlightItemText}>
            <div className={styles.highlightTitle}>Full-stack</div>
            <div className={styles.highlightSub}>
              70% front — 30% back (en progression)
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Description;
