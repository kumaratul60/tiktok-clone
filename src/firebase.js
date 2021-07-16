import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7eF0PJTjJv7T6mT8HnPJQcGKYf3S--9g",
  authDomain: "tik-tok-clone-65d5e-09-jly-21.firebaseapp.com",
  projectId: "tik-tok-clone-65d5e-09-jly-21",
  storageBucket: "tik-tok-clone-65d5e-09-jly-21.appspot.com",
  messagingSenderId: "863808529141",
  appId: "1:863808529141:web:4c275fdd8ad43a0580dbbc",
  measurementId: "G-FPT2TJH825",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
