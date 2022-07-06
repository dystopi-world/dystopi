import Link from 'next/link';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import Button from '../button/button';
import styles from './to-gallery.module.scss';

function ToGallery() {
  const router = useRouter();
  const [galleryRef, galleryInView] = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  const decorBorderStyle = {
    width: galleryInView ? 'calc(100% + 6px)' : 0,
    height: galleryInView ? 'calc(100% + 6px)' : 0,
  };

  const buttonZindex = {
    zIndex: 10,
  };

  const goToGallery = () => {
    router.push('/gallery');
  };
  return (
    <section ref={galleryRef} className={styles.ToGallery}>
      <article>
        <div className={styles.decorBorder} style={decorBorderStyle}></div>
        <div className={styles.decorBorder} style={decorBorderStyle}></div>
        <div className={styles.decorBorder} style={decorBorderStyle}></div>
        <div className={styles.decorBorder} style={decorBorderStyle}></div>
        <h2>GALLERY</h2>
        <Button onClick={goToGallery} style={buttonZindex}>
          CHECK OUR GALLERY
        </Button>
      </article>
    </section>
  );
}

export default ToGallery;
