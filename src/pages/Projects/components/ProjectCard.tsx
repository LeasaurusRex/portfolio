import styles from "@/pages/Projects/components/ProjectCard.module.css";
import Badge from "@/shared/Badge";
import StatusBadge, { type Status } from "@/shared/StatusBadge";
import { BADGE_COLORS } from "@/shared/utils/constants";
import Window from "@/shared/Window";

type ProjectCardProps = {
  title: string;
  description: React.ReactNode;
  headerColor: string;
  status: Status;
  stack: string[];
  repoLink?: string;
  siteLink?: string;
};
export function ProjectCard({
  title,
  description,
  headerColor,
  status,
  stack,
  repoLink,
  siteLink,
}: ProjectCardProps) {
  return (
    <article aria-label={`Projet : ${title}`}>
      <Window
        size="md"
        title=""
        headerColor={headerColor}
        statusBadge={<StatusBadge status={status} />}
        className={styles.card}
      >
        <div className={styles.cardContainer}>
          <h2 className={styles.cardTitle}>{title}</h2>
          <p>{description}</p>
          <div className={styles.badgesList}>
            {stack.map((tech, index) => (
              <Badge
                key={tech}
                variant={BADGE_COLORS[index % BADGE_COLORS.length]}
              >
                {tech}
              </Badge>
            ))}
          </div>
          {(repoLink || siteLink) && (
            <div className={styles.cardFooter}>
              <hr aria-hidden="true" />
              <div className={styles.footerLinksContainer}>
                {repoLink && (
                  <a
                    className={styles.footerLink}
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le code source de ${title} sur le repository (nouvel onglet)`}
                  >
                    Repo →
                  </a>
                )}
                {siteLink && (
                  <a
                    className={styles.footerLink}
                    href={siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Voir le projet ${title} en ligne (nouvel onglet)`}
                  >
                    Voir en ligne →
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </Window>
    </article>
  );
}
