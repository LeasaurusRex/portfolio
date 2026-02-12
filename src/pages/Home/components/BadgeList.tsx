import styles from "./BadgeList.module.css";
import Badge from "@/shared/components/Badge";

function BadgeList() {
  return (
    <div className={styles.badgeList}>
      <Badge variant="lavender">Angular</Badge>
      <Badge variant="pink">NestJS</Badge>
      <Badge variant="mint">TypeScript</Badge>
      <Badge variant="lavender">Tailwind CSS</Badge>
      <Badge variant="pink">MongoDB</Badge>
      <Badge variant="lavender">React</Badge>
      <Badge variant="peach">RGAA</Badge>
      <Badge variant="yellow">Git</Badge>
      <Badge variant="sky">Microservices</Badge>
      <Badge variant="yellow">CI/CD</Badge>
      <Badge variant="sky">Docker</Badge>
    </div>
  );
}

export default BadgeList;
