"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { carouselDataTypes } from "@/sanity/lib/types";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import "../(site)/styles/featured.css";

export default function Featured(carouselDataRaw: carouselDataTypes) {
  const carouselObjects = Object.values(carouselDataRaw);
  const carouselData = Object.values(carouselObjects[0]);

  const [imageIndex, setImageIndex] = useState(0);

  const showPrevImage = () => {
    setImageIndex((index) =>
      index === 0 ? carouselData.length - 1 : index - 1
    );
  };

  const showNextImage = () => {
    setImageIndex((index) =>
      index === carouselData.length - 1 ? 0 : index + 1
    );
  };

  return (
    <div className="slider">
      <div className="slide">
        {carouselData.map((slide: any, i: number) => (
          <React.Fragment key={`slide-${i}`}>
            <Image
              className="slideImg"
              src={slide.slideImageUrl}
              alt={slide.slideImage.alt}
              width={2000}
              height={885}
              sizes="100vh"
              style={{ translate: `${-100 * imageIndex}%` }}
              priority={i === imageIndex ? true : false}
            />
            <div
              className={
                i !== imageIndex
                  ? "slideTextBoxWrapper"
                  : "slideTextBoxWrapper active"
              }
            >
              <div className="slideTextBox">
                <Link href={slide.link[0].currentSlug}>
                  <p className="slideTitle">{slide.title}</p>
                  <p className="slideText">{slide.slideText}</p>
                  <button className="button">Learn more</button>
                </Link>
                <div className="slideNavigation">
                  {carouselData.map((link: any, j) => (
                    <a
                      className={
                        j !== imageIndex ? "slideIcon" : "slideIcon active"
                      }
                      key={j}
                      href="#"
                      aria-label={link.slideText}
                      onClick={() => setImageIndex(j)}
                    ></a>
                  ))}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <button
        className="slideNavArrow"
        style={{ left: 0 }}
        aria-label="Back Button"
        onClick={showPrevImage}
      >
        <IoIosArrowBack />
      </button>

      <button
        className="slideNavArrow"
        style={{ right: 0 }}
        aria-label="Forward Button"
        onClick={showNextImage}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
