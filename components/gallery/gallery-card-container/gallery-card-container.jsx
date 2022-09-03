import { EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import GalleryCard from "../gallery-card/gallery-card";
import styles from "./gallery-card-container.module.scss";

function GalleryCardContainer({
	actualTab,
	changeBackgroundImage,
	images,
	isMobile,
	sliderPerView,
	swiperPrevButtonRef,
	swiperNextButtonRef,
	tabOpacity,
	videos
}) {
	const tabStyle = {
		transition: "300ms",
		opacity: tabOpacity
	};

	const videoStyle = {
		left: isMobile ? 0 : "4%"
	};

	const cardStyle = { minHeight: "30rem" };

	return (
		<div className={styles.galleryCardContainer} style={tabStyle}>
			<Swiper
				modules={[EffectCoverflow, Navigation]}
				spaceBetween={125}
				slidesPerView={sliderPerView}
				centeredSlides={true}
				onRealIndexChange={(stuff) =>
					changeBackgroundImage(stuff.realIndex)
				}
				effect="coverflow"
				navigation={{
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev"
				}}
				coverflowEffect={{
					rotate: 5,
					stretch: 32,
					depth: 100,
					modifier: 1,
					slideShadows: false
				}}
				grabCursor={true}
				loop={true}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl =
						swiperPrevButtonRef.current;
					swiper.params.navigation.nextEl =
						swiperNextButtonRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
			>
				{actualTab === "images" ? (
					images.map((image, index) => (
						<SwiperSlide key={index}>
							<div
								className={styles.galleryImageContainer}
								style={cardStyle}
							>
								<GalleryCard image={image} />
							</div>
						</SwiperSlide>
					))
				) : (
					<SwiperSlide>
						<video
							//width={sliderPerView == 3 ? 375 : '100%'}
							width={isMobile ? "100%" : "92%"}
							height="100%"
							src={videos[0].video.url}
							type={videos[0].video.mimeType}
							controls
							className={styles.galleryVideo}
							style={videoStyle}
							poster="/images/landing.jpg"
						></video>
					</SwiperSlide>
				)}
			</Swiper>
		</div>
	);
}

export default GalleryCardContainer;
