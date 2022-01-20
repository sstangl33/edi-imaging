import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.item}>
          <div className={styles.addressWrapper}>
            <h3>Contact</h3>
            <address>
              eDI Imaging
              <br />
              1254 Beaver Circle
              <br />
              Columbiana, OH 44408
            </address>
            <a href="mailto:info@ediimaging.com?subject=eDI Imaging Info Request">
              info@ediimaging.com
            </a>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.logoWrapper}>
            <Image
              src="/img/edi-logo-2020-gray.png"
              alt=""
              width="120px"
              height="46"
            />
          </div>
        </div>

        <div className={styles.item}>
          <p className={styles.copyright}>
            Copyright © 2022 <br /> eDI Imaging <br /> All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
