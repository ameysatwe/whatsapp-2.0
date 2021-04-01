import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBRw5mdSb1335aKF_dteVORDSO4MHcmg_M",
  authDomain: "whatsapp2-7e292.firebaseapp.com",
  projectId: "whatsapp2-7e292",
  storageBucket: "whatsapp2-7e292.appspot.com",
  messagingSenderId: "461851295814",
  appId: "1:461851295814:web:1f897624effb2db87f8a47",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
