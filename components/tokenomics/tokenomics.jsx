import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Diagram from './diagram';
import DiagramInfoMobile from './diagram-info-mobile';
import { diagramData } from './diagramData';
import MobileInfosContainer from './mobile-infos-container';
import styles from './tokenomics.module.scss';

function Tokenomics() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerHeight < 800) {
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

  const titleStyle = {
    top: titleInView ? 0 : '3rem',
    opacity: titleInView ? 1 : 0,
  };
  const subTitleStyle = {
    top: subTitleInView ? 0 : '3rem',
    opacity: subTitleInView ? 1 : 0,
  };
  return (
    <section className={styles.Tokenomics} id="tokenomics">
      <h2 ref={titleRef} style={titleStyle} className={styles.title}>
        TOKENOICS
      </h2>
      <p ref={subTitleRef} style={subTitleStyle} className={styles.sectionInfo}>
        Distribution and vesting of Dyseum tokens.
      </p>
      <Diagram />
      <MobileInfosContainer />
    </section>
  );
}

export default Tokenomics;
