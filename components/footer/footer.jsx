import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <nav>
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
      </nav>
      <Link href="#home">
        <a className={styles.logo}>
          <Image src="/images/logo.svg" alt="Dystopi logo" layout="fill" />
        </a>
      </Link>
    </footer>
  );
}

export default Footer;
