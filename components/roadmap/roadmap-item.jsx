import React from "react";
import { useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import { IoCheckmarkDone } from "react-icons/io5";
import { BiCalendarExclamation } from "react-icons/bi";
import Tooltip from "../tooltip/tooltip";

function RoadmapItem({ timelineListItem, styles }) {
	const [showTooltip, setShowTooltip] = useState(false);
	const [willClose, setWillClose] = useState(false);

	const onMouseLeave = () => {
		setShowTooltip(false);
		setWillClose(false);
	};

	return (
		<li
			style={{ position: "relative" }}
			onMouseEnter={() => setShowTooltip(true)}
			onMouseLeave={onMouseLeave}
		>
			{timelineListItem.progressState === "completed" && (
				<IoCheckmarkDone color="#00e676" className={styles.testTick} />
			)}
			{timelineListItem.progressState === "in_progress" && (
				<BsClockHistory color="#ffca28" />
			)}
			{timelineListItem.progressState === "will_be_done" && (
				<BiCalendarExclamation color="#ef5350" />
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
