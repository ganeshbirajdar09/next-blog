import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Blog List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis
          enim saepe! Culpa, fuga doloribus.
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos
          non eveniet, eos eum dicta ipsam alias corporis, est labore amet
          libero facilis culpa molestias? Iste impedit dicta nulla error modi
          sequi cumque consequuntur dolore sint, atque aliquid itaque suscipit,
          voluptatem cum amet minus, iusto veritatis pariatur quo? Nobis, illum
          error!
        </p>

        <Link href="/ninjas">
          <a className={styles.btn}>See Blog Listing</a>
        </Link>
      </div>
    </>
  );
}
