import Head from 'next/head'
import Link from 'next/link'
//import { getSortedPostsData } from '../lib/posts'
//import { getFirestoreData } from '../lib/db'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { addBasePath } from 'next/dist/next-server/lib/router/router'

/*export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Next.js 勉強中です</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <Link href="posts/first-post">
          <a>firstpost</a>
        </Link>
      </section>
    </Layout>
  )
}*/
export default function Home({ DBData, videoInfo }) {
  console.log("test2");
  console.log(DBData);
  return (
    <Layout home>
      <Head>…</Head>
      <ul>
        {DBData.map(({ name, age}) => (
          <div>
            <p>名前: {name}</p>
            <p>年齢: {age}</p>
          </div>
        ))}
        {videoInfo.map(({id, title, thumbnails, URL}) => (
          <div>
            <img src={thumbnails}/>
            <p>id: {id}</p>
            <p>title: {title}</p>
            <a href={URL}>クリック</a>
          </div>
        ))}
      </ul>
      
    </Layout>
  )
}

export async function getStaticProps() {
  //const DBData = await getFirestoreData();
  const DBData = [
    {
      name: "aaa",
      age: 13
    },
    {
      name: "bbb",
      age: 14
    }
  ];
  const videoInfo = [
    {
      id: "OLWqLMbq5QY",
      title: "MapleDancer【樋口楓オリジナル曲】",
      thumbnails: "https://i.ytimg.com/vi/OLWqLMbq5QY/default.jpg",
      URL: "https://www.youtube.com/watch?v=OLWqLMbq5QY"
    },
    {
      id: "OLWqLMbq5QY",
      title: "MapleDancer【樋口楓オリジナル曲】",
      thumbnails: "https://i.ytimg.com/vi/OLWqLMbq5QY/default.jpg",
      URL: "https://www.youtube.com/watch?v=OLWqLMbq5QY"
    }
  ];
  console.log("test");
  console.log(DBData);
  return {
    props: {
      DBData: DBData,
      videoInfo: videoInfo
    }
  }
}