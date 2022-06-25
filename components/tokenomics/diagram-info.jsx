import React from 'react';
import styles from './diagram-info.module.scss';

function DiagramInfo({ aligment, color, infos, onMouseEnter, onMouseLeave }) {
  const getColor = () => {
    if (color == 'indigo') return styles.infoIndigo;
    if (color == 'aqua') return styles.infoAqua;
    if (color == 'turquoise') return styles.infoTurquoise;
    if (color == 'purple') return styles.infoPurple;
    if (color == 'rose') return styles.infoRose;
    if (color == 'teal') return styles.infoTeal;
    if (color == 'eggplant') return styles.infoEggplant;
  };
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`${styles.DiagramInfo} ${
        aligment === 'left' ? styles.infoAlignLeft : styles.infoAlignRight
      } ${getColor()}`}
    >
      <p className={styles.percentage}>{infos.percentage}</p>
      <p className={styles.intro}>{infos.intro}</p>
      <p className={styles.subInfo}>{infos.subInfo}</p>
      <p className={styles.tokens}>{infos.tokens}</p>
      <p className={styles.amount}>{infos.amount}</p>
    </div>
  );
}

export default DiagramInfo;
