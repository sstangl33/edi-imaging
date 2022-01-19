import styles from "../styles/Content.module.css";
import Image from "next/image";

const SeniorContent = () => {
  const portraits = [
    {
      img: "/img/senior/bdw_4920gg.jpg",
      description: "Senior Portrait",
    },
    {
      img: "/img/senior/img_4607.jpg",
      description: "Senior Portrait",
    },
    {
      img: "/img/senior/bdw_6943.jpg",
      description: "Senior Portrait",
    },
    {
      img: "/img/senior/bdw_7148.jpg",
      description: "Senior Portrait",
    },
    {
      img: "/img/senior/bdw_0200.jpg",
      description: "Senior Portrait",
    },
    {
      img: "/img/senior/bdw_6788.jpg",
      description: "Senior Portrait",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Senior Portraits</h3>
      <div className={styles.twoColWrap}>
        <div className={styles.col1}>
          <h4 className={styles.h4}>
            Sitting Fee - $75.00
            <br />
            <small className={styles.small}>1-2 Hour Session / 2 Outfits</small>
          </h4>
          <p className={styles.text}>
            Once your Senior Portrait session is complete your portraits will be
            made available to you via your own private web gallery, to be viewed
            at your leisure.
          </p>

          <h4 className={styles.h4}>
            Digital Only Package - $150
            <br />
            <small className={styles.small}>1-2 Hour Session / 2 Outfits</small>
          </h4>
          <p className={styles.text}>
            Copyright release. 10 High resolution digital images.
          </p>

          <h4 className={styles.h4}>Senior Portrait Pricing.</h4>
          <p className={styles.text}>
            All selected pictures are retouched, color and exposure corrected
            before printing. All pictures selected for prints will be made
            available digitally along with a copyright release for personal use.
            Portraits are priced to allow you to create your own package to suit
            your own needs.
          </p>
          <ul className={styles.noBulletList}>
            <li className={styles.list}>
              <strong>16x20 - $125 (Mounted)</strong>
            </li>
            <li className={styles.list}>
              <strong>11x14 - $75 (Mounted)</strong>
            </li>
            <li className={styles.list}>
              <strong>1 8x10 - $25.00</strong>
            </li>
            <li className={styles.list}>
              <strong>2 5x7s - $25.00</strong>
            </li>
            <li className={styles.list}>
              <strong>4 4x5s - $25.00</strong>
            </li>
            <li className={styles.list}>
              <strong>8 Wallets - $25.00</strong>
            </li>
            <li className={styles.list}>
              <strong>16 Wallets - $40.00</strong>
            </li>
            <li className={styles.list}>
              <strong>24 Wallets - $55.00</strong>
            </li>
            <li className={styles.list}>
              <strong>1 5x7 - $15.00</strong>
            </li>
            <li className={styles.list}>
              <strong>1 4x6 - $12.00</strong>
            </li>
          </ul>
        </div>
        <div className={styles.col2}>
          <img
            className={styles.image}
            src="/img/senior/img_4424.jpg"
            alt="Senior Portrait"
          />
        </div>
      </div>

      <div className={styles.row}>
        {portraits.map((portrait, i) => (
          <div className={styles.imageWrapper} key={i}>
            <Image
              className={styles.image}
              src={portrait.img}
              alt={portrait.description}
              width="300px"
              height="479px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeniorContent;
