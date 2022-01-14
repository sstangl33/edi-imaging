import styles from "../styles/HeroBanner.module.css";
import { useState } from "react";

const HeroBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.bannerImg}
          src="/img/senior/hero-senior.jpg"
          alt=""
        />
        {/* <div className={styles.bannerTextWrapper}>
          <div className={styles.bannerTextBox}>
            <h2 className={styles.bannerTitle}>eDI Imaging</h2>
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default HeroBanner;
