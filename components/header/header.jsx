import { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../button/button';
import PresaleContext from '../../contexts/presale-context';
import styles from './header.module.scss';

function Header() {
  const { setIsVisible } = useContext(PresaleContext);
  return (
    <header className={styles.Header}>
      <div className={styles.imageContainer}>
        <Image src="/images/logo.svg" alt="Dystopi logo" layout="fill" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#story">STORY</a>
          </li>
          <li>
            <a href="#game-mechanism">GAME MECHANISM</a>
          </li>
          <li>
            <a href="#nfts">NFT</a>
          </li>
          <li>
            <a href="#tokenomics">TOKEMONICS</a>
          </li>
          <li>
            <a href="#whitepaper">WHITEPAPER</a>
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
