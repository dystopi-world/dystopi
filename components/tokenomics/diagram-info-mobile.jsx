import React from 'react';
import styles from './diagram-info-mobile.module.scss';

function DiagramInfoMobile({ infos }) {
  const getColor = () => {
    if (infos.color == 'indigo') return styles.infoIndigo;
    if (infos.color == 'aqua') return styles.infoAqua;
    if (infos.color == 'turquoise') return styles.infoTurquoise;
    if (infos.color == 'purple') return styles.infoPurple;
    if (infos.color == 'rose') return styles.infoRose;
    if (infos.color == 'teal') return styles.infoTeal;
    if (infos.color == 'eggplant') return styles.infoEggplant;
  };
  return (
    <article className={`${styles.DiagramInfoMobile} ${getColor()}`}>
      <p>
        <span>{infos.percentage}</span> {infos.intro}
      </p>
      <p>{infos.subInfo}</p>
      <p>{infos.tokens}</p>
      <p>{infos.amount}</p>
    </article>
  );
}

export default DiagramInfoMobile;
