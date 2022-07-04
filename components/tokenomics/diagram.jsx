import Image from 'next/image';
import React, { useState } from 'react';
import DiagramInfo from './diagram-info';
import styles from './tokenomics.module.scss';

function Diagram() {
  const [tealHovered, setTealHovered] = useState(false);
  const tealStyle = {
    transition: '250ms',
    boxShadow: tealHovered
      ? '-5px -5px 100px 10px #6998ff'
      : '0 0 0 0 transparent',
  };
  const [eggplantHovered, setEggplantHovered] = useState(false);
  const eggplantStyle = {
    transition: '250ms',
    boxShadow: eggplantHovered
      ? '-5px -5px 100px 10px #a967ff'
      : '0 0 0 0 transparent',
  };
  const [indigoHovered, setIndigoHovered] = useState(false);
  const indigoStyle = {
    transition: '250ms',
    boxShadow: indigoHovered
      ? '5px -5px 120px 15px #6a00f4'
      : '0 0 0 0 transparent',
  };
  const [aquaHovered, setAquaHovered] = useState(false);
  const aquaStyle = {
    transition: '250ms',
    boxShadow: aquaHovered
      ? '5px -15px 120px 15px #007afd'
      : '0 0 0 0 transparent',
  };
  const [turquoiseHovered, setTurquoiseHovered] = useState(false);
  const turquoiseStyle = {
    transition: '250ms',
    boxShadow: turquoiseHovered
      ? '1px 20px 140px 20px #6ee3c0'
      : '0 0 0 0 transparent',
  };
  const [purpleHovered, setPurpleHovered] = useState(false);
  const purpleStyle = {
    transition: '250ms',
    boxShadow: purpleHovered
      ? '-5px 3px 120px 10px #df1dff'
      : '0 0 0 0 transparent',
  };
  const [roseHovered, setRoseHovered] = useState(false);
  const roseStyle = {
    transition: '250ms',
    boxShadow: roseHovered
      ? '-10px 10px 135px 14px #ee4492'
      : '0 0 0 0 transparent',
  };
  return (
    <div className={styles.Diagram}>
      <div
        style={tealStyle}
        className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxTeal}`}
      ></div>
      <div
        style={eggplantStyle}
        className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxEggplant}`}
      ></div>
      <div
        style={indigoStyle}
        className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxIndigo}`}
      ></div>
      <div
        style={aquaStyle}
        className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxAqua}`}
      ></div>
      <div
        style={turquoiseStyle}
        className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxTurquoise}`}
      ></div>
      <div
        style={purpleStyle}
        className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxPurple}`}
      ></div>
      <div
        style={roseStyle}
        className={`${styles.coloredBorderBox} ${styles.coloredBorderBoxRose}`}
      ></div>
      <DiagramInfo
        onMouseEnter={() => setIndigoHovered(true)}
        onMouseLeave={() => setIndigoHovered(false)}
        aligment="left"
        color="indigo"
        infos={{
          percentage: '1%',
          intro: 'Seed Sale',
          subInfo: '10% TGE + 15%/month',
          tokens: 'TOKENS',
          amount: '3,000,000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setAquaHovered(true)}
        onMouseLeave={() => setAquaHovered(false)}
        aligment="left"
        color="aqua"
        infos={{
          percentage: '1%',
          intro: 'Private Sale',
          subInfo: '20% TGE + 20%/month',
          tokens: 'TOKENS',
          amount: '3,000,000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setTurquoiseHovered(true)}
        onMouseLeave={() => setTurquoiseHovered(false)}
        aligment="left"
        color="turquoise"
        infos={{
          percentage: '10%',
          intro: 'PreSale',
          subInfo: '20% TGE + 20%/month',
          tokens: 'TOKENS',
          amount: '30,000,000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setPurpleHovered(true)}
        onMouseLeave={() => setPurpleHovered(false)}
        aligment="right"
        color="purple"
        infos={{
          percentage: '1%',
          intro: 'Airdrop',
          subInfo: 'Released at TGE',
          tokens: 'TOKENS',
          amount: '3,000,000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setRoseHovered(true)}
        onMouseLeave={() => setRoseHovered(false)}
        aligment="right"
        color="rose"
        infos={{
          percentage: '5%',
          intro: 'Liquidity',
          subInfo: 'Released at TGE',
          tokens: 'TOKENS',
          amount: '15,000,000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setTealHovered(true)}
        onMouseLeave={() => setTealHovered(false)}
        aligment="right"
        color="teal"
        infos={{
          percentage: '9%',
          intro: 'Dev/Marketing',
          subInfo: '5% TGE + 5%/month',
          tokens: 'TOKENS',
          amount: '27,000,000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setEggplantHovered(true)}
        onMouseLeave={() => setEggplantHovered(false)}
        aligment="right"
        color="eggplant"
        infos={{
          percentage: '3%',
          intro: 'Advisors',
          subInfo: '365 day cliff, after 10% / month',
          tokens: 'TOKENS',
          amount: '9,000,000',
        }}
      />
      {/*
        <>
          <DiagramInfo
            onMouseEnter={() => setEggplantHovered(true)}
            onMouseLeave={() => setEggplantHovered(false)}
            aligment="right"
            color="eggplant"
            infos={{
              percentage: '10%',
              intro: 'Team',
              subInfo: '365 day cliff, after 10% / month',
              tokens: 'TOKENS',
              amount: '30,000,000',
            }}
          />
          <DiagramInfo
            onMouseEnter={() => setEggplantHovered(true)}
            onMouseLeave={() => setEggplantHovered(false)}
            aligment="right"
            color="eggplant"
            infos={{
              percentage: '60%',
              intro: 'Reward/Quest',
              subInfo:
                'First 2 year 123 287 DYS token/day, (Halves every second year)',
              tokens: 'TOKENS',
              amount: '180,000,000',
            }}
          />
        </>
    */}
      <Image src={'/images/diagram.svg'} layout="fill" alt="dystopi diagram" />
      <div className={styles.dashedCircle}>
        <div className={styles.content}>
          <h6>TOTAL SUPPLY</h6>
          <p>100.000.000 tokens</p>
        </div>
      </div>
      <div className={styles.mobilePercentages}>
        <p className={styles.percentageIndigo}>18%</p>
        <p className={styles.percentageAqua}>13%</p>
        <p className={styles.percentageTurquoise}>19%</p>
        <p className={styles.percentagePurple}>9%</p>
        <p className={styles.percentageRose}>16%</p>
        <p className={styles.percentageTeal}>14%</p>
        <p className={styles.percentageEggplant}>11%</p>
      </div>
    </div>
  );
}

export default Diagram;
