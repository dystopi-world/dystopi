import { useState } from 'react';
import DiagramInfoMobile from './diagram-info-mobile';
import { diagramData } from './diagramData';
import styles from './diagram-infos-container.module.scss';

function MobileInfosContainer() {
	const [showMore, setShowMore] = useState(false);
	const moreInfosContainerStyle = {
		transition: '300ms',
		maxHeight: showMore ? 1160 : 0
	};

	return (
		<div className={styles.MobileInfosContainer}>
			{diagramData &&
				diagramData.map(
					(data, index) =>
						index < 2 && <DiagramInfoMobile infos={data.infos} />
				)}
			<button
				aria-label="Show more information"
				onClick={() => setShowMore(!showMore)}
			>
				{showMore ? 'SHOW LESS' : 'SHOW MORE'}
			</button>
			<div
				style={moreInfosContainerStyle}
				className={styles.moreInfosContainer}
			>
				{diagramData &&
					diagramData.map(
						(data, index) =>
							index > 1 && (
								<DiagramInfoMobile infos={data.infos} />
							)
					)}
			</div>
		</div>
	);
}

export default MobileInfosContainer;
