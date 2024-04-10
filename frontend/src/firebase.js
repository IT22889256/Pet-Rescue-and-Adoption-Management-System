// Import the functions you need from the SDKs you need
import { initializeApp,firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXSevQ-rbABNfcXRtaE6gdbrxUmeHvIyM",
  authDomain: "resq-d92f6.firebaseapp.com",
  projectId: "resq-d92f6",
  storageBucket: "resq-d92f6.appspot.com",
  messagingSenderId: "354570001380",
  appId: "1:354570001380:web:3b379dbaadcc9a1c8845f1",
  measurementId: "G-N7RGFQ9EL7"
};

const app = initializeApp(firebaseConfig);

export default app;