// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKQsBtBl7zuDG_ZT2CaMmNMaiTcnqJWI8",
  authDomain: "api-f-a243f.firebaseapp.com",
  projectId: "api-f-a243f",
  storageBucket: "api-f-a243f.appspot.com",
  messagingSenderId: "407178320739",
  appId: "1:407178320739:web:7645c7e1dbb6af5cffd156",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase auth
export const auth = getAuth(app);
// Init service
export const db = getFirestore(app);
