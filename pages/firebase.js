import firebase from "firebase/app";
import "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJKk_2V9d-U9pGAr89pm1jzmJ2Uqq79AU",
  authDomain: "probby-19352.firebaseapp.com",
  projectId: "probby-19352",
  storageBucket: "probby-19352.appspot.com",
  messagingSenderId: "probby-19352.firebaseapp.com",
  appId: "1:251770170030:web:ad97a808703fad6de49b3f",
  measurementId: "G-3L04L6L2K2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

export const db = firebase.firestore();
