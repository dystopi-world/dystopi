import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Button from '../button/button';
import styles from './newsletter.module.scss';

function Newsletter() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const [titleRef, titleInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const [subTitleRef, subTitleInView] = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });
  const [formRef, formInView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const titleStyle = {
    top: titleInView ? 0 : '3rem',
    opacity: titleInView ? 1 : 0,
  };
  const subTitleStyle = {
    top: subTitleInView ? 0 : '3rem',
    opacity: subTitleInView ? 1 : 0,
  };
  const formStyle = {
    top: subTitleInView ? 0 : '3rem',
    opacity: subTitleInView ? 1 : 0,
  };

  return (
    <section className={styles.Newsletter}>
      <h3 ref={titleRef} style={titleStyle} className={styles.title}>
        DON&apos;T MISS THE NEWS
      </h3>
      <p ref={subTitleRef} style={subTitleStyle} className={styles.sectionInfo}>
        Subscribe to our newsletter and we keep you up-to-date about world of
        Dystopi
      </p>
      <form ref={formRef} style={formStyle} className={styles.form}>
        <input type="text" placeholder="john.doe@gmail.com" />
        <Button style={{ width: isMobile ? '100%' : 'auto' }}>SIGN UP</Button>
      </form>
    </section>
  );
}

export default Newsletter;
