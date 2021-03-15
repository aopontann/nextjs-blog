import Head from 'next/head'
import Link from 'next/link'
import firebase from 'firebase/app'
import 'firebase/firestore'
//import { getSortedPostsData } from '../lib/posts'
import { getFirestoreData } from '../lib/db'
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
export default function Home({ vtuberInfo, videoInfo }) {
  
  return (
    <Layout home>
      <Head>…</Head>
      <ul>
        {vtuberInfo.map(({name, channelId, videos}) => (
          <div>
            <img src="/images/profile.jpg"/>
            <Link href={`posts/${name}`}>
              <a>name: {name}</a>
            </Link>
            <p>channelId: {channelId}</p>
            <p>videos[0]: {videos[0]}</p>
          </div>
        ))}
        
      </ul>
      
    </Layout>
  )
}

export async function getStaticProps() {
  //const DBData = await getFirestoreData();
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const DBData1 = await getFirestoreData(db, "ChroNoiR");
  const DBData2 = await getFirestoreData(db, "えま★おうがすと");
  const vtuberInfo = [DBData1, DBData2];
  /*const vtuberInfo = [
    {
      name: "ChroNoiR",
      channelId: "UCz6vnIbgiqFT9xUcD6Bp65Q",
      videos: ["test1", "test2"]
    },
    {
      name: "えま★おうがすと",
      channelId: "UCl1oLKcAq93p-pwKfDGhiYQ",
      videos: ["test3", "test4"]
    }
  ];*/

  return {
    props: {
      vtuberInfo: vtuberInfo
    }
  }
}