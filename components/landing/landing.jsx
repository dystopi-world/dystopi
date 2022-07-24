import styles from './landing.module.scss';
import Image from 'next/image';
import ScrollForMore from './scroll-for-more/scroll-for-more';

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
      <ScrollForMore />
    </section>
  );
}

export default Landing;
