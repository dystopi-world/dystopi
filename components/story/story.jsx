import { useInView } from 'react-intersection-observer';
import Characters from './characters/characters';
import styles from './story.module.scss';

function Story() {
	const [titleRef, titleInView] = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: true
	});
	const [playRef, playInView] = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: true
	});
	const [instructionsRef, instructionsInView] = useInView({
		/* Optional options */
		threshold: 0.1,
		triggerOnce: true
	});

	const titleStyle = {
		transition: '1000ms',
		opacity: titleInView ? 1 : 0,
		position: 'relative',
		top: titleInView ? 0 : '3rem'
	};

	const playStyle = {
		transition: '1000ms',
		opacity: playInView ? 1 : 0,
		position: 'relative',
		top: titleInView ? 0 : '3rem'
	};

	const instructionsStyle = {
		transition: '1000ms',
		opacity: instructionsInView ? 1 : 0,
		position: 'relative',
		top: instructionsInView ? 0 : '3rem'
	};

	return (
		<section className={styles.Story}>
			<h2 ref={titleRef} style={titleStyle}>
				A NEW GENERATION <strong>NFT GAME</strong> SAVE THE EARTH FROM
				ALIEN INVASION
			</h2>
			<div className={styles.outerContainer}>
				<div className={styles.innerContainer}>
					<h4 ref={playRef} style={playStyle}>
						PLAY
					</h4>
					<Characters />
				</div>
				<div
					ref={instructionsRef}
					className={styles.instructions}
					style={instructionsStyle}
				>
					<h5>
						HAVE <strong>FUN</strong>
					</h5>
					<h5>
						REACH <strong>RANKS</strong>
					</h5>
					<h5>
						EARN <strong>INCOME</strong>
					</h5>
				</div>
			</div>
		</section>
	);
}

export default Story;
