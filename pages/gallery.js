import { useEffect, useRef, useState } from 'react';
import { EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from 'react-icons/hi';
import { getImages, getVideos } from '../cms-service';

import 'swiper/css';
import styles from '../styles/gallery.module.scss';
import Image from 'next/image';

function Gallery({ videos, images }) {
  console.log('images: ', images);
  console.log('videos: ', videos);

  const [sliderPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    if (window.innerWidth < 900) {
      setSlidesPerView(1);
    }
  }, []);

  const swiperPrevButtonRef = useRef(null);
  const swiperNextButtonRef = useRef(null);

  return (
    <section className={styles.Gallery}>
      <h1>GALLERY</h1>
      <div className={styles.sliderContainer}>
        <button ref={swiperPrevButtonRef} className={styles.swiperButtonPrev}>
          <HiOutlineArrowNarrowLeft />
        </button>
        <button ref={swiperNextButtonRef} className={styles.swiperButtonNext}>
          <HiOutlineArrowNarrowRight />
        </button>
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          spaceBetween={150}
          slidesPerView={sliderPerView}
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
            // slideShadows: true,
          }}
          grabCursor={true}
          loop={true}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperPrevButtonRef.current;
            swiper.params.navigation.nextEl = swiperNextButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className={styles.galleryImageContainer}>
                <Image
                  src={image.node.image.url}
                  layout="fill"
                  objectFit="contain"
                  alt="dystopi gallery image"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ************************************************ */}
      <div className={styles.sliderContainer}>
        <div className={styles.videoContainer}>
          <video
            width={sliderPerView == 3 ? 375 : '100%'}
            src={videos[0].video.url}
            type={videos[0].video.mimeType}
            controls
          ></video>
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const videos = (await getVideos()) || [];
  const images = (await getImages()) || [];
  return {
    props: { images, videos },
  };
}

export default Gallery;
