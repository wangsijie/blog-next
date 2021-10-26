import type { NextPage } from "next";
import Head from "next/head";
import Aes from "../components/aes";
import Note from "../components/note";
import RandomString from "../components/random-string";
import styles from "../styles/tool.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Tool</title>
      </Head>

      <RandomString />
      <h2>NOTE</h2>
      <Note />
      <h2>AES</h2>
      <Aes />
    </div>
  );
};

export default Home;
