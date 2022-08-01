import styles from './decor-container.module.scss';

function DecorContainer({
  children,
  containerRef = null,
  contentRef = null,
  containerInView = false,
}) {
  const decorBorderHorizontalStyle = {
    width: containerInView ? '100%' : 0,
  };
  const decorBorderVerticalStyle = {
    height: containerInView ? '100%' : 0,
  };
  return (
    <div className={styles.cardsDecorContainer} ref={containerRef}>
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
          {children}
        </div>
      </div>
    </div>
  );
}

export default DecorContainer;
