import Image from "next/image";
import styles from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <p className={styles.copyright}>
          Copyright © 2021 eDI Imaging - All Rights Reserved.
        </p>
        <div className={styles.item}>
          <div className={styles.logoWrapper}>
            <Image
              src="/img/edi-logo-2020-gray.png"
              alt=""
              width="100px"
              height="38"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
