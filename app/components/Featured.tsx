"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { carouselDataTypes } from "@/sanity/lib/types";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "../(site)/styles/featured.css";

export default function Featured(carouselDataRaw: carouselDataTypes) {
  const carouselData = Object.values(carouselDataRaw);

  const [index, setIndex] = useState(0);

  const handleArrow = (direction: string) => {
    if (direction === "l") {
      setIndex(index !== 0 ? index - 1 : carouselData.length - 1);
    }
    if (direction === "r") {
      setIndex(index !== carouselData.length - 1 ? index + 1 : 0);
    }
  };

  return (
    <div className="slider">
      {carouselData.map((slide, i) => (
        <div className={i !== index ? "slide" : "slide active"} key={i}>
          <Image
            className="slideImg"
            src={slide.slideImageUrl}
            alt={slide.slideImage.alt}
            width={3000}
            height={1328}
          />
          <div className="slideTextBoxWrapper">
            <div className="slideTextBox">
              <p className="slideTitle">{slide.title}</p>
              <p className="slideText">{slide.slideText}</p>
              <Link className="button" href={slide.link[0].currentSlug}>
                Learn more
              </Link>
              <div className="slideNavigation">
                {carouselData.map((i, j) => (
                  <a
                    className={j !== index ? "slideIcon" : "slideIcon active"}
                    key={j}
                    href="#"
                    onClick={() => setIndex(j)}
                  ></a>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      <IoIosArrowBack
        className="slideNavArrow"
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      />

      <IoIosArrowForward
        className="slideNavArrow"
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      />
    </div>
  );
}