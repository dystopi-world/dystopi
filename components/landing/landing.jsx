import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import ScrollForMore from "./scroll-for-more/scroll-for-more";
import styles from "./landing.module.scss";

function Landing() {
	const tiltRef = useRef(null);

	const [options, setOptions] = useState({
		scale: 1,
		speed: 2000,
		max: 7
		// glare: true,
	});

	useEffect(() => {
		VanillaTilt.init(tiltRef.current, options);
	}, [options]);

	return (
		<section className={styles.Landing} id="home">
			<div ref={tiltRef} className={styles.imageContainer}>
				<Image
					src="/images/landing.jpg"
					layout="fill"
					objectFit="cover"
					alt="Dystopi city"
					priority
				/>
			</div>
			<ScrollForMore />
		</section>
	);
}

export default Landing;
