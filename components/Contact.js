import styles from "../styles/Content.module.css";

const MallContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.twoColWrap} style={{ marginTop: 2 + "rem" }}>
        <div className={styles.col1}>
          <h2 className={styles.title} style={{ textAlign: "left" }}>
            Contact eDI Imaging
          </h2>
          <h4 className={styles.h4}>Address</h4>
          <address className={styles.text}>
            EDI Imaging 1254 <br />
            Beaver Circle <br />
            Columbiana, OH 44408
          </address>

          <h4 className={styles.h4}>Telephone</h4>
          <p className={styles.text}>
            <a className={styles.link} href="tel:+33085386441">
              330.853.8644
            </a>
          </p>

          <h4 className={styles.h4}>Email</h4>
          <p className={styles.text}>
            <a
              className={styles.link}
              href="mailto:info@ediimaging.com?subject=eDI Imaging Info Request"
            >
              info@ediimaging.com
            </a>
          </p>
        </div>
        <div className={styles.col2}>
          <img
            className={styles.imageH400}
            src="/img/family/bdw_4100.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MallContent;