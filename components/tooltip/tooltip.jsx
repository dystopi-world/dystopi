import styles from "./tooltip.module.scss";

function Tooltip({
	showTooltip,
	text = "Lorem ipse dothraki lovon csuda drogo hip hop bim bambum, dobo gap ata nye rítaló de nagyon. Repü lakőki tudj aholá llmeg e dothraki lovon csuda drogo hip hop bim ba",
	top = "unset",
	right = "unset",
	bottom = "unset",
	left = "unset",
	willClose
}) {
	const tooltipStyle = {
		top,
		right,
		bottom,
		left
		// transform: willClose && showTooltip ? "scale(0)" : "scale(1)",
		// opacity: showTooltip ? 1 : 0,
		// transition: "250ms"
	};

	return (
		showTooltip && (
			<section
				// className={`${styles.tooltip} ${
				// 	willClose
				// 		? styles.tooltipAnimationClose
				// 		: styles.tooltipAnimationOpen
				// }`}
				className={`${styles.tooltip} ${styles.tooltipAnimationOpen}`}
				style={tooltipStyle}
			>
				<p>{text}</p>
			</section>
		)
	);
}

export default Tooltip;
