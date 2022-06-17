// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      effect="coverflow"
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        loop: true,
        slideShadows: true,
      }}
    >
      <SwiperSlide>
        <div style={{ background: "#bbb", minHeight: "15rem" }}>Slide 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "#bbb", minHeight: "15rem" }}>Slide 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "#bbb", minHeight: "15rem" }}>Slide 3</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "#bbb", minHeight: "15rem" }}>Slide 4</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "#bbb", minHeight: "15rem" }}>Slide 5</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "#bbb", minHeight: "15rem" }}>Slide 6</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "#bbb", minHeight: "15rem" }}>Slide 7</div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ background: "#bbb", minHeight: "15rem" }}>Slide 8</div>
      </SwiperSlide>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
}

export default Slider;
