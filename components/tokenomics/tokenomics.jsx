import { useInView } from 'react-intersection-observer';

import Diagram from './diagram';
import MobileInfosContainer from './mobile-infos-container';
import styles from './tokenomics.module.scss';

function Tokenomics() {
	const [titleRef, titleInView] = useInView({
		threshold: 0.3,
		triggerOnce: true
	});
	const [subTitleRef, subTitleInView] = useInView({
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
	return (
		<section className={styles.Tokenomics} id="tokenomics">
			<h2 ref={titleRef} style={titleStyle} className={styles.title}>
				TOKENOMICS
			</h2>
			<p
				ref={subTitleRef}
				style={subTitleStyle}
				className={styles.sectionInfo}
			>
				Round Percentage Token Vesting time
			</p>
			<Diagram />
			<MobileInfosContainer />
		</section>
	);
}

export default Tokenomics;
