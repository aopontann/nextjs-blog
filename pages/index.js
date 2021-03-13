import Head from 'next/head'
import Link from 'next/link'
//import { getSortedPostsData } from '../lib/posts'
import { getFirestoreData } from '../lib/db'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

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
export default function Home({ DBData }) {
  console.log("test2");
  console.log(DBData);
  return (
    <Layout home>
      <Head>…</Head>
      <p>{DBData.channelId}</p>
    </Layout>
  )
}

export async function getStaticProps() {
  const DBData = await getFirestoreData();
  console.log("test");
  console.log(DBData);
  return {
    props: {
      DBData
    }
  }
}