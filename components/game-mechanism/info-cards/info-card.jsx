import Scene from "../../3d/scene/scene";
import styles from "./info-cards.module.scss";

function InfoCard({ title, paragraph_1, paragraph_2 }) {
  return (
    <article className={styles.InfoCard}>
      <Scene />
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <p>{paragraph_1}</p>
        <p>{paragraph_2}</p>
      </div>
    </article>
  );
}

export default InfoCard;
