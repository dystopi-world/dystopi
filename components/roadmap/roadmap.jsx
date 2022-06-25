import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import SectionSeparator from '../section-separator/section-separator';
import styles from './roadmap.module.scss';
// Import Swiper React components
import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { roadmapData } from './roadmap-data';

function Roadmap() {
  const swiperPrevButtonRef = useRef(null);
  const swiperNextButtonRef = useRef(null);

  const [sliderPerView, setSliderPerView] = useState(4);
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setSliderPerView(3);
    }
    if (window.innerWidth < 760) {
      setSliderPerView(1);
    }
  }, []);

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

  return (
    <section className={styles.Roadmap}>
      <SectionSeparator />
      <h2 ref={titleRef} style={titleStyle}>
        ROADMAP
      </h2>
      <p ref={subTitleRef} style={subTitleStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum.
      </p>
      <div className={styles.buttonGroup}>
        <button ref={swiperPrevButtonRef}>{'<-'}</button>
        <button ref={swiperNextButtonRef}>{'->'}</button>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.decorLine}>
          <div className={styles.decorLineDot}></div>
          <div className={styles.decorLineDot}></div>
          <div className={styles.decorLineDot}></div>
          <div className={styles.decorLineDot}></div>
        </div>

        <Swiper
          // install Swiper modules
          modules={[Navigation, EffectFade]}
          spaceBetween={50}
          slidesPerView={sliderPerView}
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
          {roadmapData.map((roadmap, index) => (
            <SwiperSlide key={index}>
              <article>
                <h4>{roadmap.year}</h4>
                <ul>
                  {roadmap.milestones.map((milestone, index) => (
                    <li key={index}>{milestone}</li>
                  ))}
                </ul>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Roadmap;
