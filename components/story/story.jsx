import SocialMedias from "../social-medias/social-medias";
import Characters from "./characters/characters";
import styles from "./story.module.scss";

function Story() {
  return (
    <section className={styles.Story}>
      <h2>
        A NEW GENERATION <strong>NFT GAME</strong> TO SAVE THE EARTH FROM ALIEN
        INVASION
      </h2>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <h4>PLAY</h4>
          <Characters />
        </div>
        <div className={styles.instructions}>
          <h5>
            HAVE <strong>FUN</strong>
          </h5>
          <h5>
            REACH <strong>RANKS</strong>
          </h5>
          <h5>
            MAKE <strong>INCOME</strong>
          </h5>
        </div>
      </div>
    </section>
  );
}

export default Story;
