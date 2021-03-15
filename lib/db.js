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

export async function getFirestoreData(name) {
  const doc_data = await db.collection("VtuberInfo-nijisanji").doc(name).get();
  console.log(doc_data.data());
  return doc_data.data();
  /*db.collection("VtuberInfo-nijisanji").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
  });*/
}

