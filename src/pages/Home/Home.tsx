import Hero from "@/pages/Home/components/Hero.tsx";
import StatsWindow from "@/pages/Home/components/StatsWindow";
import styles from "./Home.module.css";

function Home() {
  return (
    <section className={`pageWrapper ${styles.container}`}>
      <Hero />
      <StatsWindow />
    </section>
  );
}

export default Home;
