// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "resq-de3e0.firebaseapp.com",
  projectId: "resq-de3e0",
  storageBucket: "resq-de3e0.appspot.com",
  messagingSenderId: "330536827419",
  appId: "1:330536827419:web:55c2db98b11189f58f96be",
  measurementId: "G-Q03XETZZVD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);