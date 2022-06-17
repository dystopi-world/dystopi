import React from "react";
import styles from "./tokenomics.module.scss";

function Diagram() {
  return (
    <div className={styles.Diagram}>
      <div className={styles.dashedCircle}>
        <div className={styles.content}>
          <h6>TOTAL SUPPLY</h6>
          <p>100.000.000 tokens</p>
        </div>
      </div>
    </div>
  );
}

export default Diagram;
