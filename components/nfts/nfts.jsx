import React from 'react';
import styles from './nfts.module.scss';
import Slider from './slider';

function Nfts() {
  return (
    <section className={styles.Nfts} id="nfts">
      <h2>NFTs</h2>
      <p>
        Design your strategy and collect NFT armor sets and weapons for your
        hero to maximize earnings! NFT armors are designed to increase your
        hero&apos;s combat points: they determine your resilience, the size of
        your attacks, carriable supply and how much you can fight actively or in
        legion mode. Certain areas of the map may only be reached in special
        armor. The reward you get at the end of the day depends a lot on what
        your hero wears!
      </p>
      <div className={styles.sliderContainer}>
        <Slider />
      </div>
    </section>
  );
}

export default Nfts;
