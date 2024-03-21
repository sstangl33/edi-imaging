import PortableTextComponent from "@/sanity/components/PortableText";
import { urlForImage } from "@/sanity/lib/image";
import { pageDataTypes } from "@/sanity/lib/types";
import {
  getJobsData,
  getPageData,
  getUniversalHolidayBannerData,
} from "@/sanity/lib/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Contact } from "@/app/components/Contact";
import { Jobs } from "@/app/components/Jobs";
import HolidayBanner from "@/app/components/HolidayBanner";
import "../styles/page.css";
import "../styles/heroBanner.css";
import "../styles/gallery.css";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Thanks from "@/app/components/Thanks";

export const revalidate = 30;

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data: pageDataTypes = await getPageData(params.slug);

  if (!data) notFound();

  return {
    title:
      data.currentSlug.charAt(0).toUpperCase() + data.currentSlug.substring(1),
  };
}

export default async function PageContent({
  params,
}: {
  params: { slug: string };
}) {
  const data: pageDataTypes = await getPageData(params.slug);
  const holidayBannerDataRaw = await getUniversalHolidayBannerData();
  const jobsDataRaw = await getJobsData(params.slug);
  const galleryData = !data.imageGallery
    ? undefined
    : data.imageGallery[0].imageGallery;

  return (
    <>
      <div className="heroBanner">
        <div className="heroBannerImgWrapper">
          {data?.bannerImage && (
            <Image
              src={urlForImage(data?.bannerImage)}
              alt={data?.bannerImage.alt}
              width={1224}
              height={500}
              priority
              className="heroBannerImg"
              sizes="(min-width: 1320px) 1244px, calc(94.4vw + 17px)"
            />
          )}
        </div>
      </div>
      {data.holidayBanner ? (
        <HolidayBanner {...holidayBannerDataRaw} />
      ) : undefined}
      <div className="container">
        <h1>{data?.title}</h1>
        <section>
          <PortableText
            value={data?.content}
            components={PortableTextComponent}
          />
          {!data?.addJobs ? undefined : <Jobs {...jobsDataRaw} />}
          {!data?.contactData
            ? undefined
            : data.contactData.map((item: any) => (
                <Contact
                  key={item.title}
                  title={item.title}
                  streetAddress={item.streetAddress}
                  cityStateZip={item.cityStateZip}
                  telephone={item.telephone}
                  telephone2={item.telephone2}
                  email={item.email}
                  email2={item.email2}
                  emailSubject={item.emailSubject}
                  emailSubject2={item.emailSubject2}
                />
              ))}

          {!data.title.includes("DRONE") ? undefined : (
            <Image
              src="/images/droners_badge.png"
              alt="Professional Drone Pilot Approved Seal"
              className="pdpSeal"
              width={300}
              height={300}
            />
          )}

          {!data.title.includes("THANK") ? undefined : <Thanks />}
        </section>
        <section className="row">
          {!galleryData
            ? undefined
            : galleryData.map((image: any, i: any) => (
                <div className="imageWrapper" key={i}>
                  <Image
                    className="image"
                    src={image?.imageUrl}
                    alt="Image by eDI Imaging"
                    width={400}
                    height={560}
                  />
                </div>
              ))}
        </section>
      </div>
    </>
  );
}
