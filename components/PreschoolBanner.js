import styles from "../styles/HeroBanner.module.css";

const PreschoolBanner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.bannerImg}
          src="/img/preschool/hero-preschool.jpg"
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
export default PreschoolBanner;
