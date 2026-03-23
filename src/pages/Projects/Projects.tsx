import { ProjectCard } from "@/pages/Projects/components/ProjectCard";
import typography from "@/shared/typography.module.css";
import styles from "./Projects.module.css";

function Projects() {
  const portfolioStack = ["React", "CSS Modules", "TypeScript", "React Router"];
  const dashboardStack = [
    "React",
    "Tailwind CSS",
    "TypeScript",
    "JSON Server",
    "TanStack Query",
    "Recharts",
  ];
  const interligneStack = ["Angular", "NestJS", "PostgreSQL"];

  return (
    <section className={`pageWrapper ${styles.container}`}>
      <h1 className={styles.title}>
        Mes <span className={typography.accented}>réalisations</span>{" "}
        <span className={typography.star}>✦</span>
      </h1>
      <p>
        Cette page est consacrée à mes réalisations récentes.
        <br />
        Vous pouvez aussi retrouver mon CV technique en cliquant sur ce lien :{" "}
        <a
          className={styles.footerLink}
          href="https://38rjnrqz42g8.report.alt-tools.tech/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien vers le CV technique (nouvel onglet)"
        >
          CV Technique
        </a>
        . Il a été réalisé à l'issue de trois semaines de tests techniques
        sanctionnés par un développeur senior et portés par{" "}
        <a
          className={styles.footerLink}
          href="https://www.alt.bzh/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Lien vers le site d'Alt (nouvel onglet)"
        >
          Alt, l'incubateur tech
        </a>{" "}
        et balaie plusieurs compétences-clés du métier de développeur :
        algorithmie, conception, front-end, back-end...
      </p>
      <ul className={styles.cardList}>
        <li>
          <ProjectCard
            title="Portfolio"
            description=" Le site sur lequel vous êtes : une vitrine Y2K construite avec
                  React et CSS modules, conçue pour refléter ma personnalité. Cela marque aussi le début de mon aventure React."
            headerColor="lavender"
            status="ONLINE"
            stack={portfolioStack}
            repoLink="https://github.com/LeasaurusRex/portfolio/tree/main"
          />
        </li>
        <li>
          <ProjectCard
            title="Internal Dashboard"
            description="Projet réalisé dans le cadre du test technique organisé par l'équipe de <Alt/> en amont du Hackathon de mars 2026. Il s'agit d'un outil de gestion d'outils interne et de métriques, avec un cahier des charges complet. Dans sa version actuelle, le projet n'est pas terminé et se base sur un JSON server, mais une migration sur une base de données PostgreSQL est prévue, ainsi que l'ajout de fonctionnalités."
            headerColor="peach"
            status="IN_PROGRESS"
            stack={dashboardStack}
            repoLink="https://gitlab.com/Leasaur/techcorp-dashboard"
          />
        </li>
        <li>
          <ProjectCard
            title="Interligne"
            description="Application web de suivi de lecture, qui utilise l'API externe OpenISBN. La première version proposera la création de collections, avec des statuts (à lire, lu, abandonné...), un système de notation et de commentaire. Les phases suivantes pourront comporter un aspect communautaire, des recommandations, un tri plus poussé... Inspiration de Goodreads, The StoryGraph et Babelio. Développement prévu en avril 2026."
            headerColor="ink20"
            status="SOON"
            stack={interligneStack}
          />
        </li>
      </ul>
    </section>
  );
}

export default Projects;
