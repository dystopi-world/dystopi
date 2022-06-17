import styles from "./header.module.scss";
import Image from "next/image";
import Button from "../button/button";

function Header() {
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
            <a href="#nfts">NFTS</a>
          </li>
          <li>
            <a href="#tokenomics">TOKEMONICS</a>
          </li>
          <li>
            <a href="#whitepaper">WHITEPAPER</a>
          </li>
        </ul>
      </nav>
      <Button>JOIN PRESALE</Button>
    </header>
  );
}

export default Header;
