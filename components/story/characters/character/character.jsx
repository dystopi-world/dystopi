import styles from '../characters.module.scss';

function Character({ image, characterName, description }) {
	return (
		<article className={styles.Character}>
			<div className={styles.imageContainer}>
				<video
					autoPlay
					playsInline
					muted
					loop
					className={styles.characterImage}
				>
					<source src={image} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
			<h5>{characterName}</h5>
			<p>{description}</p>
		</article>
	);
}

export default Character;
