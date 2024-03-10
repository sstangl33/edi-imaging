"use client";

import Image from "next/image";
import "../(site)/styles/carousel.css";
import { useState } from "react";
import { carouselDataTypes } from "@/sanity/lib/types";

export default function Carousel(carouselDataRaw: carouselDataTypes) {
  const carouselData = Object.values(carouselDataRaw);
  console.log("Test5: ", carouselData);

  const [carouselDirection, setCarouselDirection] = useState("next");
  const [imageIndex, setImageIndex] = useState(0);

  // function showNextImage() {
  //   setImageIndex((index) => {
  //     if (index === imageUrls.length - 1) return 0;
  //     return index + 1;
  //   });
  // }

  // function showPrevImage() {
  //   setImageIndex((index) => {
  //     if (index === 0) return imageUrls.length - 1;
  //     return index - 1;
  //   });
  // }

  // const carouselDom = document.querySelector(".carousel");
  // const sliderDom = document.querySelector(".carousel .list");

  return (
    <div
      className={`carousel ${carouselDirection === "next" ? "next" : "prev"}`}
    >
      <div className="list">
        {carouselData.map((slide: any, i: any) => (
          <div key={i} className="item">
            <Image src={slide.slideImageUrl} alt="" width={200} height={200} />
            <div className="content">
              <div className="author">DESIGN SLIDER</div>
              <div className="title">{slide.title}</div>
              <div className="topic">ANIMAL</div>
              <div className="des">{slide.text}</div>
              <div className="buttons">
                <button>Learn More</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        <div className="item">
          <Image
            src="/images/carousel/img1.jpg"
            alt=""
            width={200}
            height={200}
          />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <Image
            src="/images/carousel/img3.jpg"
            alt=""
            width={200}
            height={200}
          />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <Image
            src="/images/carousel/img4.jpg"
            alt=""
            width={200}
            height={200}
          />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>
      <div className="arrows">
        {/* <button
          onClick={() => {
            setCarouselDirection("prev");
            showPrevImage;
          }}
          id="prev"
        >
          B
        </button>
        <button
          onClick={() => {
            setCarouselDirection("next");
            showNextImage;
          }}
          id="next"
        >
          N
        </button> */}
      </div>
      <div className="time"></div>
    </div>
  );
}
