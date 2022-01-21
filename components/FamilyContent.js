import styles from "../styles/Content.module.css";
import Image from "next/image";

const FamilyContent = () => {
  const families = [
    {
      img: "/img/family/bdw_4117.jpg",
      description: "Family Portrait",
    },
    {
      img: "/img/family/bdw_6845.jpg",
      description: "Family Portrait",
    },
    {
      img: "/img/family/bdw_9049.jpg",
      description: "Family Portrait",
    },
    {
      img: "/img/family/bdw_8176_812.jpg",
      description: "Family Portrait",
    },
    {
      img: "/img/family/img_0343.jpg",
      description: "Family Portrait",
    },
    {
      img: "/img/family/img_0322.jpg",
      description: "Family Portrait",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Family Portraits</h3>
      <div className={styles.twoColWrap}>
        <div className={styles.col1}>
          <h4 className={styles.h4}>
            Sitting Fee - $75.00
            <br />
            <small className={styles.small}>1-2 Hour Session</small>
          </h4>
          <p className={styles.text}>
            Once your Family Portrait session is complete your portraits will be
            made available to you via your own private web gallery to be viewed
            at your leisure.
          </p>
          <h4 className={styles.h4}>
            Digital Only Package - $150.00
            <br />
            <small className={styles.small}>1-2 Hour Session</small>
          </h4>
          <p className={styles.text}>
            Copyright release. 10 High resolution digital images.
          </p>

          <h4 className={styles.h4}>Family Portrait Pricing</h4>
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
            src="/img/family/bdw_9074.jpg"
            alt="Family Portrait"
          />
        </div>
      </div>

      <div className={styles.row}>
        {families.map((family, i) => (
          <div className={styles.imageWrapper} key={i}>
            <Image
              className={styles.image}
              src={family.img}
              alt={family.description}
              width="300px"
              height="450px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyContent;
