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

export const revalidate = 30;

export default async function PageContent({
  params,
}: {
  params: { slug: string };
}) {
  const data: pageDataTypes = await getPageData(params.slug);
  const holidayBannerDataRaw = await getUniversalHolidayBannerData();
  const jobsDataRaw = await getJobsData(params.slug);
  const galleryData =
    data.imageGallery == null ? undefined : data.imageGallery[0].imageGallery;

  return (
    <>
      <div className="heroBanner">
        <div className="heroBannerImgWrapper">
          {data?.bannerImage && (
            <Image
              src={urlForImage(data?.bannerImage)}
              alt={data?.bannerImage.alt}
              width={1244}
              height={507}
              priority
              className="heroBannerImg"
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
                  email={item.email}
                  emailSubject={item.emailSubject}
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

          {!data.title.includes("THANK") ? undefined : (
            <>
              <p className="text-center">
                Thank you for your application! We will be in contact with you
                soon.
              </p>
              <div className="backBtnContainer">
                <Link className="button back-btn" href="/jobs">
                  <span className="heading">&lt; Back</span>
                </Link>
              </div>
            </>
          )}
        </section>
        <section className="row">
          {galleryData == null
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
