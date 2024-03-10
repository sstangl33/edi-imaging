import {
  getCarouselData,
  getHolidayBannerData,
} from "@/sanity/lib/sanity-utils";
import Categories from "../components/Categories";
import HolidayBanner from "../components/HolidayBanner";
import Featured from "../components/Featured";

export const revalidate = 30;

export default async function Home() {
  const holidayBannerDataRaw = await getHolidayBannerData();
  const carouselDataRaw = await getCarouselData();

  return (
    <>
      <Featured {...carouselDataRaw} />
      <HolidayBanner {...holidayBannerDataRaw} />
      <Categories />
    </>
  );
}
