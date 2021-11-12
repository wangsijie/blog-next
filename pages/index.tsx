import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/footer";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>我爱平铺</title>
        <meta name="description" content="Personal site for Wang Sijie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.logo}>
          <Image src="/logo.jpg" alt="Logo" width={36} height={36} />
        </span>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
