import Badge from "@/shared/Badge";
import styles from "./Projects.module.css";
import typography from "@/shared/typography.module.css";
import Window from "@/shared/Window";
import StatusBadge from "@/shared/StatusBadge";

function Projects() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>
        Mes <span className={typography.accented}>réalisations</span>{" "}
        <span className={typography.star}>✦</span>
      </h1>
      <p>Cette page est consacrée à mes réalisations récentes.</p>
      <ul>
        <li>
          <article>
            <Window
              size="sm"
              title=""
              headerColor="lavender"
              statusBadge={<StatusBadge status="ONLINE" />}
              className={styles.card}
            >
              <div className={styles.cardContainer}>
                <h2 className={styles.cardTitle}>Portfolio</h2>
                <p>
                  Le site sur lequel vous êtes : une vitrine Y2K construite avec
                  React et CSS modules, conçue pour refléter ma personnalité
                  autant que mes compétences.
                </p>
                <div className={styles.badgesList}>
                  <Badge variant="sky">React</Badge>
                  <Badge variant="pink">CSS Modules</Badge>
                  <Badge variant="mint">React Router</Badge>
                  <Badge variant="peach">TypeScript</Badge>
                </div>
              </div>
            </Window>
          </article>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
