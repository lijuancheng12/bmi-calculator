import React, { useState } from "react";
import styles from "./Overlay.module.scss";

export const Overlay = () => {
  const [show, setShow] = useState(true);
  const closeButton = () => {
    setShow(false);
  };
  return (
    show && (
      <div className={styles.overLay}>
        <div className={styles.btn}>
          <a href="#" onClick={closeButton}>
            <span className={styles.left}>
              <span class={styles.circleLeft}></span>
              <span class={styles.circleRight}></span>
            </span>
            <span className={styles.right}>
              <span className={styles.circleLeft}></span>
              <span className={styles.circleRight}></span>
            </span>
          </a>
        </div>
        <div className={styles.text}>
          Internationella riktlinjer för kroppsvikt:
          <br /> undervikt – BMI under 18,5
          <br />
          normalvikt – BMI 18,5-24,9
          <br />
          övervikt – BMI 25-29,9
          <br />
          fetma – BMI över 30
        </div>
      </div>
    )
  );
};
