import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <div className={styles.item}>
          <div className={styles.logoWrapper}>
            <Image
              className={styles.logo}
              src="/img/edi-logo-2020.png"
              alt=""
              width="180px"
              height="56"
            />
          </div>
        </div>
        <div className={styles.item}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a href="#">Mall Seasonal Photography</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Sports Photography</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Pre-School Photography</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">Families & Seniors</a>
            </li>
            <li className={styles.listItem}>
              <a href="#">
                Contact <br />
                EDI Imaging
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
