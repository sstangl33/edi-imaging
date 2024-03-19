"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { carouselDataTypes } from "@/sanity/lib/types";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "../(site)/styles/featured.css";

export default function Featured(carouselDataRaw: carouselDataTypes) {
  const carouselObjects = Object.values(carouselDataRaw);
  const carouselData = Object.values(carouselObjects[0]);

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
      {carouselData.map((slide: any, i: number) => (
        <div className={i !== index ? "slide" : "slide active"} key={i}>
          <Image
            className="slideImg"
            src={slide.slideImageUrl}
            alt={slide.slideImage.alt}
            fill
            priority
          />
          <div className="slideTextBoxWrapper">
            <div className="slideTextBox">
              <p className="slideTitle">{slide.title}</p>
              <p className="slideText">{slide.slideText}</p>
              <Link className="button" href={slide.link[0].currentSlug}>
                Learn more
              </Link>
              <div className="slideNavigation">
                {carouselData.map((link: any, j) => (
                  <a
                    className={j !== index ? "slideIcon" : "slideIcon active"}
                    key={j}
                    href="#"
                    aria-label={link.slideText}
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
