import { useState } from "react";
import styles from "./gallery-cards.module.scss";

function GalleryCards() {
	const [items, setItems] = useState([1, 2, 3]);
	const [centralItemIndex, setCentralItemIndex] = useState(
		Math.floor(items.length / 2) + 1
	);
	return (
		<section className={styles.galleryCards}>
			{items.map((item, index) => (
				<div key={index} className={styles.galleryCard}>
					<h1>{item}</h1>
				</div>
			))}
		</section>
	);
}

export default GalleryCards;
