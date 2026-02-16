import styles from "./About.module.css";
import Description from "./components/Description";

function About() {
  return (
    <>
      <h1 className={styles.title}>
        À propos de <span className={styles.accented}>moi</span>{" "}
        <span className={styles.star}>✦</span>
      </h1>
      <Description />
    </>
  );
}

export default About;
