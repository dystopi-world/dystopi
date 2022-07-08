import { useInView } from 'react-intersection-observer';
import styles from './decor-square.module.scss';

function DecorSquare() {
  const [squareRef, squareInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const squareStyle = {
    transition: '1500ms',
    transform: squareInView
      ? 'scale(1) rotate(135deg)'
      : 'scale(0) rotate(-135deg)',
    opacity: squareInView ? 1 : 0,
  };
  return (
    <div
      ref={squareRef}
      style={squareStyle}
      className={styles.DecorSquare}
    ></div>
  );
}

export default DecorSquare;
