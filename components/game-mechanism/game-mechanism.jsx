import Image from "next/image";
import DecorSquare from "../decor-square/decor-square";
import styles from "./game-mechanism.module.scss";
function GameMechanism() {
  return (
    <section>
      <Image src={""} layout="fill" alt="Dystopi city" />
      <div>
        <h2>GAME MECHANISM</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel
          minus laborum, quasi repellendus similique.
        </p>
        <div>
          <DecorSquare />
          <h3>GEAR</h3>
        </div>
        <div>
          <DecorSquare />
          <h3>FIGHT</h3>
        </div>
        <div>
          <DecorSquare />
          <h3>EARN</h3>
        </div>
        <div>
          <DecorSquare />
          <h3>REPEAT</h3>
        </div>
      </div>
    </section>
  );
}

export default GameMechanism;
