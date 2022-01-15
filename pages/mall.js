import Head from "next/head";
import MallBanner from "../components/MallBanner";
import HolidayBanner from "../components/HolidayBanner";
import MallContent from "../components/MallContent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EDI Imaging</title>
        <meta
          name="description"
          content="EDI Imaging - Premiere Event, Sports, Pre-school, and Portrait Photography."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MallBanner />
      <HolidayBanner />
      <MallContent />
    </div>
  );
}
