import Link from "next/link";
import Image from "next/image";
import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        <Link href="mailto:melts_gofer_0s@icloud.com" passHref>
          <a>
            <Image
              src="/icons/mail.png"
              width={24}
              height={24}
              alt="melts_gofer_0s@icloud.com"
            />
          </a>
        </Link>
        <Link href="https://github.com/wangsijie" passHref>
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src="/icons/github.png"
              width={24}
              height={24}
              alt="GitHub"
            />
          </a>
        </Link>
        <Link href="/about" passHref>
          <a>
            <Image
              src="/icons/about.png"
              width={24}
              height={24}
              alt="About"
            />
          </a>
        </Link>
      </div>
      <p>
        <Link href="/tech">#tech</Link>
        {" · "}
        <Link href="/read">#read</Link>
        {" · "}
        <a
          href="https://gist.github.com/wangsijie"
          target="_blank"
          rel="noopener noreferrer"
        >
          #gist
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
  );
}
