import Image from 'next/image';
import DecorSquare from '../decor-square/decor-square';
import styles from './game-mechanism.module.scss';
import InfoCards from './info-cards/info-cards';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';
import SectionSeparator from '../section-separator/section-separator';
function GameMechanism() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsMobile(true);
    }
  }, []);

  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [subTitleRef, subTitleInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [gearCardRef, gearCardInView] = useInView({
    threshold: 0.99,
    //  triggerOnce: true,
  });
  const [fightCardRef, fightCardInView] = useInView({
    threshold: 0.99,
    //  triggerOnce: true,
  });
  const [earnCardRef, earnCardInView] = useInView({
    threshold: 0.99,
    //  triggerOnce: true,
  });
  const [repeatCardRef, repeatCardInView] = useInView({
    threshold: 0.9,
    //  triggerOnce: true,
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
    threshold: isMobile ? 0.2 : 0.4,
    triggerOnce: true,
  });

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
  const gearHiddenTextStyle = {
    top: isMobile && gearCardInView ? '50%' : '60%',
    opacity: isMobile && gearCardInView ? 1 : 0,
  };
  const fightTextStyle = {
    top: fightTextInView ? 0 : '3rem',
    opacity: fightTextInView ? 1 : 0,
  };
  const fightHiddenTextStyle = {
    top: isMobile && fightCardInView ? '50%' : '60%',
    opacity: isMobile && fightCardInView ? 1 : 0,
  };
  const earnTextStyle = {
    top: earnTextInView ? 0 : '3rem',
    opacity: earnTextInView ? 1 : 0,
  };
  const earnHiddenTextStyle = {
    top: isMobile && earnCardInView ? '50%' : '60%',
    opacity: isMobile && earnCardInView ? 1 : 0,
  };
  const repeatTextStyle = {
    top: repeatTextInView ? 0 : '3rem',
    opacity: repeatTextInView ? 1 : 0,
  };
  const repeatHiddenTextStyle = {
    top: isMobile && repeatCardInView ? '50%' : '60%',
    opacity: isMobile && repeatCardInView ? 1 : 0,
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
    setCardWidth(
      document.getElementById('gear-card').getBoundingClientRect().width
    );
    setCardHeight(
      document.getElementById('gear-card').getBoundingClientRect().height
    );
  }, []);

  const gearImageStyle = {
    height: `${containerheight}px`,
    left: isMobile ? `-${xCoord}px` : `-${xCoord + 8}px`,
    bottom: isMobile ? `-${cardHeight * 3}px` : '-3px',
    opacity: gearCardInView && isMobile ? 1 : 0,
    transform: isMobile && gearCardInView ? 'scale(1.1)' : 'scale(1)',
  };
  const fightImageStyle = {
    height: `${containerheight}px`,
    left: isMobile ? `-${xCoord}px` : `-${xCoord + cardWidth + 8}px`,
    bottom: isMobile ? `-${cardHeight * 2}px` : '-3px',
    opacity: fightCardInView && isMobile ? 1 : 0,
    transform: isMobile && fightCardInView ? 'scale(1.1)' : 'scale(1)',
  };
  const earnImageStyle = {
    height: `${containerheight}px`,
    left: isMobile ? `-${xCoord}px` : `-${xCoord + cardWidth * 2 + 8}px`,
    bottom: isMobile ? `-${cardHeight}px` : '-3px',
    opacity: earnCardInView && isMobile ? 1 : 0,
    transform: isMobile && earnCardInView ? 'scale(1.1)' : 'scale(1)',
  };
  const repeatImageStyle = {
    height: `${containerheight}px`,
    left: isMobile ? `-${xCoord}px` : `-${xCoord + cardWidth * 3 + 8}px`,
    opacity: repeatCardInView && isMobile ? 1 : 0,
    transform: isMobile && repeatCardInView ? 'scale(1.1)' : 'scale(1)',
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
                <div ref={gearCardRef} id="gear-card" className={styles.card}>
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
                  <p style={gearHiddenTextStyle}>
                    Gear up your hero, restock with supply
                  </p>
                </div>
                <div ref={fightCardRef} className={styles.card}>
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
                  <p style={fightHiddenTextStyle}>
                    Gear up your hero, restock with supply
                  </p>
                </div>
                <div ref={earnCardRef} className={styles.card}>
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
                  <p style={earnHiddenTextStyle}>
                    Gear up your hero, restock with supply
                  </p>
                </div>
                <div ref={repeatCardRef} className={styles.card}>
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
                  <p style={repeatHiddenTextStyle}>
                    Gear up your hero, restock with supply
                  </p>
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
