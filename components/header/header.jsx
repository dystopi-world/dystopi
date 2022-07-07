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

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <header className={styles.Header}>
      {/*<div className={styles.imageContainer}>
        <Image src="/images/logo.svg" alt="Dystopi logo" layout="fill" />
      </div> */}
      <video src="/animations/logo-anim.m4v" muted ref={videoEl}></video>
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
                TOKEMONICS
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
      <Button onClick={() => setIsVisible(true)}>JOIN PRESALE</Button>
    </header>
  );
}

export default Header;
