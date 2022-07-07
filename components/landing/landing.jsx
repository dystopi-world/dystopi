import styles from './landing.module.scss';
import Image from 'next/image';

function Landing() {
  return (
    <section className={styles.Landing} id="home">
      <Image
        src="/images/landing.jpg"
        layout="fill"
        objectFit="cover"
        alt="Dystopi city"
        priority
      />

      <p>SCROLL FOR MORE</p>
    </section>
  );
}

export default Landing;
