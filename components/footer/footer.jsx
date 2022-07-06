import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
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
    triggerOnce: true,
  });
  const socialStyle = (delay) => ({
    transition: '900ms',
    transitionDelay: delay,
    position: 'relative',
    top: socialsInView ? 0 : '2.5rem',
    opacity: socialsInView ? 1 : 0,
  });

  const router = useRouter();
  const handleClick = (event, url) => {
    event.preventDefault();
    router.push(url);
  };

  return (
    <footer className={styles.Footer}>
      <nav>
        <div>
          <div className={styles.separatorDot}></div>
          <Link href="#home">
            <a onClick={(event) => handleClick(event, '/#home')}>HOME</a>
          </Link>
          <Link href="#story">
            <a onClick={(event) => handleClick(event, '/#story')}>STORY</a>
          </Link>
          <Link href="#game-mechanism">
            <a onClick={(event) => handleClick(event, '/#game-mechanism')}>
              GAME MECHANISM
            </a>
          </Link>
          <Link href="#nfts">
            <a onClick={(event) => handleClick(event, '/#nfts')}>NFTS</a>
          </Link>
          <Link href="#tokenomics">
            <a onClick={(event) => handleClick(event, '/#tokenomics')}>
              TOKENOMICS
            </a>
          </Link>
          <Link href="#whitepaper">
            <a onClick={(event) => handleClick(event, '/#whitepaper')}>
              WHITEPAPER
            </a>
          </Link>
          <Link href="/gallery">
            <a>GALLERY</a>
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
        <a
          className={styles.logo}
          onClick={(event) => handleClick(event, '/#home')}
        >
          <Image src="/images/logo.svg" alt="Dystopi logo" layout="fill" />
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
