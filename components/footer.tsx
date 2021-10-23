import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        contact:{" "}
        <a href="mailto:melts_gofer_0s@icloud.com">melts_gofer_0s@icloud.com</a>
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
  );
}
