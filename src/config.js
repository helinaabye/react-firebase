import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Initialize Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBm1JtUFnHAhkLA-vMb02P4fJLLtNKASJ4",
  authDomain: "react-firebase-e753b.firebaseapp.com",
  databaseURL: "https://react-firebase-e753b.firebaseio.com",
  projectId: "react-firebase-e753b",
  storageBucket: "react-firebase-e753b.appspot.com",
  messagingSenderId: "686435112197",
  appId: "1:686435112197:web:df017a92b49636b29d536c",
  measurementId: "G-XBTZWCVWFH"
  }); 

export default firebaseApp;