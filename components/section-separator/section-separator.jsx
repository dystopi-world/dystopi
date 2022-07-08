import { useInView } from 'react-intersection-observer';
import DecorSquare from '../decor-square/decor-square';
import styles from './section-separator.module.scss';

function SectionSeparator() {
  const [separatorRef, separatorInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const separatorStyle = {
    transition: '2500ms',
    transform: separatorInView
      ? 'translateY(-0.75rem) scaleX(1)'
      : 'translateY(-0.75rem) scaleX(0)',
    opacity: separatorInView ? 1 : 0,
  };

  return (
    <div className={styles.SectionSeparator}>
      <div
        ref={separatorRef}
        style={separatorStyle}
        className={styles.decorLine}
      ></div>
      <DecorSquare />
      <div style={separatorStyle} className={styles.decorLine}></div>
    </div>
  );
}

export default SectionSeparator;
