import {
  getCarouselData,
  getHolidayBannerData,
} from "@/sanity/lib/sanity-utils";
import Categories from "../components/Categories";
import HolidayBanner from "../components/HolidayBanner";
import Carousel from "../components/Carousel";
import Featured from "../components/Featured";

export const revalidate = 30;

export default async function Home() {
  const holidayBannerDataRaw = await getHolidayBannerData();
  const carouselDataRaw = await getCarouselData();
  // console.log("Boogers3: ", ...carouselDataRaw);

  return (
    <>
      {/* <Carousel {...carouselDataRaw} /> */}
      <Featured {...carouselDataRaw} />
      <HolidayBanner {...holidayBannerDataRaw} />
      <Categories />
    </>
  );
}
