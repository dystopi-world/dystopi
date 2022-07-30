import { useState } from 'react';
import styles from './landing.module.scss';
import Image from 'next/image';
import ScrollForMore from './scroll-for-more/scroll-for-more';
import { useEffect } from 'react';
//import useGyroscope from 'react-hook-gyroscope';
import useGyroscope from 'react-hook-gyroscope';

function Landing() {
  const gyroscope = useGyroscope();

  return (
    <section className={styles.Landing} id="home">
      <ul className={styles.testData}>
        <li>X: {gyroscope?.x ?? 'nincs'}</li>
        <li>Y: {gyroscope?.y ?? 'nincs'}</li>
        <li>Z: {gyroscope?.z ?? 'nincs'}</li>
      </ul>
      <Image
        src="/images/landing.jpg"
        layout="fill"
        objectFit="cover"
        alt="Dystopi city"
        priority
      />
      <ScrollForMore />
    </section>
  );
}

export default Landing;
