import styles from "../styles/Categories.module.css";
import Link from "next/link";
import Image from "next/image";

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.catBoxRow}>
        <div className={styles.catTextBox}>
          <h3 className={styles.catTextTitle}>eDI Imaging</h3>
          <p className={styles.catText}>
            Nulla mattis aliquet lorem in fringilla. Proin mollis lorem ligula,
            id feugiat diam.
          </p>
        </div>

        <div className={styles.catBox}>
          <div className={styles.catLink} href="/">
            <p className={styles.catLinkText}>Sports Photography</p>
          </div>
          <Image
            className={styles.catImg}
            src="/img/sports.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.catBox}>
          <div className={styles.catLink} href="/">
            <p className={styles.catLinkText}>Pre-school Photography</p>
          </div>
          <Image
            className={styles.catImg}
            src="/img/preschool.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.catBox}>
          <div className={styles.catLink} href="/">
            <p className={styles.catLinkText}>Family Portraits</p>
          </div>
          <Image
            className={styles.catImg}
            src="/img/family.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.catBox}>
          <div className={styles.catLink} href="/">
            <p className={styles.catLinkText}>Senior Portraits</p>
          </div>
          <Image
            className={styles.catImg}
            src="/img/seniors.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className={styles.catBox}>
          <div className={styles.catLink} href="/">
            <p className={styles.catLinkText}>Mall Seasonal Photography</p>
          </div>
          <Image
            className={styles.catImg}
            src="/img/mall.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Categories;
