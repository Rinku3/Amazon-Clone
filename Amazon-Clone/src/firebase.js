/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAT0Ra9nSrl7wURc8TPjoNsK7SllbE0xwg",
    authDomain: "challenge-9a0ca.firebaseapp.com",
    projectId: "challenge-9a0ca",
    storageBucket: "challenge-9a0ca.appspot.com",
    messagingSenderId: "670132746944",
    appId: "1:670132746944:web:12480ae663adc4e09ecb25",
    measurementId: "G-YXKHF6C7X2",
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};
