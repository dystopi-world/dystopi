import Image from 'next/image';
import Scene from '../../3d/scene/scene';
import styles from './info-cards.module.scss';

function InfoCard({
  cardRef,
  cardInView,
  image,
  layout,
  title,
  paragraph_1,
  paragraph_2,
}) {
  const cardStyle = (inView) => ({});

  const decorBorderHorizontalStyle = {
    width: cardInView ? '100%' : 0,
  };
  const decorBorderVerticalStyle = {
    height: cardInView ? '100%' : 0,
  };

  return (
    <article className={styles.InfoCard} ref={cardRef}>
      {/* <Scene /> */}
      <Image src={image} objectFit="contain" layout="fill" />
      <div className={styles.contentContainer}>
        <h3>{title}</h3>
        <p>{paragraph_1}</p>
        <p>{paragraph_2}</p>
      </div>

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
    </article>
  );
}

export default InfoCard;
