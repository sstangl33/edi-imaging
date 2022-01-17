import Head from "next/head";
import Image from "next/image";
import SeniorBanner from "../components/SeniorBanner";
import SeniorContent from "../components/SeniorContent";
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
      {/* <SeniorBanner /> */}
      <SeniorContent />
    </div>
  );
}
