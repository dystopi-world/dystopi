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
      ? '-5px 3px 85px 4px #df1dff'
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
          percentage: '18%',
          intro: 'Lorem ipsum dolor',
          subInfo: '0% TGE 5% unlocked each month after',
          tokens: 'TOKENS',
          amount: '15.000.000.000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setAquaHovered(true)}
        onMouseLeave={() => setAquaHovered(false)}
        aligment="left"
        color="aqua"
        infos={{
          percentage: '13%',
          intro: 'Lorem ipsum dolor',
          subInfo: '0% TGE 5% unlocked each month after',
          tokens: 'TOKENS',
          amount: '15.000.000.000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setTurquoiseHovered(true)}
        onMouseLeave={() => setTurquoiseHovered(false)}
        aligment="left"
        color="turquoise"
        infos={{
          percentage: '19%',
          intro: 'Lorem ipsum dolor',
          subInfo: '0% TGE 5% unlocked each month after',
          tokens: 'TOKENS',
          amount: '15.000.000.000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setPurpleHovered(true)}
        onMouseLeave={() => setPurpleHovered(false)}
        aligment="right"
        color="purple"
        infos={{
          percentage: '9%',
          intro: 'Lorem ipsum dolor',
          subInfo: '0% TGE 5% unlocked each month after',
          tokens: 'TOKENS',
          amount: '15.000.000.000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setRoseHovered(true)}
        onMouseLeave={() => setRoseHovered(false)}
        aligment="right"
        color="rose"
        infos={{
          percentage: '16%',
          intro: 'Lorem ipsum dolor',
          subInfo: '0% TGE 5% unlocked each month after',
          tokens: 'TOKENS',
          amount: '15.000.000.000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setTealHovered(true)}
        onMouseLeave={() => setTealHovered(false)}
        aligment="right"
        color="teal"
        infos={{
          percentage: '14%',
          intro: 'Lorem ipsum dolor',
          subInfo: '0% TGE 5% unlocked each month after',
          tokens: 'TOKENS',
          amount: '15.000.000.000',
        }}
      />
      <DiagramInfo
        onMouseEnter={() => setEggplantHovered(true)}
        onMouseLeave={() => setEggplantHovered(false)}
        aligment="right"
        color="eggplant"
        infos={{
          percentage: '11%',
          intro: 'Lorem ipsum dolor',
          subInfo: '0% TGE 5% unlocked each month after',
          tokens: 'TOKENS',
          amount: '15.000.000.000',
        }}
      />
      <Image src={'/images/diagram.svg'} layout="fill" alt="dystopi diagram" />
      <div className={styles.dashedCircle}>
        <div className={styles.content}>
          <h6>TOTAL SUPPLY</h6>
          <p>100.000.000 tokens</p>
        </div>
      </div>
    </div>
  );
}

export default Diagram;
