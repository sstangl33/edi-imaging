import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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

        {!isOpen ? (
          <CloseIcon onClick={toggleMenu} className={styles.menuIcon} />
        ) : (
          <MenuIcon onClick={toggleMenu} className={styles.menuIcon} />
        )}

        <div
          className={
            isOpen
              ? [styles.item, styles.nav, styles.openNav].join(" ")
              : [styles.item, styles.nav, styles.closedNav].join(" ")
          }
        >
          <div className={styles.logoWrapper}>
            <Image
              className={styles.logo}
              src="/img/edi-logo-2020.png"
              alt=""
              width="180px"
              height="56"
            />
          </div>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>
              <a href="./mall">Mall Seasonal Photography</a>
            </li>
            <li className={styles.navListItem}>
              <a href="#">Sports Photography</a>
            </li>
            <li className={styles.navListItem}>
              <a href="#">Pre-School Photography</a>
            </li>
            <li className={styles.navListItem}>
              <a href="#">Families & Seniors</a>
            </li>
            <li className={styles.navListItem}>
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
