import { useRef } from 'react';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';
import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DecorSquare from '../../decor-square/decor-square';
import Character from './character/character';
import styles from './characters.module.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

function Characters() {
  const swiperPrevButtonRef = useRef(null);
  const swiperNextButtonRef = useRef(null);

  return (
    <div className={styles.Characters}>
      <DecorSquare />
      <h6>CHARACTERS</h6>
      <button
        ref={swiperPrevButtonRef}
        className={`${styles.arrow} ${styles.arrowLeft}`}
      >
        <HiOutlineArrowNarrowLeft />
      </button>
      <button className={`${styles.arrow} ${styles.arrowRight}`}>
        <HiOutlineArrowNarrowRight />
      </button>
      <div className={styles.characterContainer}>
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          slidesPerView={1}
          grabCursor={true}
          navigation={{
            prevEl: swiperPrevButtonRef.current,
            nextEl: swiperNextButtonRef.current,
          }}
          speed={800}
          loop
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperPrevButtonRef.current;
            swiper.params.navigation.nextEl = swiperNextButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        ></Swiper>
        <Character
          image="/images/characters/ai.png"
          characterName="AI"
          description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis expedita hic aliquid odio necessitatibus!"
        />
      </div>
    </div>
  );
}

export default Characters;
