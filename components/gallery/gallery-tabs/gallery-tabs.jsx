import React from "react";
import styles from "./gallery-tabs.module.scss";

function GalleryTabs({ indicatorLineStyle, changeActualTab }) {
	return (
		<section className={styles.galleryNavigation}>
			<button
				className={styles.galleryImagesButton}
				onClick={() => changeActualTab("images")}
			>
				IMAGES
			</button>
			<button
				className={styles.galleryVideosButton}
				onClick={() => changeActualTab("videos")}
			>
				VIDEOS
			</button>
			<div
				className={styles.indicatorLine}
				style={indicatorLineStyle}
			></div>
		</section>
	);
}

export default GalleryTabs;
