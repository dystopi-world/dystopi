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
      />
      <div className={styles.landingTextContainer}>
        <Image
          src="/images/landing-text.svg"
          width={420}
          height={210}
          objectFit="cover"
          alt="Dystopi title"
        />
      </div>
      <p>SCROLL FOR MORE</p>
    </section>
  );
}

export default Landing;
