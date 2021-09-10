// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJgrKKw-a1Lb9KYw6KStyDbo-PlqBD5sQ",
  authDomain: "crazy-shop-51b5f.firebaseapp.com",
  projectId: "crazy-shop-51b5f",
  storageBucket: "crazy-shop-51b5f.appspot.com",
  messagingSenderId: "480050004467",
  appId: "1:480050004467:web:0947377cc13212b7285286",
  measurementId: "G-11LJFD3FXQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
