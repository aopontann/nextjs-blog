import Head from 'next/head'
import Link from 'next/link'
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
export default function Home({ vtuberInfo }) {
  
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
          </div>
        ))}
        
      </ul>
      
    </Layout>
  )
}

export async function getStaticProps() {
  const DBData1 = await getFirestoreData("ChroNoiR");
  const DBData2 = await getFirestoreData("えま★おうがすと");
  const vtuberInfo = [DBData1, DBData2];
  
  return {
    props: {
      vtuberInfo: vtuberInfo
    }
  }
}