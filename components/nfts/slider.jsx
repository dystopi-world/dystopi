// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import { useState } from 'react';
import { useEffect } from 'react';
// import 'swiper/css/effect-coverflow.min.css';

function Slider({ swiperPrevButtonRef, swiperNextButtonRef }) {
  const [sliderPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    if (window.innerWidth < 720) {
      setSlidesPerView(1);
    }
  }, []);

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation]}
      spaceBetween={100}
      slidesPerView={sliderPerView}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      effect="coverflow"
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
      coverflowEffect={{
        rotate: 15,
        stretch: 70,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      loop={true}
      onInit={(swiper) => {
        swiper.params.navigation.prevEl = swiperPrevButtonRef.current;
        swiper.params.navigation.nextEl = swiperNextButtonRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
    >
      <SwiperSlide>
        <div style={{ background: '#444', minHeight: '15rem' }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: '#444', minHeight: '15rem' }}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: '#444', minHeight: '15rem' }}>Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: '#444', minHeight: '15rem' }}>Slide 4</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: '#444', minHeight: '15rem' }}>Slide 5</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: '#444', minHeight: '15rem' }}>Slide 6</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: '#444', minHeight: '15rem' }}>Slide 7</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: '#444', minHeight: '15rem' }}>Slide 8</div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
