import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "parkcheck-512ae.firebaseapp.com",
  projectId: "parkcheck-512ae",
  storageBucket: "parkcheck-512ae.appspot.com",
  messagingSenderId: "103972727332",
  appId: "1:103972727332:web:a6aee04b854a56214486b1",
  measurementId: "G-52F7QV6L6N",
};

// Initialize the Firebase App
export const firebaseApp = firebase.initializeApp(firebaseConfig);
