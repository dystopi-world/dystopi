import { useState } from 'react';
import DiagramInfoMobile from './diagram-info-mobile';
import { diagramData } from './diagramData';
import styles from './diagram-infos-container.module.scss';

function MobileInfosContainer() {
  const [showMore, setShowMore] = useState(false);
  const moreInfosContainerStyle = {
    transition: '300ms',
    maxHeight: showMore ? 800 : 0,
  };

  return (
    <div className={styles.MobileInfosContainer}>
      <DiagramInfoMobile infos={diagramData[0].infos} />
      <DiagramInfoMobile infos={diagramData[1].infos} />
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'SHOW LESS' : 'SHOW MORE'}
      </button>
      <div
        style={moreInfosContainerStyle}
        className={styles.moreInfosContainer}
      >
        <DiagramInfoMobile infos={diagramData[2].infos} />
        <DiagramInfoMobile infos={diagramData[3].infos} />
        <DiagramInfoMobile infos={diagramData[4].infos} />
        <DiagramInfoMobile infos={diagramData[5].infos} />
        <DiagramInfoMobile infos={diagramData[6].infos} />
      </div>
    </div>
  );
}

export default MobileInfosContainer;
