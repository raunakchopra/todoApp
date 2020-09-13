import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyASLQFmqMd5uwS44GhECMad_ke2-yRuSUE",
  authDomain: "todoapp-d0a19.firebaseapp.com",
  databaseURL: "https://todoapp-d0a19.firebaseio.com",
  projectId: "todoapp-d0a19",
  storageBucket: "todoapp-d0a19.appspot.com",
  messagingSenderId: "177445398655",
  appId: "1:177445398655:web:260f46025874b867d5b74a",
  measurementId: "G-TXE61CX20D",
});

const db = firebaseapp.firestore();

export default db;
