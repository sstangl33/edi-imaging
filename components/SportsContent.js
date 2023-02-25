import styles from "../styles/Content.module.css";

const SportsContent = () => {
  const sportsDay = [
    {
      img: "/img/sports/setup2.jpg",
      description: "Sports Day",
    },
    {
      img: "/img/sports/dsc_0620.jpg",
      description: "Sports Day",
    },
    {
      img: "/img/sports/team-shot2.jpg",
      description: "Sports Day",
    },
  ];

  const samples = [
    {
      img: "/img/sports/ss_03.jpg",
      description: "Sports Day",
      shadow: true,
    },
    {
      img: "/img/sports/bysa_dmm.jpg",
      description: "Sports Day",
      shadow: false,
    },
    {
      img: "/img/sports/mag-1.jpg",
      description: "Sports Day",
      shadow: false,
    },
    {
      img: "/img/sports/bysa-2017.jpg",
      description: "Sports Day",
      shadow: true,
    },
    {
      img: "/img/sports/ss_07.jpg",
      description: "Sports Day",
      shadow: false,
    },
    {
      img: "/img/sports/ctaa-tc-bb2016.jpg",
      description: "Sports Day",
      shadow: true,
    },
    {
      img: "/img/sports/ss_05a.jpg",
      description: "Sports Day",
      shadow: true,
    },
    {
      img: "/img/sports/big-group_kids810.jpg",
      description: "Sports Day",
      shadow: false,
    },
    {
      img: "/img/sports/ss_14.jpg",
      description: "Sports Day",
      shadow: true,
    },
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Sports Photography</h3>
      <h4 className={styles.h4}>Sports Leagues</h4>
      <p className={styles.text}>
        eDI Imaging is the premier Sports Photography Company in the area. In
        the past decade we have photographed thousands of area athletes. We
        supply services for numerous youth organizations and sports leagues in
        the tri-state area.
      </p>
      <p className={styles.text}>
        We are also very experienced in organizing and coordinating the Picture
        Day Schedule. Our “Photo Day System” runs extremely smoothly and
        efficiently, resulting in a pleasant photo experience for all the
        athletes, parents and league coordinators.
      </p>
      <p className={styles.text}>
        Our staff takes pride in offering quality customer service and 20 plus
        years of photography experience to the area’s leagues.
      </p>
      <div className={styles.row}>
        {sportsDay.map((sd, i) => (
          <div className={styles.imageWrapper} key={i}>
            <img className={styles.image} src={sd.img} alt={sd.description} />
          </div>
        ))}
      </div>

      <h4 className={styles.h4}>Our Products</h4>
      <p className={styles.text}>
        We take great pride in offering the best in both quality products and
        customer service.{" "}
      </p>

      <p className={styles.text}>
        We custom make products selectively for each sport or organization to
        give our products a more personal touch; such products include Designer
        Memory Mates, Trading Cards and Magazine Covers.
      </p>
      <p className={styles.text}>
        All our prices are very competitive and all orders are delivered to you
        within 3-4 weeks. We also guarantee all our work and products.
      </p>
      <p className={styles.text}>
        Here is a{" "}
        <a
          className={styles.link}
          href="/img/sports/eDI-Imaging-Sports-Order-Form-2023.pdf"
          target="_blank"
          alt="Sports Order Form"
        >
          Sports order form
        </a>{" "}
        that can be downloaded and printed.{" "}
      </p>
      <h4 className={styles.h4}>Book eDI Imaging</h4>
      <p className={styles.text}>
        Booking with EDI Imaging means your league or association is also
        eligible to receive free coaches team photos and digital files needed
        for programs or posters. We can also offer sponsor plaques and frames if
        required.
      </p>

      <div className={styles.row}>
        {samples.map((sample, i) => (
          <div className={styles.imageWrapper} key={i}>
            <img
              className={styles.shadow}
              src={sample.img}
              alt={sample.description}
              style={!sample.styles ? { boxShadow: "none" } : null}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsContent;
