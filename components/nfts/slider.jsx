import Image from 'next/image';
import { useState, useEffect } from 'react';
// Import Swiper React components
import { EffectCoverflow, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './nfts.module.scss';
// Import Swiper styles
import 'swiper/css';

function Slider({ swiperPrevButtonRef, swiperNextButtonRef }) {
  const [sliderPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    if (window.innerWidth < 900) {
      setSlidesPerView(1);
    }
  }, []);

  return (
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
        <div className={styles.nftImageContainer}>
          <Image
            src="/images/nfts/nft-armor.jpg"
            layout="fill"
            alt="Dystopi NFT"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.nftImageContainer}>
          <Image
            src="/images/nfts/nft-armor.jpg"
            layout="fill"
            alt="Dystopi NFT"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.nftImageContainer}>
          <Image
            src="/images/nfts/nft-armor.jpg"
            layout="fill"
            alt="Dystopi NFT"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.nftImageContainer}>
          <Image
            src="/images/nfts/nft-armor.jpg"
            layout="fill"
            alt="Dystopi NFT"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.nftImageContainer}>
          <Image
            src="/images/nfts/nft-armor.jpg"
            layout="fill"
            alt="Dystopi NFT"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.nftImageContainer}>
          <Image
            src="/images/nfts/nft-armor.jpg"
            layout="fill"
            alt="Dystopi NFT"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.nftImageContainer}>
          <Image
            src="/images/nfts/nft-armor.jpg"
            layout="fill"
            alt="Dystopi NFT"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.nftImageContainer}>
          <Image
            src="/images/nfts/nft-armor.jpg"
            layout="fill"
            alt="Dystopi NFT"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default Slider;
