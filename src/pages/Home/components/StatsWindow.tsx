import styles from "./StatsWindow.module.css";
import Window from "@/shared/Window";
import BadgeList from "@/pages/Home/components/BadgeList";
import Sticker from "@/shared/Sticker";

function StatsWindow() {
  return (
    <article className={styles.statsWindow}>
      <Window size="md" title="stats.json" footer={<BadgeList />}>
        <div className={styles.statsContainer}>
          <Sticker
            color="yellow"
            text="3"
            subtext="ANS D'EXPÉRIENCE"
            rotation="right"
          />
          <Sticker
            color="pink"
            text="47"
            subtext="FONCTIONNALITÉS EN PRODUCTION"
            rotation="left"
          />
          <Sticker
            color="mint"
            text="40"
            subtext="JOURS ETP/MOIS ÉCONOMISÉS"
            rotation="left"
          />
          <Sticker color="sky" text="♿️" subtext="A11Y" rotation="right" />
        </div>
      </Window>
    </article>
  );
}

export default StatsWindow;
