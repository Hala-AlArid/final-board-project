// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyBRXfi7CrxhZXhFVKlNLpkDwDDUyhCd3Uk",
    authDomain: "board-pro.firebaseapp.com",
    databaseURL: "https://board-pro-default-rtdb.firebaseio.com",
    projectId: "board-pro",
    storageBucket: "board-pro.appspot.com",
    messagingSenderId: "100477925458",
    appId: "1:100477925458:web:c14826f16ce2dc04c6878b",
    measurementId: "G-F5EDV5KDGZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export default app;

