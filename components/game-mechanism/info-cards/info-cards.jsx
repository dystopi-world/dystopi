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
        image="/images/game-mechanism/blindguy.png"
        layout="fill"
        title={'SHORT STORY'}
        paragraph_1={
          'In the 314th year of the New Age an alien symbiotic species is coming to Earth: the mighty plant-like giants, the friendly Meer have travelled across the galaxy to warn man of the arrival of ruthless conquerors: the Gata’aga! Perceiving a greater danger than ever before, human leaders put aside their pride and visited HOME, the central city of AI robots on the other side of the planet to ask for help against the incoming danger.'
        }
        paragraph_2={
          'At the noise of the preparations for war, the Atlanteans, who have long been considered a legend, are finally emerging from their 12,000-year-old voluntary exile. The alliance of the four races is ready: join them and take part in the war for Dyseum tokens!'
        }
      />
      <InfoCard
        cardRef={secondCardRef}
        cardInView={secondCardInView}
        image="/images/game-mechanism/token.png"
        layout="fixed"
        title={'DYSEUM'}
        paragraph_1={
          'Dyseum is a currency mutually accepted by all four members of the alliance. Financing of the war, production and distribution of weapons and equipment, the distribution of reward happen in this currency. Dyseum is made up of a special alloy of which the total quantity existing has been used to create an unforgeable and non-replicable value. A total of 300,000,000 was made, 60% of which was deposited to finance the costs of the war. If you take part in the fight, you can also benefit from the prize!'
        }
        paragraph_2={
          'The alliance divided the war budget into pre-determined periods of two years. In the first two years, 123 287 Dyseum will be distributed every day among the brave warriors. In the next two-year period, the daily reward is exactly half, similarly, in the following two-year period halving happens and so on.'
        }
      />
    </div>
  );
}

export default InfoCards;
