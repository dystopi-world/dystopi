import React from "react";
import Button from "../button/button";
import styles from "./newsletter.module.scss";

function Newsletter() {
  return (
    <section className={styles.Newsletter}>
      <h3>DON&apos;T MISS THE NEWS</h3>
      <p>
        Subscribe to our newsletter and we keep you up-to-date about world of
        Dystopi
      </p>
      <form>
        <input type="text" placeholder="john.doe@gmail.com" />
        <Button>SIGN UP</Button>
      </form>
    </section>
  );
}

export default Newsletter;
