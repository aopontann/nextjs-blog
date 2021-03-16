//import Layout from "../../components/layout2";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/videoList.module.css";
import utilStyles from "../../styles/utils.module.css";
import { getVtuberInfo, getSelectedVideos } from "../../lib/db";

export default function Post({ postData, videoInfos }) {
  const name = postData.name;
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{name}のページだよ</title>
      </Head>

      <header className={styles.header}>
        <img
          src="/images/profile.jpg"
          className={`${styles.headerImage} ${utilStyles.borderCircle}`}
          alt={name}
        />
        <a href={`https://www.youtube.com/channel/${postData.channelId}`} >
          <h2 className={utilStyles.headingLg}>{name}</h2>
        </a>
      </header>

      <main>
        <ul>
          {videoInfos.map(({ id, title, thumbnail }) => (
            <li className={styles.videolist}>
              <img className={styles.thumbnail} src={thumbnail} />
              <a
                className={styles.title}
                href={`https://www.youtube.com/watch?v=${id}`}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </main>

      <div className={styles.backToHome}>
        <Link href="/">
          <a>← Back to home</a>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  //const paths = getAllPostIds();
  // ↓id 以外設定できないみたい
  const paths = [
    {
      params: {
        id: "ChroNoiR",
      },
    },
    {
      params: {
        id: "えま★おうがすと",
      },
    },
  ];
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getVtuberInfo(params.id);
  const videoInfos = await getSelectedVideos(postData.videos);
  console.log("params");
  console.log(params);
  return {
    props: {
      postData,
      videoInfos,
    },
  };
}
