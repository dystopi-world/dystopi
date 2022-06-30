import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import Link from 'next/link';
import SectionSeparator from '../section-separator/section-separator';
import styles from './whitepaper.module.scss';

function Whitepaper() {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [subTitleRef, subTitleInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [buttonRef, buttonInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const titleStyle = {
    transition: '2000ms',
    position: 'relative',
    top: titleInView ? 0 : '3rem',
    opacity: titleInView ? 1 : 0,
  };
  const subTitleStyle = {
    transition: '2000ms',
    position: 'relative',
    top: subTitleInView ? 0 : '3rem',
    opacity: subTitleInView ? 1 : 0,
  };
  const buttonStyle = {
    transition: '2000ms',
    position: 'relative',
    top: buttonInView ? 0 : '3rem',
    opacity: buttonInView ? 1 : 0,
  };

  const decorBorderHorizontalStyle = {
    width: titleInView ? '100%' : 0,
  };
  const decorBorderVerticalStyle = {
    height: titleInView ? '100%' : 0,
  };

  const imageStyle = {
    transition: '2000ms',
    opacity: titleInView ? 1 : 0,
  };

  return (
    <section className={styles.Whitepaper} id="whitepaper">
      <div className={styles.whitepaperCard}>
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
        <div className={styles.decorCard}>
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
          <Image
            src={'/images/game-mechanism.png'}
            layout="fill"
            alt="Dystopi city"
            objectFit="cover"
            style={imageStyle}
          />
          <div className={styles.decorContainer}>
            <SectionSeparator />
          </div>
          <div className={styles.contentContainer}>
            <h2 ref={titleRef} style={titleStyle} className={styles.title}>
              WHITEPAPER
            </h2>
            <p
              ref={subTitleRef}
              style={subTitleStyle}
              className={styles.sectionInfo}
            >
              Check our Whitepaper to learn more about project Dystopi!
            </p>
            <Link href="https://bence-vereb.gitbook.io/whitepaper/">
              <a ref={buttonRef} style={buttonStyle} target="blank">
                CHECK WHITEPAPER
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whitepaper;
