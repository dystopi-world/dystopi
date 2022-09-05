import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
	HiOutlineArrowNarrowLeft,
	HiOutlineArrowNarrowRight
} from "react-icons/hi";
import { getImages, getVideos } from "../cms-service";
import "swiper/css";

import GalleryCardContainer from "../components/gallery/gallery-card-container/gallery-card-container";
import GalleryTabs from "../components/gallery/gallery-tabs/gallery-tabs";
import Presale from "../components/presale/presale";
import styles from "../styles/gallery.module.scss";

function Gallery({ images, videos }) {
	const [coverflowStrech, setCoverflowStrech] = useState(0);
	const [isMobile, setIsMobile] = useState(false);
	const [sliderPerView, setSlidesPerView] = useState(null);

	useEffect(() => {
		if (window.innerWidth < 500) {
			setIsMobile(true);
		}
		if (window.innerWidth < 767) {
			setSlidesPerView(1);
			setCoverflowStrech(2);
		} else if (window.innerWidth < 2400) {
			setSlidesPerView(3);
			setCoverflowStrech(32);
		} else {
			setSlidesPerView(4);
			setCoverflowStrech(8);
		}
	}, [sliderPerView]);

	const swiperPrevButtonRef = useRef(null);
	const swiperNextButtonRef = useRef(null);

	const [backgroundImage, setBackgroundImage] = useState(
		images[0].node.image.url
	);

	const [backgroundOpacity, setBackgroundOpacity] = useState(0.15);

	const changeBackgroundImage = (index) => {
		setTimeout(() => {
			setBackgroundImage(images[index].node.image.url);
			setBackgroundOpacity(0.15);
		}, 200);
		setBackgroundOpacity(0);
	};

	const backgroundImageStyle = {
		opacity: backgroundOpacity,
		transition: "200ms",
		margin: "0 auto"
	};

	const [actualTab, setActualTab] = useState("images");
	const [indicatorLinePosition, setIndicatorLinePosition] = useState("left");
	const [tabOpacity, setTabOpacity] = useState(1);

	const changeActualTab = (tab) => {
		console.log("lol");
		console.log("actualTab is:", actualTab);
		if (tab === "images") {
			setIndicatorLinePosition("left");
		} else {
			setIndicatorLinePosition("right");
		}

		setTabOpacity(0);

		setTimeout(() => {
			setActualTab(tab);
			setTabOpacity(1);
			setSlidesPerView(!isMobile && actualTab === "videos" ? 3 : 1);
		}, 300);
	};

	const indicatorLineStyle = {
		left: indicatorLinePosition === "left" ? "16px" : "calc(100% - 72px)"
	};

	const prevButtonStyle = {
		transition: "250ms",
		transform: actualTab === "images" ? "translateX(0)" : "translateX(5rem)"
	};

	const nextButtonStyle = {
		transition: "250ms",
		transform:
			actualTab === "images" ? "translateX(0)" : "translateX(-5rem)"
	};

	return (
		<section className={styles.Gallery}>
			<div className={styles.galleryContainer}>
				<Presale />
				<GalleryTabs
					actualTab={actualTab}
					changeActualTab={changeActualTab}
					indicatorLineStyle={indicatorLineStyle}
				/>
				<div className={styles.sliderContainer}>
					<button
						ref={swiperPrevButtonRef}
						className={styles.swiperButtonPrev}
					>
						<HiOutlineArrowNarrowLeft style={prevButtonStyle} />
					</button>
					<button
						ref={swiperNextButtonRef}
						className={styles.swiperButtonNext}
					>
						<HiOutlineArrowNarrowRight style={nextButtonStyle} />
					</button>
					{sliderPerView && (
						<GalleryCardContainer
							actualTab={actualTab}
							changeBackgroundImage={changeBackgroundImage}
							coverflowStrech={coverflowStrech}
							images={images}
							isMobile={isMobile}
							sliderPerView={sliderPerView}
							swiperPrevButtonRef={swiperPrevButtonRef}
							swiperNextButtonRef={swiperNextButtonRef}
							tabOpacity={tabOpacity}
							videos={videos}
						/>
					)}
				</div>
			</div>
			{actualTab === "images" && (
				<div className={styles.backgroundImageContainer}>
					<Image
						src={backgroundImage}
						layout="fill"
						objectFit="cover"
						objectPosition="center"
						alt=""
						style={backgroundImageStyle}
					/>
				</div>
			)}
		</section>
	);
}

export async function getStaticProps() {
	const videos = (await getVideos()) || [];
	const images = (await getImages()) || [];
	return {
		props: { images, videos }
	};
}

export default Gallery;
