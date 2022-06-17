import Image from "next/image";
import Link from "next/link";
import SectionSeparator from "../section-separator/section-separator";
import styles from "./whitepaper.module.scss";

function Whitepaper() {
  return (
    <section className={styles.Whitepaper} id="whitepaper">
      <div className={styles.whitepaperCard}>
        <Image
          src={"/images/game-mechanism.png"}
          layout="fill"
          alt="Dystopi city"
          objectFit="cover"
        />
        <div className={styles.decorContainer}>
          <SectionSeparator />
        </div>
        <div className={styles.contentContainer}>
          <h2>WHITEPAPER</h2>
          <p>Check our Whitepaper to learn more about project Dystopi!</p>
          <Link href="#">
            <a>CHECK WHITEPAPER</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Whitepaper;
