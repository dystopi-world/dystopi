import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import {
  FaDiscord,
  FaFacebook,
  FaTelegramPlane,
  FaTwitter,
} from 'react-icons/fa';
import styles from './footer.module.scss';

function Footer() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const [socialsRef, socialsInView] = useInView({
    threshold: 0.4,
    // triggerOnce: true
  });
  const socialStyle = (delay) => ({
    transition: '900ms',
    transitionDelay: delay,
    position: 'relative',
    top: socialsInView ? 0 : '2.5rem',
    opacity: socialsInView ? 1 : 0,
  });

  return (
    <footer className={styles.Footer}>
      <nav>
        <div>
          <Link href="!#">
            <a>FAQ</a>
          </Link>
          <Link href="#whitepaper">
            <a>WHITEPAPER</a>
          </Link>
          <Link href="!#">
            <a>PRIVACY POLICY</a>
          </Link>
          <Link href="!#">
            <a>TERMS OF USE</a>
          </Link>
        </div>
        <div>
          <div className={styles.separatorDot}></div>
          <Link href="#home">
            <a>HOME</a>
          </Link>
          <Link href="#story">
            <a>STORY</a>
          </Link>
          <Link href="#game-mechanism">
            <a>GAME MECHANISM</a>
          </Link>
          <Link href="#nfts">
            <a>NFTS</a>
          </Link>
          <Link href="#tokenomics">
            <a>TOKENOMICS</a>
          </Link>
          <Link href="#whitepaper">
            <a>WHITEPAPER</a>
          </Link>
        </div>
      </nav>
      {isMobile && (
        <div ref={socialsRef} className={styles.mobileSocials}>
          <Link href="#">
            <a style={socialStyle(0)}>
              <FaDiscord />
            </a>
          </Link>
          <Link href="#">
            <a style={socialStyle('200ms')}>
              <FaFacebook />
            </a>
          </Link>
          <Link href="#">
            <a style={socialStyle('400ms')}>
              <FaTelegramPlane />
            </a>
          </Link>
          <Link href="#">
            <a style={socialStyle('600ms')}>
              <FaTwitter />
            </a>
          </Link>
        </div>
      )}
      <Link href="#home">
        <a className={styles.logo}>
          <Image src="/images/logo.svg" alt="Dystopi logo" layout="fill" />
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
