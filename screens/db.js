
import firebase from "firebase/app"
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyC60TiAN5CwQkZoubGP7VZGNvDjg54gE8Q",
  authDomain: "messages-faa25.firebaseapp.com",
  databaseURL: "https://messages-faa25.firebaseio.com",
  projectId: "messages-faa25",
  storageBucket: "messages-faa25.appspot.com",
  messagingSenderId: "638474243980",
  appId: "1:638474243980:web:5b30bbf876a78afd2a90a9",
  measurementId: "G-DF2BXJLJTR"
});

const db = firebase.firestore();
console.log(db);
export default firebase.firestore()