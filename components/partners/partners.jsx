import styles from './partners.module.scss';

function Partners() {
	const partners = [
		{ name: 'p1', img: null },
		{ name: 'p2', img: null },
		{ name: 'p3', img: null },
		{ name: 'p4', img: null },
		{ name: 'p5', img: null },
		{ name: 'p6', img: null }
	];
	return (
		<section className={styles.partners}>
			<h2>OUR PARTNERS & SPONSORED BY</h2>
			<div className={styles.partnersWrapper}>
				{partners.map((partner) => (
					<div className={styles.partner} key={partner.name}>
						<p>{partner.name}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Partners;
