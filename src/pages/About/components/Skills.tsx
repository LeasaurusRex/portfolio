import styles from "./Skills.module.css";
import Skillbar from "./Skillbar";

function Skills() {
  return (
    <div className={styles.list}>
      <div>
        <div className={styles.header}>
          <span className={styles.name}>Angular</span>
          <span className={styles.level}>Intermédiaire</span>
        </div>
        <Skillbar width="75%" color="pink" />
      </div>
      <div>
        <div className={styles.header}>
          <span className={styles.name}>NestJS</span>
          <span className={styles.level}>En progression</span>
        </div>
        <Skillbar width="60%" color="mint" />
      </div>
      <div>
        <div className={styles.header}>
          <span className={styles.name}>React</span>
          <span className={styles.level}>En cours d'apprentissage</span>
        </div>
        <Skillbar width="45%" color="lavender" />
      </div>
      <div>
        <div className={styles.header}>
          <span className={styles.name}>Accessibilité RGAA</span>
          <span className={styles.level}>Intermédiaire</span>
        </div>
        <Skillbar width="70%" color="yellow" />
      </div>
      <div>
        <div className={styles.header}>
          <span className={styles.name}>
            Docker • CI/CD • SonarQube • Grafana
          </span>
          <span className={styles.level}>Utilisatrice</span>
        </div>
        <Skillbar width="50%" color="sky" />
      </div>
    </div>
  );
}

export default Skills;
