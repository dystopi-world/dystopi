import React from "react";
import SectionSeparator from "../section-separator/section-separator";
import styles from "./roadmap.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Roadmap() {
  return (
    <section className={styles.Roadmap}>
      <SectionSeparator />
      <h2>ROADMAP</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum.
      </p>
      <div className={styles.buttonGroup}>
        <button>{"<-"}</button>
        <button>{"->"}</button>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.decorLine}></div>

        <Swiper
          spaceBetween={0}
          slidesPerView={4}
          grabCursor={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div style={{ background: "#555", minHeight: "15rem" }}>
              Slide 1
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: "#555", minHeight: "15rem" }}>
              Slide 2
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: "#555", minHeight: "15rem" }}>
              Slide 3
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: "#555", minHeight: "15rem" }}>
              Slide 4
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: "#555", minHeight: "15rem" }}>
              Slide 5
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: "#555", minHeight: "15rem" }}>
              Slide 6
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: "#555", minHeight: "15rem" }}>
              Slide 7
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div style={{ background: "#555", minHeight: "15rem" }}>
              Slide 8
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Roadmap;
