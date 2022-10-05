import React from "react";
import styles from "./gallery-tabs.module.scss";

function GalleryTabs({ actualTab, changeActualTab, indicatorLineStyle }) {
	return (
		<section className={styles.galleryNavigation}>
			<button
				aria-label="show images"
				className={styles.galleryImagesButton}
				disabled={actualTab === "images"}
				onClick={() => changeActualTab("images")}
			>
				IMAGES
			</button>
			<button
				aria-label="show videos"
				className={styles.galleryVideosButton}
				disabled={actualTab === "videos"}
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
