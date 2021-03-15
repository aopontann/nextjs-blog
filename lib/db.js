
export async function getFirestoreData(db, name) {
  const doc_data = await db.collection("VtuberInfo-nijisanji").doc(name).get();
  //console.log(doc_data.data());
  return doc_data.data();
  /*db.collection("VtuberInfo-nijisanji").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
  });*/
}

