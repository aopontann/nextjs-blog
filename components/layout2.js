import Head from "next/head";
import styles from "./layout2.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "aopontan";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, vtuberName }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>aaa</title>
      </Head>
      <header className={styles.header}>
        <img
          src="/images/profile.jpg"
          className={`${styles.headerImage} ${utilStyles.borderCircle}`}
          alt={name}
        />
        <h2 className={utilStyles.headingLg}>{vtuberName}</h2>
      </header>

      <main>{children}</main>

      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  );
}
