import Image from "next/image";
import Link from "next/link";
import styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>
        <Link href="/" passHref>
          <a><Image src="/logo.jpg" alt="Logo" width={36} height={36} /></a>
        </Link>
      </span>
    </header>
  );
}
