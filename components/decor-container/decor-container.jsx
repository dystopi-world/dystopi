import { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./decor-container.module.scss";

function DecorContainer({
	children,
	containerRef = null,
	contentRef = null,
	containerInView = false
}) {
	const [borderWidth, setBorderWidth] = useState(0);
	const [borderWHeight, setBorderWHeight] = useState(0);

	const decorBorderOuterStyle = {};

	return (
		<div className={styles.decorContainer} ref={containerRef}>
			<div className={styles.decorBorder}></div>
			{children}
		</div>
	);
}

export default DecorContainer;
