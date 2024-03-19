"use client";

import { holidayBannerDataTypes } from "@/sanity/lib/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import "../(site)/styles/holidayBanner.css";

export default function HolidayBanner(
  holidayBannerDataRaw: holidayBannerDataTypes
) {
  const data = holidayBannerDataRaw;

  const [bannerType, setBannerType] = useState("universal");

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const xmasEnd = data?.christmasBannerEndMonth;
    const easterStart = data?.easterBannerStartMonth;
    const easterEnd = data?.easterBannerEndMonth;

    if (currentMonth < xmasEnd) {
      setBannerType("xmas");
    } else if (currentMonth >= easterStart && currentMonth < easterEnd) {
      setBannerType("easter");
    } else {
      setBannerType("universal");
    }
  }, [
    bannerType,
    data?.christmasBannerStartMonth,
    data?.christmasBannerEndMonth,
    data?.easterBannerStartMonth,
    data?.easterBannerEndMonth,
  ]);

  return (
    <div className="bannerWrapper">
      <a className="holidayBanner" href={data?.downloadLink} target="_blank">
        <div className="col1">
          <p className="bannerTitle">
            {bannerType === "xmas"
              ? data?.christmasTitle
              : bannerType === "easter"
              ? data?.easterTitle
              : data?.title}
          </p>
          <p className="bannerText">
            {bannerType === "xmas"
              ? data?.christmasBannerText
              : bannerType === "easter"
              ? data?.easterBannerText
              : data?.universalBannerText}
          </p>
          <div className="button">Download</div>
        </div>
        <div className="col2">
          <div className="imgWrapper">
            <Image
              className="img"
              src={
                bannerType === "easter"
                  ? data?.primaryEasterImageUrl
                  : data?.primaryChristmasImageUrl
              }
              alt={
                bannerType === "easter"
                  ? data?.primaryEasterImage?.alt
                  : data?.primaryChristmasImage?.alt
              }
              width={400}
              height={400}
            />
          </div>
          <div className="imgWrapper">
            <Image
              className="img"
              src={
                bannerType === "easter"
                  ? data?.secondaryEasterImageUrl
                  : bannerType === "xmas"
                  ? data?.secondaryChristmasImageUrl
                  : data?.primaryEasterImageUrl
              }
              alt={
                bannerType === "easter"
                  ? data?.secondaryEasterImage?.alt
                  : bannerType === "xmas"
                  ? data?.secondaryChristmasImage?.alt
                  : data?.primaryEasterImage?.alt
              }
              width={400}
              height={400}
            />
          </div>
          <div className="imgWrapper">
            <Image
              className="img"
              src={
                bannerType === "universal"
                  ? data?.secondaryChristmasImageUrl
                  : bannerType === "easter"
                  ? data?.tertiaryEasterImageUrl
                  : data?.tertiaryChristmasImageUrl
              }
              alt={
                bannerType === "universal"
                  ? data?.secondaryChristmasImage?.alt
                  : bannerType === "easter"
                  ? data?.tertiaryEasterImage?.alt
                  : data?.tertiaryChristmasImage?.alt
              }
              width={400}
              height={400}
            />
          </div>
        </div>
      </a>
    </div>
  );
}
