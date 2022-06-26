import { useInView } from 'react-intersection-observer';
import InfoCard from './info-card';
import styles from './info-cards.module.scss';

function InfoCards() {
  const [firstCardRef, firstCardInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [secondCardRef, secondCardInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  return (
    <div className={styles.InfoCards}>
      <InfoCard
        cardRef={firstCardRef}
        cardInView={firstCardInView}
        title={'SHORT STORY'}
        paragraph_1={
          "In the 314th year of the New Age an alien symbiotic species is coming to Earth: the mighty plant-like giants, the friendly Meer, have travelled across the galaxy to warn man of the arrival of the ruthless conquerors: Gata'aga! Perceiving a greater danger than ever before, human leaders put aside their pride and visited the HOME, built on the other side of the planet to ask for the help of AI."
        }
        paragraph_2={
          'At the noise of the preparations for war, the Atlanteans, who have long been considered a legend, are finally emerging from their 12,000-year-old voluntary exile. The alliance of the four races is ready: join them and take part in the war for Dyseum tokens'
        }
      />
      <InfoCard
        cardRef={secondCardRef}
        cardInView={secondCardInView}
        title={'SHORT STORY'}
        paragraph_1={
          "In the 314th year of the New Age an alien symbiotic species is coming to Earth: the mighty plant-like giants, the friendly Meer, have travelled across the galaxy to warn man of the arrival of the ruthless conquerors: Gata'aga! Perceiving a greater danger than ever before, human leaders put aside their pride and visited the HOME, built on the other side of the planet to ask for the help of AI."
        }
        paragraph_2={
          'At the noise of the preparations for war, the Atlanteans, who have long been considered a legend, are finally emerging from their 12,000-year-old voluntary exile. The alliance of the four races is ready: join them and take part in the war for Dyseum tokens'
        }
      />
    </div>
  );
}

export default InfoCards;
