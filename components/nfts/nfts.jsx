import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import VanillaTilt from 'vanilla-tilt';

// import { EffectCoverflow, Navigation } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import {
// 	HiOutlineArrowNarrowLeft,
// 	HiOutlineArrowNarrowRight
// } from 'react-icons/hi';
import 'swiper/css';
import styles from './nfts.module.scss';

function Nfts() {
	const [titleRef, titleInView] = useInView({
		threshold: 0.3,
		triggerOnce: true
	});
	const [subTitleRef, subTitleInView] = useInView({
		threshold: 0.4,
		triggerOnce: true
	});

	const titleStyle = {
		transition: '2000ms',
		position: 'relative',
		top: titleInView ? 0 : '3rem',
		opacity: titleInView ? 1 : 0
	};
	const subTitleStyle = {
		transition: '2000ms',
		transitionDelay: '200ms',
		position: 'relative',
		top: subTitleInView ? 0 : '3rem',
		opacity: subTitleInView ? 1 : 0
	};

	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		if (window.innerWidth < 768) {
			setIsMobile(true);
		}
	}, []);

	const tiltRef = useRef(null);

	const [options, setOptions] = useState({
		scale: 1.01,
		speed: 2000,
		max: 7
	});

	useEffect(() => {
		VanillaTilt.init(tiltRef.current, options);
	}, [options]);

	return (
		<section className={styles.Nfts} id="nfts">
			<h2 ref={titleRef} style={titleStyle}>
				NFT
			</h2>
			<p ref={subTitleRef} style={subTitleStyle}>
				Unleash your strategic skills and equip your hero with powerful
				NFT armor sets and weapons! The right combination of NFT armor
				will greatly impact your hero&apos;s combat points, determining
				your resilience, attack power, supply capacity, and ability to
				fight solo or as part of a larger group. With special armor,
				you&apos;ll be able to access areas of the map that would
				otherwise be out of reach. So, choose your NFT armor wisely and
				watch your hero&apos;s rewards soar at the end of each day! Get
				ready to dominate the battlefield and claim your share of the
				glory!
			</p>
			<div className={styles.imageContainer} ref={tiltRef}>
				<Image
					src="/images/nfts/meer-shoulder-armor.png"
					layout="fill"
					alt="Dystopi NFT"
				/>
			</div>
		</section>
	);
}

export default Nfts;
