import Image from 'next/image';
import DecorSquare from '../decor-square/decor-square';
import styles from './game-mechanism.module.scss';
import InfoCards from './info-cards/info-cards';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';
import SectionSeparator from '../section-separator/section-separator';
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

  // for image blend effect
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [xCoord, setXCoord] = useState(0);
  const [yCoord, setYCoord] = useState(0);
  const [containerheight, setContainerheight] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  useEffect(() => {
    setXCoord(contentRef.current.getBoundingClientRect().left);
    setYCoord(contentRef.current.getBoundingClientRect().top);
    setContainerheight(containerRef.current.getBoundingClientRect().height);
    setCardWidth(cardRef.current.getBoundingClientRect().width);
    setCardHeight(cardRef.current.getBoundingClientRect().height);
  }, []);

  const gearImageStyle = {
    height: `${containerheight}px`,
    left: isMobile ? `-${xCoord}px` : `-${xCoord + 8}px`,
    bottom: isMobile ? `-${cardHeight * 3}px` : '-3px',
  };
  const fightImageStyle = {
    height: `${containerheight}px`,
    left: isMobile ? `-${xCoord}px` : `-${xCoord + cardWidth + 8}px`,
    bottom: isMobile ? `-${cardHeight * 2}px` : '-3px',
  };
  const earnImageStyle = {
    height: `${containerheight}px`,
    left: isMobile ? `-${xCoord}px` : `-${xCoord + cardWidth * 2 + 8}px`,
    bottom: isMobile ? `-${cardHeight}px` : '-3px',
  };
  const repeatImageStyle = {
    height: `${containerheight}px`,
    left: isMobile ? `-${xCoord}px` : `-${xCoord + cardWidth * 3 + 8}px`,
  };

  return (
    <section className={styles.GameMechanism} id="game-mechanism">
      <div ref={containerRef} className={styles.imageContainer}>
        <Image
          //src={'/images/game-mechanism.png'}
          src={'/images/game-mechanism.png'}
          layout="fill"
          alt="Dystopi city"
          objectFit="cover"
        />
        <SectionSeparator />
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
            <div ref={contentRef}>
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
                <div ref={cardRef} className={styles.card}>
                  <img
                    className={styles.hiddenImage}
                    src={'/images/bg-dark-temp.png'}
                    alt="fill"
                    style={gearImageStyle}
                  />
                  <div
                    className={`${styles.decorBorder} ${
                      isMobile
                        ? styles.decorBorderBottom
                        : styles.decorBorderRight
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
                  <p>Gear up your hero, restock with supply</p>
                </div>
                <div className={styles.card}>
                  <img
                    className={styles.hiddenImage}
                    src={'/images/bg-dark-temp.png'}
                    alt="fill"
                    style={fightImageStyle}
                  />
                  <div
                    className={`${styles.decorBorder} ${
                      isMobile
                        ? styles.decorBorderBottom
                        : styles.decorBorderRight
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
                  <p>Gear up your hero, restock with supply</p>
                </div>
                <div className={styles.card}>
                  <img
                    className={styles.hiddenImage}
                    src={'/images/bg-dark-temp.png'}
                    alt="fill"
                    style={earnImageStyle}
                  />
                  <div
                    className={`${styles.decorBorder} ${
                      isMobile
                        ? styles.decorBorderBottom
                        : styles.decorBorderRight
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
                  <p>Gear up your hero, restock with supply</p>
                </div>
                <div className={styles.card}>
                  <img
                    className={styles.hiddenImage}
                    src={'/images/bg-dark-temp.png'}
                    alt="fill"
                    style={repeatImageStyle}
                  />
                  <DecorSquare />
                  <h3
                    ref={repeatTextRef}
                    style={repeatTextStyle}
                    className={styles.cardInfo}
                  >
                    REPEAT
                  </h3>
                  <p>Gear up your hero, restock with supply</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfoCards />
    </section>
  );
}

export default GameMechanism;
