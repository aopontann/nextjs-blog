import Layout from '../../components/layout'
import { getVtuberInfo, getSelectedVideos } from '../../lib/db'

export default function Post({ postData, videoInfos }) {
  return (
    <Layout>
      {postData.Affiliation}
      <br />
      <img src={postData.image}/>
      {postData.name}
      <br />
      {postData.channelId}
      <br />
      <ul>
        {videoInfos.map(({ id, title, thumbnail}) => (
          <li>
            <img src={thumbnail}/>
            <p>{title}</p>
            <a href={`https://www.youtube.com/watch?v=${id}`}>{id}</a>
          </li>
        ))}
      </ul>
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
  const postData = await getVtuberInfo(params.id);
  const videoInfos = await getSelectedVideos(postData.videos);
  console.log("params");
  console.log(params);
  return {
    props: {
      postData,
      videoInfos
    }
  }
}