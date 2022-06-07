import Image from "next/image";
import styles from "../characters.module.scss";

function Character({ image, characterName, description }) {
  return (
    <article className={styles.Character}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          alt={`Dystopi's playable ${characterName} character`}
        />
      </div>
      <h5>{characterName}</h5>
      <p>{description}</p>
    </article>
  );
}

export default Character;
