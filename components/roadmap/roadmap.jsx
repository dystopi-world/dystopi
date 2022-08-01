import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BsArrowLeft, BsArrowRight, BsClockHistory } from 'react-icons/bs';
import { IoCheckmarkDone } from 'react-icons/io5';
import { BiCalendarExclamation } from 'react-icons/bi';
import SectionSeparator from '../section-separator/section-separator';
// Import Swiper React components
import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './roadmap.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { roadmapData } from './roadmap-data';

function Roadmap({ timelineItems }) {
  console.log(timelineItems);
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
  const [buttonGroupRef, buttonGroupInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [sliderRef, sliderInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const titleStyle = {
    top: titleInView ? 0 : '3rem',
    opacity: titleInView ? 1 : 0,
  };
  const subTitleStyle = {
    top: subTitleInView ? 0 : '3rem',
    opacity: subTitleInView ? 1 : 0,
  };
  const buttonGroupStyle = {
    top: buttonGroupInView ? '50%' : '55%',
    opacity: buttonGroupInView ? 1 : 0,
  };

  const decorLineStyle = {
    transition: '2000ms',
    width: sliderInView ? '100%' : 0,
  };

  const decorLineDotStyle = (delay) => ({
    opacity: sliderInView ? 1 : 0,
    transitionDelay: delay,
    transition: '3000ms',
  });

  const sliderStyle = {
    transition: '600ms',
    position: 'relative',
    top: sliderInView ? 0 : '4rem',
    opacity: sliderInView ? 1 : 0,
  };

  const getIcon = (timelineListItem) => {
    if (timelineListItem.progressState === 'completed')
      return <IoCheckmarkDone />;
    if (timelineListItem.progressState === 'in_progress')
      return <BsClockHistory />;
    if (timelineListItem.progressState === 'will_be_done')
      return <BiCalendarExclamation />;
  };

  return (
    <section className={styles.Roadmap}>
      <SectionSeparator />
      <h2 ref={titleRef} style={titleStyle} className={styles.title}>
        ROADMAP
      </h2>
      <p ref={subTitleRef} style={subTitleStyle} className={styles.sectionInfo}>
        Milestones reached, in progress and to be done.
      </p>
      <div
        ref={buttonGroupRef}
        className={styles.buttonGroup}
        style={buttonGroupStyle}
      >
        <button ref={swiperPrevButtonRef}>
          <BsArrowLeft />
        </button>
        <button ref={swiperNextButtonRef}>
          <BsArrowRight />
        </button>
      </div>
      <div ref={sliderRef} className={styles.sliderContainer}>
        <div className={styles.decorLine} style={decorLineStyle}>
          <div
            className={styles.decorLineDot}
            style={decorLineDotStyle(0)}
          ></div>
          {sliderPerView === 4 && (
            <>
              <div
                className={styles.decorLineDot}
                style={decorLineDotStyle('1000ms')}
              ></div>
              <div
                className={styles.decorLineDot}
                style={decorLineDotStyle('2000ms')}
              ></div>
              <div
                className={styles.decorLineDot}
                style={decorLineDotStyle('3000ms')}
              ></div>
            </>
          )}
        </div>

        <Swiper
          // install Swiper modules
          style={sliderStyle}
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
          {timelineItems.map((timelineItem, index) => (
            <SwiperSlide key={index}>
              <article>
                <div
                  className={styles.decorLineDot}
                  style={decorLineDotStyle('1000ms')}
                ></div>
                <div
                  className={styles.decorLineDot}
                  style={decorLineDotStyle('1000ms')}
                ></div>
                <h4>{timelineItem.node.title}</h4>
                <ul>
                  {timelineItem.node.tiemlineListItems.map(
                    (timelineListItem, index) => (
                      <li key={index}>
                        {timelineListItem.progressState === 'completed' && (
                          <IoCheckmarkDone
                            color="#00e676"
                            className={styles.testTick}
                          />
                        )}
                        {timelineListItem.progressState === 'in_progress' && (
                          <BsClockHistory color="#ffca28" />
                        )}
                        {timelineListItem.progressState === 'will_be_done' && (
                          // <BiCalendarExclamation color="#d50000" />
                          <BiCalendarExclamation color="#ef5350" />
                          //<BiCalendarExclamation color="#f44336" />
                        )}
                        {timelineListItem.text}
                      </li>
                    ),
                  )}
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
