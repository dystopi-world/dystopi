/* eslint-disable import/no-unresolved */
import { useRef } from 'react';
import {
	HiOutlineArrowNarrowLeft,
	HiOutlineArrowNarrowRight
} from 'react-icons/hi';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import DecorSquare from '../../decor-square/decor-square';
import Character from './character/character';
import styles from './characters.module.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { characterData } from './character-data';

function Characters() {
	const swiperPrevButtonRef = useRef(null);
	const swiperNextButtonRef = useRef(null);

	return (
		<div className={styles.Characters}>
			<div className={styles.decorContainer}>
				<DecorSquare />
				<h6>CHARACTERS</h6>
			</div>
			<button
				aria-label="show previous character"
				className={`${styles.arrow} ${styles.arrowLeft}`}
				ref={swiperPrevButtonRef}
			>
				<HiOutlineArrowNarrowLeft />
			</button>
			<button
				aria-label="show next character"
				className={`${styles.arrow} ${styles.arrowRight}`}
				ref={swiperNextButtonRef}
			>
				<HiOutlineArrowNarrowRight />
			</button>
			<div className={styles.characterContainer}>
				<Swiper
					// install Swiper modules
					modules={[Navigation]}
					slidesPerView={1}
					spaceBetween={150}
					grabCursor={true}
					navigation={{
						prevEl: swiperPrevButtonRef.current,
						nextEl: swiperNextButtonRef.current
					}}
					speed={800}
					loop
					onInit={(swiper) => {
						swiper.params.navigation.prevEl =
							swiperPrevButtonRef.current;
						swiper.params.navigation.nextEl =
							swiperNextButtonRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
				>
					{characterData.map((character) => (
						<SwiperSlide key={character.name}>
							<Character
								image={character.image}
								characterName={character.name}
								description={character.description}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}

export default Characters;
