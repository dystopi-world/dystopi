import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { BsArrowLeft, BsArrowRight, BsClockHistory } from 'react-icons/bs';
import { IoCheckmarkDone } from 'react-icons/io5';
import { BiCalendarExclamation, BiTimer } from 'react-icons/bi';
import { HiOutlineLightBulb, HiOutlineClipboardCheck } from 'react-icons/hi';
import SectionSeparator from '../section-separator/section-separator';
// Import Swiper React components
import { Navigation, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './roadmap.module.scss';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import RoadmapItem from './roadmap-item';

function Roadmap({ timelineItems }) {
	const swiperPrevButtonRef = useRef(null);
	const swiperNextButtonRef = useRef(null);

	const [isSwiperAtStart, setIsSwiperAtStart] = useState(true);
	const [isSwiperAtEnd, setIsSwiperAtEnd] = useState(false);

	const [sliderPerView, setSliderPerView] = useState(4);
	useEffect(() => {
		if (window.innerWidth < 1024) {
			setSliderPerView(3);
		}
		if (window.innerWidth < 760) {
			setSliderPerView(1);
		}
	}, []);

	const [titleRef, titleInView] = useInView({
		threshold: 0.3,
		triggerOnce: true
	});
	const [subTitleRef, subTitleInView] = useInView({
		threshold: 0.4,
		triggerOnce: true
	});
	const [buttonGroupRef, buttonGroupInView] = useInView({
		threshold: 0.4,
		triggerOnce: true
	});
	const [sliderRef, sliderInView] = useInView({
		threshold: 0.4,
		triggerOnce: true
	});

	const titleStyle = {
		top: titleInView ? 0 : '3rem',
		opacity: titleInView ? 1 : 0
	};
	const subTitleStyle = {
		top: subTitleInView ? 0 : '3rem',
		opacity: subTitleInView ? 1 : 0
	};
	const buttonGroupStyle = {
		top: buttonGroupInView ? '50%' : '55%',
		opacity: buttonGroupInView ? 1 : 0
	};

	const decorLineStyle = {
		transition: '2000ms',
		width: sliderInView ? '100%' : 0
	};

	const decorLineDotStyle = (delay) => ({
		opacity: sliderInView ? 1 : 0,
		transitionDelay: delay,
		transition: '3000ms'
	});

	const sliderStyle = {
		transition: '600ms',
		position: 'relative',
		top: sliderInView ? 0 : '4rem',
		opacity: sliderInView ? 1 : 0,
		overflow: 'visible'
	};

	const navigationButtonPreviousStyle = {
		opacity: isSwiperAtStart ? 0.6 : 1
	};

	const navigationButtonNextStyle = {
		opacity: isSwiperAtEnd ? 0.6 : 1
	};

	const getIcon = (timelineListItem) => {
		if (timelineListItem.progressState === 'completed')
			return <IoCheckmarkDone />;
		if (timelineListItem.progressState === 'in_progress')
			return <BsClockHistory />;
		if (timelineListItem.progressState === 'will_be_done')
			return <BiCalendarExclamation />;
	};

	return (
		<section className={styles.Roadmap}>
			<SectionSeparator />
			<h2 ref={titleRef} style={titleStyle} className={styles.title}>
				ROADMAP
			</h2>
			<p
				ref={subTitleRef}
				style={subTitleStyle}
				className={styles.sectionInfo}
			>
				Milestones reached, in progress and to be done.
			</p>
			<div ref={sliderRef} className={styles.sliderContainer}>
				<ul className={styles.iconExplanationsList}>
					<li className={styles.iconExplanationsListItem}>
						<HiOutlineLightBulb color="#893982" size={32} />
						<p>Planned</p>
					</li>
					<li className={styles.iconExplanationsListItem}>
						<BiTimer color="#B69E4B" size={32} />
						<p>In progress</p>
					</li>
					<li className={styles.iconExplanationsListItem}>
						<HiOutlineClipboardCheck color="#450DA7" size={32} />
						<p>Testing</p>
					</li>
					<li className={styles.iconExplanationsListItem}>
						<IoCheckmarkDone color="#167D4E" size={32} />
						<p>Finished</p>
					</li>
				</ul>
				<div
					ref={buttonGroupRef}
					className={styles.buttonGroup}
					style={buttonGroupStyle}
				>
					<button
						style={navigationButtonPreviousStyle}
						aria-label="previous roadmap item"
						ref={swiperPrevButtonRef}
						onClick={() => setIsSwiperAtEnd(false)}
					>
						<BsArrowLeft />
					</button>
					<button
						style={navigationButtonNextStyle}
						aria-label="previous roadmap item"
						ref={swiperNextButtonRef}
						onClick={() => setIsSwiperAtStart(false)}
					>
						<BsArrowRight />
					</button>
				</div>
				<div className={styles.decorLine} style={decorLineStyle}>
					<div
						className={styles.decorLineDot}
						style={decorLineDotStyle(0)}
					></div>
					{sliderPerView === 4 && (
						<>
							<div
								className={styles.decorLineDot}
								style={decorLineDotStyle('1000ms')}
							></div>
							<div
								className={styles.decorLineDot}
								style={decorLineDotStyle('2000ms')}
							></div>
							<div
								className={styles.decorLineDot}
								style={decorLineDotStyle('3000ms')}
							></div>
						</>
					)}
				</div>

				<Swiper
					// install Swiper modules
					style={sliderStyle}
					modules={[Navigation, EffectFade]}
					spaceBetween={50}
					slidesPerView={sliderPerView}
					// grabCursor={true}
					navigation={{
						prevEl: swiperPrevButtonRef.current,
						nextEl: swiperNextButtonRef.current
					}}
					speed={800}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl =
							swiperPrevButtonRef.current;
						swiper.params.navigation.nextEl =
							swiperNextButtonRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
					}}
					onReachEnd={() => {
						setIsSwiperAtEnd(true);
					}}
					onReachBeginning={() => {
						setIsSwiperAtStart(true);
					}}
				>
					{timelineItems.map((timelineItem, index) => (
						<SwiperSlide key={index}>
							<article>
								<div
									className={styles.decorLineDot}
									style={decorLineDotStyle('1000ms')}
								></div>
								<div
									className={styles.decorLineDot}
									style={decorLineDotStyle('1000ms')}
								></div>
								<h4>{timelineItem.node.title}</h4>
								<ul>
									{timelineItem.node.tiemlineListItems.map(
										(timelineListItem, index) => (
											<RoadmapItem
												key={index}
												styles={styles}
												timelineListItem={
													timelineListItem
												}
											/>
										)
									)}
								</ul>
							</article>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default Roadmap;
