import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import DecorSquare from "../../decor-square/decor-square";
import Character from "./character/character";
import styles from "./characters.module.scss";

function Characters() {
  return (
    <div className={styles.Characters}>
      <DecorSquare />
      <h6>CHARACTERS</h6>
      <div className={styles.characterContainer}>
        <Character
          image="/images/characters/ai.png"
          characterName="AI"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis expedita hic aliquid odio necessitatibus!"
        />
        <HiOutlineArrowNarrowLeft
          className={`${styles.arrow} ${styles.arrowLeft}`}
        />
        <HiOutlineArrowNarrowRight
          className={`${styles.arrow} ${styles.arrowRight}`}
        />
      </div>
    </div>
  );
}

export default Characters;
