import styles from "../styles/HolidayBanner.module.css";
import Image from 'next/image'

const HolidayBanner = () => {
  const holidayPhotos = [
    {img: "/img/mall/xmas-08_12.jpg"},
    {img: "/img/mall/04-01-2012_966_1.jpg"},
    {img: "/img/mall/xmas-09_12.jpg"},
  ]

  return (
    <a
      className={styles.holidayBanner}
      href="http://ediimaging.phototouchinc.com/"
      alt="Download Holiday Photos"
      target="_blank"
    >        
      <div className={styles.col1}>
        <h3 className={styles.bannerTitle}>Download Your Holiday Photos</h3> 
        <p className={styles.bannerText}>
          Please Click here if you are looking for your downloadable holiday pictures you
          purchased from us at one of the malls.
        </p>
      </div>
      <div className={styles.col2}>
        {holidayPhotos.map((photo, i) => (
          <div className={styles.imgWrapper} key={i}>
            <img
              className={styles.img}
              src={photo.img}
              alt=""
            />
          </div>
        ))}
      </div>
    </a>
  );
};

export default HolidayBanner;
