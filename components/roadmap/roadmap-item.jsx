import React from 'react';
import { useState } from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';
import { BiTimer } from 'react-icons/bi';
import { HiOutlineLightBulb, HiOutlineClipboardCheck } from 'react-icons/hi';

function RoadmapItem({ timelineListItem, styles }) {
	const [showTooltip, setShowTooltip] = useState(false);
	const [willClose, setWillClose] = useState(false);

	const onMouseLeave = () => {
		setShowTooltip(false);
		setWillClose(false);
	};

	return (
		<li
			style={{ position: 'relative' }}
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={onMouseLeave}
		>
			{timelineListItem.progressState === 'finished' && (
				<IoCheckmarkDone color="#167D4E" className={styles.testTick} />
			)}
			{timelineListItem.progressState === 'completed' && (
				<IoCheckmarkDone color="#167D4E" className={styles.testTick} />
			)}
			{timelineListItem.progressState === 'in_progress' && (
				<BiTimer color="#B69E4B" />
			)}
			{timelineListItem.progressState === 'testing' && (
				<HiOutlineClipboardCheck color="#450DA7" />
			)}
			{timelineListItem.progressState === 'planned' && (
				<HiOutlineLightBulb color="#893982" />
			)}
			{timelineListItem.progressState === 'will_be_done' && (
				<HiOutlineLightBulb color="#893982" />
			)}
			{timelineListItem.text}
			{/* <Tooltip
				showTooltip={showTooltip}
				bottom="101%"
				left="1.5rem"
				willClose={willClose}
			/> */}
		</li>
	);
}

export default RoadmapItem;
