import Layout from '../../components/layout'
//import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.channelId}
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
  //const postData = getPostData(params.id)
  const postData = {
    title: "aaa",
    id: params.id,
    channelId: "ccc"
  }
  console.log("params");
  console.log(params);
  return {
    props: {
      postData
    }
  }
}