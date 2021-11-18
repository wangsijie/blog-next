import type { NextPage } from "next";
import Head from "next/head";
import Aes from "../components/aes";
import Note from "../components/note";
import RandomString from "../components/random-string";
import UploadFile from "../components/upload-file";
import styles from "../styles/tool.module.css";
import { getSecret } from "../utils/secrets";

interface Props {
  oss: {
    ak: string;
    sk: string;
    bucket: string;
    endpoint: string;
    prefix?: string;
  };
}

const Home: NextPage<Props> = ({ oss }) => {
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
      <h2>FILE</h2>
      <UploadFile {...oss} />
    </div>
  );
};

export function getStaticProps() {
  return {
    props: {
      oss: {
        ak: getSecret("TEMP_OSS_AK"),
        sk: getSecret("TEMP_OSS_SK"),
        bucket: getSecret("TEMP_OSS_BUCKET"),
        endpoint: getSecret("TEMP_OSS_ENDPOINT"),
        prefix: getSecret("TEMP_OSS_PREFIX"),
      },
    },
  };
}

export default Home;
