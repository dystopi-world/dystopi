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
    transition: '600ms',
    position: 'relative',
    top: titleInView ? 0 : '3rem',
    opacity: titleInView ? 1 : 0,
  };
  const subTitleStyle = {
    transition: '600ms',
    position: 'relative',
    top: subTitleInView ? 0 : '3rem',
    opacity: subTitleInView ? 1 : 0,
  };
  return (
    <section className={styles.Tokenomics} id="tokenomics">
      <h2 ref={titleRef} style={titleStyle}>
        TOKENOICS
      </h2>
      <p ref={subTitleRef} style={subTitleStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum.
      </p>
      <Diagram />
      <MobileInfosContainer />
    </section>
  );
}

export default Tokenomics;
