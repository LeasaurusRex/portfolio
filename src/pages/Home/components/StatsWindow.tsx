import styles from "./StatsWindow.module.css";
import Window from "@/shared/Window";
import BadgeList from "@/pages/Home/components/BadgeList";
import Sticker from "@/shared/Sticker";

function StatsWindow() {
  return (
    <article>
      <Window size="md" title="stats.json" footer={<BadgeList />}>
        <div className={styles.statsContainer}>
          <Sticker
            color="yellow"
            text="2.5"
            subtext="ANS D'EXPÉRIENCE"
            rotation="right"
          />
          <Sticker
            color="pink"
            text="47"
            subtext="FONCTIONNALITÉS LIVRÉES"
            rotation="left"
          />
          <Sticker
            color="sky"
            text="40"
            subtext="JOURS ETP/MOIS ÉCONOMISÉS"
            rotation="left"
          />
          <Sticker color="white" text="♿️" subtext="A11Y" rotation="right" />
        </div>
      </Window>
    </article>
  );
}

export default StatsWindow;
