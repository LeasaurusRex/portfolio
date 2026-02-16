import StatsWindow from "@/pages/Home/components/StatsWindow";
import styles from "./Home.module.css";
import Hero from "@/pages/Home/components/Hero.tsx";

function Home() {
  return (
    <section className={styles.container}>
      <Hero />
      <StatsWindow />
    </section>
  );
}

export default Home;
