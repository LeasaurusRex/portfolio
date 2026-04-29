import styles from "./Timeline.module.css";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle: string;
  description: string;
  isActive?: boolean;
}

function TimelineItem({
  date,
  title,
  subtitle,
  description,
  isActive = false,
}: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div
        className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
      ></div>
      <div className={styles.content}>
        <p className={styles.date}>{date}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

function Timeline() {
  return (
    <div className={styles.timeline}>
      <TimelineItem
        date="MARS 2026"
        title="Hackathon Développeurs"
        subtitle="France Travail / OPCO Atlas / ALT · Rennes"
        description="React · TypeScript · NestJS · PostgreSQL · Prisma · Docker"
        isActive={true}
      />

      <TimelineItem
        date="JAN. 2023 — AOÛT 2025"
        title="Développeuse Full-Stack"
        subtitle="Leocare (Insurlytech) · Rennes"
        description="Angular · NestJS · MongoDB · Tailwind CSS · Docker · Kubernetes · RGAA · CI/CD GitHub Actions · SonarQube"
      />

      <TimelineItem
        date="OCTOBRE — DÉCEMBRE 2022"
        title="POEI Développeur·se Full-stack JavaScript"
        subtitle="Zenika Academy · Rennes"
        description="JavaScript · TypeScript · Angular · NestJS · MongoDB · Docker · Node.js · Express"
      />

      <TimelineItem
        date="AVANT 2022"
        title="Précédente carrière"
        subtitle="Enedis, Docaposte, AG2R La Mondiale, Pôle Hippique de Saint-Lô..."
        description="Postes principalement administratifs (bureautique, gestion, relation client)"
      />
    </div>
  );
}

export default Timeline;
