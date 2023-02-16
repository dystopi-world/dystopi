import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styles from './info-cards.module.scss';

function InfoCards() {
	const [firstCardRef, firstCardInView] = useInView({
		threshold: 0.4,
		triggerOnce: true
	});
	const [secondCardRef, secondCardInView] = useInView({
		threshold: 0.4,
		triggerOnce: true
	});
	return (
		<div className={styles.InfoCards} id="story">
			<div className={styles.imageContainer}>
				<Image
					src="/images/landing2.png"
					layout="fill"
					objectFit="cover"
				/>
			</div>

			<div className={styles.infoBoxContainer}>
				<div className={styles.infoBox}>
					<h3>SHORT STORY</h3>
					<p>
						Get ready for an epic adventure in a world beyond our
						own! In the 314th year of the New Age, an alien
						symbiotic species arrives on Earth with a warning. The
						friendly Meer, with their towering plant-like
						appearance, have traveled across the galaxy to warn
						mankind of the imminent arrival of the ruthless
						conquerors, the Gata&apos;aga. With the fate of the
						planet hanging in the balance, human leaders seek help
						from the central city of AI robots, HOME, and find
						unexpected allies in the legendary Atlanteans, who have
						emerged from their 12,000-year-old voluntary exile. Join
						the alliance of four races as they prepare for the war
						for Dyseum tokens, in a quest for survival, power, and
						glory!
					</p>
					<p>
						Hearing of the preparations for war, the Atlanteans, who
						have long been considered a long extinct legend, are
						finally emerging from their 12,000-year-old voluntary
						exile. The alliance of the four races is ready: join
						them and take part in the war for Dyseum tokens!
					</p>
				</div>

				<div className={styles.infoBox}>
					<h3>DYSEUM</h3>
					<p>
						Get ready to be rewarded for your bravery in the war for
						Dyseum tokens! Dyseum is a currency that is accepted by
						all four members of the alliance, making it the perfect
						tool for financing the war, producing weapons, and
						distributing rewards. Made of a special alloy, there is
						a limited supply of Dyseum, with only 1,000,000,000
						tokens in existence. 60% of these tokens have been set
						aside to finance the costs of the war, and if you join
						the fight, you can benefit from the prize pool.
					</p>
					<p>
						The alliance has divided the war budget into two-year
						periods, with 410,958 Dyseum tokens being distributed
						daily to the bravest warriors in the first two years.
						Each subsequent two-year period, the daily reward will
						be halved, so don&apos;t miss your chance to be a part
						of this exciting adventure and earn your share of the
						Dyseum tokens!
					</p>
				</div>
			</div>
		</div>
	);
}

export default InfoCards;
