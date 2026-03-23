import typography from "@/shared/typography.module.css";
import styles from "./About.module.css";
import Description from "./components/Description";
import Experience from "./components/Experience";

function About() {
  return (
    <div className={`pageWrapper ${styles.container}`}>
      <h1 className={styles.title}>
        À propos de <span className={typography.accented}>moi</span>{" "}
        <span className={typography.star}>✦</span>
      </h1>
      <Description />
      <h2 className={styles.secondTitle}>
        Expériences <span className={styles.accented}>& compétences</span>
      </h2>
      <section className={styles.skillsContainer}>
        <Experience />
      </section>
    </div>
  );
}

export default About;
