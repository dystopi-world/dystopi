import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSwiperSlide } from "swiper/react";
import VanillaTilt from "vanilla-tilt";
import landing from "../../../public/images/landing.jpg";
import styles from "./gallery-card.module.scss";
import { BsInfoCircle, BsFillInfoCircleFill } from "react-icons/bs";

export default function GalleryCard({ image }) {
	const swiperSlide = useSwiperSlide();
	const tiltRef = useRef(null);

	const [options, setOptions] = useState({
		scale: 1.1,
		speed: 1000,
		max: 15
		// glare: true,
	});

	useEffect(() => {
		VanillaTilt.init(tiltRef.current, options);
	}, [options]);

	const [showInfo, setShowInfo] = useState(false);
	const updateShowInfo = (condition) => {
		setShowInfo(condition);
	};

	const extraInfoStyle = {
		transform: showInfo ? "scale(1)" : "scale(0)"
	};

	return (
		<article
			ref={tiltRef}
			onMouseLeave={() => updateShowInfo(false)}
			className={styles.galleryCard}
			onTouchStart={() => updateShowInfo(true)}
			onTouchEnd={() => updateShowInfo(false)}
		>
			<section
				className={styles.extracInfoContainer}
				style={extraInfoStyle}
			>
				<p className={styles.extracInfoText}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Enim eos iure harum impedit adipisci, ipsam commodi delectus
					alias quod exercitationem dicta. Quisquam, aspernatur sunt.
				</p>
			</section>
			<Image
				src={image.node.image.url}
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt=""
				// priority
			/>
			<BsInfoCircle
				onClick={() => updateShowInfo(false)}
				onMouseEnter={() => updateShowInfo(true)}
			/>
		</article>
	);
}
