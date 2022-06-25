import Image from 'next/image';
import DecorSquare from '../decor-square/decor-square';
import styles from './game-mechanism.module.scss';
import InfoCards from './info-cards/info-cards';
import { useInView } from 'react-intersection-observer';
function GameMechanism() {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [subTitleRef, subTitleInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const titleStyle = {
    transition: '600ms',
    position: 'relative',
    top: titleInView ? 0 : '3rem',
    opacity: titleInView ? 1 : 0,
  };
  const subTitleStyle = {
    transition: '600ms',
    position: 'relative',
    top: subTitleInView ? 0 : '3rem',
    opacity: subTitleInView ? 1 : 0,
  };

  return (
    <section className={styles.GameMechanism} id="game-mechanism">
      <Image
        src={'/images/game-mechanism.png'}
        layout="fill"
        alt="Dystopi city"
        objectFit="cover"
      />
      <div className={styles.container}>
        <h2 ref={titleRef} style={titleStyle}>
          GAME MECHANISM
        </h2>
        <p ref={subTitleRef} style={subTitleStyle}>
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
