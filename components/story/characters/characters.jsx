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
import { characterData } from './character-data';

function Characters() {
  const swiperPrevButtonRef = useRef(null);
  const swiperNextButtonRef = useRef(null);

  return (
    <div className={styles.Characters}>
      <DecorSquare />
      <h6>CHARACTERS</h6>
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        ref={swiperPrevButtonRef}
      >
        <HiOutlineArrowNarrowLeft />
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        ref={swiperNextButtonRef}
      >
        <HiOutlineArrowNarrowRight />
      </button>
      <div className={styles.characterContainer}>
        <Swiper
          // install Swiper modules
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={0}
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
        >
          {characterData.map((character) => (
            <SwiperSlide key={character.name}>
              <Character
                image={character.image}
                characterName={character.name}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis expedita hic aliquid odio necessitatibus!"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Characters;
