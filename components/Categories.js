import styles from "../styles/Categories.module.css";
import Image from "next/image";

const Categories = () => {
  const links = [
    {
      name: "MALL SEASONAL PHOTOGRAPHY",
      link: "/mall",
      img: "/img/mall.jpg",
    },
    {
      name: "SPORTS PHOTOGRAPHY",
      link: "/sports",
      img: "/img/sports.jpg",
    },
    {
      name: "PRE-SCHOOL PHOTOGRAPHY",
      link: "/preschool",
      img: "/img/preschool.jpg",
    },
    {
      name: "FAMILY PORTRAITS",
      link: "/family",
      img: "/img/family.jpg",
    },
    {
      name: "SENIOR PORTRAITS",
      link: "/senior",
      img: "/img/senior.jpg",
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.catBoxRow}>
        <div className={styles.catTextBox}>
          <h3 className={styles.catTextTitle}>eDI Imaging</h3>
          <p className={styles.catText}>
            Creating memories and smiles for more than 20 years.
          </p>
        </div>
        {links.map((link, i) => (
          <div className={styles.catBox} key={i}>
            <a className={styles.catLink} href={link.link}>
              <p className={styles.catLinkText}>{link.name}</p>
            </a>
            <Image
              className={styles.catImg}
              src={link.img}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
