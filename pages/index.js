import Head from "next/head";
import Image from "next/image";
import Featured from "../components/Featured";
import Categories from "../components/Categories";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EDI Imaging</title>
        <meta
          name="description"
          content="EDI Imaging - Premiere Event, Sports, Pre-school, and Portrait Photograpy."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
      <Categories />
    </div>
  );
}
