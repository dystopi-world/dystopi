import { useInView } from 'react-intersection-observer';
import SocialMedias from '../social-medias/social-medias';
import Characters from './characters/characters';
import styles from './story.module.scss';

function Story() {
  const [titleRef, titleInView] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  const [playRef, playInView] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });
  const [instructionsRef, instructionsInView] = useInView({
    /* Optional options */
    threshold: 0.1,
    triggerOnce: true,
  });

  const titleStyle = {
    transition: '1000ms',
    opacity: titleInView ? 1 : 0,
    position: 'relative',
    top: titleInView ? 0 : '3rem',
  };

  const playStyle = {
    transition: '1000ms',
    opacity: playInView ? 1 : 0,
    position: 'relative',
    top: titleInView ? 0 : '3rem',
  };

  const instructionsStyle = {
    transition: '1000ms',
    opacity: instructionsInView ? 1 : 0,
    position: 'relative',
    top: instructionsInView ? 0 : '3rem',
  };

  return (
    <section className={styles.Story} id="story">
      <h2 ref={titleRef} style={titleStyle}>
        A NEW GENERATION <strong>NFT GAME</strong> TO SAVE THE EARTH FROM ALIEN
        INVASION
      </h2>
      <div className={styles.outerContainer}>
        <div className={styles.innerContainer}>
          <h4 ref={playRef} style={playStyle}>
            PLAY
          </h4>
          <Characters />
        </div>
        <div
          ref={instructionsRef}
          className={styles.instructions}
          style={instructionsStyle}
        >
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
