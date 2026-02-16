import styles from "./About.module.css";
import Description from "./components/Description";
import Experience from "./components/Experience";

function About() {
  return (
    <div className={styles.content}>
      <h1 className={styles.title}>
        À propos de <span className={styles.accented}>moi</span>{" "}
        <span className={styles.star}>✦</span>
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
