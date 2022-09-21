import { useContext } from "react";
import { EffectCoverflow, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import GalleryCard from "../gallery-card/gallery-card";
import styles from "./gallery-card-container.module.scss";
import GalleryContext from "../../../contexts/gallery/gallery-context";

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
	const { lastActiveSlideIndex, updateLastActiveSlideIndex } =
		useContext(GalleryContext);

	const tabStyle = {
		transition: "300ms",
		opacity: tabOpacity
	};

	const cardStyle = { minHeight: "30rem" };

	const updateSwiperInitialSlide = (swiper) => {
		swiper.params.initialSlide = lastActiveSlideIndex;
	};

	const onSwiperIndexChange = (swiper, index) => {
		changeBackgroundImage(index);
		updateLastActiveSlideIndex(index, actualTab);
		updateSwiperInitialSlide(swiper);
	};

	return (
		<div className={styles.galleryCardContainer} style={tabStyle}>
			{actualTab === "images" && (
				<Swiper
					modules={[EffectCoverflow, Navigation]}
					spaceBetween={50}
					slidesPerView={sliderPerView}
					centeredSlides={true}
					centerInsufficientSlides={true}
					centeredSlidesBounds={true}
					initialSlide={lastActiveSlideIndex}
					onActiveIndexChange={(swiper) => {
						onSwiperIndexChange(swiper, swiper.realIndex);
					}}
					effect="coverflow"
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev"
					}}
					coverflowEffect={{
						rotate: 5,
						stretch: 8,
						depth: 100,
						modifier: 1,
						slideShadows: false
					}}
					grabCursor={true}
					loop={true}
					onInit={(swiper) => {
						swiper.params.initialSlide = lastActiveSlideIndex;
						swiper.params.navigation.prevEl =
							swiperPrevButtonRef.current;
						swiper.params.navigation.nextEl =
							swiperNextButtonRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<div
								className={styles.galleryImageContainer}
								style={cardStyle}
							>
								<GalleryCard image={image} index={index} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
			{actualTab === "videos" && (
				<Swiper
					spaceBetween={125}
					slidesPerView={1}
					centeredSlides={true}
					initialSlide={0}
					onActiveIndexChange={(swiper) => {
						onSwiperIndexChange(swiper, swiper.realIndex);
					}}
				>
					<SwiperSlide
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center"
						}}
					>
						<video
							width={isMobile ? "100%" : "92%"}
							src={videos[0].video.url}
							type={videos[0].video.mimeType}
							controls
							className={styles.galleryVideo}
							poster="/images/gallery-video-poster.png"
						></video>
					</SwiperSlide>
				</Swiper>
			)}
		</div>
	);
}

export default GalleryCardContainer;
