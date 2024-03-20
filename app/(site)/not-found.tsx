import { notFoundDataTypes } from "@/sanity/lib/types";
import "./styles/page.css";
import "./styles/heroBanner.css";
import { getNotFoundData } from "@/sanity/lib/sanity-utils";
import Image from "next/image";

export const revalidate = 30;

export default async function NotFound() {
  const notFoundData: notFoundDataTypes = await getNotFoundData();

  return (
    <>
      <div className="heroBanner">
        <div className="heroBannerImgWrapper">
          <Image
            src={notFoundData.notFoundBannerUrl}
            alt={notFoundData?.notFoundBannerAlt}
            width={1224}
            height={500}
            priority
            className="heroBannerImg"
            sizes="(min-width: 1320px) 1244px, calc(94.4vw + 17px)"
          />
        </div>
      </div>
      <h1 className="title">{notFoundData?.notFoundTitle}</h1>
      <p className="text-center">{notFoundData?.notFoundText}</p>

      <div className="backBtnContainer">
        <a className="button back-btn" href="/">
          <span className="heading">&lt; Back</span>
        </a>
      </div>
    </>
  );
}
