import { useEffect, useRef, useState } from "react";

import {
	HiOutlineArrowNarrowLeft,
	HiOutlineArrowNarrowRight
} from "react-icons/hi";
import { getImages, getVideos } from "../cms-service";

import "swiper/css";
import Image from "next/image";
import Presale from "../components/presale/presale";
import GalleryTabs from "../components/gallery/gallery-tabs/gallery-tabs";
import styles from "../styles/gallery.module.scss";
import GalleryCardContainer from "../components/gallery/gallery-card-container/gallery-card-container";

function Gallery({ images, videos }) {
	const [sliderPerView, setSlidesPerView] = useState(3);
	useEffect(() => {
		if (window.innerWidth < 767) {
			setSlidesPerView(1);
			return;
		}
		if (window.innerWidth < 1024) {
			setSlidesPerView(2);
			return;
		}
		if (window.innerWidth < 2400) {
			setSlidesPerView(3);
			return;
		}
		setSlidesPerView(4);
	}, []);

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
	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (window.innerWidth < 500) {
			setIsMobile(true);
			return;
		}
	}, []);

	const backgroundImageStyle = {
		opacity: backgroundOpacity,
		transition: "200ms",
		margin: "0 auto"
	};

	const [actualTab, setActualTab] = useState("images");
	const [indicatorLinePosition, setIndicatorLinePosition] = useState("left");
	const [tabOpacity, setTabOpacity] = useState(1);

	const changeActualTab = (tab) => {
		if (tab === "images") {
			setIndicatorLinePosition("left");
		} else {
			setIndicatorLinePosition("right");
			// setSlidesPerView(1);
		}

		setTimeout(() => {
			setTabOpacity(1);
			setActualTab(tab);
			setSlidesPerView(!isMobile && actualTab === "videos" ? 3 : 1);
		}, 300);
		setTabOpacity(0);
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
					indicatorLineStyle={indicatorLineStyle}
					changeActualTab={changeActualTab}
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
					<GalleryCardContainer
						actualTab={actualTab}
						changeBackgroundImage={changeBackgroundImage}
						images={images}
						isMobile={isMobile}
						sliderPerView={sliderPerView}
						swiperPrevButtonRef={swiperPrevButtonRef}
						swiperNextButtonRef={swiperNextButtonRef}
						tabOpacity={tabOpacity}
						videos={videos}
					/>
				</div>
				{/* <div className={styles.extraHeight}></div> */}
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
