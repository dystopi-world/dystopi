import { useEffect, useState } from 'react';
import Diagram from './diagram';
import DiagramInfoMobile from './diagram-info-mobile';
import { diagramData } from './diagramData';
import styles from './tokenomics.module.scss';

function Tokenomics() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerHeight < 800) {
      setIsMobile(true);
    }
  }, []);
  return (
    <section className={styles.Tokenomics} id="tokenomics">
      <h2>TOKENOICS</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum.
      </p>
      <Diagram />
      {isMobile && (
        <div>
          {diagramData.map((data, index) => (
            <DiagramInfoMobile infos={data.infos} key={index} />
          ))}
        </div>
      )}
    </section>
  );
}

export default Tokenomics;
