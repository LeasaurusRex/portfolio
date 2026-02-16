import styles from "./Experience.module.css";
import Timeline from "./Timeline";
import Skills from "./Skills";

function Experience() {
  return (
    <>
      <article>
        <h3 className={styles.title}>Parcours</h3>
        <Timeline />
      </article>
      <article>
        <h3 className={styles.title}>Compétences clés</h3>
        <Skills />
      </article>
    </>
  );
}

export default Experience;
