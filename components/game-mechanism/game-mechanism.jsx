import Image from "next/image";
import DecorSquare from "../decor-square/decor-square";
import styles from "./game-mechanism.module.scss";
import InfoCards from "./info-cards/info-cards";
function GameMechanism() {
  return (
    <section className={styles.GameMechanism}>
      <Image
        src={"/images/game-mechanism.png"}
        layout="fill"
        alt="Dystopi city"
        objectFit="cover"
      />
      <div className={styles.container}>
        <h2>GAME MECHANISM</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel
          minus laborum, quasi repellendus similique.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <DecorSquare />
            <h3>GEAR</h3>
          </div>
          <div className={styles.card}>
            <DecorSquare />
            <h3>FIGHT</h3>
          </div>
          <div className={styles.card}>
            <DecorSquare />
            <h3>EARN</h3>
          </div>
          <div className={styles.card}>
            <DecorSquare />
            <h3>REPEAT</h3>
          </div>
        </div>
      </div>
      <InfoCards />
    </section>
  );
}

export default GameMechanism;
