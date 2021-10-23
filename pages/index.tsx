import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wang Sijie</title>
        <meta name="description" content="Personal site for Wang Sijie" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.logo}>
          <Image src="/logo.jpg" alt="Logo" width={36} height={36} />
        </span>
      </main>

      <footer className={styles.footer}>
        <p>
          contact:{" "}
          <a href="mailto:melts_gofer_0s@icloud.com">
            melts_gofer_0s@icloud.com
          </a>
        </p>
        <p>
          <a
            href="https://github.com/wangsijie"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
        <p>
          <a
            href="http://beian.miit.gov.cn"
            target="_blank"
            rel="noopener noreferrer"
          >
            沪ICP备13046253号-4
          </a>{" "}
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502011888"
            target="_blank"
            rel="noopener noreferrer"
          >
            沪公网安备31011502011888号
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;
