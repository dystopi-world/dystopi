import { useContext, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/button';
import PresaleContext from '../../contexts/presale-context';
import styles from './header.module.scss';

function Header() {
  const { setIsVisible } = useContext(PresaleContext);
  const router = useRouter();
  const handleClick = (event, url) => {
    event.preventDefault();
    router.push(url);
  };

  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error);
      });
  };
  const attemptPlayRepeat = () => {
    videoEl &&
      videoEl.current &&
      setInterval(() => {
        videoEl.current.play().catch((error) => {
          console.error('Error attempting to play', error);
        });
      }, 45000);
  };

  useEffect(() => {
    setTimeout(() => {
      attemptPlay();
      attemptPlayRepeat();
    }, 1500);
  }, []);

  const presaleButtonStyle = {
    fontSize: '12px',
    background: '#201d24bb',
    transform: 'scale(0.9)',
  };
  return (
    <header className={styles.Header}>
      {/* <div
        className={styles.imageContainer}
        onClick={(event) => handleClick(event, '/')}
      >
        <Image
          src="/images/logo.png"
          style={{ transform: 'scale(0.7)' }}
          alt="Dystopi logo"
          layout="fill"
          objectFit="contain"
        />
  </div> */}
      <Link href="/#home">
        <a onClick={(event) => handleClick(event, '/#home')}>
          <video src="/animations/logo2-anim.mp4" muted ref={videoEl}></video>
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/#home">
              <a onClick={(event) => handleClick(event, '/#home')}>HOME</a>
            </Link>
          </li>
          <li>
            <Link href="/#story">
              <a onClick={(event) => handleClick(event, '/#story')}>STORY</a>
            </Link>
          </li>
          <li>
            <Link href="/#game-mechanism">
              <a onClick={(event) => handleClick(event, '/#game-mechanism')}>
                GAME MECHANISM
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#nfts">
              <a onClick={(event) => handleClick(event, '/#nfts')}>NFT</a>
            </Link>
          </li>
          <li>
            <Link href="/#tokenomics">
              <a onClick={(event) => handleClick(event, '/#tokenomics')}>
                TOKENOMICS
              </a>
            </Link>
          </li>
          <li>
            <Link href="/#whitepaper">
              <a onClick={(event) => handleClick(event, '/#whitepaper')}>
                WHITEPAPER
              </a>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <a>GALLERY</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Button onClick={() => setIsVisible(true)} style={presaleButtonStyle}>
        JOIN PRESALE
      </Button>
    </header>
  );
}

export default Header;
