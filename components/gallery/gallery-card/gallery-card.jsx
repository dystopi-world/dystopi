import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import styles from './gallery-card.module.scss';
import { BsInfoCircle } from 'react-icons/bs';

export default function GalleryCard({ image }) {
	const tiltRef = useRef(null);

	const [options, setOptions] = useState({
		scale: 1.1,
		speed: 1000,
		max: 15
	});

	useEffect(() => {
		VanillaTilt.init(tiltRef.current, options);
	}, [options]);

	const [showInfo, setShowInfo] = useState(false);
	const updateShowInfo = (condition) => {
		setShowInfo(condition);
	};

	const extraInfoStyle = {
		transform: showInfo ? 'scale(1)' : 'scale(0)'
	};

	return (
		<article
			ref={tiltRef}
			onMouseLeave={() => updateShowInfo(false)}
			className={styles.galleryCard}
			//onTouchStart={() => updateShowInfo(!showInfo)}
		>
			<section
				className={styles.extracInfoContainer}
				style={extraInfoStyle}
			>
				<p className={styles.extracInfoText}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
				</p>
			</section>
			<Image
				src={image.node.image.url ? image.node.image.url : ''}
				layout="fill"
				objectFit="cover"
				objectPosition="center"
				alt="Dystopi image"
			/>
			{/* <BsInfoCircle
				onClick={() => updateShowInfo(false)}
				onMouseEnter={() => updateShowInfo(true)}
			/> */}
		</article>
	);
}
