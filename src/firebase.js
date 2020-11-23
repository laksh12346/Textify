import firebase from "firebase";

var fireBaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDZlNEECgpN9132wAcbDAXJ-_lrjBm0U8w",
  authDomain: "textify-4a574.firebaseapp.com",
  databaseURL: "https://textify-4a574.firebaseio.com",
  projectId: "textify-4a574",
  storageBucket: "textify-4a574.appspot.com",
  messagingSenderId: "640691613022",
  appId: "1:640691613022:web:6750a2a60558168c4e73cf",
  measurementId: "G-V80W6B5ETH"
});

const db = fireBaseApp.firestore();

export default db;
