import styles from "../styles/Featured.module.css";
import Image from "next/image";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useState } from "react";

const Featured = () => {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      img: "/img/feature1.jpg",
      title: "Family Portraits",
      description:
        "Maecenas volutpat consequat orci id consectetur. Namvulput quam turpis.",
      link: "10",
    },
    {
      img: "/img/feature2.jpg",
      title: "Sports Photography",
      description:
        "Consequat orci id consectetur. Namvulput quam turpis, id tristique nibh ullamcorper dignissim.",
        link: "20",
    },
    {
      img: "/img/feature3.jpg",
      title: "Senior Portraits",
      description:
        "Maecenas volutpat consequat orci id consectetur. Namvulput quam turpis, id tristique nibh ullamcorper dignissim.",
        link: "30",
    },
  ];

  const handleArrow = (direction) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : slides.length - 1);
    }
    if (direction === "r") {
      setIndex(index !== slides.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <div className={styles.slider}>
      {slides.map((slide, i) => (
        <div className={
          i !== index
           ? styles.slide
           : [styles.slide, styles.active].join(" ")
        } key={i}>
          <img className="slideImg" src={slide.img} alt="" />
          <div className={styles.slideTextBoxWrapper}>
            <div className={styles.slideTextBox}>
              <h2 className={styles.slideTitle}>{slide.title}</h2>
              <p className={styles.slideText}>{slide.description}</p>
              <a className={styles.button} href={slides.link} alt="Learn more">More Info</a>
              <div className={styles.slideNavigation}>
                {slides.map((i,j) => (
                  <a className={
                  j !== index
                  ? styles.slideIcon
                  : [styles.slideIcon, styles.active].join(" ")
                } 
                  key={j} 
                  href="#"
                  onClick={() => setIndex(j)}
                >
                </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <ArrowBackIosIcon 
        className={styles.slideNavArrow}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")} 
      />

      <ArrowForwardIosIcon 
        className={styles.slideNavArrow}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")} 
      />
   
    </div>
  );
};

export default Featured;