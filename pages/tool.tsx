import type { NextPage } from "next";
import Head from "next/head";
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
      <Note />
    </div>
  );
};

export default Home;
