import React from 'react';
import { IoCheckmarkDone } from 'react-icons/io5';
import { BiTimer } from 'react-icons/bi';
import { HiOutlineLightBulb, HiOutlineClipboardCheck } from 'react-icons/hi';

function RoadmapItem({ timelineListItem, styles }) {
	return (
		<li style={{ position: 'relative' }}>
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
		</li>
	);
}

export default RoadmapItem;
