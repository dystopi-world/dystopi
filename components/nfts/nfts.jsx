import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './nfts.module.scss';
import Slider from './slider';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';

function Nfts() {
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

  const swiperPrevButtonRef = useRef(null);
  const swiperNextButtonRef = useRef(null);
  return (
    <section className={styles.Nfts} id="nfts">
      <h2 ref={titleRef} style={titleStyle}>
        NFTs
      </h2>
      <p ref={subTitleRef} style={subTitleStyle}>
        Design your strategy and collect NFT armor sets and weapons for your
        hero to maximize earnings! NFT armors are designed to increase your
        hero&apos;s combat points: they determine your resilience, the size of
        your attacks, carriable supply and how much you can fight actively or in
        legion mode. Certain areas of the map may only be reached in special
        armor. The reward you get at the end of the day depends a lot on what
        your hero wears!
      </p>
      <div className={styles.sliderContainer}>
        <Slider
          swiperPrevButtonRef={swiperPrevButtonRef}
          swiperNextButtonRef={swiperNextButtonRef}
        />
        <button ref={swiperPrevButtonRef} className={styles.swiperButtonPrev}>
          <HiOutlineArrowNarrowLeft />
        </button>
        <button ref={swiperNextButtonRef} className={styles.swiperButtonNext}>
          <HiOutlineArrowNarrowRight />
        </button>
      </div>
    </section>
  );
}

export default Nfts;
