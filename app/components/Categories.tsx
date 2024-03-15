import Image from "next/image";
import { getCategoryData } from "@/sanity/lib/sanity-utils";
import "../(site)/styles/categories.css";
import { categoryDataTypes } from "@/sanity/lib/types";
import Link from "next/link";

export default async function Categories() {
  const categoryDataRaw = await getCategoryData();
  const categoryData: categoryDataTypes[] = Object.values(categoryDataRaw);

  return (
    <div className="catContainer">
      <div className="catCardRow">
        <div
          className={`catTextCard ${
            categoryData[0].categories.length % 3 === 0
              ? "ctb-3"
              : categoryData[0].categories.length % 3 === 1
              ? "ctb-2"
              : ""
          }`}
        >
          <h1 className="catTextTitle">{categoryDataRaw[0].navTitle1}</h1>
          <p className="catText">{categoryDataRaw[0].tagline}</p>
        </div>
        {categoryData[0].categories.map((category: any, index) => (
          <div key={index} className="catCard">
            <Link className="catLink" href={`/${category.currentSlug}`}>
              <p className="catLinkText">{`${category.navTitle1} ${category.navTitle2}`}</p>
            </Link>
            {!category.thumbnailImageUrl ? undefined : (
              <Image
                className="catImg"
                src={category.thumbnailImageUrl}
                alt={category.thumbnailImage.alt}
                fill
                sizes="(max-width: 580px)"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
