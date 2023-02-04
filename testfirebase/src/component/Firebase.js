import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import React from "react";
import { app, db } from "../firebase-auth/firebase";

const Firebase = () => {
  const [data, setData] = React.useState([]);
  //   const citiesRef = collection(db, "Users", "Ojvh7Ab6bIb7wyBAOPdT");
  React.useEffect(() => {
    const colRef = collection(db, "Users");
    getDocs(colRef).then((snapshot) => {
      let post = [];
      snapshot.docs.forEach((doc) => {
        post.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(post);
    });
  });
  return <div>123</div>;
};

export default Firebase;
