import Image from "next/image";
import styles from "../styles/about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.line}>
        <div className={styles.icon}>
          <Image src="/content/about-btc.png" alt="Bitcoin" width={24} height={24} />
        </div>
        <div className={styles.coin}>
          BitCoin
        </div>
        <div className={styles.coinSub}>
          BTC
        </div>
        <div className={styles.address}>
          <pre>bc1qxrcjfxlakk3qa40g4ujj0g5rjf9ts3sra0tk0z</pre>
        </div>
      </div>
      <div className={styles.line}>
        <div className={styles.icon}>
          <Image src="/content/about-eth.png" alt="Ethereum" width={24} height={24} />
        </div>
        <div className={styles.coin}>
          Ethereum
        </div>
        <div className={styles.coinSub}>
          ETH
        </div>
        <div className={styles.address}>
          <pre>0x1b5440eB67b299a51c59eb37a694ac9739b7E7C2</pre>
        </div>
      </div>
    </div>
  );
}
