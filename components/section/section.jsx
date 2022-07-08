import { useInView } from 'react-intersection-observer';
import styles from './section.module.scss';

function Section({ name, intro, children }) {
  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [subTitleRef, subTitleInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  const titleStyle = {
    transition: '600ms',
    position: 'relative',
    top: titleInView ? 0 : '3rem',
    opacity: titleInView ? 1 : 0,
  };
  const subTitleStyle = {
    transition: '600ms',
    position: 'relative',
    top: subTitleInView ? 0 : '3rem',
    opacity: subTitleInView ? 1 : 0,
  };
  return (
    <section className={styles.Section} id="nfts">
      <h2 ref={titleRef} style={titleStyle}>
        {name}
      </h2>
      <p ref={subTitleRef} style={subTitleStyle}>
        {intro}
      </p>
      {children}
    </section>
  );
}

export default Section;
