import Layout from '../../components/layout'
import { getFirestoreData } from '../../lib/db'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.name}
      <br />
      {postData.channelId}
      <br />
      {postData.videos.join('\r\n')}
    </Layout>
  )
}

export async function getStaticPaths() {
  //const paths = getAllPostIds();
  // ↓id 以外設定できないみたい
  const paths = [
    {
      params: {
        id: 'ChroNoiR'
      }
    },
    {
      params: {
        id: 'えま★おうがすと'
      }
    }
  ];
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getFirestoreData(params.id);
  console.log("params");
  console.log(params);
  return {
    props: {
      postData
    }
  }
}