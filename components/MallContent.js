import styles from "../styles/Content.module.css";
import Image from "next/image";

const MallContent = () => {
  const borders = [
    {
      img: "/img/mall/my-first.jpg",
      description: "Christmas border",
    },
    {
      img: "/img/mall/pet.jpg",
      description: "Christmas border",
    },
    {
      img: "/img/mall/santa2.jpg",
      description: "Christmas border",
    },
    {
      img: "/img/mall/easter1.jpg",
      description: "Easter border",
    },
    {
      img: "/img/mall/white-bunny.jpg",
      description: "Easter border",
    },
    {
      img: "/img/mall/easter2.jpg",
      description: "Easter border",
    },
  ];

  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Mall Seasonal Photography</h4>
      <p className={styles.text}>
        eDI Imaging is an event imaging company based in Columbiana, OH. It
        utilizes digital technology and on-site printing capabilities to capture
        seasonal portraits with both Santa and the Easter Bunny.
      </p>

      <p className={styles.text}>
        We are a small company that takes great pride in offering a quality
        product at a very competitive price, coupled with the benefit of
        photographing and printing digitally, we are able to spend more time
        capturing these precious moments and offering our customers a greater
        selection to choose from.
      </p>

      <p className={styles.text}>
        We also offer a range of attractive seasonal borders that we change up
        each season as well as a broad selection of frames, globes key-chains
        and seasonal accessories.
      </p>

      <div className={styles.row}>
        {borders.map((border, i) => (
          <div className={styles.imageWrapper}>
            <Image
              className={styles.image}
              src={border.img}
              alt={border.description}
              width="300px"
              height="420px"
            />
          </div>
        ))}
      </div>

      <hr className={styles.hr} />

      <h4 className={styles.h4}>Find eDI Imaging at the Mall</h4>
      <p className={styles.listTitle}>
        At present we operate in 5 different malls within 4 different states:
      </p>
      <ul>
        <li className={styles.list}>Eastwood Mall, Niles, OH</li>
        <li className={styles.list}>Ohio Valley Mall, St. Clairsville, OH</li>
        <li className={styles.list}>St Clairsville, OH</li>
        <li className={styles.list}>Millcreek Mall, Erie, PA</li>
        <li className={styles.list}>Huntington Mall, Barboursville, WV</li>
        <li className={styles.list}>
          Spotsylvania Towne Centre, Spotsylvania, VA
        </li>
      </ul>
      <br />
      <br />
      <h4 className={styles.h4}>Download Mall Photos</h4>
      <p className={styles.catText}>
        Please{" "}
        <a
          className={styles.link}
          href="http://ediimaging.phototouchinc.com/"
          alt="Download Holiday Photos"
          target="_blank"
        >
          Click here
        </a>{" "}
        if you are looking for your downloadable holiday pictures you purchased
        from us at one of the malls.
      </p>
    </div>
  );
};

export default MallContent;
