import { ProjectCard } from "@/pages/Projects/components/ProjectCard";
import typography from "@/shared/typography.module.css";
import styles from "./Projects.module.css";

function Projects() {
  const portfolioStack = ["React", "CSS Modules", "TypeScript", "React Router"];
  const dashboardStack = [
    "React",
    "TailwindCSS",
    "TypeScript",
    "JSON Server",
    "TanStack Query",
    "Recharts",
  ];

  return (
    <section className={`pageWrapper ${styles.container}`}>
      <h1 className={styles.title}>
        Mes <span className={typography.accented}>réalisations</span>{" "}
        <span className={typography.star}>✦</span>
      </h1>
      <p>Cette page est consacrée à mes réalisations récentes.</p>
      <ul className={styles.cardList}>
        <li>
          <ProjectCard
            title="Portfolio"
            description=" Le site sur lequel vous êtes : une vitrine Y2K construite avec
                  React et CSS modules, conçue pour refléter ma personnalité. Cela marque aussi le début de mon aventure React."
            headerColor="lavender"
            status="ONLINE"
            stack={portfolioStack}
            repoLink="https://github.com/LeasaurusRex/portfolio/tree/feature/home"
          />
        </li>
        <li>
          <ProjectCard
            title="Internal Dashboard"
            description="Projet réalisé dans le cadre du test technique organisé par l'équipe de <Alt/> en amont du Hackathon de mars 2026. Actuellement le projet se base sur un JSON server, mais une migration sur une base de données PostgreSQL est prévue."
            headerColor="peach"
            status="IN_PROGRESS"
            stack={dashboardStack}
            repoLink="https://gitlab.com/Leasaur/techcorp-dashboard"
          />
        </li>
      </ul>
    </section>
  );
}

export default Projects;
