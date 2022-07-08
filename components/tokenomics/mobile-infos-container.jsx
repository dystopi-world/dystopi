import { useState } from 'react';
import DiagramInfoMobile from './diagram-info-mobile';
import { diagramData } from './diagramData';
import styles from './diagram-infos-container.module.scss';

function MobileInfosContainer() {
  const [showMore, setShowMore] = useState(false);
  const moreInfosContainerStyle = {
    transition: '300ms',
    maxHeight: showMore ? 1100 : 0,
  };

  return (
    <div className={styles.MobileInfosContainer}>
      <DiagramInfoMobile
        infos={{
          color: 'turquoise',
          percentage: '60%',
          intro: 'Reward/Quest',
          subInfo: 'First 2 year 123 287 DYS token/day',
          tokens: 'TOKENS',
          amount: '180,000,000',
        }}
      />
      <DiagramInfoMobile
        infos={{
          color: 'teal',
          percentage: '10%',
          intro: 'PreSale',
          subInfo: '20% TGE + 20%/month',
          tokens: 'TOKENS',
          amount: '30,000,000',
        }}
      />
      <button onClick={() => setShowMore(!showMore)}>
        {showMore ? 'SHOW LESS' : 'SHOW MORE'}
      </button>
      <div
        style={moreInfosContainerStyle}
        className={styles.moreInfosContainer}
      >
        <DiagramInfoMobile
          infos={{
            color: 'eggplant',
            percentage: '9%',
            intro: 'Dev/Marketing',
            subInfo: '5% TGE + 5%/month',
            tokens: 'TOKENS',
            amount: '27,000,000',
          }}
        />
        <DiagramInfoMobile
          infos={{
            color: 'indigo',
            percentage: '5%',
            intro: 'Liquidity',
            subInfo: 'Released at TGE',
            tokens: 'TOKENS',
            amount: '15,000,000',
          }}
        />
        <DiagramInfoMobile
          infos={{
            color: 'purple',
            percentage: '1%',
            intro: 'Airdrop',
            subInfo: 'Released at TGE',
            tokens: 'TOKENS',
            amount: '3,000,000',
          }}
        />
        <DiagramInfoMobile
          infos={{
            color: 'kingBlue',
            percentage: '1%',
            intro: 'Seed Sale',
            subInfo: '10% TGE + 15%/month',
            tokens: 'TOKENS',
            amount: '3,000,000',
          }}
        />
        <DiagramInfoMobile
          infos={{
            color: 'iceBlue',
            percentage: '10%',
            intro: 'Team',
            subInfo: '365 day cliff, after 10% / month',
            tokens: 'TOKENS',
            amount: '30,000,000',
          }}
        />
        <DiagramInfoMobile
          infos={{
            color: 'rose',
            percentage: '3%',
            intro: 'Advisors',
            subInfo: '365 day cliff, after 10% / month',
            tokens: 'TOKENS',
            amount: '9,000,000',
          }}
        />
        <DiagramInfoMobile
          infos={{
            color: 'aqua',
            percentage: '1%',
            intro: 'Private Sale',
            subInfo: '20% TGE + 20%/month',
            tokens: 'TOKENS',
            amount: '3,000,000',
          }}
        />
      </div>
    </div>
  );
}

export default MobileInfosContainer;
