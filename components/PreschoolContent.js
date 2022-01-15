import styles from "../styles/Content.module.css";
import Image from "next/image";

const PreschoolContent = () => {
  const borders = [
    {
      img: "/img/preschool/10-15-2009_024.jpg",
      description: "Preschool Portrait",
    },
    {
      img: "/img/preschool/10-15-2009_056.jpg",
      description: "Preschool Portrait",
    },
    {
      img: "/img/preschool/10-15-2009_125.jpg",
      description: "Preschool Portrait",
    },
    {
      img: "/img/preschool/img_1945.jpg",
      description: "Preschool Portrait",
    },
    {
      img: "/img/preschool/lem1.jpg",
      description: "Preschool Portrait",
    },

    {
      img: "/img/preschool/img_1932.jpg",
      description: "Preschool Portrait",
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Pre-School Photography</h3>
      <p className={styles.text}>
        eDI Imaging takes great pride in its Pre-school photo services. We have
        been providing services to Pre-schools in the area since 2002.{" "}
      </p>

      <p className={styles.text}>
        We strive to bring studio quality portraits to the preschool classroom
        and with our LOOK-BEFORE-YOU-BUY system this makes it easier and more
        popular with parents and teachers alike.
      </p>

      <div className={styles.twoColWrap}>
        <div className={styles.col1}>
          <h4 className={styles.h4}>How it Works</h4>
          <p className={styles.text}>
            We arrive on picture day and photograph each student and then class.
            We print the proofs there at the school and have them ready for the
            child to take home with them that day.
          </p>
          <p className={styles.text}>
            Included with the proofs are instructions and an order form. The
            parents are instructed to return their order to the school by a due
            date. We will pick up the order forms and return the completed
            school photo order within 3 weeks.
          </p>
          <p className={styles.text}>
            {" "}
            We also provide a 5x7 class photo for each teacher along with a CD
            including a photo of each student and class to be used for your own
            school projects.
          </p>

          <h4 className={styles.h4}>Guaranteed Quality</h4>
          <p className={styles.text}>
            There is no paperwork needed for the teachers or parents on picture
            day making for a more relaxed and enjoyable experience. Parents will
            enjoy being able to select their favorite poses from the proofs.
            There is no obligation to buy and all purchases are 100% guaranteed.
          </p>

          <h4 className={styles.h4}>Pricing & Products</h4>
          <p className={styles.text}>
            We offer a wide selection of prints and packages as well as a range
            of products suitable as gifts for any time of year, such as Aluminum
            Ornaments, Silver Pendants and IPhone cases.
          </p>
          <p className={styles.text}>
            Here is a{" "}
            <a
              className={styles.link}
              href="/img/preschool/eDI-Imaging-Preschool-Order-Form-2020.pdf"
              target="_blank"
              alt="Pre-School Order Form"
            >
              Pre-School order form
            </a>{" "}
            that can be downloaded and printed.{" "}
          </p>
        </div>
        <div className={styles.col2}>
          <img
            className={styles.image}
            src="/img/preschool/preschool-proofs.jpg"
            alt=""
          />
        </div>
      </div>

      <div className={styles.row}>
        {borders.map((border, i) => (
          <div className={styles.imageWrapper} key={i}>
            <Image
              className={styles.image}
              src={border.img}
              alt={border.description}
              width="400px"
              height="560px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreschoolContent;
