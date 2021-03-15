import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};
// 初期化は一度だけ ↓の条件式はサイトのやつそのままコピーした
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

export async function getVtuberInfo(name) {
  const doc_data = await db.collection("VtuberInfo-nijisanji").doc(name).get();
  console.log(doc_data.data());

  return doc_data.data();
}

export async function getSelectedVideos(all_docId) {
  let return_data = [];
  for await (const doc_id of all_docId) {
    const res = await db.collection("selectedVideos-nijisanji").doc(doc_id).get();
    const doc_data = res.data();

    return_data.push({
      id: doc_data.id,
      title: doc_data.snippet.title,
      thumbnail: doc_data.snippet.thumbnails.default.url
    });
  }
  return return_data;
}