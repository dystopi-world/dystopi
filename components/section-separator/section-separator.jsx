import DecorSquare from "../decor-square/decor-square";
import styles from "./section-separator.module.scss";

function SectionSeparator() {
  return (
    <div className={styles.SectionSeparator}>
      <div className={styles.decorLine}></div>
      <DecorSquare />
      <div className={styles.decorLine}></div>
    </div>
  );
}

export default SectionSeparator;
