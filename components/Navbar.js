import Image from "next/image";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import styles from "../styles/Navbar.module.css";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    if (window.innerWidth < 1200) {
      setIsOpen(!isOpen);
    }
  };

  const pages = [
    {
      name: "eDI IMAGING HOME",
      link: "/",
    },
    {
      name: "MALL SEASONAL PHOTOGRAPHY",
      link: "/mall",
    },
    {
      name: "SPORTS PHOTOGRAPHY",
      link: "/sports",
    },
    {
      name: "PRE-SCHOOL PHOTOGRAPHY",
      link: "/preschool",
    },
    {
      name: "FAMILY PORTRAITS",
      link: "/family",
    },
    {
      name: "SENIOR PORTRAITS",
      link: "/senior",
    },
    {
      name: "CONTACT eDI IMAGING",
      link: "/contact",
    },
  ];

  return (
    <div
      className={
        isOpen ? styles.container : [styles.container, styles.mobile].join(" ")
      }
    >
      <div className={styles.navWrapper}>
        <div className={styles.item}>
          <a href="./" alt="eDI Imaging">
            <div className={styles.logoWrapper}>
              <Image
                className={styles.logo}
                src="/img/edi-logo-2020.png"
                alt=""
                width="180px"
                height="56"
              />
            </div>
          </a>
        </div>

        {!isOpen ? (
          <CloseIcon onClick={toggleMenu} className={styles.menuIcon} />
        ) : (
          <MenuIcon onClick={toggleMenu} className={styles.menuIcon} />
        )}

        <div className={styles.mobileOverlay}></div>

        <div className={[styles.item, styles.nav].join(" ")}>
          <ul className={styles.navList}>
            {pages.map((page, i) => (
              <li className={styles.navListItem} key={i}>
                <a href={page.link}>{page.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
