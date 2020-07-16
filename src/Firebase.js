import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAsuHIVmYxuQ8oncdSRBuXzphtMU9J_daM",
  authDomain: "facebook-messenger-app-70752.firebaseapp.com",
  databaseURL: "https://facebook-messenger-app-70752.firebaseio.com",
  projectId: "facebook-messenger-app-70752",
  storageBucket: "facebook-messenger-app-70752.appspot.com",
  messagingSenderId: "427642563963",
  appId: "1:427642563963:web:1df8a251ea32f8e90de1de",
  measurementId: "G-S75N1PQ6CC",
});

const db = firebaseApp.firestore();

export default db;
