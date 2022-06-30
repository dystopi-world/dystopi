import Image from 'next/image';
import DecorSquare from '../decor-square/decor-square';
import styles from './game-mechanism.module.scss';
import InfoCards from './info-cards/info-cards';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
function GameMechanism() {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [subTitleRef, subTitleInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [gearTextRef, gearTextInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [fightTextRef, fightTextInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [earnTextRef, earnTextInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [repeatTextRef, repeatTextInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [cardContainerRef, cardContainerInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, []);

  const titleStyle = {
    top: titleInView ? 0 : '3rem',
    opacity: titleInView ? 1 : 0,
  };
  const subTitleStyle = {
    top: subTitleInView ? 0 : '3rem',
    opacity: subTitleInView ? 1 : 0,
  };
  const gearTextStyle = {
    top: gearTextInView ? 0 : '3rem',
    opacity: gearTextInView ? 1 : 0,
  };
  const fightTextStyle = {
    top: fightTextInView ? 0 : '3rem',
    opacity: fightTextInView ? 1 : 0,
  };
  const earnTextStyle = {
    top: earnTextInView ? 0 : '3rem',
    opacity: earnTextInView ? 1 : 0,
  };
  const repeatTextStyle = {
    top: repeatTextInView ? 0 : '3rem',
    opacity: repeatTextInView ? 1 : 0,
  };

  const decorBorderHorizontalStyle = {
    width: cardContainerInView ? '100%' : 0,
  };
  const decorBorderVerticalStyle = {
    height: cardContainerInView ? '100%' : 0,
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
        <h2 ref={titleRef} style={titleStyle} className={styles.sectionTitle}>
          GAME MECHANISM
        </h2>
        <p
          ref={subTitleRef}
          style={subTitleStyle}
          className={styles.sectionInfo}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel
          minus laborum, quasi repellendus similique.
        </p>
        <div className={styles.cardsDecorContainer} ref={cardContainerRef}>
          <div
            className={`${styles.decorBorder} ${styles.decorBorderTop}`}
            style={decorBorderHorizontalStyle}
          ></div>
          <div
            className={`${styles.decorBorder} ${styles.decorBorderLeft}`}
            style={decorBorderVerticalStyle}
          ></div>
          <div
            className={`${styles.decorBorder} ${styles.decorBorderBottom}`}
            style={decorBorderHorizontalStyle}
          ></div>
          <div
            className={`${styles.decorBorder} ${styles.decorBorderRight}`}
            style={decorBorderVerticalStyle}
          ></div>
          <div className={styles.cards}>
            <div
              className={`${styles.decorBorder} ${styles.decorBorderTop}`}
              style={decorBorderHorizontalStyle}
            ></div>
            <div
              className={`${styles.decorBorder} ${styles.decorBorderLeft}`}
              style={decorBorderVerticalStyle}
            ></div>
            <div
              className={`${styles.decorBorder} ${styles.decorBorderBottom}`}
              style={decorBorderHorizontalStyle}
            ></div>
            <div
              className={`${styles.decorBorder} ${styles.decorBorderRight}`}
              style={decorBorderVerticalStyle}
            ></div>
            <div className={styles.card}>
              <div
                className={`${styles.decorBorder} ${
                  isMobile ? styles.decorBorderBottom : styles.decorBorderRight
                }`}
                style={
                  isMobile
                    ? decorBorderHorizontalStyle
                    : decorBorderVerticalStyle
                }
              ></div>
              <DecorSquare />
              <h3
                ref={gearTextRef}
                style={gearTextStyle}
                className={styles.cardInfo}
              >
                GEAR
              </h3>
            </div>
            <div className={styles.card}>
              <div
                className={`${styles.decorBorder} ${
                  isMobile ? styles.decorBorderBottom : styles.decorBorderRight
                }`}
                style={
                  isMobile
                    ? decorBorderHorizontalStyle
                    : decorBorderVerticalStyle
                }
              ></div>
              <DecorSquare />
              <h3
                ref={fightTextRef}
                style={fightTextStyle}
                className={styles.cardInfo}
              >
                FIGHT
              </h3>
            </div>
            <div className={styles.card}>
              <div
                className={`${styles.decorBorder} ${
                  isMobile ? styles.decorBorderBottom : styles.decorBorderRight
                }`}
                style={
                  isMobile
                    ? decorBorderHorizontalStyle
                    : decorBorderVerticalStyle
                }
              ></div>
              <DecorSquare />
              <h3
                ref={earnTextRef}
                style={earnTextStyle}
                className={styles.cardInfo}
              >
                EARN
              </h3>
            </div>
            <div className={styles.card}>
              <DecorSquare />
              <h3
                ref={repeatTextRef}
                style={repeatTextStyle}
                className={styles.cardInfo}
              >
                REPEAT
              </h3>
            </div>
          </div>
        </div>
      </div>
      <InfoCards />
    </section>
  );
}

export default GameMechanism;
