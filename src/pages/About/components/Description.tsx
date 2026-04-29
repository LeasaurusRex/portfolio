import styles from "./Description.module.css";

function Description() {
  return (
    <section className={styles.container}>
      <article>
        <p className={styles.desc}>
          Basée à Rennes, je suis
          <span className="bold"> développeuse full-stack </span>
          depuis <span className="bold"> 3 ans</span> sur la stack{" "}
          <span className="bold"> Angular / NestJS / MongoDB</span>.
        </p>
        <p className={styles.desc}>
          Au cours de mon expérience en <span className="bold">insurtech</span>,
          j'étais en charge de l'espace client web (post-authentification) et
          j'ai mis en production
          <span className="bold"> 47 fonctionnalités </span> pour améliorer
          l'autonomie client, ce qui a également permis d'économiser{" "}
          <span className="bold">40j ETP/mois</span> pour mes collègues du
          service client. J'animais également un groupe de travail
          <span className="bold"> accessibilité web (RGAA) </span>, sujet qui me
          tient à cœur et que je continue d'approfondir.
        </p>
        <p className={styles.desc}>
          J'ai élargi ma stack à<span className="bold"> React </span> et j'ai
          été sélectionnée pour participer au
          <span className="bold"> Hackathon Développeurs </span> organisé par
          France Travail, Opco Atlas et Alt en{" "}
          <span className="bold">mars 2026</span>.
        </p>
      </article>
      <article className={styles.highlight}>
        <div className={styles.highlightItem}>
          <span className={styles.highlightIcon} aria-hidden="true">
            👩🏻‍💻
          </span>
          <div className={styles.highlightItemText}>
            <div className={styles.highlightTitle}>3 ans d'expérience</div>
            <div className={styles.highlightSub}>
              Développement web en insurtech
            </div>
          </div>
        </div>
        <div className={styles.highlightItem}>
          <span className={styles.highlightIcon} aria-hidden="true">
            🚀
          </span>
          <div className={styles.highlightItemText}>
            <div className={styles.highlightTitle}>
              47 fonctionnalités en production
            </div>
            <div className={styles.highlightSub}>
              Pour une économie de 40j ETP par mois
            </div>
          </div>
        </div>
        <div className={styles.highlightItem}>
          <span className={styles.highlightIcon} aria-hidden="true">
            ♿
          </span>
          <div className={styles.highlightItemText}>
            <div className={styles.highlightTitle}>Accessibilité RGAA</div>
            <div className={styles.highlightSub}>
              Lead d'un groupe de travail transverse
            </div>
          </div>
        </div>
        <div className={styles.highlightItem}>
          <span className={styles.highlightIcon} aria-hidden="true">
            ⚙️
          </span>
          <div className={styles.highlightItemText}>
            <div className={styles.highlightTitle}>Environnement moderne</div>
            <div className={styles.highlightSub}>
              Kubernetes · Docker · CI/CD · Microservices · Agile · RGAA
            </div>
          </div>
        </div>
        <div className={styles.highlightItem}>
          <span className={styles.highlightIcon} aria-hidden="true">
            📦
          </span>
          <div className={styles.highlightItemText}>
            <div className={styles.highlightTitle}>Full-stack</div>
            <div className={styles.highlightSub}>
              Angular · NestJS · TypeScript · Tailwind CSS · MongoDB · React
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Description;
